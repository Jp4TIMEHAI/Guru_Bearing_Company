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

    const inputClasses = "w-full px-5 py-4 rounded-xl border-2 bg-transparent text-gray-900 dark:text-white outline-none transition-all duration-300 font-medium z-10 relative peer";

    return (
        <div className="bg-gray-50 dark:bg-[#0b1120] min-h-screen pt-32 pb-32 relative overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                <AnimatedSection direction="down" className="text-center mb-20 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Contact Us</h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                        Our team is ready to assist you with sales inquiries, technical support, and partnership opportunities.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

                    {/* Contact Details & Map */}
                    <div className="space-y-12">
                        <AnimatedSection direction="left">
                            <div className="bg-white dark:bg-[#152033]/90 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-gray-800">
                                <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10 tracking-tight">Corporate Headquarters</h2>

                                <StaggerContainer className="space-y-10" staggerChildren={0.1}>
                                    <StaggerItem direction="up">
                                        <div className="flex items-start group">
                                            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl mr-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                                <MapPin className="text-primary dark:text-blue-400 w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Address</h3>
                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
                                                    No. 2800 C, Ashok Gali<br />Mori Gate, New Delhi-110006<br />Delhi, India
                                                </p>
                                            </div>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem direction="up">
                                        <div className="flex items-start group">
                                            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl mr-6 group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300">
                                                <Phone className="text-primary dark:text-blue-400 w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Phone</h3>
                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                                    <span className="text-gray-900 dark:text-gray-300 font-semibold">Manpreet Singh</span><br />
                                                    +91 98183 94355, +91 92123 10957<br />
                                                    Mon-Sat, 10 AM - 7 PM
                                                </p>
                                            </div>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem direction="up">
                                        <div className="flex items-start group">
                                            <div className="bg-primary/10 dark:bg-primary/20 p-4 rounded-2xl mr-6 group-hover:scale-110 transition-all duration-300">
                                                <Mail className="text-primary dark:text-blue-400 w-7 h-7" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">Email</h3>
                                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                                                    <a href="mailto:gurubearingcompany@gmail.com" className="hover:text-primary transition-colors">gurubearingcompany@gmail.com</a>
                                                </p>
                                            </div>
                                        </div>
                                    </StaggerItem>
                                </StaggerContainer>
                            </div>
                        </AnimatedSection>

                        {/* Contact Map */}
                        <AnimatedSection direction="up" delay={0.2}>
                            <div className="bg-gray-200 dark:bg-[#1a263d] rounded-[2rem] overflow-hidden relative shadow-2xl h-[350px] border border-gray-200 dark:border-gray-800 flex items-center justify-center group transform hover:scale-[1.02] transition-transform duration-500">
                                <iframe 
                                    src="https://maps.google.com/maps?q=No.%202800%20C,%20Ashok%20Gali,%20Mori%20Gate,%20New%20Delhi-110006,%20Delhi,%20India&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                                    className="w-full h-full grayscale-[10%] contrast-[1.1] dark:invert dark:grayscale-[50%] dark:opacity-80 dark:hue-rotate-180 transition-all duration-700" 
                                    style={{ border: 0 }} 
                                    allowFullScreen={false} 
                                    loading="lazy" 
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map Location"
                                ></iframe>
                                <div className="absolute inset-0 pointer-events-none border border-black/5 dark:border-white/5 rounded-[2rem]"></div>
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Contact Form */}
                    <AnimatedSection direction="right" delay={0.1}>
                        <div className="bg-white dark:bg-[#152033]/90 backdrop-blur-xl rounded-[2rem] p-10 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 dark:border-gray-800 h-full relative overflow-hidden">

                            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Send a Message</h2>
                            <p className="text-gray-600 dark:text-gray-400 mb-10 font-medium text-lg">We usually respond within 24 hours.</p>

                            <AnimatePresence mode="wait">
                                {status === "success" ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="p-10 bg-green-50 dark:bg-green-900/10 rounded-3xl text-center border border-green-200 dark:border-green-800/30 mt-8"
                                    >
                                        <div className="w-20 h-20 bg-green-100 dark:bg-green-900/40 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-green-800 dark:text-green-300 mb-4">Message Sent Successfully!</h3>
                                        <p className="text-green-700 dark:text-green-400/80 font-medium mb-8">Thank you for reaching out. A representative will get back to you shortly.</p>
                                        <button onClick={() => setStatus("idle")} className="text-green-800 dark:text-green-300 font-bold hover:underline transition-colors uppercase tracking-widest text-sm flex items-center justify-center mx-auto group">
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
                                            className="w-full bg-accent hover:bg-accent-dark text-white font-extrabold text-lg py-5 rounded-xl shadow-lg shadow-accent/20 hover:shadow-xl hover:shadow-accent/30 transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest relative overflow-hidden group"
                                        >
                                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
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
                                                    Send Message <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
