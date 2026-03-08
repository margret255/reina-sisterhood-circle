import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    toast.success("Thank you for subscribing! 💖");
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
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
