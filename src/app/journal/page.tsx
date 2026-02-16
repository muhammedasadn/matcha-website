'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Calendar, User } from 'lucide-react';

const articles = [
    {
        id: 1,
        title: "The Art of Whisking",
        excerpt: "Mastering the bamboo chasen to create the perfect foam.",
        category: "Ritual",
        date: "Oct 12, 2023",
        author: "Hanae Mori",
        image: "/assets/matcha-whisk.png", // Using existing asset for now
        color: "bg-[#e8f5e9]"
    },
    {
        id: 2,
        title: "Harvest Season in Uji",
        excerpt: "A look into the traditional shading process of tencha leaves.",
        category: "Origin",
        date: "Sep 28, 2023",
        author: "Kenji Tanaka",
        image: "/assets/culinary-matcha-bag.png", // Using existing asset
        color: "bg-[#f1f8e9]"
    },
    {
        id: 3,
        title: "Health Benefits of Matcha",
        excerpt: "Why this antioxidant powerhouse is more than just a trend.",
        category: "Wellness",
        date: "Sep 15, 2023",
        author: "Dr. Sarah Lee",
        image: "/assets/ceremonial-matcha-tin.png", // Using existing asset
        color: "bg-[#dcedc8]"
    },
    {
        id: 4,
        title: "Matcha Latte at Home",
        excerpt: "Simple recipe for a café-quality latte in your kitchen.",
        category: "Recipes",
        date: "Aug 30, 2023",
        author: "Mia Chen",
        image: "/assets/matcha-whisk.png",
        color: "bg-[#e8f5e9]"
    }
];

export default function JournalPage() {
    return (
        <main className="min-h-screen bg-background pt-40 pb-32 px-6 md:px-12 lg:px-24">
            {/* Header with floating elements */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative mb-32"
            >
                <div className="absolute -top-20 -left-10 w-64 h-64 bg-matcha/5 blur-[120px] rounded-full pointer-events-none" />

                <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-matcha text-xs uppercase tracking-[0.4em] block mb-6 font-bold"
                >
                    The Digital Gazette
                </motion.span>

                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="text-7xl md:text-9xl font-serif text-white mb-8 tracking-tighter leading-none"
                >
                    Journal<span className="text-matcha">.</span>
                </motion.h1>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-400 max-w-xl text-lg md:text-xl leading-relaxed font-light"
                >
                    Reflections on tea culture, the precision of origin, and the meditative art of the modern ceremony.
                </motion.p>
            </motion.div>

            {/* Asymmetrical Editorial Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-y-24 md:gap-x-12">
                {articles.map((article, i) => {
                    // Create an asymmetrical layout pattern
                    const isLarge = i % 3 === 0;
                    const colSpan = isLarge ? "md:col-span-8" : "md:col-span-4";
                    const alignment = i % 2 === 0 ? "" : "md:mt-24";

                    return (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-10%" }}
                            transition={{
                                duration: 1.2,
                                delay: (i % 3) * 0.1,
                                ease: [0.16, 1, 0.3, 1]
                            }}
                            className={`${colSpan} ${alignment} group`}
                        >
                            <div className="relative overflow-hidden rounded-3xl mb-10 overflow-hidden preserve-3d">
                                <Link href="#" className="block relative aspect-[16/10] overflow-hidden">
                                    {/* Parallax effect on hover */}
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            src={article.image}
                                            alt={article.title}
                                            fill
                                            className="object-cover transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-700" />
                                    </motion.div>

                                    {/* Category Badge */}
                                    <div className="absolute top-8 left-8 z-20">
                                        <span className="glass px-5 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest text-white">
                                            {article.category}
                                        </span>
                                    </div>

                                    {/* Read Icon */}
                                    <div className="absolute bottom-8 right-8 w-14 h-14 glass rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 text-white z-20">
                                        <ArrowUpRight size={24} />
                                    </div>
                                </Link>
                            </div>

                            <div className="space-y-6 max-w-2xl">
                                <div className="flex items-center gap-6 text-[10px] text-matcha uppercase tracking-[0.3em] font-bold">
                                    <span className="flex items-center gap-2">
                                        <Calendar size={14} strokeWidth={1.5} />
                                        {article.date}
                                    </span>
                                    <span className="w-1 h-1 bg-white/20 rounded-full" />
                                    <span className="flex items-center gap-2">
                                        <User size={14} strokeWidth={1.5} />
                                        By {article.author}
                                    </span>
                                </div>

                                <h2 className={`${isLarge ? 'text-4xl md:text-5xl' : 'text-3xl'} font-serif text-white group-hover:text-matcha transition-colors duration-500 leading-tight tracking-tight`}>
                                    {article.title}
                                </h2>

                                <p className="text-gray-400 text-lg leading-relaxed font-light line-clamp-3">
                                    {article.excerpt}
                                </p>

                                <Link href="#" className="inline-flex items-center gap-2 text-matcha text-sm uppercase tracking-widest font-bold group/link">
                                    Explore Story
                                    <div className="w-8 h-px bg-matcha/30 group-hover/link:w-12 transition-all duration-500" />
                                </Link>
                            </div>
                        </motion.article>
                    );
                })}
            </div>
        </main>
    );
}
