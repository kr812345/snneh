"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeaturedStories() {
  return (
    <section className="relative w-full bg-background py-32 text-light overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="font-heading text-5xl md:text-7xl italic mb-16"
        >
          Featured <span className="text-primary">Stories</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Story 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="group cursor-pointer"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
              <Image src="/home_bg.svg" alt="Story" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Survivor Story</p>
            <h3 className="font-heading text-4xl md:text-5xl mb-4 italic text-light">Finding Light in the Dark</h3>
            <p className="font-body text-tertiary leading-relaxed">Read about how community support and mental health interventions helped rebuild a life from the ground up.</p>
          </motion.div>

          {/* Story 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="group cursor-pointer md:mt-32"
          >
            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden mb-6">
              <Image src="/home_bg.svg" alt="Story" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
            </div>
            <p className="text-primary text-xs font-bold uppercase tracking-[0.2em] mb-3">Community Growth</p>
            <h3 className="font-heading text-4xl md:text-5xl mb-4 italic text-light">The Village that Stood Together</h3>
            <p className="font-body text-tertiary leading-relaxed">A powerful testament to what happens when equity, inclusive education, and compassion lead the way for a brighter future.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
