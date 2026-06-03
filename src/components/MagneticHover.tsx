"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function MagneticHover({ children, strength = 0.5, className = "" }: { children: React.ReactNode, strength?: number, className?: string }) {
    const magnetic = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const xTo = gsap.quickTo(magnetic.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
        const yTo = gsap.quickTo(magnetic.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

        const handleMouseMove = (e: MouseEvent) => {
            if (!magnetic.current) return;
            const { clientX, clientY } = e;
            const { height, width, left, top } = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width / 2);
            const y = clientY - (top + height / 2);
            xTo(x * strength);
            yTo(y * strength);
        };

        const handleMouseLeave = () => {
            xTo(0);
            yTo(0);
        };

        const currentRef = magnetic.current;
        if (currentRef) {
            currentRef.addEventListener("mousemove", handleMouseMove);
            currentRef.addEventListener("mouseleave", handleMouseLeave);
        }

        return () => {
            if (currentRef) {
                currentRef.removeEventListener("mousemove", handleMouseMove);
                currentRef.removeEventListener("mouseleave", handleMouseLeave);
            }
        };
    }, [strength]);

    return (
        <div ref={magnetic} className={`inline-block ${className}`}>
            {children}
        </div>
    );
}
