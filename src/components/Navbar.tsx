'use client';
import { motion } from 'framer-motion';
import { ShoppingBag, Menu, Search } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-difference text-white pointer-events-auto"
        >
            <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                <div className="w-3 h-3 bg-matcha rounded-full group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_var(--matcha-green)]" />
                <span className="text-xl md:text-2xl font-serif font-bold tracking-tighter">MATCHA.</span>
            </Link>

            <div className="hidden md:flex gap-10 font-sans text-xs tracking-[0.2em] uppercase font-medium">
                {['Shop', 'Process', 'Our Story', 'Journal'].map((item) => (
                    <Link key={item} href={item === 'Journal' ? '/journal' : item === 'Process' ? '/process' : item === 'Shop' ? '/shop' : item === 'Our Story' ? '/story' : '#'} className="relative group overflow-hidden">
                        <span className="block group-hover:-translate-y-full transition-transform duration-300">{item}</span>
                        <span className="absolute top-0 left-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-matcha">{item}</span>
                    </Link>
                ))}
            </div>

            <div className="flex gap-6 items-center">
                <div className="hidden md:block hover:text-matcha transition-colors cursor-pointer"><Search size={20} strokeWidth={1.5} /></div>
                <div className="relative hover:text-matcha transition-colors cursor-pointer">
                    <ShoppingBag size={20} strokeWidth={1.5} />
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-matcha rounded-full" />
                </div>
                <div className="md:hidden hover:text-matcha transition-colors cursor-pointer"><Menu size={24} strokeWidth={1.5} /></div>
            </div>
        </motion.nav>
    );
}
