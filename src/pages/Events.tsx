import { Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const events = [
  {
    title: "Sisterhood Wellness Evening",
    desc: "An evening of self-care, guided meditation, and heartfelt conversations about mental wellness.",
    date: "March 22, 2026",
    location: "Student Center, Room 204",
    tag: "Wellness",
  },
  {
    title: "Empowerment Conference 2026",
    desc: "Our annual conference featuring keynote speakers, panel discussions, and networking sessions for young women leaders.",
    date: "April 10, 2026",
    location: "Main Auditorium",
    tag: "Conference",
  },
  {
    title: "Motherhood & Campus Life Workshop",
    desc: "A supportive workshop for student mothers balancing academics, parenting, and personal growth.",
    date: "April 28, 2026",
    location: "Women's Resource Center",
    tag: "Workshop",
  },
  {
    title: "Community Care Drive",
    desc: "Join us as we collect and distribute essential supplies to women and families in need.",
    date: "May 5, 2026",
    location: "Campus Quad",
    tag: "Outreach",
  },
  {
    title: "Leadership & Destiny Night",
    desc: "An inspiring evening celebrating women's leadership and the destiny each woman carries within her.",
    date: "May 20, 2026",
    location: "Chapel Hall",
    tag: "Leadership",
  },
];

const Events = () => {
  return (
    <Layout>
      <section className="relative py-32 overflow-hidden bg-accent">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-accent-foreground">Upcoming Events</h1>
          <p className="text-accent-foreground/80 mt-4 max-w-xl mx-auto">
            Mark your calendar and join us at our upcoming gatherings and workshops.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto max-w-3xl space-y-6">
          {events.map((event) => (
            <div key={event.title} className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between flex-wrap gap-3">
                <div className="flex-1 min-w-0">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-3">
                    {event.tag}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground">{event.title}</h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">{event.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-accent" /> {event.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} className="text-accent" /> {event.location}
                    </span>
                  </div>
                </div>
                <Button size="sm" className="mt-2 md:mt-0 shrink-0">Register</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Events;
