'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { CloudSun, Hand, Wind, Disc, Package } from 'lucide-react';
import Image from 'next/image';

const timeline = [
    {
        title: "Shade Grown",
        description: "For 20-30 days before harvest, the tea bushes are covered to block direct sunlight. This crucial step boosts chlorophyll levels and amino acids, giving matcha its vibrant emerald color and umami flavor.",
        icon: CloudSun,
        image: "/assets/ceremonial-matcha-tin.png", // Placeholder
        year: "April"
    },
    {
        title: "Hand Picked",
        description: "Only the youngest, most tender leaves at the top of the tea bush are selectively hand-picked. This ensures the smoothest texture and sweetest taste, free from the bitterness of older leaves.",
        icon: Hand,
        image: "/assets/culinary-matcha-bag.png", // Placeholder
        year: "May"
    },
    {
        title: "Steamed & Dried",
        description: "Within hours of harvest, leaves are steamed to stop oxidation and preserve their color/nutrients. They are then air-dried and de-stemmed to become 'Tencha'.",
        icon: Wind,
        image: "/assets/matcha-whisk.png", // Placeholder
        year: "May"
    },
    {
        title: "Stone Ground",
        description: "The Tencha is slowly ground into a fine powder using traditional granite stone wheels. It takes one hour to grind just 30 grams of ceremonial grade matcha.",
        icon: Disc,
        image: "/assets/ceremonial-matcha-tin.png", // Placeholder
        year: "Year Round"
    },
    {
        title: "Sealed Fresh",
        description: "The freshly ground powder is immediately sealed in airtight tins to protect it from light, air, and moisture, ensuring it reaches you in peak condition.",
        icon: Package,
        image: "/assets/culinary-matcha-bag.png", // Placeholder
        year: "Year Round"
    }
];

export default function ProcessPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [1, 1, 0.5, 0]);

    return (
        <main ref={containerRef} className="bg-background text-white min-h-screen">
            {/* Immersive Header */}
            <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
                <motion.div style={{ y: backgroundY }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-matcha/10 via-transparent to-background z-10" />
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-matcha/5 blur-[150px] rounded-full animate-pulse" />
                </motion.div>

                <div className="relative z-20 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                        className="w-24 h-24 mx-auto mb-12 border border-matcha/30 rounded-full flex items-center justify-center relative group"
                    >
                        <div className="absolute inset-0 bg-matcha/5 rounded-full scale-110 blur-xl group-hover:bg-matcha/20 transition-colors" />
                        <Wind className="text-matcha animate-bounce" size={32} />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="text-7xl md:text-[12rem] font-serif leading-none tracking-tighter"
                    >
                        Origin<span className="text-matcha">.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        From the misty, shaded fields of Uji to the precision of the stone mill. A journey of patience.
                    </motion.p>
                </div>

                {/* Animated Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
                >
                    <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">Scroll to explore</span>
                    <div className="w-px h-16 bg-gradient-to-b from-matcha to-transparent" />
                </motion.div>
            </section>

            {/* Immersive Timeline */}
            <div className="relative z-10 bg-background px-6 md:px-12 lg:px-24 pb-64">
                {/* Visual Connector Line */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-matcha/50 via-matcha/10 to-transparent md:-translate-x-1/2 opacity-30" />

                {timeline.map((item, i) => (
                    <TimelineItem key={i} item={item} index={i} />
                ))}
            </div>
        </main>
    );
}

function TimelineItem({ item, index }: { item: any, index: number }) {
    const isEven = index % 2 === 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={`flex flex-col md:flex-row items-center gap-16 py-32 relative ${isEven ? '' : 'md:flex-row-reverse'}`}
        >
            {/* Large Index Number Background */}
            <span className={`absolute top-1/2 -translate-y-1/2 font-serif text-[15rem] text-white/[0.02] select-none z-0 hidden lg:block ${isEven ? 'right-0' : 'left-0'}`}>
                0{index + 1}
            </span>

            {/* Floating Point on line */}
            <div className="absolute left-8 md:left-1/2 w-3 h-3 bg-matcha rounded-full -translate-x-1/2 shadow-[0_0_20px_var(--matcha-green)] z-20" />

            {/* Content Section */}
            <div className={`flex-1 z-10 space-y-8 pl-16 md:pl-0 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                <div className={`space-y-2 ${isEven ? 'md:items-end' : 'md:items-start'} flex flex-col`}>
                    <span className="text-matcha font-mono text-sm tracking-widest">{item.year}</span>
                    <h3 className="text-4xl md:text-6xl font-serif text-white">{item.title}</h3>
                </div>

                <p className="text-gray-400 leading-relaxed text-lg md:text-xl font-light">
                    {item.description}
                </p>

                <div className={`inline-flex items-center gap-4 px-6 py-3 glass rounded-full text-xs text-white/60 tracking-widest uppercase transition-colors hover:border-matcha/50 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    <item.icon size={18} className="text-matcha" />
                    <span>Phase 0{index + 1} Complete</span>
                </div>
            </div>

            {/* Visual Section */}
            <div className="flex-1 w-full z-10 pl-16 md:pl-0">
                <div className="relative group perspective-1000">
                    <div className="relative aspect-video rounded-3xl overflow-hidden glass-morphism border border-white/5 transition-all duration-700 group-hover:border-matcha/30 group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] preserve-3d">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="object-contain p-12 opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-matcha/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Decorative bits */}
                    <div className={`absolute -top-4 -right-4 w-12 h-12 glass rounded-2xl flex items-center justify-center text-matcha -rotate-12 group-hover:rotate-0 transition-transform duration-500`}>
                        <item.icon size={20} />
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
