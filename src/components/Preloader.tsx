"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings } from "lucide-react";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Wait for a minimum of 1.5s to show the animation
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{ 
                        y: "-100%", 
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
                    }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="flex flex-col items-center"
                    >
                        {/* Spinning Gear / Bearing */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            className="text-accent mb-6"
                        >
                            <Settings className="w-16 h-16" strokeWidth={1.5} />
                        </motion.div>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                                className="text-white font-black tracking-tighter text-2xl md:text-4xl uppercase mb-2"
                            >
                                Guru Bearing Co.
                            </motion.h1>
                        </div>
                        
                        <div className="overflow-hidden">
                            <motion.p
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                className="text-neutral-500 font-bold tracking-widest text-xs uppercase"
                            >
                                Initializing Systems...
                            </motion.p>
                        </div>
                        
                        {/* Loading Bar */}
                        <motion.div 
                            className="w-48 h-1 bg-neutral-900 mt-8 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <motion.div 
                                className="h-full bg-accent"
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
