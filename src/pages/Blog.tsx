import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import leaderSpotlightImg from "@/assets/blog-leader-spotlight.jpg";
import wellnessImg from "@/assets/wellness.jpg";
import mentorImg from "@/assets/mentorship.jpg";
import empowermentImg from "@/assets/empowerment-talk.jpg";
import circleImg from "@/assets/sisterhood-circle.jpg";
import memberStoryImg from "@/assets/member-story-reina.jpg";
import founderImg from "@/assets/founder-leem.jpg";

type PostType = "leader-spotlight" | "member-story" | "leadership-video" | "opinion";

interface BlogPost {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  img?: string;
  video?: string;
  type: PostType;
  slug: string;
}

const typeLabels: Record<PostType, { label: string; color: string }> = {
  "leader-spotlight": { label: "Leader Spotlight", color: "bg-primary/10 text-primary" },
  "member-story": { label: "Member Story", color: "bg-accent/20 text-accent-foreground" },
  "leadership-video": { label: "Leadership Session", color: "bg-secondary text-secondary-foreground" },
  "opinion": { label: "Opinion Piece", color: "bg-muted text-muted-foreground" },
};

const posts: BlogPost[] = [
  {
    title: "Meet Our Leader: Confidence, Vision & Purpose",
    excerpt:
      "A spotlight on one of RWCC's inspiring leaders — her journey, her passion for women's empowerment, and how she's shaping the future of sisterhood on campus.",
    category: "Leadership",
    date: "March 8, 2026",
    img: leaderSpotlightImg,
    type: "leader-spotlight",
    slug: "leader-spotlight-confidence",
  },
  {
    title: "Behind the Scenes: Leadership Committee Shoot",
    excerpt:
      "Watch a glimpse of RWCC's leadership committee in action during our latest shoot — energy, unity, and purpose captured on camera.",
    category: "Leadership",
    date: "March 8, 2026",
    video: "/videos/leadership-shoot.mp4",
    type: "leadership-video",
    slug: "leadership-committee-shoot",
  },
  {
    title: "Financial Glow Up: Budgeting as a Student",
    excerpt:
      "Master your finances while in school. Learn practical budgeting strategies that help you manage expenses, save money, and build financial confidence.",
    category: "Financial Wellness",
    date: "March 5, 2026",
    img: wellnessImg,
    type: "opinion",
    slug: "financial-glow-up-budgeting",
  },
  {
    title: "The Power of Sisterhood: Why Every Woman Needs a Circle",
    excerpt:
      "There's something deeply healing about being surrounded by women who understand you. Discover why community matters.",
    category: "Sisterhood",
    date: "February 20, 2026",
    img: circleImg,
    type: "member-story",
    slug: "power-of-sisterhood",
  },
   {
     title: "Leading with Grace: Lessons for Young Women",
     excerpt:
       "Leadership isn't about titles — it's about impact. Explore how young women can lead with authenticity and grace.",
     category: "Leadership",
     date: "February 10, 2026",
     img: empowermentImg,
     type: "opinion",
     slug: "leading-with-grace",
   },
   {
     title: "From Courage to Confidence: A Member's Journey",
     excerpt:
       "How RWCC helped me rediscover myself, build the courage I needed, and create a safe space where I'm heard, supported, and free to grow.",
     category: "Member Stories",
     date: "March 6, 2026",
     img: memberStoryImg,
     type: "member-story",
     slug: "member-journey-courage",
   },
   {
     title: "Motherhood on Campus: You Are Not Alone",
     excerpt:
       "Being a student mother comes with unique challenges. Here's how RWCC supports moms pursuing their dreams.",
     category: "Motherhood",
     date: "January 28, 2026",
     img: mentorImg,
     type: "member-story",
     slug: "motherhood-on-campus",
   },
];

const Blog = () => {
  return (
    <Layout>
      <section className="relative py-32 overflow-hidden bg-gradient-rose">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground">
            Blog & Insights
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Leader spotlights, member stories, sessions & opinion pieces from the RWCC community.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          {/* Featured / Leader Spotlight — first post large */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 grid md:grid-cols-2 gap-6 bg-card rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="aspect-[4/5] md:aspect-auto overflow-hidden">
              <img
                src={posts[0].img}
                alt={posts[0].title}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center p-8">
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeLabels[posts[0].type].color}`}>
                  {typeLabels[posts[0].type].label}
                </span>
                <span className="text-xs text-muted-foreground">{posts[0].date}</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
                {posts[0].title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{posts[0].excerpt}</p>
            </div>
          </motion.article>

          {/* Video Post */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 bg-card rounded-2xl overflow-hidden shadow-sm"
          >
            <div className="aspect-video overflow-hidden bg-black">
              <video
                src={posts[1].video}
                controls
                className="w-full h-full object-cover"
                poster=""
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeLabels[posts[1].type].color}`}>
                  {typeLabels[posts[1].type].label}
                </span>
                <span className="text-xs text-muted-foreground">{posts[1].date}</span>
              </div>
              <h3 className="text-xl font-display font-bold text-foreground mb-2">
                {posts[1].title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{posts[1].excerpt}</p>
            </div>
          </motion.article>

          {/* Remaining posts grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(2).map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeLabels[post.type].color}`}>
                      {typeLabels[post.type].label}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-2">
                    {post.title}
                  </h3>
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
