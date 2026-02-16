'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';

import { Activity, Leaf, Zap, Shield } from 'lucide-react';

const ingredients = [
    { id: 1, name: "L-Theanine", x: "25%", y: "35%", desc: "Promotes relaxation without drowsiness.", icon: Activity },
    { id: 2, name: "Chlorophyll", x: "75%", y: "65%", desc: "Natural detoxifier causing the vibrant green color.", icon: Leaf },
    { id: 3, name: "Caffeine", x: "75%", y: "35%", desc: "Sustained energy release over 4-6 hours.", icon: Zap },
    { id: 4, name: "Catechins", x: "25%", y: "65%", desc: "Powerful antioxidants fighting oxidative stress.", icon: Shield },
];

export default function IngredientMap() {
    const [activeId, setActiveId] = useState<number | null>(null);

    return (
        <section className="relative min-h-screen bg-matcha-dark overflow-hidden flex items-center justify-center py-20 px-4">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(157,193,131,0.08),transparent_70%)]" />
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="relative w-full max-w-6xl aspect-[16/10] md:aspect-video bg-white/[0.02] rounded-[40px] border border-white/10 backdrop-blur-md flex items-center justify-center shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                <h2 className="absolute top-12 left-12 text-4xl font-serif text-white/90 tracking-tight">Molecular <span className="text-matcha italic">Harmony</span></h2>

                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                    <defs>
                        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(157,193,131,0)" />
                            <stop offset="50%" stopColor="rgba(157,193,131,0.3)" />
                            <stop offset="100%" stopColor="rgba(157,193,131,0)" />
                        </linearGradient>
                    </defs>
                    {ingredients.map((ing) => (
                        <motion.line
                            key={`line-${ing.id}`}
                            x1="50%"
                            y1="50%"
                            x2={ing.x}
                            y2={ing.y}
                            stroke="url(#gradient-line)"
                            strokeWidth="1.5"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{
                                pathLength: 1,
                                opacity: activeId === ing.id ? 1 : 0.4,
                                strokeWidth: activeId === ing.id ? 3 : 1.5
                            }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                    ))}
                </svg>

                {/* Central Core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                    <div className="relative">
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-16 border border-matcha/20 rounded-full"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute -inset-10 border-2 border-dashed border-matcha/10 rounded-full"
                        />
                        <div className="w-24 h-24 bg-matcha/10 rounded-full flex items-center justify-center border border-matcha/30 backdrop-blur-xl shadow-[0_0_50px_rgba(157,193,131,0.2)]">
                            <div className="w-16 h-16 bg-matcha rounded-full flex items-center justify-center shadow-[0_0_30px_var(--matcha-glow)]">
                                <Leaf className="text-black" size={32} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ingredient Points */}
                {ingredients.map((ing) => (
                    <div
                        key={ing.id}
                        className="absolute z-20"
                        style={{ top: ing.y, left: ing.x, transform: 'translate(-50%, -50%)' }}
                    >
                        <Magnetic>
                            <div
                                className="relative group cursor-pointer flex flex-col items-center gap-4 py-4"
                                onMouseEnter={() => setActiveId(ing.id)}
                                onMouseLeave={() => setActiveId(null)}
                            >
                                <div className={`w-20 h-20 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${activeId === ing.id ? 'bg-matcha border-matcha-glow shadow-[0_0_40px_rgba(157,193,131,0.4)] scale-110' : 'bg-black/40 border-white/20 hover:bg-white/10'}`}>
                                    <ing.icon size={36} className={`transition-colors duration-300 ${activeId === ing.id ? 'text-black' : 'text-white/70'}`} />
                                </div>
                                <div className={`absolute -inset-6 rounded-full border border-matcha/10 transition-all duration-500 pointer-events-none ${activeId === ing.id ? 'scale-125 opacity-100 border-matcha/30' : 'scale-75 opacity-0'}`} />
                                <span className={`text-sm font-medium tracking-widest transition-all duration-300 ${activeId === ing.id ? 'text-matcha' : 'text-white/30'}`}>
                                    {ing.name}
                                </span>
                            </div>
                        </Magnetic>

                        <AnimatePresence>
                            {activeId === ing.id && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                                    className="absolute mt-24 left-1/2 -translate-x-1/2 w-80 bg-[#0a0a0a]/90 border border-matcha/20 p-6 rounded-3xl backdrop-blur-2xl z-30 pointer-events-none shadow-3xl text-center"
                                >
                                    <h4 className="text-matcha font-serif text-2xl mb-2">{ing.name}</h4>
                                    <p className="text-white/60 text-sm leading-relaxed">{ing.desc}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>

            <div className="absolute bottom-12 text-white/20 text-[10px] tracking-[0.3em] uppercase">
                Synchronized Bioavailability
            </div>
        </section>
    );
}
