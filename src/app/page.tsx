"use client";

import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import Lenis from "lenis";

const Hero = dynamic(() => import("@/features/hero-section"));
const Members = dynamic(() => import("@/features/member-section"));
const Gallery = dynamic(() => import("@/features/gallery-section"));
const Footer = dynamic(() => import("@/features/footer-section"));

function SectionInView({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px", once: false });
  return (
    <div ref={ref} style={{ minHeight: "60vh" }}>
      {isInView ? children : null}
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <main className="min-h-screen w-full">
      <Suspense
        fallback={
          <div
            style={{ minHeight: "100vh", background: "#000", width: "100%" }}
          />
        }
      >
        <Hero />
        <SectionInView>
          <Members />
        </SectionInView>
        <SectionInView>
          <Gallery />
        </SectionInView>
        <SectionInView>
          <Footer />
        </SectionInView>
      </Suspense>
    </main>
  );
}
