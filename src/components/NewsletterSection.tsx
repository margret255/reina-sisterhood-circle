import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setLoading(true);
    const { error } = await supabase.from("newsletter_signups").insert({ email: email.trim() });
    setLoading(false);
    if (error) {
      if (error.code === "23505") {
        toast.info("You're already subscribed! ");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      return;
    }
    toast.success("Thank you for subscribing! ");
    setEmail("");
  };

  return (
    <section className="bg-gradient-rose section-padding">
      <div className="container mx-auto text-center max-w-xl">
        <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
          Stay Connected
        </h3>
        <p className="text-muted-foreground mb-6">
          Subscribe to receive updates, empowerment content, and event invitations.
        </p>
        <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-card rounded-full"
            required
          />
          <Button type="submit" disabled={loading}>
            {loading ? "..." : "Subscribe"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
