import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Heart, Shield, Eye, Sunrise } from "lucide-react";
import heroImg from "@/assets/hero-women.jpg";
import circleImg from "@/assets/sisterhood-circle.jpg";
import mentorImg from "@/assets/mentorship.jpg";
import founderImg from "@/assets/founder-leem.jpg";

const coreValues = [
  { icon: Heart, title: "Love & Care", desc: "Creating genuine bonds rooted in unconditional love and mutual respect." },
  { icon: Shield, title: "Safety & Trust", desc: "A judgement-free zone where vulnerability is met with understanding." },
  { icon: Eye, title: "Visibility", desc: "Ensuring every woman feels seen, heard, and valued." },
  { icon: Sunrise, title: "Hope & Destiny", desc: "Inspiring women to walk confidently into their future." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="RWCC community" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">About RWCC</h1>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Our story, our mission, and the heart behind everything we do.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.img
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src={circleImg}
            alt="RWCC circle"
            className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]"
          />
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">Our Story</span>
            <h2 className="text-3xl font-display font-bold text-foreground mt-2 mb-4">How It All Began</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Reina WombCare Campus Circle was born from a deep desire to create a space where women on campus could come together — not just to study or socialize, but to truly support one another through life's challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Today, RWCC stands as a beacon of hope, love, and community — proving that when women lift each other up, extraordinary things happen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-rose">
        <div className="container mx-auto grid md:grid-cols-2 gap-10">
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our mission at RWCC is to create a warm, safe, and supportive sisterhood where women and mothers can grow emotionally, mentally, and spiritually. We aim to nurture a space where every woman feels seen, understood, and embraced — free from fear, pressure, or judgement. Through love, care, mental wellness support, and shared sisterhood, we empower each woman to rediscover her worth, heal softly, rise confidently, and walk in the fullness of who she was created to be.
            </p>
          </div>
          <div className="bg-card rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our vision is to build a compassionate and empowering circle of women who uplift one another with grace and understanding. RWCC seeks to create a community where every woman feels emotionally safe, mentally supported, and spiritually grounded. We envision a future where our sisterhood becomes a sanctuary of healing, dignity, empowerment, and shared growth.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading subtitle="Core Values" title="What Guides Us" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((v) => (
              <div key={v.title} className="bg-card rounded-2xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary" size={22} />
                </div>
                <h4 className="font-display font-semibold text-foreground">{v.title}</h4>
                <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* Team */}
       <section className="section-padding bg-secondary">
         <div className="container mx-auto">
            <SectionHeading subtitle="Our Founder" title="Meet Our Founder" description="The heart and vision behind RWCC." />
           <div className="flex justify-center">
             <div className="bg-card rounded-2xl overflow-hidden shadow-sm max-w-sm">
                <img src={founderImg} alt="Faith, RWCC Founder" className="w-full aspect-[3/4] object-cover object-top" />
                <div className="p-5 text-center">
                  <h4 className="font-display font-semibold text-foreground">Faith</h4>
                  <p className="text-sm text-muted-foreground mt-1">Founder & President of RWCC</p>
               </div>
             </div>
           </div>
         </div>
       </section>
    </Layout>
  );
};

export default About;
