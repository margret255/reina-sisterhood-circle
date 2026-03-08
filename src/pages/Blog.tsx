import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import leaderSpotlightImg from "@/assets/blog-leader-spotlight.jpg";
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
  "leader-spotlight": { label: "Leader Spotlight", color: "bg-primary text-primary-foreground" },
  "member-story": { label: "Member Story", color: "bg-accent text-accent-foreground font-bold" },
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
    title: "Our Founder's Story: Leading with Purpose & Motherhood",
    excerpt:
      "Meet the visionary mom behind RWCC. How Faith balances leadership, motherhood, and building a sisterhood that empowers every woman.",
    category: "Founder Story",
    date: "March 1, 2026",
    img: founderImg,
    type: "member-story",
    slug: "founder-faith-motherhood",
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
          {/* All posts in equal grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full"
              >
                {post.img ? (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : post.video ? (
                  <div className="aspect-video overflow-hidden bg-black">
                    <video
                      src={post.video}
                      controls
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${typeLabels[post.type].color}`}>
                      {typeLabels[post.type].label}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
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
