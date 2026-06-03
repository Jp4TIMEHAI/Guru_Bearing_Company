import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import PageTransition from "@/components/PageTransition";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col pt-16`}
      >
        <SmoothScroll>
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
