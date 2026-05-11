"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Hero() {
  // Premium emotional cubic-bezier curve
  const customEase = [0.76, 0, 0.24, 1];
  
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const videos = [
    "/SNNEH_hero_0.webm",
    "/SNNEH_hero_1.webm",
    "/SNNEH_hero_2.webm"
  ];

  const togglePlay = () => {
    const videoElements = document.querySelectorAll('.hero-video') as NodeListOf<HTMLVideoElement>;
    videoElements.forEach(v => {
      if (isPlaying) {
        v.pause();
      } else {
        v.play();
      }
    });
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">
      {/* Background Image / Video Placeholder */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 2.8, ease: "easeOut" }}
        className="absolute inset-0 w-full h-full z-0 origin-center bg-black"
      >
        <AnimatePresence>
          <motion.video
            key={currentVideoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hero-video absolute inset-0 w-full h-full object-cover object-center"
            autoPlay={isPlaying}
            muted
            playsInline
            onEnded={() => setCurrentVideoIndex((prev) => (prev + 1) % videos.length)}
          >
            <source src={videos[currentVideoIndex]} type="video/webm" />
          </motion.video>
        </AnimatePresence>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/30 z-10"></div>
      </motion.div>

      {/* Clickable Overlay to toggle play/pause */}
      <div 
        className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer pointer-events-auto group"
        onClick={togglePlay}
      >
        <AnimatePresence>
          {!isPlaying && (
            <motion.div 
              initial={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
              animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
              exit={{ scale: 0.5, opacity: 0, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: customEase }}
              className="w-32 h-32 md:w-40 md:h-40 bg-black/40 backdrop-blur-[40px] drop-shadow-md transition-all duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:bg-black/60 group-hover:scale-105"
              style={{
                WebkitMaskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z'/%3E%3C/svg%3E")`,
                WebkitMaskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z'/%3E%3C/svg%3E")`,
                maskSize: 'contain',
                maskRepeat: 'no-repeat',
                maskPosition: 'center',
              }}
            ></motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 md:px-12 flex flex-col justify-end h-full pb-20 md:pb-24 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <h1 className="font-heading text-6xl md:text-8xl text-light leading-[0.9] tracking-tight italic">
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1.5, delay: 3.2, ease: customEase }}
              className="pb-2"
            >
              Real Stories.
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1.5, delay: 3.4, ease: customEase }}
              className="pb-2"
            >
              Real Strength.
            </motion.div>
            <motion.div 
              initial={{ y: 20, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }} 
              transition={{ duration: 1.5, delay: 3.6, ease: customEase }}
              className="relative inline-block text-primary"
            >
              Real Change.
              {/* The red line touching the left edge and extending 20px right */}
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1.8, delay: 3.9, ease: customEase }}
                className="absolute -left-[100vw] -right-[20px] -bottom-2 md:-bottom-4 h-[2px] bg-primary/80 origin-right"
              ></motion.div>
            </motion.div>
          </h1>
        </div>
      </div>
    </section>
  );
}
