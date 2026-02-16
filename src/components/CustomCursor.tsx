'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            // Check if hovering over clickable elements
            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, input, textarea, .clickable');
            setHovering(!!isClickable);
        };

        window.addEventListener('mousemove', updateMousePosition);
        return () => window.removeEventListener('mousemove', updateMousePosition);
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border-2 border-matcha rounded-full pointer-events-none z-50 mix-blend-difference"
            animate={{
                x: mousePosition.x - 16,
                y: mousePosition.y - 16,
                scale: hovering ? 1.5 : 1,
                backgroundColor: hovering ? 'rgba(157, 193, 131, 0.2)' : 'transparent',
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        />
    );
}
