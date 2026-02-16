'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 1000], [0, 400]);
    const textY = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-background z-0" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(157,193,131,0.05),transparent_70%)] z-0" />

            {/* Video Background / Main Element */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-100" // Increased opacity to show off quality
                >
                    <source src="/hero-matcha-4k.webm" type="video/webm" />
                    <source src="/hero-matcha-4k.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-background/40" />
            </motion.div>

            {/* Floating Product Placeholder - Kept for structure but invalidating current visuals if needed, 
                actually the user wanted the animation TO BE the hero. 
                Let's keep a subtle overlay or just the video. 
                The prompt said "stored full frame... convert this frames in to highly natural realistic animation".
                So the video IS the hero.
            */}


            {/* Text Content */}
            <motion.div
                style={{ y: textY, opacity }}
                className="absolute bottom-24 md:bottom-32 z-20 text-center pointer-events-none"
            >
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-matcha font-sans text-xs md:text-sm tracking-[0.5em] uppercase mb-6"
                >
                    Ceremonial Grade
                </motion.p>
                <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white tracking-tighter mix-blend-overlay">
                    The Ritual<br />of Focus.
                </h1>
            </motion.div>
        </section>
    );
}
