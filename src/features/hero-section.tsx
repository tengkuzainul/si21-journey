"use client";

import HeroMarquee from "@/components/hero-maquee";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const statsVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  // ---- Count Up Logic for Milestones ----
  const [students, setStudents] = useState(0);
  const [years, setYears] = useState(0);
  const [legacy, setLegacy] = useState(0);
  const [startCounting, setStartCounting] = useState(false);

  // Intersection Observer logic
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    setStartCounting(false);
    const timer = setTimeout(() => setStartCounting(true), 1800);
    return () => clearTimeout(timer);
  }, [inView]);

  useEffect(() => {
    if (!startCounting) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i <= 23) setStudents(i);
      if (i <= 4) setYears(i);
      if (i <= 1) setLegacy(i);
      i++;
      if (i > 23) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, [startCounting]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
    >
      {/* Marquee */}
      <HeroMarquee />

      {/* Background Image with Enhanced Parallax */}
      <motion.div
        className="absolute inset-0 bg-fixed bg-cover bg-center bg-no-repeat -z-10 bg-[url('/img/Grup_SI-21.jpg')]"
        initial={{ scale: 1.1, filter: "blur(2px)" }}
        animate={{ scale: 1, filter: "blur(0px)" }}
        transition={{ duration: 8, ease: "easeOut" }}
      />

      {/* Enhanced Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-black/85 -z-0" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/20 to-transparent -z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent -z-0" />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 text-white px-4 sm:px-6 md:px-8 max-w-6xl mx-auto font-sans w-full"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Elegant Information Badge */}
        <motion.div
          className="group inline-flex items-center bg-white/5 border border-white/15 backdrop-blur-md p-1.5 ps-5 rounded-full shadow-2xl hover:bg-white/8 hover:border-white/25 transition-all duration-500 mb-8"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
        >
          <p className="me-3 text-white/90 text-sm font-medium tracking-wide">
            Information System
          </p>
          <span className="py-2 px-4 flex justify-center items-center rounded-full bg-white/10 border border-white/20 font-semibold text-white text-sm shadow-lg">
            21
          </span>
        </motion.div>

        {/* Professional Headline with Elegant Typography */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8 leading-[0.9] tracking-tight text-white"
          variants={itemVariants}
        >
          <span className="block drop-shadow-2xl">Welcome to Our</span>
          <span className="block drop-shadow-2xl font-light italic">
            Journey
          </span>
        </motion.h1>

        {/* Professional Quote with Sophisticated Styling */}
        <motion.blockquote
          className="text-lg sm:text-xl md:text-2xl mb-12 max-w-4xl mx-auto text-white/85 leading-relaxed font-light tracking-wide"
          variants={itemVariants}
        >
          <span className="text-white/60 text-2xl font-serif">"</span>
          <span className="mx-2 font-medium">
            This is not the end of the journey but only the beginning of the
            journey
          </span>
          <span className="text-white/60 text-2xl font-serif">"</span>
        </motion.blockquote>

        {/* Professional Statistics with Clean Design */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16"
          variants={itemVariants}
        >
          {[
            { number: students, label: "Students" },
            { number: years, label: "Years" },
            { number: legacy, label: "Legacy" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="group text-center cursor-pointer"
              variants={statsVariants}
              whileHover={{ scale: 1.05, y: -3 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="text-5xl sm:text-6xl md:text-7xl font-black mb-2 text-white group-hover:text-white/90 transition-all duration-300 drop-shadow-xl">
                {stat.number}
              </div>
              <div className="text-lg sm:text-xl font-semibold text-white/70 tracking-widest uppercase transition-colors duration-300 group-hover:text-white/80">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <div className="relative group cursor-pointer flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center backdrop-blur-sm bg-white/5 group-hover:border-white/60 transition-colors duration-300">
            <motion.div
              className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-purple-500 rounded-full mt-2"
              animate={{ y: [0, 12, 0], opacity: [1, 0.3, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          <motion.p
            className="text-xs text-white/60 mt-3 tracking-wider uppercase font-medium text-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Scroll
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
