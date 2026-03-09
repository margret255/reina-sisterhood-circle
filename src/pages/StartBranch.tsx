import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Users, Globe, GraduationCap } from "lucide-react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const branchSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  university: z.string().trim().min(1, "University/College is required").max(200),
  location: z.string().trim().min(1, "Country/City is required").max(100),
  motivation: z.string().trim().min(10, "Please tell us more").max(1000),
  estimatedStudents: z.string().trim().min(1, "Please provide an estimate"),
});

const StartBranch = () => {
  const [form, setForm] = useState({
    fullName: "", email: "", university: "", location: "", motivation: "", estimatedStudents: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = branchSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    const { error } = await supabase.from("branch_applications").insert({
      full_name: form.fullName.trim(),
      email: form.email.trim(),
      university: form.university.trim(),
      location: form.location.trim(),
      motivation: form.motivation.trim(),
      estimated_students: form.estimatedStudents.trim(),
    });
    setLoading(false);

    if (error) {
      toast.error("Something went wrong. Please try again.");
      return;
    }
    toast.success("Application submitted! We'll reach out to you soon. ");
    setForm({ fullName: "", email: "", university: "", location: "", motivation: "", estimatedStudents: "" });
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [field]: e.target.value }));

  return (
    <Layout>
      <section className="relative py-32 overflow-hidden bg-gradient-rose">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Start an RWCC Branch</h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Bring the sisterhood to your campus. Lead a movement that empowers women.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Why Start a Branch?</h2>
              <div className="space-y-6">
                {[
                  { icon: Users, title: "Build Community", desc: "Create a safe space for women on your campus to connect, heal, and grow together." },
                  { icon: GraduationCap, title: "Lead & Learn", desc: "Develop leadership skills while making a real difference in women's lives." },
                  { icon: Globe, title: "Join a Movement", desc: "Become part of a growing network of campus circles across universities." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{title}</h4>
                      <p className="text-muted-foreground text-sm">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-display font-bold text-foreground mb-5">Application Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { field: "fullName", label: "Full Name", placeholder: "Your full name" },
                  { field: "email", label: "Email Address", placeholder: "your@email.com", type: "email" },
                  { field: "university", label: "University / College", placeholder: "Your institution name" },
                  { field: "location", label: "Country / City", placeholder: "e.g. Kenya, Nairobi" },
                ].map(({ field, label, placeholder, type }) => (
                  <div key={field}>
                    <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
                    <Input
                      type={type || "text"}
                      value={form[field as keyof typeof form]}
                      onChange={update(field)}
                      placeholder={placeholder}
                      className="rounded-xl"
                    />
                    {errors[field] && <p className="text-destructive text-xs mt-1">{errors[field]}</p>}
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Why do you want to start an RWCC branch?</label>
                  <Textarea value={form.motivation} onChange={update("motivation")} placeholder="Share your motivation and vision..." rows={4} className="rounded-xl" />
                  {errors.motivation && <p className="text-destructive text-xs mt-1">{errors.motivation}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Estimated number of interested students</label>
                  <Input value={form.estimatedStudents} onChange={update("estimatedStudents")} placeholder="e.g. 20-30 students" className="rounded-xl" />
                  {errors.estimatedStudents && <p className="text-destructive text-xs mt-1">{errors.estimatedStudents}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full mt-2" disabled={loading}>
                  {loading ? "Submitting..." : "Start an RWCC Circle"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartBranch;
