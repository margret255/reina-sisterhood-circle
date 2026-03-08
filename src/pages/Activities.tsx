import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import posterPicnic from "@/assets/poster-picnic.jpg";
import posterContraceptives from "@/assets/poster-contraceptives.jpg";
import posterGirlsTalk from "@/assets/poster-girls-talk.jpg";
import posterChildrensHome from "@/assets/poster-childrens-home.jpg";

const pastEvents = [
  {
    title: "Girls Talk: Ignite Her Spark, Illuminate the World",
    desc: "An impactful conversation featuring guest speakers Santa Kagendo, Dr. Dorothy Bundi, and Dr. Mary Mwadulo sharing wisdom and inspiration with young women.",
    poster: posterGirlsTalk,
    date: "December 3, 2025",
    location: "Theater 3",
    tag: "Conference",
  },
  {
    title: "Aina Children's Home Visit",
    desc: "A heartwarming outreach in partnership with We Care Foundation—gift giving, games, sharing meals, mentorship, and emotional support for the children.",
    poster: posterChildrensHome,
    date: "December 12, 2025",
    location: "Aina Children's Home",
    tag: "Outreach",
  },
  {
    title: "Girls Day Out Picnic",
    desc: "Fun, friends, food, and memories! A day to chill, unwind, bond through girl talk, and enjoy games together as sisters.",
    poster: posterPicnic,
    date: "January 24, 2026",
    location: "Olive Gardens",
    tag: "Social",
  },
  {
    title: "A Contraceptives Talk",
    desc: "Making informed choices about sexual and reproductive health—covering types, benefits, myths, access, and an open Q&A with guest speaker Pauline Wanzala.",
    poster: posterContraceptives,
    date: "February 20, 2026",
    location: "Theater 1",
    tag: "Health",
  },
];

const impactStats = [
  { value: "200+", label: "Women Empowered" },
  { value: "4+", label: "Major Events" },
  { value: "50+", label: "Mentorship Pairs" },
  { value: "1", label: "Community Outreach" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Activities = () => {
  return (
    <Layout>
      <section className="relative py-16 overflow-hidden bg-primary">
         <div className="container mx-auto px-6 text-center">
           <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Activities & Impact</h1>
           <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
             See how RWCC is making a real difference in the lives of women on campus and beyond.
           </p>
         </div>
       </section>

      {/* Impact Stats */}
       <section className="py-8 bg-accent/30">
         <div className="container mx-auto px-6">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {impactStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 bg-card rounded-2xl shadow-sm border border-border"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events with Posters */}
      <section className="section-padding">
        <div className="container mx-auto">
          <SectionHeading
            title="Our Past Events"
            subtitle="A look back at the impactful events we've organized for our community"
          />
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {pastEvents.map((event, i) => (
              <motion.div
                key={event.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-card rounded-2xl overflow-hidden shadow-lg border border-border group hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={event.poster}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    {event.tag}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground">{event.title}</h3>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{event.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      📅 {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      📍 {event.location}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Activities;
