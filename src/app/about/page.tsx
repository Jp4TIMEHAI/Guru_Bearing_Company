import { ShieldCheck, Target, Users } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";

export default function AboutPage() {
    return (
        <div className="bg-white dark:bg-[#070b14] min-h-screen pt-20 relative overflow-hidden">

            {/* Background Decor */}
            <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-secondary text-white py-32 relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
                <AnimatedSection direction="down" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-md tracking-tight">About Guru Bearing</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed font-medium">
                        Leading the industry with precision engineering, unmatched reliability, and a commitment to powering global manufacturing since 1999.
                    </p>
                </AnimatedSection>
            </section>

            {/* Overview Block */}
            <section className="py-32 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                        <AnimatedSection direction="up">
                            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">Company <span className="text-accent dark:text-accent-dark">Overview</span></h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-8">
                                Located in New Delhi, India, Guru Bearing Company is a premier wholesaler, distributor, and retail business. Under the leadership of Manpreet Singh, we specialize in high-quality bearing solutions including Precision Universal Joints, Tapper Bearings, Pillow Block Bearings, and Industrial Roller Bearings.
                            </p>
                            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium">
                                Whether supplying critical components for automotive assembly lines or heavy-duty rollers for industrial operations, our technical expertise and rigorous quality assurance distinguish us as a trusted partner rather than just a vendor.
                            </p>
                        </AnimatedSection>

                        <StaggerContainer className="grid grid-cols-2 gap-6 lg:gap-8" staggerChildren={0.1}>
                            {[
                                { num: "25+", label: "Years Experience" },
                                { num: "10K+", label: "Clients Served" },
                                { num: "50+", label: "Countries Reached" },
                                { num: "1M+", label: "Bearings Sold" },
                            ].map((stat, i) => (
                                <StaggerItem key={i} direction="up">
                                    <div className="bg-gray-50 dark:bg-gray-800/40 p-10 rounded-[2.5rem] text-center shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-800/60 transform hover:-translate-y-2 transition-transform duration-500 backdrop-blur-md">
                                        <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-accent to-accent-dark mb-4">{stat.num}</div>
                                        <div className="text-sm font-extrabold text-gray-500 dark:text-gray-400 uppercase tracking-widest leading-loose">{stat.label}</div>
                                    </div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </div>
                </div>
            </section>

            {/* Philosophy Block */}
            <section className="py-32 bg-gray-50 dark:bg-[#0b1120] border-y border-gray-200 dark:border-gray-800 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <AnimatedSection direction="down" className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Business Philosophy</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-400 font-medium leading-relaxed">The foundational pillars that guide our manufacturing, distribution, and client relationships.</p>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14" staggerChildren={0.15}>
                        {[
                            { icon: <Target className="w-12 h-12 text-accent dark:text-accent" />, title: "Precision First", desc: "We believe in exact tolerances. Every bearing we supply undergoes strict vetting to ensure absolute precision." },
                            { icon: <ShieldCheck className="w-12 h-12 text-accent dark:text-accent" />, title: "Commitment to Quality", desc: "Our ISO-certified standards guarantee that you only receive products designed to survive the harshest conditions." },
                            { icon: <Users className="w-12 h-12 text-accent dark:text-accent" />, title: "Partnership Approach", desc: "We work closely with client engineering teams to identify the perfect component for unique mechanical challenges." },
                        ].map((item, i) => (
                            <StaggerItem key={i} direction="up">
                                <div className="bg-white dark:bg-[#152033] p-12 rounded-[2.5rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] border border-gray-100 dark:border-gray-800 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center h-full group flex flex-col items-center">
                                    <div className="w-24 h-24 bg-accent/10 dark:bg-accent/20 rounded-[2rem] flex items-center justify-center mx-auto mb-10 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">{item.title}</h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium text-lg">{item.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

        </div>
    );
}
