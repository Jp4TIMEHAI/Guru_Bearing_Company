"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    duration?: number;
    once?: boolean;
}

export function AnimatedSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.5,
    once = true,
}: AnimatedSectionProps) {
    const getVariants = () => {
        switch (direction) {
            case "up":
                return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
            case "down":
                return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
            case "left":
                return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
            case "right":
                return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
            default:
                return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
        }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-100px" }}
            transition={{ duration, delay, ease: "easeOut" }}
            variants={getVariants()}
        >
            {children}
        </motion.div>
    );
}

export function StaggerContainer({
    children,
    className = "",
    delayChildren = 0.2,
    staggerChildren = 0.1,
    once = true,
}: {
    children: ReactNode;
    className?: string;
    delayChildren?: number;
    staggerChildren?: number;
    once?: boolean;
}) {
    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, margin: "-100px" }}
            variants={{
                hidden: {},
                visible: {
                    transition: {
                        staggerChildren,
                        delayChildren,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
}

export function StaggerItem({
    children,
    className = "",
    direction = "up",
}: {
    children: ReactNode;
    className?: string;
    direction?: "up" | "down" | "left" | "right" | "none";
}) {
    const getVariants = () => {
        switch (direction) {
            case "up":
                return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
            case "down":
                return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
            case "left":
                return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
            case "right":
                return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
            default:
                return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
        }
    };

    return (
        <motion.div className={className} variants={getVariants()} transition={{ duration: 0.5, ease: "easeOut" }}>
            {children}
        </motion.div>
    );
}
