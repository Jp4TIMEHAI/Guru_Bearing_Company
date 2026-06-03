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

    useEffect(() => {
        // Only show on desktop
        if (window.matchMedia("(max-width: 768px)").matches) return;

        setIsVisible(true);

        const manageMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener("mousemove", manageMouseMove);

        return () => {
            window.removeEventListener("mousemove", manageMouseMove);
        };
    }, []);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-[600px] h-[600px] pointer-events-none z-40 hidden md:block mix-blend-screen"
            style={{
                background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(6,182,212,0) 60%)",
                x: smoothMouseX,
                y: smoothMouseY,
                translateX: "-50%",
                translateY: "-50%",
            }}
        />
    );
}
