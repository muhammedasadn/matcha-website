'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';
import { ShoppingBag, Star, Filter } from 'lucide-react';

const products = [
    { id: 1, name: "Ceremonial Blend", price: 45, category: "Matcha", image: "/assets/ceremonial-matcha-tin.png", rating: 5, reviews: 128 },
    { id: 2, name: "Culinary Grade", price: 32, category: "Matcha", image: "/assets/culinary-matcha-bag.png", rating: 4.8, reviews: 85 },
    { id: 3, name: "Master's Reserve", price: 65, category: "Matcha", image: "/assets/ceremonial-matcha-tin.png", rating: 5, reviews: 42 },
    { id: 4, name: "Bamboo Whisk", price: 25, category: "Accessories", image: "/assets/matcha-whisk.png", rating: 4.9, reviews: 210 },
    { id: 5, name: "Chawan Bowl", price: 38, category: "Accessories", image: "/assets/ceremonial-matcha-tin.png", rating: 4.7, reviews: 56 }, // Placeholder
    { id: 6, name: "Starter Set", price: 85, category: "Sets", image: "/assets/ceremonial-matcha-tin.png", rating: 5, reviews: 315 }, // Placeholder
];

const categories = ["All", "Matcha", "Accessories", "Sets"];

export default function ShopPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = selectedCategory === "All"
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <main className="min-h-screen bg-background pt-32 pb-20 px-6 md:px-12">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl md:text-8xl font-serif text-white mb-6">The Collection</h1>
                <p className="text-gray-400 max-w-xl mx-auto text-lg font-light">
                    Curated essentials for your daily ritual. Sourced from the finest cultivars in Uji, Japan.
                </p>
            </motion.div>

            {/* Featured Product of the Moment */}
            <motion.section
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative mb-32 h-[500px] md:h-[600px] glass-morphism rounded-[40px] overflow-hidden flex items-center"
            >
                <div className="absolute top-0 right-0 w-1/2 h-full bg-matcha/5 blur-[120px] rounded-full pointer-events-none" />

                <div className="flex flex-col md:flex-row items-center w-full px-8 md:px-20 gap-12">
                    <div className="flex-1 space-y-8 text-center md:text-left">
                        <span className="text-matcha text-[10px] uppercase tracking-[0.5em] font-bold block">Product of the Moment</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-white leading-tight">Master's Reserve<br /><span className="text-matcha">Limited Autumn.</span></h2>
                        <p className="text-gray-400 text-lg md:text-xl font-light max-w-lg">
                            An ultra-exclusive blend harvested from the oldest bushes in our Uji estate. Experience the pinnacle of umami.
                        </p>
                        <button className="px-10 py-5 bg-matcha text-black font-bold uppercase tracking-widest text-sm rounded-2xl hover:bg-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(157,193,131,0.3)]">
                            Secure Allocation — $85
                        </button>
                    </div>

                    <div className="flex-1 relative h-64 md:h-[450px] w-full">
                        <Image
                            src="/assets/ceremonial-matcha-tin.png"
                            alt="Master's Reserve"
                            fill
                            className="object-contain transform -rotate-12 group-hover:rotate-0 transition-transform duration-1000"
                        />
                    </div>
                </div>
            </motion.section>

            {/* Filter */}
            <div className="flex justify-center gap-8 mb-20 overflow-x-auto pb-4">
                {categories.map((cat, i) => (
                    <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`text-sm tracking-[0.2em] uppercase transition-all duration-300 relative px-4 py-2 ${selectedCategory === cat ? 'text-matcha' : 'text-gray-500 hover:text-white'}`}
                    >
                        {cat}
                        {selectedCategory === cat && (
                            <motion.div layoutId="underline" className="absolute bottom-0 left-0 right-0 h-px bg-matcha" />
                        )}
                    </button>
                ))}
            </div>

            {/* Product Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
            >
                {filteredProducts.map((product, index) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.1,
                            ease: [0.16, 1, 0.3, 1]
                        }}
                        key={product.id}
                        className="group relative perspective-1000"
                    >
                        {/* Image Container with 3D Hover effect */}
                        <div className="relative aspect-[4/5] glass-morphism rounded-3xl overflow-hidden mb-8 transition-all duration-700 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] group-hover:border-matcha/30 preserve-3d">
                            {/* Decorative background glow */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-matcha/5 blur-[100px] rounded-full group-hover:bg-matcha/20 transition-colors duration-700" />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-contain p-12 transform transition-all duration-700 group-hover:scale-110 group-hover:-translate-y-4"
                            />

                            {/* Floating "In Stock" indicator */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="flex items-center gap-2 px-3 py-1 glass rounded-full text-[10px] font-bold uppercase tracking-widest text-matcha">
                                    <span className="w-1.5 h-1.5 bg-matcha rounded-full animate-pulse" />
                                    Hand Harvested
                                </span>
                            </div>

                            {/* Quick Add Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20">
                                <button className="w-full glass bg-white/10 hover:bg-white text-white hover:text-black py-5 rounded-2xl font-sans text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-3">
                                    <ShoppingBag size={14} />
                                    Add to Collection — ${product.price}
                                </button>
                            </div>
                        </div>

                        {/* Details */}
                        <div className="flex flex-col gap-3 px-2">
                            <div className="flex justify-between items-start">
                                <h3 className="text-3xl font-serif text-white group-hover:text-matcha transition-colors duration-300">{product.name}</h3>
                                <span className="text-xl font-mono text-matcha/80">${product.price}</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3 text-xs">
                                    <div className="flex gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={10} fill={i < Math.floor(product.rating) ? "var(--color-matcha)" : "none"} className={i < Math.floor(product.rating) ? "text-matcha" : "text-white/10"} />
                                        ))}
                                    </div>
                                    <span className="text-white/30 tracking-tight">{product.reviews} appraisals</span>
                                </div>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">{product.category}</span>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </main>
    );
}
