"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function QuotePage() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        product: "",
        quantity: "",
        message: ""
    });

    const [status, setStatus] = useState("idle");
    const [focused, setFocused] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/quote", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus("success");
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="min-h-[80vh] flex items-center justify-center bg-white dark:bg-neutral-950 pt-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    className="text-center p-16 bg-white dark:bg-neutral-900 rounded-sm border border-neutral-200 dark:border-neutral-800 max-w-lg mx-4"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    >
                        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-8" />
                    </motion.div>
                    <h2 className="text-3xl font-black text-neutral-900 dark:text-white mb-4 tracking-tighter uppercase">Quote Requested</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-10 text-sm font-medium">
                        Thank you for your inquiry. Our engineering sales team will review your requirements and contact you within 24 hours.
                    </p>
                    <button onClick={() => setStatus("idle")} className="text-accent hover:text-accent-dark font-bold hover:underline transition-colors uppercase tracking-widest text-xs">
                        Submit another request
                    </button>
                </motion.div>
            </div>
        );
    }

    const inputClasses = "w-full px-5 py-4 rounded-sm border bg-transparent text-neutral-900 dark:text-white outline-none transition-all duration-300 font-medium z-10 relative peer";

    return (
        <div className="min-h-screen bg-white dark:bg-neutral-950 pt-32 pb-24 relative overflow-hidden">
            {/* Technical background lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px)", backgroundSize: "128px 128px" }} />
            <div className="dark:hidden absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)", backgroundSize: "128px 128px" }} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedSection direction="down" className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 tracking-tighter uppercase">Request a Quote</h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto font-medium leading-relaxed">
                        Specify your requirements for precision industrial bearings. Our engineering team is ready to assist.
                    </p>
                </AnimatedSection>

                <AnimatedSection direction="up" delay={0.2}>
                    <motion.form
                        layout
                        onSubmit={handleSubmit}
                        className="bg-white dark:bg-neutral-900 rounded-sm p-8 md:p-14 border border-neutral-200 dark:border-neutral-800"
                    >
                        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12 mb-12" staggerChildren={0.05}>

                            {/* Form Group Helper */}
                            {[
                                { id: "name", label: "Full Name", type: "text", pl: "John Doe" },
                                { id: "email", label: "Email Address", type: "email", pl: "john@company.com" },
                                { id: "phone", label: "Phone Number", type: "tel", pl: "+1 (555) 000-0000" },
                            ].map((field) => (
                                <StaggerItem key={field.id} direction="up" className="relative group">
                                    <div className="relative">
                                        <input
                                            required
                                            type={field.type}
                                            value={(formData as Record<string, string>)[field.id]}
                                            onChange={e => setFormData({ ...formData, [field.id]: e.target.value })}
                                            onFocus={() => setFocused(field.id)}
                                            onBlur={() => setFocused(null)}
                                            className={`${inputClasses} ${focused === field.id || (formData as Record<string, string>)[field.id] ? 'border-accent' : 'border-neutral-200 dark:border-neutral-800'} placeholder-transparent`}
                                            placeholder={field.pl}
                                            id={field.id}
                                        />
                                        <label htmlFor={field.id} className={`absolute left-5 transition-all duration-300 pointer-events-none font-semibold ${focused === field.id || (formData as Record<string, string>)[field.id]
                                            ? '-top-3 text-xs text-accent bg-white dark:bg-neutral-900 px-2 z-20'
                                            : 'top-4 text-neutral-500 z-0'
                                            }`}>
                                            {field.label}
                                        </label>
                                    </div>
                                </StaggerItem>
                            ))}

                            <StaggerItem direction="up" className="relative group">
                                <div className="relative">
                                    <select
                                        required
                                        value={formData.product}
                                        onChange={e => setFormData({ ...formData, product: e.target.value })}
                                        onFocus={() => setFocused("product")}
                                        onBlur={() => setFocused(null)}
                                        className={`${inputClasses} ${focused === "product" || formData.product ? 'border-accent' : 'border-neutral-200 dark:border-neutral-800'} appearance-none cursor-pointer`}
                                    >
                                        <option value="" disabled className="text-neutral-500">Select a category...</option>
                                        <option value="Precision Universal Joints">Precision Universal Joints</option>
                                        <option value="Tapper Bearings">Tapper Bearings</option>
                                        <option value="Pillow Block Bearings">Pillow Block Bearings</option>
                                        <option value="Industrial Roller Bearings">Industrial Roller Bearings</option>
                                        <option value="Ball Bearings">Ball Bearings</option>
                                        <option value="Custom/Other">Custom / Other</option>
                                    </select>
                                    <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-semibold -top-3 text-xs bg-white dark:bg-neutral-900 px-2 z-20 ${focused === "product" || formData.product ? "text-accent" : "text-neutral-500"}`}>
                                        Product Category
                                    </label>
                                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </div>
                                </div>
                            </StaggerItem>
                        </StaggerContainer>

                        <StaggerItem direction="up">
                            <div className="relative mb-12">
                                <input
                                    required
                                    type="number" min="1"
                                    value={formData.quantity}
                                    onChange={e => setFormData({ ...formData, quantity: e.target.value })}
                                    onFocus={() => setFocused("quantity")}
                                    onBlur={() => setFocused(null)}
                                    className={`${inputClasses} ${focused === "quantity" || formData.quantity ? 'border-accent' : 'border-neutral-200 dark:border-neutral-800'}`}
                                />
                                <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-semibold ${focused === "quantity" || formData.quantity
                                    ? '-top-3 text-xs text-accent bg-white dark:bg-neutral-900 px-2 z-20'
                                    : 'top-4 text-neutral-500 z-0'
                                    }`}>
                                    Quantity Required
                                </label>
                            </div>
                        </StaggerItem>

                        <StaggerItem direction="up">
                            <div className="relative mb-14">
                                <textarea
                                    required rows={4}
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                    onFocus={() => setFocused("message")}
                                    onBlur={() => setFocused(null)}
                                    className={`${inputClasses} ${focused === "message" || formData.message ? 'border-accent' : 'border-neutral-200 dark:border-neutral-800'} resize-none leading-relaxed`}
                                ></textarea>
                                <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-semibold ${focused === "message" || formData.message
                                    ? '-top-3 text-xs text-accent bg-white dark:bg-neutral-900 px-2 z-20'
                                    : 'top-4 text-neutral-500 z-0'
                                    }`}>
                                    Technical Requirements / Message
                                </label>
                            </div>
                        </StaggerItem>

                        <AnimatePresence>
                            {status === "error" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    className="mb-8 p-5 bg-red-50 dark:bg-red-900/10 text-red-600 dark:text-red-400 rounded-xl text-sm font-bold border border-red-100 dark:border-red-800"
                                >
                                    An error occurred while submitting your request. Please try again.
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <StaggerItem direction="up">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                disabled={status === "submitting"}
                                type="submit"
                                className="w-full bg-accent hover:bg-accent-dark text-white font-bold text-sm py-5 rounded-sm transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest"
                            >
                                {status === "submitting" ? (
                                    <span className="animate-pulse flex items-center justify-center relative z-10">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    <div className="flex items-center justify-center relative z-10">
                                        Request Official Quote
                                        <Send className="ml-3 w-4 h-4" />
                                    </div>
                                )}
                            </motion.button>
                        </StaggerItem>
                    </motion.form>
                </AnimatedSection>
            </div>
        </div>
    );
}
