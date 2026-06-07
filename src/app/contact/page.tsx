"use client";

import { MapPin, Phone, Mail, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function ContactPage() {
    const [status, setStatus] = useState("idle");
    const [focused, setFocused] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const fname = (form.elements.namedItem('fname') as HTMLInputElement).value;
        const lname = (form.elements.namedItem('lname') as HTMLInputElement).value;
        const email = (form.elements.namedItem('email') as HTMLInputElement).value;
        const tel = (form.elements.namedItem('tel') as HTMLInputElement).value;
        const msg = (form.elements.namedItem('msg') as HTMLTextAreaElement).value;

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ fname, lname, email, phone: tel, msg })
            });

            if (res.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("idle");
                alert("Something went wrong. Please try again.");
            }
        } catch {
            setStatus("idle");
            alert("Something went wrong. Please try again.");
        }
    };

    const inputClasses = "w-full px-5 py-4 rounded-sm border bg-transparent text-neutral-900 dark:text-white outline-none transition-all duration-300 font-medium z-10 relative peer";

    return (
        <div className="bg-white dark:bg-neutral-950 min-h-screen pt-32 pb-32 relative overflow-hidden border-b border-neutral-200 dark:border-neutral-900">
            {/* Technical background lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 1) 1px, transparent 1px)", backgroundSize: "128px 128px" }} />
            <div className="dark:hidden absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)", backgroundSize: "128px 128px" }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <AnimatedSection direction="down" className="text-center mb-20 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-black text-neutral-900 dark:text-white mb-6 tracking-tighter uppercase">Contact Us</h1>
                    <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400 font-medium leading-relaxed">
                        Our engineering team is ready to assist you with sales inquiries, technical support, and partnership opportunities.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Contact Details & Map */}
                    <div className="space-y-12">
                        <AnimatedSection direction="left">
                            <div className="bg-neutral-50 dark:bg-neutral-900 rounded-sm p-10 border border-neutral-200 dark:border-neutral-800">
                                <h2 className="text-3xl font-black text-neutral-900 dark:text-white mb-10 tracking-tighter uppercase">Corporate Headquarters</h2>

                                <StaggerContainer className="space-y-10" staggerChildren={0.1}>
                                    <StaggerItem direction="up">
                                        <div className="flex items-start group">
                                            <div className="bg-white dark:bg-neutral-950 p-4 border border-neutral-200 dark:border-neutral-800 rounded-sm mr-6 group-hover:border-accent transition-all duration-300">
                                                <MapPin className="text-accent w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-neutral-900 dark:text-white mb-2 text-lg uppercase tracking-wide">Address</h3>
                                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                                    No. 2800 C, Ashok Gali<br />Mori Gate, New Delhi-110006<br />Delhi, India
                                                </p>
                                            </div>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem direction="up">
                                        <div className="flex items-start group">
                                            <div className="bg-white dark:bg-neutral-950 p-4 border border-neutral-200 dark:border-neutral-800 rounded-sm mr-6 group-hover:border-accent transition-all duration-300">
                                                <Phone className="text-accent w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-neutral-900 dark:text-white mb-2 text-lg uppercase tracking-wide">Phone</h3>
                                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                                    <span className="text-neutral-900 dark:text-neutral-300 font-semibold">Manpreet Singh</span><br />
                                                    +91 98183 94355, +91 92123 10957<br />
                                                    Mon-Sat, 10 AM - 7 PM
                                                </p>
                                            </div>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem direction="up">
                                        <div className="flex items-start group">
                                            <div className="bg-white dark:bg-neutral-950 p-4 border border-neutral-200 dark:border-neutral-800 rounded-sm mr-6 group-hover:border-accent transition-all duration-300">
                                                <Mail className="text-accent w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-neutral-900 dark:text-white mb-2 text-lg uppercase tracking-wide">Email</h3>
                                                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium">
                                                    <a href="mailto:gurubearingcompany@gmail.com" className="hover:text-accent transition-colors">gurubearingcompany@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                </StaggerContainer>
                            </div>
                        </AnimatedSection>

                        {/* Contact Map */}
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="bg-neutral-200 dark:bg-neutral-900 rounded-sm overflow-hidden relative h-[350px] border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
                                <iframe 
                                    src="https://maps.google.com/maps?q=No.%202800%20C,%20Ashok%20Gali,%20Mori%20Gate,%20New%20Delhi-110006,%20Delhi,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                    className="w-full h-full grayscale-[100%] contrast-[1.2] dark:invert dark:grayscale-[100%] dark:opacity-70 transition-all duration-700" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map Location"
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none border border-black/5 dark:border-white/5 rounded-sm"></div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Contact Form */}
                    <AnimatedSection direction="right" delay={0.1}>
                        <div className="bg-white dark:bg-neutral-950 rounded-sm p-10 md:p-14 border border-neutral-200 dark:border-neutral-800 h-full relative">

                            <h2 className="text-3xl font-black text-neutral-900 dark:text-white mb-2 tracking-tighter uppercase">Send a Message</h2>
                            <p className="text-neutral-500 mb-10 font-medium">We usually respond within 24 hours.</p>

                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                        <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="p-10 bg-green-50 dark:bg-green-900/10 rounded-sm text-center border border-green-200 dark:border-green-800/30 mt-8"
                                    >
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/40 rounded-sm flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4 uppercase tracking-wide">Message Sent!</h3>
                                        <p className="text-green-700 dark:text-green-400/80 font-medium mb-8 text-sm">Thank you for reaching out. A representative will get back to you shortly.</p>
                                        <button onClick={() => setStatus("idle")} className="text-green-800 dark:text-green-300 font-bold hover:underline transition-colors uppercase tracking-widest text-xs flex items-center justify-center mx-auto group">
                                            Send another message
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-8"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            {/* First Name */}
                                            <div className="relative group">
                                                <input required type="text" id="fname"
                                                    onFocus={() => setFocused("fname")} onBlur={(e) => !e.target.value && setFocused(null)}
                                                    className={`${inputClasses} ${focused === "fname" ? 'border-accent' : 'border-gray-200 dark:border-gray-800'}`}
                                                />
                                                <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-semibold ${focused === "fname" ? '-top-3 text-xs text-accent bg-white dark:bg-[#152033] px-2 z-20' : 'top-4 text-gray-400 z-0'}`}>
                                                    First Name
                                                </label>
                                            </div>
                                            {/* Last Name */}
                                            <div className="relative group">
                                                <input required type="text" id="lname"
                                                    onFocus={() => setFocused("lname")} onBlur={(e) => !e.target.value && setFocused(null)}
                                                    className={`${inputClasses} ${focused === "lname" ? 'border-accent' : 'border-gray-200 dark:border-gray-800'}`}
                                                />
                                                <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-semibold ${focused === "lname" ? '-top-3 text-xs text-accent bg-white dark:bg-[#152033] px-2 z-20' : 'top-4 text-gray-400 z-0'}`}>
                                                    Last Name
                                                </label>
                                            </div>
                                        </div>

                                        <div className="relative group">
                                            <input required type="email" id="email"
                                                onFocus={() => setFocused("email")} onBlur={(e) => !e.target.value && setFocused(null)}
                                                className={`${inputClasses} ${focused === "email" ? 'border-accent' : 'border-gray-200 dark:border-gray-800'}`}
                                            />
                                            <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-semibold ${focused === "email" ? '-top-3 text-xs text-accent bg-white dark:bg-[#152033] px-2 z-20' : 'top-4 text-gray-400 z-0'}`}>
                                                Email Address
                                            </label>
                                        </div>

                                        <div className="relative group">
                                            <input type="tel" id="tel"
                                                onFocus={() => setFocused("tel")} onBlur={(e) => !e.target.value && setFocused(null)}
                                                className={`${inputClasses} ${focused === "tel" ? 'border-accent' : 'border-gray-200 dark:border-gray-800'}`}
                                            />
                                            <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-semibold ${focused === "tel" ? '-top-3 text-xs text-accent bg-white dark:bg-[#152033] px-2 z-20' : 'top-4 text-gray-400 z-0'}`}>
                                                Phone Number (Optional)
                                            </label>
                                        </div>

                                        <div className="relative group">
                                            <textarea required rows={4} id="msg"
                                                onFocus={() => setFocused("msg")} onBlur={(e) => !e.target.value && setFocused(null)}
                                                className={`${inputClasses} ${focused === "msg" ? 'border-accent' : 'border-gray-200 dark:border-gray-800'} resize-none leading-relaxed`}
                                            ></textarea>
                                            <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-semibold ${focused === "msg" ? '-top-3 text-xs text-accent bg-white dark:bg-[#152033] px-2 z-20' : 'top-4 text-gray-400 z-0'}`}>
                                                How can we help you?
                                            </label>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            disabled={status === "submitting"}
                                            type="submit"
                                            className="w-full btn-sweep bg-transparent text-white font-bold text-sm py-5 rounded-sm transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest"
                                        >
                                            {status === "submitting" ? (
                                                <span className="animate-pulse relative z-10 flex items-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : (
                                                <div className="relative z-10 flex items-center justify-center">
                                                    Send Message <Send className="ml-3 w-4 h-4" />
                                                </div>
                                            )}
                                        </motion.button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </AnimatedSection>

                </div>
            </div>
        </div>
    );
}
