import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Heart } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const Join = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", campus: "", reason: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.from("membership_applications").insert({
      full_name: form.name.trim(),
      email: form.email.trim(),
      phone: form.phone.trim() || null,
      campus: form.campus.trim(),
      reason: form.reason.trim(),
    });
    setLoading(false);
    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("Welcome to the RWCC sisterhood!  We'll be in touch soon.");
    setForm({ name: "", email: "", phone: "", campus: "", reason: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <Layout>
      <section className="relative py-32 overflow-hidden bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Join Our Sisterhood</h1>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Become part of a community that sees you, supports you, and celebrates you.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-card rounded-2xl p-8 md:p-10 shadow-sm border border-border">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="text-primary" size={20} />
              </div>
              <div>
                <h2 className="font-display font-bold text-foreground text-xl">Membership Application</h2>
                <p className="text-sm text-muted-foreground">We'd love to welcome you into our circle.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <Input value={form.name} onChange={update("name")} placeholder="Your full name" required className="rounded-xl" />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <Input type="email" value={form.email} onChange={update("email")} placeholder="your@email.com" required className="rounded-xl" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                  <Input type="tel" value={form.phone} onChange={update("phone")} placeholder="Your phone number" className="rounded-xl" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">University / Campus</label>
                <Input value={form.campus} onChange={update("campus")} placeholder="Your university or campus" required className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Why do you want to join RWCC?</label>
                <Textarea value={form.reason} onChange={update("reason")} placeholder="Tell us a little about yourself and why RWCC resonates with you..." rows={4} className="rounded-xl" required />
              </div>
              <Button type="submit" size="lg" className="w-full" disabled={loading}>
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Join;
