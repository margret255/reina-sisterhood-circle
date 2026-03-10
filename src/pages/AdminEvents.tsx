import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Trash2, Plus, Lock, Image as ImageIcon } from "lucide-react";

const ADMIN_PASSWORD = "rwcc2026"; // Simple password gate

interface EventRow {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  tag: string;
  poster_url: string | null;
  created_at: string;
}

const AdminEvents = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("Coming Soon");
  const [location, setLocation] = useState("TBA");
  const [tag, setTag] = useState("Event");
  const [posterFile, setPosterFile] = useState<File | null>(null);
  const [posterPreview, setPosterPreview] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const fetchEvents = async () => {
    const { data, error } = await supabase
      .from("events")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setEvents(data);
    if (error) toast.error("Failed to load events");
  };

  useEffect(() => {
    if (authenticated) fetchEvents();
  }, [authenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      toast.error("Incorrect password");
    }
  };

  const handlePosterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPosterFile(file);
      setPosterPreview(URL.createObjectURL(file));
    }
  };

  const uploadPoster = async (file: File): Promise<string | null> => {
    const ext = file.name.split(".").pop();
    const fileName = `${Date.now()}.${ext}`;
    const { error } = await supabase.storage
      .from("event-posters")
      .upload(fileName, file);
    if (error) {
      toast.error("Failed to upload poster");
      return null;
    }
    const { data } = supabase.storage
      .from("event-posters")
      .getPublicUrl(fileName);
    return data.publicUrl;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      toast.error("Title and description are required");
      return;
    }
    setSubmitting(true);

    let posterUrl: string | null = null;
    if (posterFile) {
      posterUrl = await uploadPoster(posterFile);
    }

    const { error } = await supabase.from("events").insert({
      title: title.trim(),
      description: description.trim(),
      date,
      location,
      tag,
      poster_url: posterUrl,
    });

    if (error) {
      toast.error("Failed to add event");
    } else {
      toast.success("Event added!");
      setTitle("");
      setDescription("");
      setDate("Coming Soon");
      setLocation("TBA");
      setTag("Event");
      setPosterFile(null);
      setPosterPreview(null);
      fetchEvents();
    }
    setSubmitting(false);
  };

  const handleDelete = async (id: string, posterUrl: string | null) => {
    if (!confirm("Delete this event?")) return;

    // Delete poster from storage if exists
    if (posterUrl) {
      const fileName = posterUrl.split("/").pop();
      if (fileName) {
        await supabase.storage.from("event-posters").remove([fileName]);
      }
    }

    const { error } = await supabase.from("events").delete().eq("id", id);
    if (error) {
      toast.error("Failed to delete event");
    } else {
      toast.success("Event deleted");
      fetchEvents();
    }
  };

  if (!authenticated) {
    return (
      <Layout>
        <section className="min-h-[60vh] flex items-center justify-center bg-accent/30">
          <form
            onSubmit={handleLogin}
            className="bg-card p-8 rounded-2xl shadow-md border border-border w-full max-w-sm space-y-4"
          >
            <div className="flex items-center gap-2 text-foreground">
              <Lock size={20} />
              <h2 className="text-xl font-display font-bold">Admin Access</h2>
            </div>
            <Input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="w-full">
              Login
            </Button>
          </form>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-display font-bold text-primary-foreground">
            Manage Events
          </h1>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          {/* Add Event Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-6 rounded-2xl shadow-sm border border-border space-y-4 mb-10"
          >
            <h2 className="text-lg font-display font-bold text-foreground flex items-center gap-2">
              <Plus size={18} /> Add New Event
            </h2>
            <Input
              placeholder="Event title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              maxLength={100}
            />
            <Textarea
              placeholder="Event description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              maxLength={500}
            />
            <div className="grid grid-cols-2 gap-3">
              <Input
                placeholder="Date (e.g. March 20, 2026)"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <Input
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <Input
              placeholder="Tag (e.g. Health, Outreach, Social)"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
            />

            {/* Poster Upload */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground flex items-center gap-1.5 cursor-pointer">
                <ImageIcon size={16} /> Event Poster
              </label>
              <Input
                type="file"
                accept="image/*"
                onChange={handlePosterChange}
              />
              {posterPreview && (
                <img
                  src={posterPreview}
                  alt="Poster preview"
                  className="w-40 h-auto rounded-lg border border-border"
                />
              )}
            </div>

            <Button type="submit" disabled={submitting} className="w-full">
              {submitting ? "Adding..." : "Add Event"}
            </Button>
          </form>

          {/* Existing Events */}
          <h2 className="text-lg font-display font-bold text-foreground mb-4">
            Current Events ({events.length})
          </h2>
          <div className="space-y-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-card p-4 rounded-xl border border-border flex gap-4 items-start"
              >
                {event.poster_url && (
                  <img
                    src={event.poster_url}
                    alt={event.title}
                    className="w-20 h-28 object-cover rounded-lg shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold mb-1">
                    {event.tag}
                  </span>
                  <h3 className="font-bold text-foreground text-sm">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-xs mt-1 line-clamp-2">
                    {event.description}
                  </p>
                  <p className="text-muted-foreground text-[10px] mt-1">
                    📅 {event.date} · 📍 {event.location}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="shrink-0 text-destructive hover:text-destructive"
                  onClick={() => handleDelete(event.id, event.poster_url)}
                >
                  <Trash2 size={16} />
                </Button>
              </div>
            ))}
            {events.length === 0 && (
              <p className="text-muted-foreground text-sm text-center py-8">
                No events yet. Add your first event above!
              </p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AdminEvents;
