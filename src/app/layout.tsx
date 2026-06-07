import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";
import Preloader from "@/components/Preloader";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Guru Bearing Company | Industrial Bearing Supplier",
  description: "High-quality industrial bearings, bulk supply, and wholesale distribution for manufacturing and automotive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${plusJakarta.variable} antialiased min-h-screen flex flex-col pt-16`}
      >
        <SmoothScroll>
          <Preloader />
          <CustomCursor />
          <Navigation />
          <PageTransition>
            <main className="flex-grow flex flex-col w-full">
              {children}
            </main>
          </PageTransition>
          <Footer />
          <Chatbot />
        </SmoothScroll>
      </body>
    </html>
  );
}
