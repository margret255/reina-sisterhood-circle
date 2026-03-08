import { Calendar, MapPin, Heart, MessageSquare, Ribbon, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const events = [
  {
    title: "Pad Drive",
    desc: "Join us in collecting and distributing sanitary pads to support women and girls who lack access to menstrual hygiene products. Together, we can break the stigma and ensure dignity for all.",
    date: "Coming Soon",
    location: "TBA",
    tag: "Outreach",
    icon: Heart,
  },
  {
    title: "Women's Debate",
    desc: "An empowering debate session where women engage in thoughtful discussions on topics that matter—building confidence, critical thinking, and public speaking skills.",
    date: "Coming Soon",
    location: "TBA",
    tag: "Empowerment",
    icon: MessageSquare,
  },
  {
    title: "Cancer Awareness Event",
    desc: "Raising awareness about cancer prevention, early detection, and support for those affected. Learn the signs, get screened, and join the fight against cancer.",
    date: "Coming Soon",
    location: "TBA",
    tag: "Health",
    icon: Ribbon,
  },
  {
    title: "Endometriosis Talk",
    desc: "An informative session about endometriosis—understanding the condition, its symptoms, treatment options, and supporting women living with endo. Breaking the silence on women's health.",
    date: "Coming Soon",
    location: "TBA",
    tag: "Health",
    icon: Stethoscope,
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
            <div key={event.title} className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border hover:shadow-md transition-shadow flex gap-5">
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
