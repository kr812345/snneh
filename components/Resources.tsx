"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Resources() {
  const resources = [
    "Annual Impact Report 2024",
    "Mental Health Awareness Guide",
    "Volunteer Handbook",
    "Community Initiatives Newsletter"
  ];

  return (
    <section className="relative w-full bg-background py-32 text-light border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="font-heading text-5xl md:text-7xl italic mb-16"
        >
          Latest <span className="text-primary">Resources</span>
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
              className="group flex items-center justify-between p-8 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-500 cursor-pointer border border-white/5 hover:border-primary/30"
            >
              <h3 className="font-heading text-2xl md:text-3xl text-light italic">{item}</h3>
              <svg className="w-6 h-6 text-tertiary group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
