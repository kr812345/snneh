"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const categories = [
  {
    title: "Mental Health Support",
    description: "Creating safe spaces where individuals can express themselves and heal collectively through storytelling and peer support.",
    image: "/mental_health_support.png"
  },
  {
    title: "Economic Empowerment",
    description: "Supporting women and artisans by helping them develop skills and access opportunities for sustainable financial independence.",
    image: "/economic_empowerment.png"
  },
  {
    title: "Inclusive Education",
    description: "Supporting underserved children and ensuring that children with special needs receive proper psychological and developmental care.",
    image: "/inclusive_education.png"
  },
  {
    title: "Animal Welfare",
    description: "Promoting care, awareness, and adoption for animals in need, while fostering a kinder, more inclusive world.",
    image: "/animal_welfare.png"
  }
];

export default function Categories() {
  const containerRef = useRef(null);
  
  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-background py-32 overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="font-heading text-6xl md:text-8xl text-light italic leading-none"
          >
            What <span className="text-tertiary">We Do</span>
          </motion.h2>
          
          {/* <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
            className="font-body text-tertiary max-w-sm text-sm uppercase tracking-widest"
          >
            Drag to explore our initiatives and impact across communities.
          </motion.p> */}
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 pb-12">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)", y: 40 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-[4/5] rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image 
                src={category.image}
                alt={category.title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-110 grayscale-[0.8] group-hover:grayscale-0"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Glassmorphism Content Box */}
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]">
                <h3 className="font-heading text-4xl text-light italic mb-3">
                  {category.title}
                </h3>
                <p className="font-body text-sm text-light/80 leading-relaxed">
                  {category.description}
                </p>
                
                {/* Subtle animated arrow */}
                <div className="mt-4 overflow-hidden h-6 flex items-center">
                  <span className="text-primary font-medium text-sm tracking-widest uppercase flex items-center gap-2 translate-y-full group-hover:translate-y-0 transition-transform duration-500 delay-75 ease-[cubic-bezier(0.76,0,0.24,1)]">
                    Read Story
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
