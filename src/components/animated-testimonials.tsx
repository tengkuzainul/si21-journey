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

  // Memoize testimonials data for faster access
  const memoTestimonials = useMemo(() => testimonials, [testimonials]);

  // Memoize handlers to avoid unnecessary re-renders
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

  // Memoize rotation calculation
  const randomRotateY = useCallback((index: number) => {
    const rotations = [-10, -5, 0, 5, 10, -8, 8, -3, 3, -7];
    return rotations[index % rotations.length];
  }, []);
  return (
    <div className="mx-auto max-w-md px-4 py-20 font-sans antialiased md:max-w-7xl md:px-8 lg:px-12">
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Image Section */}
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {memoTestimonials.map((testimonial, index) => (
                <motion.div
                  key={
                    testimonial.id || `testimonial-${index}-${testimonial.name}`
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
                  className="absolute inset-0 origin-bottom"
                >
                  <Image
                    src={testimonial.src}
                    alt={testimonial.name}
                    width={500}
                    height={1000}
                    draggable={false}
                    className="h-[32rem] w-full rounded-3xl object-cover object-[10%_30%]"
                    priority
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        {/* Card Content Section */}
        <div className="flex flex-col justify-between py-4">
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
          >
            <div className="flex flex-col items-start mb-6">
              <h3 className="text-8xl font-bold text-white mb-1 capitalize">
                {memoTestimonials[active].name}
              </h3>
              <motion.p className="mt-2 text-lg text-neutral-400 ">
                {memoTestimonials[active].bechalor}
              </motion.p>
              {memoTestimonials[active].instagramUrl && (
                <motion.a
                  href={memoTestimonials[active].instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white/10 border border-white/20 text-white text-sm font-medium rounded-full hover:bg-white/15 hover:border-white/30 transition-all duration-300 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Follow Instagram
                </motion.a>
              )}
            </div>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
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
  );
};

export const MemoizedAnimatedTestimonials = React.memo(AnimatedTestimonials);
