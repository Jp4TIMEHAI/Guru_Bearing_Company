import Link from "next/link";
import { ArrowRight, Link2, Factory, Disc, Settings } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";
import MagneticHover from "@/components/MagneticHover";

const products = [
    {
        id: "universal-joints",
        name: "Precision Universal Joints",
        description: "High-quality precision and cross universal joints designed for seamless rotational power transmission across varying angles. Built for demanding automotive and industrial uses.",
        features: ["Cross Universal Joints", "Heavy-duty construction", "High precision tolerance", "Corrosion resistance"],
        icon: <Link2 className="w-16 h-16 text-accent transform group-hover:scale-110 transition-transform duration-500" />,
        imgClass: "bg-[url('/products/universal_joint.png')]"
    },
    {
        id: "tapper",
        name: "Tapper Bearings",
        description: "Engineered to support both heavy radial and axial loads simultaneously. Ideal for conveyor systems, heavy machinery, automotive wheel hubs, and industrial gearboxes.",
        features: ["High load capacity", "Durable steel housing", "Versatile industrial applications", "Thermal stability"],
        icon: <Settings className="w-16 h-16 text-accent transform group-hover:rotate-180 transition-transform duration-700" />,
        imgClass: "bg-[url('/products/tapper_bearing.png')]"
    },
    {
        id: "pillow-block",
        name: "Pillow Block Bearings",
        description: "Heavy-duty specialized mounted bearings built for secure rotational support in extreme environments. Perfect for agricultural and conveyor belt applications.",
        features: ["Corrosion-resistant casing", "Easy mounting design", "Custom lubrication seals", "Self-aligning capability"],
        icon: <Factory className="w-16 h-16 text-accent transform group-hover:scale-110 transition-transform duration-500" />,
        imgClass: "bg-[url('/products/pillow_block.png')]"
    },
    {
        id: "roller",
        name: "Industrial Roller Bearings",
        description: "Reliable, long-lasting industrial roller bearings engineered specifically for heavy manufacturing and fast moving components across vast stress capacities.",
        features: ["OEM certified standards", "Intensive durability testing", "Low noise operation", "Extended maintenance intervals"],
        icon: <Disc className="w-16 h-16 text-accent transform group-hover:rotate-90 transition-transform duration-500" />,
        imgClass: "bg-[url('/products/roller_bearing.png')]"
    }
];

export default function ProductsPage() {
    return (
        <div className="bg-white dark:bg-[#070b14] min-h-screen pt-20 relative overflow-hidden">

            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
            <div className="absolute top-40 right-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

            {/* Header section */}
            <div className="bg-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none mix-blend-overlay"></div>
                <AnimatedSection direction="down" className="py-32 text-center max-w-4xl mx-auto px-4 relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-8 tracking-tight drop-shadow-md">Our Products</h1>
                    <p className="text-xl md:text-2xl text-blue-100 font-medium leading-relaxed drop-shadow">
                        Comprehensive bearing solutions engineered with absolute precision for optimal performance across all industries.
                    </p>
                </AnimatedSection>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="space-y-32">
                    {products.map((product, index) => (
                        <AnimatedSection
                            key={product.id} direction="up" delay={0.1}
                            className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >

                            {/* Product Image Card */}
                            <div className="w-full lg:w-1/2">
                                <StaggerContainer>
                                    <StaggerItem direction={index % 2 !== 0 ? 'right' : 'left'}>
                                        <TiltCard intensity={10} className="w-full">
                                            <div id={product.id} className={`aspect-[4/3] rounded-[2.5rem] flex items-center justify-center shadow-2xl relative overflow-hidden group border border-gray-200 dark:border-gray-800 ${product.imgClass} bg-cover bg-center`}>

                                                {/* Floating Info Pill */}
                                                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[85%] max-w-[400px] bg-[#0F1423] rounded-3xl border border-white/5 shadow-2xl p-5 flex items-center gap-6 z-10 transition-transform duration-500 group-hover:-translate-y-2">

                                                    {/* Icon Container */}
                                                    <div className="w-[80px] h-[80px] rounded-2xl bg-[#263045] flex items-center justify-center flex-shrink-0 shadow-inner">
                                                        <div className="text-accent scale-150 transform group-hover:scale-[1.6] transition-transform duration-500">
                                                            {product.icon}
                                                        </div>
                                                    </div>

                                                    {/* Text Container */}
                                                    <span className="text-lg font-extrabold text-white uppercase tracking-widest text-left leading-tight flex-1">
                                                        {product.name}
                                                    </span>

                                                </div>
                                            </div>
                                        </TiltCard>
                                    </StaggerItem>
                                </StaggerContainer>
                            </div>

                            {/* Product Details */}
                            <div className="w-full lg:w-1/2">
                                <StaggerContainer staggerChildren={0.1}>
                                    <StaggerItem direction="up">
                                        <div className="inline-block px-4 py-2 bg-secondary/10 dark:bg-secondary/10 text-secondary border border-secondary/20 rounded-full text-sm font-bold uppercase tracking-wider mb-6 shadow-sm">
                                            Industrial Grade
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem direction="up">
                                        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">{product.name}</h2>
                                    </StaggerItem>

                                    <StaggerItem direction="up">
                                        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed font-medium">
                                            {product.description}
                                        </p>
                                    </StaggerItem>

                                    <StaggerItem direction="up">
                                        <div className="mb-12 bg-gray-50 dark:bg-[#152033] p-8 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-sm">
                                            <h3 className="text-sm font-extrabold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-6">Key Specifications</h3>
                                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                {product.features.map((feature, i) => (
                                                    <li key={i} className="flex items-center text-gray-800 dark:text-gray-200 font-semibold group cursor-default">
                                                        <span className="w-2.5 h-2.5 bg-accent rounded-full mr-4 group-hover:scale-150 transition-transform shadow-md shadow-accent/50"></span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </StaggerItem>

                                    <StaggerItem direction="up">
                                        <MagneticHover strength={0.3}>
                                            <Link
                                                href={`/quote?product=${encodeURIComponent(product.name)}`}
                                                className="inline-flex items-center px-10 py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-extrabold shadow-xl hover:shadow-2xl hover:shadow-accent/30 transition-all hover:-translate-y-1 group text-sm uppercase tracking-widest relative overflow-hidden"
                                            >
                                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                                                <span className="relative z-10 flex items-center">
                                                    Inquire Now
                                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                </span>
                                            </Link>
                                        </MagneticHover>
                                    </StaggerItem>
                                </StaggerContainer>
                            </div>

                        </AnimatedSection>
                    ))}
                </div>
            </div>

        </div>
    );
}
