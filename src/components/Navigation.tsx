"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Settings } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticHover from "./MagneticHover";

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const links = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/about", label: "About" },
        { href: "/quote", label: "Request Quote" },
        { href: "/contact", label: "Contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-primary/95 backdrop-blur-md border-b border-white/10 shadow-md py-2"
                : "bg-primary/90 backdrop-blur-sm shadow-none py-4 border-b border-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center transition-all duration-300">
                    <div className="flex-shrink-0 flex items-center gap-3">
                        <MagneticHover strength={0.1}>
                            <Link href="/" className="flex items-center gap-3 group">
                                <motion.div
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-10 h-10 bg-accent rounded-sm flex items-center justify-center"
                                >
                                    <Settings className="text-white w-6 h-6" />
                                </motion.div>
                                <span className="font-bold text-xl tracking-tight text-white group-hover:text-accent transition-colors duration-300">
                                    GURU BEARING
                                </span>
                            </Link>
                        </MagneticHover>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex flex-grow justify-center space-x-8">
                        {links.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                            <MagneticHover key={link.href} strength={0.1}>
                                <Link
                                    href={link.href}
                                    className={`relative text-sm font-semibold transition-colors group py-2 px-1 ${isActive ? "text-accent" : "text-gray-300 hover:text-white"
                                        }`}
                                >
                                    {link.label}
                                    {isActive && (
                                        <motion.span
                                            layoutId="nav-underline"
                                            className="absolute left-0 bottom-0 w-full h-[3px] bg-accent rounded-full"
                                        />
                                    )}
                                    {!isActive && (
                                        <span className="absolute left-0 bottom-0 w-full h-[3px] bg-accent rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
                                    )}
                                </Link>
                            </MagneticHover>
                            );
                        })}
                    </div>

                    <div className="hidden md:flex items-center">
                        <MagneticHover strength={0.2}>
                            <Link href="/quote">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="btn-sweep bg-transparent text-white px-6 py-2.5 rounded-sm font-bold uppercase tracking-widest transition-all text-xs"
                                >
                                    Get a Quote
                                </motion.button>
                            </Link>
                        </MagneticHover>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex md:hidden items-center">
                        <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-accent hover:bg-white/10 transition-colors focus:outline-none"
                        >
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden overflow-hidden bg-primary border-b border-white/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2 mt-4">
                            {links.map((link, i) => {
                                const isActive = pathname === link.href;
                                return (
                                    <motion.div
                                        key={link.href}
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 rounded-lg text-base font-semibold transition-all ${isActive
                                                ? "bg-accent/10 text-accent"
                                                : "text-gray-300 hover:bg-white/5"
                                                }`}
                                        >
                                            {link.label}
                                        </Link>
                                    </motion.div>
                                );
                            })}
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: links.length * 0.1 }}
                            >
                                <Link
                                    href="/quote"
                                    onClick={() => setIsOpen(false)}
                                    className="mt-6 block w-full text-center btn-sweep bg-transparent text-white px-4 py-4 rounded-sm font-bold uppercase tracking-widest transition-colors text-sm"
                                >
                                    Get a Quote
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
