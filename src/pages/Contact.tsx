import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Mail, MapPin, Instagram } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("Message sent! We'll get back to you soon. ");
    setForm({ name: "", email: "", message: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <Layout>
      <section className="relative py-32 overflow-hidden bg-gradient-rose">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Contact Us</h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            We'd love to hear from you. Reach out anytime!
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 max-w-4xl">
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground text-sm">reinacampuscircle@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-muted-foreground text-sm">Campus-based organization<br />Student Center, University Campus</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-3">Follow Us</h4>
              <div className="flex gap-3">
                <a href="#" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors" aria-label="Instagram">
                  <Instagram size={20} className="text-foreground" />
                </a>
                <a href="#" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors" aria-label="TikTok">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-5">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
                <Input value={form.name} onChange={update("name")} placeholder="Your name" required className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <Input type="email" value={form.email} onChange={update("email")} placeholder="your@email.com" required className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <Textarea value={form.message} onChange={update("message")} placeholder="How can we help?" rows={5} className="rounded-xl" required />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
