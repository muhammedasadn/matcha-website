'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
    {
        name: "Ceremonial Blend",
        price: "$45",
        image: "/assets/ceremonial-matcha-tin.png",
        category: "Premium Grade",
        desc: "Hand-picked from the first harvest in Uji, Kyoto. Vibrant green with a silky finish."
    },
    {
        name: "Culinary Grade",
        price: "$32",
        image: "/assets/culinary-matcha-bag.png",
        category: "Kitchen Classic",
        desc: "Robust flavor profile perfect for lattes, smoothies, and fine baking."
    },
    {
        name: "Zen Accessories",
        price: "$25",
        image: "/assets/matcha-whisk.png",
        category: "Handcrafted",
        desc: "Traditional bamboo tools designed for the perfect creamy foam."
    },
];

export default function ProductShowcase() {
    return (
        <section className="relative min-h-screen bg-[#050505] py-40 px-6 md:px-24 overflow-hidden">
            {/* Immersive Background Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none overflow-hidden w-full">
                <motion.h2
                    initial={{ x: "0%" }}
                    animate={{ x: "-50%" }}
                    transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                    className="text-[25vw] font-serif font-black text-white/[0.02] whitespace-nowrap leading-none uppercase"
                >
                    COLLECTION COLLECTION COLLECTION COLLECTION COLLECTION
                </motion.h2>
            </div>

            {/* Background Spotlight */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-matcha/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto relative z-10">
                <div className="flex flex-col items-center mb-32">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-matcha text-xs tracking-[0.4em] uppercase font-bold mb-4"
                    >
                        The Ritual Essentials
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif text-white tracking-tighter"
                    >
                        Our <span className="text-matcha italic">Collection</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {products.map((product, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.8 }}
                            className="group relative"
                        >
                            {/* Card Background */}
                            <div className="absolute inset-0 bg-white/[0.03] border border-white/10 rounded-[48px] backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-matcha/30 group-hover:-translate-y-2 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)]" />

                            <div className="relative p-10 flex flex-col items-center">
                                {/* Product Category Tag */}
                                <div className="absolute top-12 right-10 text-[10px] tracking-widest uppercase text-white/30 border-b border-white/10 pb-1">
                                    {product.category}
                                </div>

                                {/* Image Container with Floating Animation */}
                                <div className="relative w-64 h-64 mb-12">
                                    {/* Product Glow */}
                                    <div className="absolute inset-0 bg-matcha/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                    <motion.div
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative w-full h-full"
                                    >
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] group-hover:drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)] transition-all duration-500"
                                        />
                                    </motion.div>
                                </div>

                                <div className="text-center w-full space-y-6">
                                    <div>
                                        <h3 className="text-3xl font-serif text-white mb-2 tracking-tight group-hover:text-matcha transition-colors duration-300">
                                            {product.name}
                                        </h3>
                                        <div className="text-matcha/80 font-mono text-xl">
                                            {product.price}
                                        </div>
                                    </div>

                                    <p className="text-white/40 text-sm leading-relaxed px-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-500">
                                        {product.desc}
                                    </p>

                                    <button className="relative overflow-hidden group/btn px-10 py-4 rounded-full border border-white/10 text-white text-xs tracking-[0.2em] uppercase transition-all duration-300 hover:border-matcha mt-4">
                                        <span className="relative z-10 group-hover/btn:text-black transition-colors duration-300">View Ritual</span>
                                        <div className="absolute inset-0 bg-matcha -translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-matcha/20 to-transparent" />
        </section>
    );
}
