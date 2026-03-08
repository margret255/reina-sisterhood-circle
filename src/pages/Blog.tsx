import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import wellnessImg from "@/assets/wellness.jpg";
import mentorImg from "@/assets/mentorship.jpg";
import empowermentImg from "@/assets/empowerment-talk.jpg";
import circleImg from "@/assets/sisterhood-circle.jpg";

const posts = [
  {
    title: "5 Ways to Nurture Your Mental Wellness on Campus",
    excerpt: "Balancing academics, relationships, and self-care can be overwhelming. Here are five practical ways to protect your peace.",
    category: "Mental Wellness",
    date: "March 5, 2026",
    img: wellnessImg,
    slug: "mental-wellness-tips",
  },
  {
    title: "The Power of Sisterhood: Why Every Woman Needs a Circle",
    excerpt: "There's something deeply healing about being surrounded by women who understand you. Discover why community matters.",
    category: "Sisterhood",
    date: "February 20, 2026",
    img: circleImg,
    slug: "power-of-sisterhood",
  },
  {
    title: "Leading with Grace: Lessons for Young Women",
    excerpt: "Leadership isn't about titles — it's about impact. Explore how young women can lead with authenticity and grace.",
    category: "Leadership",
    date: "February 10, 2026",
    img: empowermentImg,
    slug: "leading-with-grace",
  },
  {
    title: "Motherhood on Campus: You Are Not Alone",
    excerpt: "Being a student mother comes with unique challenges. Here's how RWCC supports moms pursuing their dreams.",
    category: "Motherhood",
    date: "January 28, 2026",
    img: mentorImg,
    slug: "motherhood-on-campus",
  },
];

const Blog = () => {
  return (
    <Layout>
      <section className="relative py-32 overflow-hidden bg-gradient-rose">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">Blog & Insights</h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Empowering articles on wellness, leadership, growth, and sisterhood.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">{post.category}</span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">{post.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{post.excerpt}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
