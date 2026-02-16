'use client';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Mail, ArrowUp } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Leaf animation variants
    const leafVariants = {
        hidden: { opacity: 0, y: -50, rotate: 0 },
        visible: (i: number) => ({
            opacity: [0, 1, 0],
            y: [0, 100 + Math.random() * 500],
            x: [0, Math.random() * 100 - 50],
            rotate: [0, 360 + Math.random() * 360],
            transition: {
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear" as const
            }
        })
    };

    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    return (
        <footer className="relative bg-[#0a0a0a] text-white pt-32 pb-10 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-matcha/5 to-transparent pointer-events-none" />

            {/* Falling Leaves Animation */}
            {isMounted && (
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={leafVariants}
                            initial="hidden"
                            animate="visible"
                            className="absolute w-4 h-4 bg-matcha/40 text-matcha rounded-tr-xl rounded-bl-xl origin-center"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: -50
                            }}
                        />
                    ))}
                </div>
            )}

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-24">
                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-2 space-y-8">
                        <Link href="/" className="inline-block">
                            <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tighter text-white hover:text-matcha transition-colors duration-300">
                                MATCHA.
                            </h2>
                        </Link>
                        <p className="text-gray-400 max-w-md text-lg leading-relaxed">
                            Experience the ceremony of focus. Premium ceremonial grade matcha, sourced directly from Uji, Japan.
                        </p>
                        <div className="flex gap-6">
                            {[Instagram, Twitter, Facebook, Mail].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-matcha hover:border-matcha hover:text-black transition-all duration-300 group">
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="space-y-6">
                        <h3 className="text-matcha font-sans text-xs tracking-[0.2em] uppercase font-bold">Shop</h3>
                        <ul className="space-y-4 text-gray-400">
                            {['Ceremonial', 'Culinary', 'Sets', 'Accessories', 'Wholesale'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-0 h-[1px] bg-matcha group-hover:w-4 transition-all duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-matcha font-sans text-xs tracking-[0.2em] uppercase font-bold">Company</h3>
                        <ul className="space-y-4 text-gray-400">
                            {['Our Story', 'Journal', 'Process', 'Contact', 'FAQ'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-white transition-colors flex items-center gap-2 group">
                                        <span className="w-0 h-[1px] bg-matcha group-hover:w-4 transition-all duration-300" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Matcha Co. All rights reserved.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center gap-2 text-sm text-white hover:text-matcha transition-colors group"
                    >
                        Back to Top
                        <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
