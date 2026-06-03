import Link from 'next/link';
import { ArrowRight, CheckCircle2, Factory, Truck, Wrench, ShieldCheck, ChevronRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '../components/AnimatedSection';
import MouseParallax from '../components/MouseParallax';
import MagneticHover from '../components/MagneticHover';

export default function Home() {
  const products = [
    { title: "Precision Universal Joints", desc: "High-quality precision and cross joints", icon: "🔗", link: "/products#universal-joints" },
    { title: "Tapper Bearings", desc: "Heavy radial & axial load capacity", icon: "⚙️", link: "/products#tapper" },
    { title: "Pillow Block Bearings", desc: "Designed for extreme environments", icon: "🏭", link: "/products#pillow-block" },
    { title: "Industrial Roller Bearings", desc: "Durable manufacturing solutions", icon: "🔴", link: "/products#roller" },
  ];

  const features = [
    { title: "Bulk Bearing Supply", desc: "Large volume orders fulfilled quickly with precision alignment.", icon: <Truck className="w-8 h-8 text-accent" /> },
    { title: "OEM Components", desc: "Compatible fully with all major industrial machinery brands.", icon: <Factory className="w-8 h-8 text-accent" /> },
    { title: "Wholesale Distribution", desc: "Highly competitive bulk pricing for global retail partners.", icon: <CheckCircle2 className="w-8 h-8 text-accent" /> },
    { title: "Procurement Support", desc: "Direct expert guidance from engineers for your custom orders.", icon: <Wrench className="w-8 h-8 text-accent" /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[92vh] flex items-center bg-primary overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary/80" />
        <div className="absolute inset-0 opacity-[0.10] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />

        {/* Animated Background Orbs with Mouse Parallax */}
        <MouseParallax factor={-0.2} className="absolute top-1/4 right-0 w-[500px] h-[500px]">
          <div className="w-full h-full bg-accent/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        </MouseParallax>
        <MouseParallax factor={0.15} className="absolute bottom-0 left-1/4 w-[400px] h-[400px]">
          <div className="w-full h-full bg-secondary/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
        </MouseParallax>

        <StaggerContainer className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12" delayChildren={0.1}>
          <div className="max-w-4xl">
            <StaggerItem direction="up">
              <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-secondary/40 bg-secondary/20 text-blue-50 mb-8 backdrop-blur-md shadow-lg shadow-black/10">
                <span className="flex h-2.5 w-2.5 rounded-full bg-accent animate-pulse"></span>
                <span className="text-sm font-semibold tracking-wide uppercase">Premium Quality Industrial Bearings</span>
              </div>
            </StaggerItem>

            <StaggerItem direction="up">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight text-white mb-6 leading-[1.05] drop-shadow-sm overflow-hidden">
                <span className="block translate-y-0 opacity-100">Powering the Future</span>
                <span className="block translate-y-0 opacity-100">
                  of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-200">Industry</span>
                </span>
              </h1>
            </StaggerItem>

            <StaggerItem direction="up">
              <p className="text-xl md:text-2xl text-blue-100/80 mb-12 max-w-2xl leading-relaxed font-medium">
                Guru Bearing Company is your trusted partner for high-performance ball, roller, and industrial bearings.
                Built for absolute endurance.
              </p>
            </StaggerItem>

            <StaggerItem direction="up">
              <div className="flex flex-col sm:flex-row gap-5">
                <MagneticHover strength={0.3}>
                  <Link href="/quote" className="inline-flex items-center justify-center px-8 py-4.5 text-sm font-bold uppercase tracking-widest text-white bg-accent hover:bg-accent-dark rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                    Request a Quote
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticHover>
                <MagneticHover strength={0.3}>
                  <Link href="/products" className="inline-flex items-center justify-center px-8 py-4.5 text-sm font-bold uppercase tracking-widest text-white bg-secondary hover:bg-secondary-dark rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 transform">
                    Explore Products
                  </Link>
                </MagneticHover>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </section>

      {/* Intro Section */}
      <section className="py-28 bg-gray-50 dark:bg-[#0b1120] relative overflow-hidden">
        <AnimatedSection direction="up" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                Decades of Expertise in <br /><span className="text-accent dark:text-accent-dark">Motion Technology</span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed font-medium">
                At Guru Bearing Company, we understand that downtime is not an option. We supply factories, manufacturers, and automotive companies with reliable bearing solutions that keep operations moving smoothly under the most demanding conditions.
              </p>

              <StaggerContainer className="space-y-4 mb-10" delayChildren={0.2} staggerChildren={0.1}>
                {[
                  "ISO 9001 Certified Quality Components",
                  "Global Distribution & Fast Shipping",
                  "Custom Solutions Built to Spec",
                  "Expert Technical Support 24/7"
                ].map((item, i) => (
                  <StaggerItem key={i} direction="left">
                    <div className="flex items-center text-gray-800 dark:text-gray-200 font-semibold bg-white dark:bg-gray-800/50 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                      <ShieldCheck className="w-6 h-6 text-accent mr-4 flex-shrink-0" />
                      {item}
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <Link href="/about" className="inline-flex items-center text-accent font-bold hover:text-accent-dark transition-colors group tracking-wide">
                Learn more about our company <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            {/* Image/Stats Showcase */}
            <div className="relative">
              <div className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-white dark:bg-[#152033] relative shadow-2xl flex items-center justify-center border-4 border-white dark:border-gray-800 z-10 transform hover:scale-[1.01] transition-transform duration-700 group">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1128]/90 via-[#0a1128]/30 to-transparent pointer-events-none"></div>
              </div>

              <AnimatedSection delay={0.3} direction="up" className="absolute -bottom-10 -left-6 sm:-left-10 bg-white dark:bg-[#1a263d] p-7 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 z-20 hover:-translate-y-2 transition-transform duration-300">
                <div className="flex items-center gap-5">
                  <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/30 rounded-full flex items-center justify-center border-4 border-white dark:border-[#1a263d] shadow-inner">
                    <span className="text-2xl font-black text-accent">25+</span>
                  </div>
                  <div>
                    <p className="font-extrabold text-gray-900 dark:text-white uppercase tracking-wider text-sm mb-1">Years of</p>
                    <p className="font-medium text-gray-500 dark:text-gray-400 text-sm">Industrial Experience</p>
                  </div>
                </div>
              </AnimatedSection>

            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Product Categories */}
      <section className="py-28 bg-white dark:bg-[#070b14] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="down" className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">Our Core Products</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">Comprehensive bearing supply for every industrial application. Built to last.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, idx) => (
              <StaggerItem key={idx} direction="up">
                <div className="group h-full bg-gray-50 dark:bg-[#0b1120] rounded-[2rem] p-10 hover:bg-white dark:hover:bg-[#152033] transition-all duration-300 shadow-sm hover:shadow-2xl hover:-translate-y-2 border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                  <div className="text-5xl mb-8 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 origin-bottom-left">{product.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-accent dark:group-hover:text-accent-dark transition-colors">{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed font-medium">{product.desc}</p>

                  <div className="absolute bottom-10 left-10">
                    <Link href={product.link} className="inline-flex items-center text-sm font-bold text-accent group/link uppercase tracking-wider">
                      Specifications <ArrowRight className="w-5 h-5 ml-2 group-hover/link:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 bg-primary text-white overflow-hidden relative border-y border-secondary">
        <div className="absolute top-0 right-0 -m-32 w-[600px] h-[600px] bg-secondary rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-0 left-0 -m-32 w-[600px] h-[600px] bg-accent rounded-full mix-blend-screen filter blur-[128px] opacity-10 animate-pulse" style={{ animationDuration: '12s' }}></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <AnimatedSection direction="down" className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Why Choose Guru Bearing?</h2>
            <p className="text-blue-100 max-w-2xl mx-auto text-xl font-medium">Partner with seasoned industry leaders for unmatched quality and global reliability.</p>
          </AnimatedSection>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerChildren={0.15}>
            {features.map((feat, idx) => (
              <StaggerItem key={idx} direction="up">
                <div className="h-full rounded-3xl p-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm group">
                  <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                    {feat.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feat.title}</h3>
                  <p className="text-blue-100/80 leading-relaxed font-medium">{feat.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gray-50 dark:bg-[#0b1120]">
        <AnimatedSection direction="up" className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center bg-white dark:bg-gradient-to-br dark:from-[#152033] dark:to-[#0a1128] rounded-[3rem] p-12 lg:p-24 shadow-2xl border border-gray-100 dark:border-gray-800 relative overflow-hidden group">

            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -m-20"></div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">Ready to Optimize Your <span className="text-accent dark:text-accent-dark">Machinery?</span></h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto font-medium">
              Get in touch with our engineers today to discuss your industrial bearing requirements and receive a comprehensive custom quotation.
            </p>
            <Link href="/quote" className="inline-flex items-center justify-center px-10 py-5 text-sm font-bold uppercase tracking-widest text-white bg-accent hover:bg-accent-dark rounded-2xl transition-all shadow-xl shadow-accent/30 hover:shadow-2xl hover:shadow-accent/40 hover:-translate-y-1">
              Request a Free Quote <ArrowRight className="ml-3 w-5 h-5" />
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
