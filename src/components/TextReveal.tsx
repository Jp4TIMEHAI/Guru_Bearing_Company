"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay * i },
        }),
    };

    const child = {
        hidden: {
            opacity: 0,
            y: "100%",
        },
        visible: {
            opacity: 1,
            y: "0%",
            transition: {
                type: "spring",
                damping: 20,
                stiffness: 100,
            },
        },
    };

    return (
        <motion.div
            style={{ display: "inline-flex", flexWrap: "wrap", overflow: "hidden" }}
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
            className={className}
        >
            {words.map((word, index) => (
                <div key={index} style={{ overflow: "hidden", display: "inline-flex", marginRight: "0.25em" }}>
                    <motion.span variants={child}>{word}</motion.span>
                </div>
            ))}
        </motion.div>
    );
}
