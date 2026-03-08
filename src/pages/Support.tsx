import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Gift, Heart, BookOpen } from "lucide-react";

const reasons = [
  { icon: Heart, title: "Mental Wellness Support", desc: "Fund therapy resources, wellness workshops, and self-care kits for women on campus." },
  { icon: BookOpen, title: "Educational Programs", desc: "Support mentorship sessions, empowerment conferences, and leadership development." },
  { icon: Gift, title: "Community Outreach", desc: "Help us extend care to mothers and women in need through donation drives and support programs." },
];

const Support = () => {
  const [amount, setAmount] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your generous support! 💛 Your contribution makes a difference.");
    setAmount("");
    setName("");
    setEmail("");
  };

  return (
    <Layout>
      <section className="relative py-32 overflow-hidden bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-accent-foreground">Support RWCC</h1>
          <p className="text-accent-foreground/80 mt-4 max-w-xl mx-auto">
            Your support helps us empower more women, nurture mental wellness, and strengthen our sisterhood.
          </p>
        </div>
      </section>

      {/* Why Support */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-display font-bold text-foreground text-center mb-10">How Your Support Helps</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="bg-card rounded-2xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <r.icon className="text-accent" size={22} />
                </div>
                <h3 className="font-display font-semibold text-foreground">{r.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="section-padding bg-gradient-rose">
        <div className="container mx-auto max-w-lg">
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <h3 className="text-2xl font-display font-bold text-foreground text-center mb-6">Make a Contribution</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Your Name</label>
                <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" required className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required className="rounded-xl" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Amount</label>
                <Input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter amount" min="1" required className="rounded-xl" />
              </div>
              <div className="flex gap-2 flex-wrap">
                {["10", "25", "50", "100"].map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAmount(a)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      amount === a ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    ${a}
                  </button>
                ))}
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full">Donate Now</Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Every contribution, no matter the size, makes a meaningful impact. 💛
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
