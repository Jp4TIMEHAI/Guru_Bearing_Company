"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useVelocity, useAnimationFrame, useMotionValue } from "framer-motion";
import { wrap } from "@motionone/utils";

interface InfiniteMarqueeProps {
    text: string;
    baseVelocity?: number;
    className?: string;
}

export default function InfiniteMarquee({ text, baseVelocity = 2, className = "" }: InfiniteMarqueeProps) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();
        baseX.set(baseX.get() + moveBy);
    });

    // We repeat the text to make it infinite
    const renderText = () => {
        return (
            <div className="flex whitespace-nowrap">
                {[...Array(4)].map((_, i) => (
                    <span key={i} className={`block mr-8 ${className}`}>
                        {text}
                    </span>
                ))}
            </div>
        );
    };

    return (
        <div className="overflow-hidden whitespace-nowrap flex m-0 relative">
            <motion.div className="flex whitespace-nowrap" style={{ x }}>
                {renderText()}
            </motion.div>
        </div>
    );
}
