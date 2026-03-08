import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Mail, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon. 💖");
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
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-display font-bold text-foreground mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-muted-foreground text-sm">hello@rwcc.org</p>
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
                <a href="#" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors" aria-label="Facebook">
                  <Facebook size={20} className="text-foreground" />
                </a>
                <a href="#" className="p-3 rounded-full bg-secondary hover:bg-primary/10 transition-colors" aria-label="Twitter">
                  <Twitter size={20} className="text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
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
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
