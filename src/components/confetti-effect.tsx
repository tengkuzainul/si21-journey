"use client";

import { useEffect, useRef } from "react";
import confetti, { Shape } from "canvas-confetti";

interface ConfettiEffectProps {
  triggerOnMount?: boolean;
  delay?: number;
  duration?: number;
}

export default function ConfettiEffect({
  triggerOnMount = true,
  delay = 1000,
  duration = 3000,
}: ConfettiEffectProps) {
  const isTriggeredRef = useRef(false);

  useEffect(() => {
    if (!triggerOnMount || isTriggeredRef.current) return;

    isTriggeredRef.current = true;

    const timer = setTimeout(() => {
      // Professional confetti sequence
      const duration = 3000;
      const animationEnd = Date.now() + duration;
      const defaults = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 9999,
      };

      function randomInRange(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function () {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);

        // Left side burst
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
            colors: ["#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#ffffff"],
            shapes: ["circle" as Shape, "square" as Shape],
            scalar: randomInRange(0.4, 1),
          })
        );

        // Right side burst
        confetti(
          Object.assign({}, defaults, {
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
            colors: ["#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#ffffff"],
            shapes: ["circle" as Shape, "square" as Shape],
            scalar: randomInRange(0.4, 1),
          })
        );

        // Center burst with different timing
        if (Math.random() < 0.3) {
          confetti(
            Object.assign({}, defaults, {
              particleCount: particleCount * 1.5,
              origin: { x: randomInRange(0.4, 0.6), y: Math.random() - 0.3 },
              colors: ["#60a5fa", "#818cf8", "#a78bfa", "#c084fc", "#f0f9ff"],
              shapes: ["circle" as Shape],
              scalar: randomInRange(0.6, 1.2),
            })
          );
        }
      }, 250);

      // Additional elegant finale burst after 2 seconds
      setTimeout(() => {
        confetti({
          particleCount: 200,
          spread: 70,
          origin: { y: 0.1 },
          colors: ["#3b82f6", "#6366f1", "#8b5cf6", "#a855f7", "#ffffff"],
          shapes: ["circle" as Shape, "square" as Shape],
          scalar: 0.8,
          gravity: 0.5,
          drift: 0.5,
          ticks: 100,
          startVelocity: 25,
          zIndex: 9999,
        });
      }, 2000);

      // Clean finale sparkle
      setTimeout(() => {
        confetti({
          particleCount: 50,
          spread: 120,
          origin: { y: 0.2 },
          colors: ["#ffffff", "#f0f9ff", "#dbeafe"],
          shapes: ["circle" as Shape],
          scalar: 0.4,
          gravity: 0.3,
          ticks: 80,
          startVelocity: 15,
          zIndex: 9999,
        });
      }, 2500);
    }, delay);

    return () => clearTimeout(timer);
  }, [triggerOnMount, delay, duration]);

  // Trigger confetti manually
  // fireConfetti function removed (unused)

  return null; // This component doesn't render anything visible
}
