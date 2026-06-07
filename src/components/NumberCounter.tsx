"use client";

import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface NumberCounterProps {
    end: number;
    duration?: number;
    suffix?: string;
    prefix?: string;
}

export default function NumberCounter({ end, duration = 2000, suffix = "", prefix = "" }: NumberCounterProps) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            // Ease out expo
            const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            
            setCount(Math.floor(easeProgress * end));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration, isInView]);

    return (
        <span ref={ref}>
            {prefix}{count}{suffix}
        </span>
    );
}
