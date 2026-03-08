import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Heart, Users, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import NewsletterSection from "@/components/NewsletterSection";
import heroImg from "@/assets/hero-women.jpg";
import circleImg from "@/assets/sisterhood-circle.jpg";
import outreachImg from "@/assets/community-outreach.jpg";
import mentorImg from "@/assets/mentorship.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const values = [
  { icon: Heart, title: "Healing", desc: "A safe space to process, grow, and find peace." },
  { icon: Users, title: "Sisterhood", desc: "A circle of women who genuinely care for one another." },
  { icon: Sparkles, title: "Empowerment", desc: "Building confidence and strength in every woman." },
  { icon: TrendingUp, title: "Growth", desc: "Nurturing personal, emotional, and spiritual development." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="RWCC community of women on campus" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary-foreground/80 text-sm tracking-widest uppercase mb-4"
          >
            Reina WombCare Campus Circle
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-primary-foreground leading-tight max-w-4xl mx-auto"
          >
            Where Healing Turns Into{" "}
            <span className="text-gradient-gold italic">Confidence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed"
          >
            And confidence into destiny. Join a sisterhood that nurtures, empowers, and uplifts every woman on campus.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/join">
              <Button size="xl">Join Our Sisterhood</Button>
            </Link>
            <Link to="/activities">
              <Button variant="hero-outline" size="xl">See Our Activities</Button>
            </Link>
            <Link to="/support">
              <Button variant="hero-outline" size="xl">Support Our Mission</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gradient-warm">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="Our Values"
            title="What We Stand For"
            description="RWCC is built on four pillars that guide everything we do."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={circleImg} alt="RWCC sisterhood circle" className="rounded-2xl shadow-lg w-full object-cover aspect-square" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-semibold tracking-widest uppercase text-accent">About Us</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
              A Circle of Love, Healing & Growth
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              RWCC is a campus-based sisterhood dedicated to creating a warm, safe, and supportive community where women and mothers can grow emotionally, mentally, and spiritually.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Through love, care, mental wellness support, and shared sisterhood, we empower each woman to rediscover her worth, heal softly, rise confidently, and walk in the fullness of who she was created to be.
            </p>
            <Link to="/about">
              <Button variant="outline">Learn More About RWCC</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Activities */}
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <SectionHeading
            subtitle="What We Do"
            title="Making an Impact"
            description="From empowerment talks to community outreach, we're changing lives on campus."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: mentorImg, title: "Mentorship Sessions", desc: "One-on-one and group mentoring that guides women through personal and academic challenges." },
              { img: outreachImg, title: "Community Outreach", desc: "Extending care beyond campus to support women and mothers in our broader community." },
              { img: heroImg, title: "Campus Events", desc: "Empowerment events that bring women together to learn, connect, and grow." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="font-display font-semibold text-lg text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/activities">
              <Button variant="outline">View All Activities</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary text-center">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-4">
            Ready to Join Our Sisterhood?
          </h2>
          <p className="text-primary-foreground/80 mb-8 leading-relaxed">
            Every woman deserves a space where she feels seen, valued, and empowered. Become part of RWCC today.
          </p>
          <Link to="/join">
            <Button variant="gold" size="xl">Become a Member</Button>
          </Link>
        </div>
      </section>

      <NewsletterSection />
    </Layout>
  );
};

export default Index;
