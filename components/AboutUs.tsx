"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUs() {
  return (
    <section className="relative w-full bg-light py-32 text-background overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24">
        <div className="w-full lg:w-1/2">
          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="font-heading text-6xl md:text-8xl italic mb-8 tracking-tight"
          >
            About <span className="text-primary">SNEEH</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          >
            <p className="font-body text-xl md:text-2xl leading-relaxed font-medium mb-8 text-background/90">
              SNEEH is a community-based, service-driven organization working towards creating a more inclusive and equitable society. 
            </p>
            <p className="font-body text-background/70 leading-relaxed">
              Rooted in the values of empathy, dignity, and collective growth, the organization focuses on addressing real-world challenges through community participation and sustainable practices. SNEEH follows a people-centered approach, ensuring communities are active contributors in their own development.
            </p>
          </motion.div>
        </div>
        
        <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
            className="border-l-2 border-primary pl-8"
          >
            <h3 className="font-heading text-4xl md:text-5xl italic mb-4">Our Vision</h3>
            <p className="font-body text-background/80 leading-relaxed">We envision a society where every individual, regardless of their background, has equal access to opportunities, care, and support systems. A society where mental health is openly addressed, education is inclusive, and compassion forms the foundation of progress.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true, margin: "-100px" }} 
            transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="border-l-2 border-primary pl-8"
          >
            <h3 className="font-heading text-4xl md:text-5xl italic mb-4">Core Values</h3>
            <ul className="font-body text-background/80 space-y-4 uppercase tracking-[0.15em] text-sm font-bold">
              <li className="flex items-center gap-4"><span className="text-primary">•</span> Dignity</li>
              <li className="flex items-center gap-4"><span className="text-primary">•</span> Equity</li>
              <li className="flex items-center gap-4"><span className="text-primary">•</span> Sustainability</li>
              <li className="flex items-center gap-4"><span className="text-primary">•</span> Transparency</li>
              <li className="flex items-center gap-4"><span className="text-primary">•</span> Innovation</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
