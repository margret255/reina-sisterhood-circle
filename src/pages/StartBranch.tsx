import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import { Users, Globe, GraduationCap } from "lucide-react";
import { z } from "zod";

const branchSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  university: z.string().trim().min(1, "University/College is required").max(200, "Must be less than 200 characters"),
  location: z.string().trim().min(1, "Country/City is required").max(100, "Must be less than 100 characters"),
  motivation: z.string().trim().min(10, "Please tell us more about why you want to start a branch").max(1000, "Must be less than 1000 characters"),
  estimatedStudents: z.string().trim().min(1, "Please provide an estimate"),
});

const StartBranch = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    university: "",
    location: "",
    motivation: "",
    estimatedStudents: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = branchSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    toast.success("Application submitted! We'll reach out to you soon. 💖");
    setForm({
      fullName: "",
      email: "",
      university: "",
      location: "",
      motivation: "",
      estimatedStudents: "",
    });
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
            {/* Info Section */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">Why Start a Branch?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Build Community</h4>
                    <p className="text-muted-foreground text-sm">Create a safe space for women on your campus to connect, heal, and grow together.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Lead & Learn</h4>
                    <p className="text-muted-foreground text-sm">Develop leadership skills while making a real difference in women's lives.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Globe className="text-primary" size={22} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Join a Movement</h4>
                    <p className="text-muted-foreground text-sm">Become part of a growing network of campus circles across universities.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <h3 className="text-xl font-display font-bold text-foreground mb-5">Application Form</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                  <Input 
                    value={form.fullName} 
                    onChange={update("fullName")} 
                    placeholder="Your full name" 
                    className="rounded-xl" 
                  />
                  {errors.fullName && <p className="text-destructive text-xs mt-1">{errors.fullName}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                  <Input 
                    type="email" 
                    value={form.email} 
                    onChange={update("email")} 
                    placeholder="your@email.com" 
                    className="rounded-xl" 
                  />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">University / College</label>
                  <Input 
                    value={form.university} 
                    onChange={update("university")} 
                    placeholder="Your institution name" 
                    className="rounded-xl" 
                  />
                  {errors.university && <p className="text-destructive text-xs mt-1">{errors.university}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Country / City</label>
                  <Input 
                    value={form.location} 
                    onChange={update("location")} 
                    placeholder="e.g. Kenya, Nairobi" 
                    className="rounded-xl" 
                  />
                  {errors.location && <p className="text-destructive text-xs mt-1">{errors.location}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Why do you want to start an RWCC branch?</label>
                  <Textarea 
                    value={form.motivation} 
                    onChange={update("motivation")} 
                    placeholder="Share your motivation and vision..." 
                    rows={4} 
                    className="rounded-xl" 
                  />
                  {errors.motivation && <p className="text-destructive text-xs mt-1">{errors.motivation}</p>}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Estimated number of interested students</label>
                  <Input 
                    value={form.estimatedStudents} 
                    onChange={update("estimatedStudents")} 
                    placeholder="e.g. 20-30 students" 
                    className="rounded-xl" 
                  />
                  {errors.estimatedStudents && <p className="text-destructive text-xs mt-1">{errors.estimatedStudents}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full mt-2">
                  Start an RWCC Circle
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
