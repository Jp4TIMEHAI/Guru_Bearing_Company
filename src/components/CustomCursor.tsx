"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothOptions = { damping: 50, stiffness: 200, mass: 0.5 };
    const smoothMouseX = useSpring(mouseX, smoothOptions);
    const smoothMouseY = useSpring(mouseY, smoothOptions);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        if (window.matchMedia("(max-width: 768px)").matches) return;

        setIsVisible(true);

        const manageMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            const target = e.target as HTMLElement;
            if (target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[150] hidden md:block mix-blend-difference"
            animate={{
                width: isHovering ? 64 : 16,
                height: isHovering ? 64 : 16,
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
                x: smoothMouseX,
                y: smoothMouseY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        />
    );
}
