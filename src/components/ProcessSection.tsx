'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { CloudSun, Hand, Wind, Disc } from 'lucide-react';

const steps = [
  { title: "Shade Grown", desc: "Leaves are shaded for 20 days to boost chlorophyll.", icon: CloudSun },
  { title: "Hand Picked", desc: "Only the youngest, most tender leaves are selected.", icon: Hand },
  { title: "Steamed & Dried", desc: "Preserving the vibrant green color and nutrients.", icon: Wind },
  { title: "Stone Ground", desc: "Slowly ground into a fine powder by granite wheels.", icon: Disc },
];

export default function ProcessSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-20 pl-20 pr-20 items-center">
          {steps.map((step, i) => (
            <div key={i} className="min-w-[80vw] md:min-w-[60vw] h-[70vh] flex flex-col justify-center border-l border-white/10 pl-10 md:pl-20 relative group cursor-default transition-colors duration-500 hover:bg-white/5 rounded-r-3xl">
              <span className="text-matcha/20 text-[10rem] font-serif absolute -top-20 -left-10 z-0 select-none group-hover:text-matcha/40 transition-colors duration-500">0{i + 1}</span>
              <div className="relative z-10 mb-6 text-matcha group-hover:scale-110 transition-transform duration-300 origin-left">
                <step.icon size={48} strokeWidth={1} />
              </div>
              <h3 className="text-5xl md:text-7xl font-serif text-white mb-8 relative z-10">{step.title}</h3>
              <p className="text-gray-400 max-w-lg text-lg md:text-xl relative z-10 leading-relaxed">{step.desc}</p>
            </div>
          ))}
          {/* Link to Full Process Page */}
          <div className="min-w-[40vw] h-[70vh] flex items-center justify-center">
            <a href="/process" className="group flex items-center gap-4 text-4xl font-serif text-white hover:text-matcha transition-colors">
              <span>View Full Journey</span>
              <span className="group-hover:translate-x-4 transition-transform duration-300">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
