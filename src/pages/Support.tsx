import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Gift, Heart, BookOpen, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

const reasons = [
  { icon: Heart, title: "Mental Wellness Support", desc: "Fund therapy resources, wellness workshops, and self-care kits for women on campus." },
  { icon: BookOpen, title: "Educational Programs", desc: "Support mentorship sessions, empowerment conferences, and leadership development." },
  { icon: Gift, title: "Community Outreach", desc: "Help us extend care to mothers and women in need through donation drives and support programs." },
];

const Support = () => {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!phone || !amount) {
      toast.error("Please enter your phone number and amount.");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("mpesa-stk-push", {
        body: { phone, amount },
      });

      if (error) throw error;

      if (data?.success) {
        toast.success("M-Pesa prompt sent! Check your phone to complete payment. ");
        setAmount("");
        setPhone("");
      } else {
        toast.error(data?.error || "Something went wrong. Please try again.");
      }
    } catch (err: any) {
      console.error("Payment error:", err);
      toast.error("Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
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
            <h3 className="text-2xl font-display font-bold text-foreground text-center mb-2">Make a Contribution</h3>
            <p className="text-sm text-muted-foreground text-center mb-6">Pay via M-Pesa — Till Number <strong>6502301</strong></p>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">M-Pesa Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
                  <Input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="0712345678"
                    required
                    className="rounded-xl pl-9"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Amount (KES)</label>
                <Input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter amount"
                  min="1"
                  required
                  className="rounded-xl"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {["100", "250", "500", "1000"].map((a) => (
                  <button
                    key={a}
                    type="button"
                    onClick={() => setAmount(a)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      amount === a ? "bg-primary text-primary-foreground border-primary" : "border-border text-muted-foreground hover:border-primary hover:text-primary"
                    }`}
                  >
                    KES {a}
                  </button>
                ))}
              </div>
              <Button type="submit" variant="gold" size="lg" className="w-full" disabled={loading}>
                {loading ? "Sending prompt…" : "Pay with M-Pesa"}
              </Button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">
              You'll receive an M-Pesa prompt on your phone to complete the payment. 
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Support;
