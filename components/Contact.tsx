"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <footer className="relative w-full bg-[#050505] py-24 text-light border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <h2 className="font-heading text-6xl md:text-8xl italic mb-6 tracking-tight">Let's <span className="text-primary">Connect</span></h2>
          <p className="font-body text-tertiary text-lg mb-12 max-w-md">Reach out for support, partnerships, or just to say hello. We are always looking to expand our community.</p>
          <a href="mailto:hello@sneeh.org" className="text-3xl md:text-4xl font-heading italic border-b-2 border-primary text-light pb-2 hover:text-primary transition-colors duration-500">
            hello@sneeh.org
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
          className="flex flex-col space-y-6 font-body text-tertiary text-sm uppercase tracking-[0.2em] font-bold justify-end items-start lg:items-end"
        >
          <a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-4">
            Instagram <span className="text-primary">↗</span>
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-4">
            LinkedIn <span className="text-primary">↗</span>
          </a>
          <a href="#" className="hover:text-primary transition-colors duration-300 flex items-center gap-4">
            Twitter <span className="text-primary">↗</span>
          </a>
          
          <div className="pt-12 text-xs text-white/30 tracking-widest mt-auto">
            © {new Date().getFullYear()} SNEEH. ALL RIGHTS RESERVED.
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
