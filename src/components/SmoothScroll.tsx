"use client";

import { ReactLenis } from 'lenis/react';
import { ReactNode } from 'react';

export default function SmoothScroll({ children }: { children: ReactNode }) {
    return (
        <ReactLenis root options={{ lerp: 0.05, duration: 2, smoothWheel: true, wheelMultiplier: 0.8 }}>
            {children}
        </ReactLenis>
    );
}
