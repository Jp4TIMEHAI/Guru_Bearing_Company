"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
    role: "user" | "bot";
    content: string;
};

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { role: "bot", content: "Hi! I'm the Guru Bearing AI Assistant. How can I help you find the right industrial bearings today?" }
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isLoading]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;

        const userMessage = input.trim();
        setInput("");
        setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
        setIsLoading(true);

        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, { role: "user", content: userMessage }]
                }),
            });

            if (!res.ok) throw new Error("API response error");

            const data = await res.json();
            setMessages((prev) => [...prev, { role: "bot", content: data.reply }]);
        } catch (error) {
            console.error(error);
            setMessages((prev) => [
                ...prev,
                { role: "bot", content: "I'm having trouble connecting right now. Please try again or contact us directly at sales@gurubearing.example." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.9, rotateX: 15 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                        exit={{ opacity: 0, y: 20, scale: 0.9, filter: "blur(5px)" }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        style={{ perspective: 1000 }}
                        className="bg-white dark:bg-[#152033] w-full sm:w-[400px] h-[550px] rounded-3xl shadow-2xl overflow-hidden mb-6 border border-gray-100 dark:border-gray-800 flex flex-col origin-bottom-right drop-shadow-2xl"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-primary to-primary-dark px-6 py-5 flex justify-between items-center shadow-md relative z-10">
                            <div className="flex items-center gap-3 text-white">
                                <div className="bg-white/20 p-2 rounded-xl backdrop-blur-sm">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-base tracking-wide">Guru Bearing Support</h3>
                                    <p className="text-xs text-white/70 font-medium">Online & ready to help</p>
                                </div>
                            </div>
                            <motion.button
                                whileHover={{ rotate: 90, scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => setIsOpen(false)}
                                className="text-white/80 hover:text-white transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm"
                            >
                                <X className="w-5 h-5" />
                            </motion.button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-5 bg-[#fafcfd] dark:bg-[#0b1120] space-y-5 scroll-smooth relative">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

                            {messages.map((msg, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                    key={index}
                                    className={`flex items-end gap-3 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"} relative z-10`}
                                >
                                    <div className={`flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center shadow-lg ${msg.role === "user" ? "bg-gradient-to-br from-accent to-accent-dark text-white" : "bg-gradient-to-br from-primary to-primary-dark text-white"}`}>
                                        {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-5 h-5" />}
                                    </div>
                                    <div
                                        className={`max-w-[78%] px-5 py-3.5 text-[0.92rem] leading-relaxed shadow-sm tracking-wide ${msg.role === "user"
                                            ? "bg-gradient-to-br from-accent to-accent-dark text-white rounded-2xl rounded-br-sm font-medium"
                                            : "bg-white dark:bg-[#1a263d] text-gray-800 dark:text-gray-100 border border-gray-100 dark:border-gray-800/50 rounded-2xl rounded-bl-sm"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9, transformOrigin: 'left' }}
                                    className="flex items-end gap-3 relative z-10"
                                >
                                    <div className="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg">
                                        <Bot className="w-5 h-5" />
                                    </div>
                                    <div className="bg-white dark:bg-[#1a263d] border border-gray-100 dark:border-gray-800/50 px-5 py-4 rounded-2xl rounded-bl-sm shadow-sm flex items-center gap-2">
                                        <motion.span animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0 }} className="w-2 h-2 bg-primary/40 rounded-full"></motion.span>
                                        <motion.span animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.15 }} className="w-2 h-2 bg-primary/60 rounded-full"></motion.span>
                                        <motion.span animate={{ y: [0, -6, 0] }} transition={{ repeat: Infinity, duration: 0.6, delay: 0.3 }} className="w-2 h-2 bg-primary/80 rounded-full"></motion.span>
                                    </div>
                                </motion.div>
                            )}
                            <div ref={messagesEndRef} className="h-1" />
                        </div>

                        {/* Input Form */}
                        <div className="p-4 bg-white dark:bg-[#152033] border-t border-gray-100 dark:border-gray-800 rounded-b-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.02)]">
                            <form onSubmit={handleSubmit} className="flex gap-3 relative">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Ask about our bearings..."
                                    disabled={isLoading}
                                    className="flex-1 px-5 py-3.5 bg-gray-50 dark:bg-[#0b1120] text-gray-900 dark:text-white border-2 border-transparent border-gray-100 dark:border-gray-800/50 rounded-2xl focus:border-accent focus:ring-0 focus:outline-none transition-all placeholder:text-gray-400 font-medium text-sm disabled:opacity-50"
                                />
                                <motion.button
                                    whileHover={input.trim() ? { scale: 1.05 } : {}}
                                    whileTap={input.trim() ? { scale: 0.95 } : {}}
                                    type="submit"
                                    disabled={isLoading || !input.trim()}
                                    className="bg-accent hover:bg-accent-dark text-white p-3.5 rounded-2xl shadow-md shadow-accent/20 transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center flex-shrink-0 group"
                                >
                                    <Send className={`w-5 h-5 ml-0.5 ${input.trim() ? 'group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' : ''}`} />
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative w-16 h-16 bg-gradient-to-br from-accent to-accent-dark text-white rounded-full shadow-[0_8px_30px_rgba(6,182,212,0.35)] flex items-center justify-center group overflow-hidden"
            >
                <motion.div
                    animate={isOpen ? { rotate: -180, scale: 0 } : { rotate: 0, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="absolute"
                >
                    <MessageCircle className="w-8 h-8" />
                </motion.div>

                <motion.div
                    animate={isOpen ? { rotate: 0, scale: 1 } : { rotate: 180, scale: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute"
                >
                    <X className="w-8 h-8" />
                </motion.div>
            </motion.button>

        </div>
    );
}
