"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, filter: "blur(5px)" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="w-full flex-grow flex flex-col"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
