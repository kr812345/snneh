"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Prevent scrolling while loading
    document.body.style.overflow = 'hidden';
    
    // Simulate loading progress
    const duration = 2500; // 2.5 seconds total
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      // Calculate linear progress
      const linearProgress = (currentStep / steps) * 100;
      
      // Apply easeOutQuad easing for premium feel (starts fast, slows down at end)
      const easeProgress = linearProgress === 100 
        ? 100 
        : 100 * (1 - Math.pow(1 - linearProgress / 100, 3));
      
      setProgress(Math.min(Math.round(easeProgress), 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(() => {
          setIsVisible(false);
          document.body.style.overflow = ''; // Restore scrolling
        }, 400); // Small pause at 100%
      }
    }, interval);

    return () => {
      clearInterval(timer);
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} // Premium slide-up easing
          className="fixed inset-0 z-[100] flex flex-col items-center justify-between bg-background text-foreground overflow-hidden"
        >
          <div className="flex-1 flex flex-col items-center justify-center w-full">
            {/* Animated Illustration SVG */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8 text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <motion.path
                  initial={{ pathLength: 0, fill: "rgba(198, 40, 40, 0)" }}
                  animate={{ pathLength: 1, fill: "rgba(198, 40, 40, 0.2)" }}
                  transition={{ 
                    pathLength: { duration: 1.5, ease: "easeInOut" },
                    fill: { duration: 1, delay: 1 }
                  }}
                  d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
                />
              </svg>
            </motion.div>

            {/* NGO Name */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                className="font-heading text-7xl md:text-9xl tracking-widest text-light italic"
              >
                SNNEH
              </motion.h1>
            </div>
          </div>

          {/* Loading Percentage at Bottom */}
          <div className="w-full px-8 md:px-16 pb-12 flex items-end justify-end font-body">
            <div className="text-5xl md:text-7xl font-heading text-primary italic leading-none text-right">
              {progress}%
            </div>
          </div>
          
          {/* Progress Bar Line */}
          <div className="absolute bottom-0 left-0 h-1 bg-primary w-full origin-left" style={{ transform: `scaleX(${progress / 100})`, transition: 'transform 0.1s linear' }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
