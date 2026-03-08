import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import girlsDayOutImg from "@/assets/girls-day-out-picnic.jpg";
import contraceptivesTalkImg from "@/assets/contraceptives-talk.jpg";
import childrensHomeImg from "@/assets/childrens-home-visit.jpg";
import girlsTalkImg from "@/assets/girls-talk-event.jpg";
import leadershipImg from "@/assets/rwcc-leadership.jpg";

const images = [
  { src: girlsDayOutImg, alt: "Girls Day Out picnic" },
  { src: contraceptivesTalkImg, alt: "Contraceptives Talk event" },
  { src: childrensHomeImg, alt: "Aina Children's Home visit" },
  { src: girlsTalkImg, alt: "Girls Talk conference" },
  { src: leadershipImg, alt: "RWCC Leadership - Meru University Student Branch" },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  return (
    <Layout>
      <section className="relative py-32 overflow-hidden bg-foreground">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground">Gallery</h1>
          <p className="text-primary-foreground/80 mt-4 max-w-xl mx-auto">
            Moments of sisterhood, empowerment, and joy captured in our community.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl overflow-hidden cursor-pointer group ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
                onClick={() => setSelectedImg(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImg(null)}
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={selectedImg}
            alt="Gallery preview"
            className="max-w-full max-h-[85vh] rounded-2xl object-contain"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;
