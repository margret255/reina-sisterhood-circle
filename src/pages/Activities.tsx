import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import empowermentImg from "@/assets/empowerment-talk.jpg";
import mentorImg from "@/assets/mentorship.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import outreachImg from "@/assets/community-outreach.jpg";
import celebrationImg from "@/assets/celebration.jpg";

const activities = [
  {
    title: "Women Empowerment Talks",
    desc: "Inspiring talks and panels that ignite confidence and courage in every woman. Our speakers share stories of resilience, leadership, and triumph to motivate our sisters.",
    img: empowermentImg,
    impact: "200+ women inspired across 12 sessions",
  },
  {
    title: "Mentorship Sessions",
    desc: "One-on-one and group mentoring that guides women through personal, academic, and career challenges with the support of experienced mentors.",
    img: mentorImg,
    impact: "50+ mentorship pairs formed",
  },
  {
    title: "Wellness & Mental Health Discussions",
    desc: "Safe spaces for honest conversations about mental health, emotional healing, and self-care practices that nurture the whole woman.",
    img: wellnessImg,
    impact: "Ongoing weekly wellness circles",
  },
  {
    title: "Community Outreach & Support",
    desc: "Extending our circle of care beyond campus to support women, mothers, and families in the broader community through donation drives and service projects.",
    img: outreachImg,
    impact: "5 community outreach programs completed",
  },
  {
    title: "Campus Empowerment Events",
    desc: "From conferences to celebration ceremonies, we create events that bring women together to learn, connect, celebrate, and grow as a community.",
    img: celebrationImg,
    impact: "3 major campus events hosted annually",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Activities = () => {
  return (
    <Layout>
      <section className="relative py-32 overflow-hidden bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Activities & Impact</h1>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            See how RWCC is making a real difference in the lives of women on campus and beyond.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto space-y-20">
          {activities.map((activity, i) => (
            <motion.div
              key={activity.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
            >
              <div style={{ direction: "ltr" }}>
                <img src={activity.img} alt={activity.title} className="rounded-2xl shadow-lg w-full object-cover aspect-[4/3]" />
              </div>
              <div style={{ direction: "ltr" }}>
                <h3 className="text-2xl font-display font-bold text-foreground mb-3">{activity.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{activity.desc}</p>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  ✨ {activity.impact}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
