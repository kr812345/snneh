"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function GetInvolved() {
  return (
    <section className="relative w-full min-h-[70vh] flex flex-col md:flex-row">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        className="w-full md:w-1/2 h-full min-h-[50vh] bg-background flex flex-col justify-center items-center p-12 group cursor-pointer border-b md:border-b-0 md:border-r border-white/10 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <h2 className="font-heading text-6xl md:text-8xl italic text-light mb-6 group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] relative z-10">Volunteer</h2>
        <p className="font-body text-tertiary uppercase tracking-[0.2em] text-sm font-bold relative z-10">Join the movement</p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
        className="w-full md:w-1/2 h-full min-h-[50vh] bg-primary flex flex-col justify-center items-center p-12 group cursor-pointer relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
        <h2 className="font-heading text-6xl md:text-8xl italic text-light mb-6 group-hover:scale-105 transition-transform duration-[800ms] ease-[cubic-bezier(0.76,0,0.24,1)] relative z-10">Donate</h2>
        <p className="font-body text-light/80 uppercase tracking-[0.2em] text-sm font-bold relative z-10">Fuel the change</p>
      </motion.div>
    </section>
  );
}
