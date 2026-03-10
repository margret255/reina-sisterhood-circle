import { useState, useEffect } from "react";
import { Calendar, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

interface EventRow {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  tag: string;
  poster_url: string | null;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Events = () => {
  const [events, setEvents] = useState<EventRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data } = await supabase
        .from("events")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setEvents(data);
      setLoading(false);
    };
    fetchEvents();
  }, []);

  return (
    <Layout>
      <section className="relative py-32 overflow-hidden bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-accent-foreground">
            Upcoming Events
          </h1>
          <p className="text-accent-foreground/80 mt-4 max-w-xl mx-auto">
            Mark your calendar and join us at our upcoming gatherings and workshops.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-5xl">
          {loading ? (
            <p className="text-center text-muted-foreground py-12">Loading events...</p>
          ) : events.length === 0 ? (
            <p className="text-center text-muted-foreground py-12">
              No upcoming events at the moment. Check back soon!
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-card rounded-xl overflow-hidden shadow-md border border-border group hover:shadow-lg transition-shadow"
                >
                  {event.poster_url ? (
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={event.poster_url}
                        alt={event.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[3/4] bg-accent/30 flex items-center justify-center">
                      <Calendar size={48} className="text-muted-foreground/30" />
                    </div>
                  )}
                  <div className="p-4">
                    <span className="inline-block px-2 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-semibold mb-2">
                      {event.tag}
                    </span>
                    <h3 className="text-sm font-display font-bold text-foreground leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mt-1.5 text-xs leading-relaxed line-clamp-3">
                      {event.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-[10px] text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={10} /> {event.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={10} /> {event.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
