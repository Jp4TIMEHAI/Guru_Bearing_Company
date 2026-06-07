"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealImageProps {
    src: string;
    alt: string;
    className?: string;
    containerClassName?: string;
}

export default function ScrollRevealImage({ src, alt, className = "", containerClassName = "" }: ScrollRevealImageProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Image scales down from 1.3 to 1.0 as it enters and scrolls through the viewport
    const scale = useTransform(scrollYProgress, [0, 0.5], [1.3, 1]);

    return (
        <div ref={ref} className={`overflow-hidden ${containerClassName}`}>
            <motion.img
                src={src}
                alt={alt}
                className={`w-full h-full object-cover ${className}`}
                style={{ scale }}
            />
        </div>
    );
}
