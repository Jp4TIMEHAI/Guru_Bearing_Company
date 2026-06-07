"use client";

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Factory, Truck, Wrench, ShieldCheck, ChevronRight, Settings, Cog, Target, Zap } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import MouseParallax from '../components/MouseParallax';
import MagneticHover from '../components/MagneticHover';
import NumberCounter from '../components/NumberCounter';
import ScrollRevealImage from '../components/ScrollRevealImage';
import InfiniteMarquee from '../components/InfiniteMarquee';
import GlareCard from '../components/GlareCard';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  // Hero text scales massively on scroll
  const heroTextScale = useTransform(scrollYProgress, [0, 1], [1, 20]);
  const heroTextOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const products = [
    { title: "Precision Universal Joints", desc: "Engineered for high torque and minimal backlash in demanding environments.", icon: <Settings className="w-10 h-10" />, link: "/products#universal-joints" },
    { title: "Tapper Bearings", desc: "Exceptional radial and axial load capacity for heavy-duty applications.", icon: <Cog className="w-10 h-10" />, link: "/products#tapper" },
    { title: "Pillow Block Bearings", desc: "Robust housing design ensuring perfect alignment and durability.", icon: <Target className="w-10 h-10" />, link: "/products#pillow-block" },
    { title: "Industrial Roller Bearings", desc: "High-speed continuous performance with advanced friction reduction.", icon: <Zap className="w-10 h-10" />, link: "/products#roller" },
  ];

  const features = [
    { title: "Global Fulfillment", desc: "Rapid logistics and secure bulk shipping across all major international industrial hubs.", icon: <Truck className="w-8 h-8 text-accent" /> },
    { title: "OEM Integration", desc: "Seamless compatibility with leading manufacturing and automotive machinery platforms.", icon: <Factory className="w-8 h-8 text-accent" /> },
    { title: "Certified Reliability", desc: "Stringent ISO-certified quality control guaranteeing absolute structural integrity.", icon: <CheckCircle2 className="w-8 h-8 text-accent" /> },
    { title: "Engineering Support", desc: "Direct consultation with our technical specialists for custom specifications.", icon: <Wrench className="w-8 h-8 text-accent" /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[92vh] flex items-center bg-primary overflow-hidden pt-20">
        {/* Deep Carbon Background with subtle noise/texture */}
        <div className="absolute inset-0 bg-[#09090b]" />
        
        {/* Subtle grid pattern instead of glowing orbs */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />

        {/* Cinematic dark gradient vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-[#09090b] opacity-80" />
        
        {/* Diagonal industrial slash */}
        <div className="absolute top-0 right-0 w-[800px] h-full bg-secondary/30 transform skew-x-[-25deg] translate-x-32" />

        <StaggerContainer className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 lg:py-24" delayChildren={0.1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl relative">
              <StaggerItem direction="up">
                <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-white/10 bg-white/5 mb-8 rounded-sm">
                  <span className="flex h-2 w-2 bg-accent animate-pulse"></span>
                  <span className="text-xs font-bold tracking-widest text-neutral-300 uppercase">ISO 9001 Certified Bearings</span>
                </div>
              </StaggerItem>

              <StaggerItem direction="none">
                <motion.h1 
                  style={{ scale: heroTextScale, opacity: heroTextOpacity, transformOrigin: "left center" }}
                  className="text-6xl sm:text-7xl md:text-8xl font-black tracking-tighter text-white mb-6 leading-[0.95] uppercase"
                >
                  <TextReveal text="Absolute" className="block text-neutral-100" />
                  <TextReveal text="Precision." className="block text-transparent bg-clip-text bg-gradient-to-r from-accent to-red-500" delay={0.2} />
                </motion.h1>
              </StaggerItem>

              <StaggerItem direction="up">
                <p className="text-xl md:text-2xl text-neutral-400 mb-12 max-w-2xl leading-relaxed font-medium">
                  Guru Bearing Company engineers and supplies high-performance industrial components. 
                  Built for extreme endurance. Designed for zero downtime.
                </p>
              </StaggerItem>

              <StaggerItem direction="up">
                <div className="flex flex-col sm:flex-row gap-4">
                  <MagneticHover strength={0.2}>
                    <Link href="/quote" className="inline-flex items-center justify-center px-8 py-5 text-sm font-bold uppercase tracking-widest text-white btn-sweep bg-transparent transition-all rounded-sm">
                      Request a Quote
                      <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </MagneticHover>
                  <MagneticHover strength={0.2}>
                    <Link href="/products" className="inline-flex items-center justify-center px-8 py-5 text-sm font-bold uppercase tracking-widest text-neutral-100 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-sm">
                      View Specifications
                    </Link>
                  </MagneticHover>
                </div>
              </StaggerItem>
            </div>

            <StaggerItem direction="left" className="hidden lg:block relative">
              <MouseParallax factor={0.04}>
                <div 
                  className="relative w-full aspect-square" 
                  style={{ maskImage: 'radial-gradient(circle, black 50%, transparent 75%)', WebkitMaskImage: 'radial-gradient(circle, black 50%, transparent 75%)' }}
                >
                  <motion.img 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                    src="/images/hero-bearing.png" 
                    alt="Precision Industrial Bearing" 
                    className="w-full h-full object-contain mix-blend-screen opacity-90" 
                  />
                </div>
              </MouseParallax>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      {/* Intro Section */}
      <section className="py-32 bg-white dark:bg-[#09090b] relative border-b border-neutral-200 dark:border-neutral-900">
        <AnimatedSection direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-neutral-950 dark:text-white mb-8 tracking-tighter uppercase leading-tight">
                <TextReveal text="Decades of Expertise in" className="block" />
                <TextReveal text="Motion Technology" className="block text-accent" delay={0.1} />
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 leading-relaxed">
                At Guru Bearing Company, we understand that industrial downtime is not an option. We supply leading manufacturers and automotive companies with highly reliable bearing solutions that keep operations running flawlessly under the most demanding conditions.
              </p>

              <StaggerContainer className="space-y-4 mb-12" delayChildren={0.2} staggerChildren={0.1}>
                {[
                  "ISO 9001 Certified Quality Components",
                  "Global Distribution & Fast Logistics",
                  "Custom Solutions Built to Spec",
                  "Expert Technical Engineering Support"
                ].map((item, i) => (
                  <StaggerItem key={i} direction="left">
                    <div className="flex items-center text-neutral-800 dark:text-neutral-200 font-bold bg-neutral-50 dark:bg-neutral-900 p-4 rounded-sm border border-neutral-200 dark:border-neutral-800">
                      <ShieldCheck className="w-5 h-5 text-accent mr-4 flex-shrink-0" />
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <Link href="/about" className="inline-flex items-center text-accent font-bold hover:text-accent-dark transition-colors group tracking-wide uppercase text-sm">
                Discover Our Heritage <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            {/* Image/Stats Showcase */}
            <div className="relative">
              <ScrollRevealImage 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop"
                alt="Industrial Engineering"
                containerClassName="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] bg-neutral-100 dark:bg-neutral-900 relative flex items-center justify-center border border-neutral-200 dark:border-neutral-800 z-10 overflow-hidden"
                className="opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 filter contrast-125"
              />

              <AnimatedSection delay={0.3} direction="up" className="absolute -bottom-8 -left-6 sm:-left-10 bg-white dark:bg-neutral-950 p-8 shadow-2xl border border-neutral-200 dark:border-neutral-800 z-20 rounded-sm">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-accent text-white flex items-center justify-center rounded-sm">
                    <span className="text-2xl font-black"><NumberCounter end={25} suffix="+" /></span>
                  </div>
                  <div>
                    <p className="font-black text-neutral-950 dark:text-white uppercase tracking-widest text-sm mb-1">Years</p>
                    <p className="font-medium text-neutral-500 dark:text-neutral-400 text-sm">Industry Leadership</p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Infinite Kinetic Marquee */}
      <div className="py-6 sm:py-10 bg-accent border-y border-neutral-950 overflow-hidden shadow-2xl z-20 relative">
        <InfiniteMarquee 
          text="GURU BEARING CO. • ABSOLUTE PRECISION • BUILT FOR EXTREME ENDURANCE • " 
          className="text-4xl sm:text-6xl md:text-8xl font-black text-white/90 uppercase tracking-tighter mix-blend-overlay"
          baseVelocity={-1.5}
        />
      </div>

      {/* Product Categories */}
      <section className="py-32 bg-neutral-50 dark:bg-[#0c0c0e] relative border-b border-neutral-200 dark:border-neutral-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="down" className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-neutral-950 dark:text-white mb-6 tracking-tighter uppercase">Product Categories</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 font-medium max-w-2xl">Comprehensive bearing supply for demanding industrial applications. Built to exact specifications.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, idx) => (
              <StaggerItem key={idx} direction="up">
                <GlareCard className="h-full bg-white dark:bg-neutral-950 p-8 border border-neutral-200 dark:border-neutral-800">
                  <div className="text-neutral-300 dark:text-neutral-700 mb-8 transform group-hover:text-accent transition-colors duration-300 relative z-10">
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-950 dark:text-white mb-4 uppercase tracking-wide relative z-10">{product.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-12 leading-relaxed text-sm relative z-10">{product.desc}</p>

                  <div className="absolute bottom-8 left-8 z-10">
                    <Link href={product.link} className="inline-flex items-center text-xs font-bold text-accent group/link uppercase tracking-widest">
                      Specifications <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </GlareCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-neutral-950 text-white overflow-hidden relative">
        {/* Technical background lines */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: "linear-gradient(rgba(255, 255, 255, 1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 1) 1px, transparent 1px)", backgroundSize: "128px 128px" }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection direction="down" className="mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter uppercase">Why Guru Bearing?</h2>
            <div className="w-24 h-1 bg-accent mb-6"></div>
            <p className="text-neutral-400 max-w-2xl text-lg">Partner with seasoned industry leaders for unmatched quality, precision engineering, and global reliability.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16" staggerChildren={0.15}>
            {features.map((feat, idx) => (
              <StaggerItem key={idx} direction="up">
                <div className="h-full group border-l-2 border-neutral-800 pl-6 hover:border-accent transition-colors">
                  <div className="mb-6">
                    {feat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 uppercase tracking-wide">{feat.title}</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-accent">
        <AnimatedSection direction="up" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tighter uppercase">Optimize Your <br/>Machinery Today</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto font-medium">
              Consult with our engineering team to discuss your industrial bearing requirements and secure a comprehensive quotation.
            </p>
            <Link href="/quote" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest text-accent bg-white hover:bg-neutral-100 transition-colors rounded-sm shadow-xl">
              Request a Formal Quote <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
