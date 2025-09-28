"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import Image from "next/image";

type Testimonial = {
  id?: number;
  bechalor: string;
  name: string;
  degree?: string;
  src: string;
  instagramUrl?: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);
  const [mountKey, setMountKey] = useState(Date.now());

  // Update mountKey setiap kali komponen dimount
  useEffect(() => {
    setMountKey(Date.now());
  }, []);

  const memoTestimonials = useMemo(() => testimonials, [testimonials]);

  const handleNext = useCallback(() => {
    setActive((prev) => (prev + 1) % memoTestimonials.length);
  }, [memoTestimonials.length]);

  const handlePrev = useCallback(() => {
    setActive(
      (prev) => (prev - 1 + memoTestimonials.length) % memoTestimonials.length
    );
  }, [memoTestimonials.length]);

  const isActive = useCallback((index: number) => index === active, [active]);

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay, handleNext]);

  const randomRotateY = useCallback((index: number) => {
    const rotations = [-10, -5, 0, 5, 10, -8, 8, -3, 3, -7];
    return rotations[index % rotations.length];
  }, []);

  return (
    <motion.div
      key={mountKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="mx-auto max-w-md px-4 py-20 font-sans antialiased md:max-w-7xl md:px-8 lg:px-12">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-20 relative">
          {/* Image Section */}
          <div className="w-full flex justify-center items-center">
            <div className="relative w-full h-80 sm:h-[28rem] md:h-[32rem]">
              <AnimatePresence>
                {memoTestimonials.map((testimonial, index) => (
                  <motion.div
                    key={
                      testimonial.id ||
                      `testimonial-${index}-${testimonial.name}`
                    }
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: randomRotateY(index),
                    }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.7,
                      scale: isActive(index) ? 1 : 0.95,
                      z: isActive(index) ? 0 : -100,
                      rotate: isActive(index) ? 0 : randomRotateY(index),
                      zIndex: isActive(index)
                        ? 40
                        : memoTestimonials.length + 2 - index,
                      y: isActive(index) ? [0, -80, 0] : 0,
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: randomRotateY(index),
                    }}
                    transition={{
                      duration: 0.4,
                      ease: "easeInOut",
                    }}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={1000}
                      draggable={false}
                      className="h-full w-full rounded-3xl object-cover object-[10%_30%]"
                      priority
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          {/* Card Content Section */}
          <div className="flex flex-col items-center justify-start py-4 w-full">
            <motion.div
              key={active}
              initial={{
                y: 20,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -20,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
                ease: "easeInOut",
              }}
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              className="w-full"
            >
              <div className="flex flex-col items-center px-2 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] justify-center w-full">
                <h3
                  className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-2 capitalize break-words text-center w-full px-2 leading-tight"
                  style={{
                    background: "rgba(0,0,0,0.7)",
                    borderRadius: "0.75rem",
                    padding: "0.5rem 0",
                    zIndex: 10,
                    position: "relative",
                  }}
                >
                  <span className="inline-block min-w-[2ch]">
                    {memoTestimonials[active].name}
                  </span>
                </h3>
                <div className="flex flex-col items-center gap-3 sm:gap-6 mt-2 w-full justify-center">
                  <motion.p
                    initial={{
                      y: 20,
                      opacity: 0,
                    }}
                    animate={{
                      y: 0,
                      opacity: 1,
                    }}
                    exit={{
                      y: -20,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-base sm:text-lg text-neutral-400 text-center"
                  >
                    {memoTestimonials[active].bechalor}
                  </motion.p>
                  {memoTestimonials[active].instagramUrl && (
                    <motion.a
                      href={memoTestimonials[active].instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-white text-xs sm:text-sm font-medium rounded-full hover:bg-white/15 hover:border-white/30 transition-all duration-300 backdrop-blur-sm mt-2 sm:mt-0"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                        <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                        <path d="M16.5 7.5v.01" />
                      </svg>
                      Instagram
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
            <div className="flex gap-4 pt-3 md:pt-4 justify-center w-full">
              <button
                onClick={handlePrev}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
              </button>
              <button
                onClick={handleNext}
                className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              >
                <IconArrowRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const MemoizedAnimatedTestimonials = React.memo(AnimatedTestimonials);
