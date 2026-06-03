"use client";

import { useRef, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface TiltCardProps {
    children: React.ReactNode;
    className?: string;
    intensity?: number;
}

export default function TiltCard({ children, className = "", intensity = 15 }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const [isHovered, setIsHovered] = useState(false);

    // Track mouse position relative to the center of the card
    const x = useSpring(0, { stiffness: 300, damping: 30 });
    const y = useSpring(0, { stiffness: 300, damping: 30 });

    // Rotate based on mouse position. Max rotation is defined by intensity.
    const rotateX = useTransform(y, [-1, 1], [intensity, -intensity]);
    const rotateY = useTransform(x, [-1, 1], [-intensity, intensity]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        // Calculate mouse position relative to card center (-1 to 1)
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const percentX = (mouseX - centerX) / centerX;
        const percentY = (mouseY - centerY) / centerY;

        x.set(percentX);
        y.set(percentY);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // Reset to default
        x.set(0);
        y.set(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
            style={{
                perspective: 1000,
                transformStyle: "preserve-3d",
            }}
            className={className}
        >
            <motion.div
                style={{
                    rotateX: isHovered ? rotateX : 0,
                    rotateY: isHovered ? rotateY : 0,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="w-full h-full"
            >
                {children}
            </motion.div>
        </motion.div>
    );
}
