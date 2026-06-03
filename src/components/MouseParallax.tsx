"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface MouseParallaxProps {
    children: React.ReactNode;
    factor?: number; // How much it moves relative to mouse (e.g., 0.05 is subtle, 0.2 is very active)
    className?: string;
}

export default function MouseParallax({ children, factor = 0.05, className = "" }: MouseParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothOptions = { damping: 50, stiffness: 400 };
    const smoothX = useSpring(mouseX, smoothOptions);
    const smoothY = useSpring(mouseY, smoothOptions);

    const x = useTransform(smoothX, (latest) => latest * 100 * factor);
    const y = useTransform(smoothY, (latest) => latest * 100 * factor);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth - 0.5);
            mouseY.set(e.clientY / window.innerHeight - 0.5);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div ref={ref} className={className} style={{ x, y }}>
            {children}
        </motion.div>
    );
}
