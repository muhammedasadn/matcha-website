'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const heritage = [
    { year: "1856", title: "Roots in Uji", desc: "Our journey began in the misty hills of Uji, Kyoto, where the perfect climate for shading tea leaves was discovered.", image: "/assets/culinary-matcha-bag.png" },
    { year: "1920", title: "Master Blending", desc: "Generation after generation refined the art of blending cultivars to achieve the perfect balance of umami and sweetness.", image: "/assets/matcha-whisk.png" },
    { year: "1985", title: "Global Recognition", desc: "Our ceremonial grade matcha was awarded the Emperor's Cup, marking a new era of excellence.", image: "/assets/ceremonial-matcha-tin.png" },
    { year: "2024", title: "Modern Ritual", desc: "Bringing the ancient ceremony of focus and clarity to the modern world, one bowl at a time.", image: "/assets/matcha-whisk.png" },
];

export default function StoryPage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <main ref={containerRef} className="min-h-screen bg-background text-white pb-32">
            {/* Hero Section */}
            <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0 z-0">
                    {/* Placeholder for a landscape image of tea fields */}
                    <div className="absolute inset-0 bg-gradient-to-b from-matcha/20 to-background z-10" />
                    <Image
                        src="/assets/culinary-matcha-bag.png" // Using existing asset as placeholder art, in reality this should be a landscape
                        alt="Uji Tea Fields"
                        fill
                        className="object-cover opacity-40 scale-110 blur-sm"
                    />
                </motion.div>

                <div className="relative z-10 text-center px-6">
                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "0.5em" }}
                        transition={{ duration: 1.5 }}
                        className="text-matcha text-sm md:text-base uppercase tracking-[0.5em] mb-4 block"
                    >
                        Est. 1856
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-6xl md:text-9xl font-serif mb-8"
                    >
                        Our Heritage
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="max-w-2xl mx-auto text-lg text-gray-300 leading-relaxed font-serif italic"
                    >
                        "To drink matcha is to drink the clouds and the mist of Uji."
                    </motion.p>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="py-32 px-6 md:px-24 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
                <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-serif text-white">The Pursuit of Perfection</h2>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        We believe that true matcha is not just a beverage, but a medium for mindfulness. Every leaf is shade-grown for 30 days, boosting chlorophyll and amino acids.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed">
                        Our farmers in Uji have dedicated their lives to the soil, ensuring that the tea bushes thrive in harmony with nature. We do not use pesticides or artificial fertilizers.
                    </p>
                </div>
                <div className="relative aspect-[4/5] bg-white/5 rounded-2xl overflow-hidden group">
                    <Image
                        src="/assets/matcha-whisk.png"
                        alt="Tea Master"
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                </div>
            </section>

            {/* Timeline */}
            <section className="py-32 bg-white/5 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-serif text-center mb-24">A Legacy of Quality</h2>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Center Line Gradient */}
                        <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-matcha/50 to-transparent md:-translate-x-1/2" />

                        {heritage.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`mb-32 relative flex flex-col md:flex-row items-center gap-12 md:gap-24 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 w-10 h-10 rounded-full border border-matcha/50 bg-black flex items-center justify-center md:-translate-x-1/2 z-10 shadow-[0_0_20px_rgba(157,193,131,0.3)]">
                                    <div className="w-3 h-3 bg-matcha rounded-full" />
                                </div>

                                {/* Content Side */}
                                <div className="pl-16 md:pl-0 flex-1 md:text-right relative">
                                    {i % 2 !== 0 && ( /* Desktop Layout: Text Left, Image Right */
                                        <div className="md:text-right">
                                            <span className="text-8xl font-serif text-white/5 absolute -top-10 right-0 z-0 select-none hidden md:block">{item.year}</span>
                                            <span className="text-matcha font-mono text-xl mb-2 block relative z-10">{item.year}</span>
                                            <h3 className="text-4xl font-serif text-white mb-6 relative z-10">{item.title}</h3>
                                            <p className="text-gray-400 leading-relaxed text-lg relative z-10">{item.desc}</p>
                                        </div>
                                    )}
                                    {i % 2 === 0 && ( /* Desktop Layout: Image Left, Text Right (Reversed) -> So Text is here */
                                        <div className="md:text-left">
                                            <span className="text-8xl font-serif text-white/5 absolute -top-10 left-0 z-0 select-none hidden md:block">{item.year}</span>
                                            <span className="text-matcha font-mono text-xl mb-2 block relative z-10">{item.year}</span>
                                            <h3 className="text-4xl font-serif text-white mb-6 relative z-10">{item.title}</h3>
                                            <p className="text-gray-400 leading-relaxed text-lg relative z-10">{item.desc}</p>
                                        </div>
                                    )}
                                </div>

                                {/* Image Side */}
                                <div className="pl-16 md:pl-0 flex-1 w-full">
                                    <div className="relative aspect-video bg-white/5 rounded-2xl overflow-hidden border border-white/10 group hover:border-matcha/30 transition-colors duration-500">
                                        <div className="absolute inset-0 bg-matcha/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-contain p-8 group-hover:scale-110 transition-transform duration-700"
                                        />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
