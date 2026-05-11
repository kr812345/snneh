"use client";

import React, { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, {
        duration: 2.5,
        ease: [0.76, 0, 0.24, 1] // Custom cinematic ease
      });
    }
  }, [isInView, value, motionValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};

export default function ImpactMetrics() {
  const metrics = [
    { value: 5000, label: "Lives Impacted", suffix: "+" },
    { value: 150, label: "Community Workshops", suffix: "+" },
    { value: 45, label: "Active Volunteers", suffix: "" },
    { value: 100, label: "Commitment", suffix: "%" }
  ];

  return (
    <section className="relative w-full bg-background py-32 text-light border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24 md:mb-32 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="font-heading text-6xl md:text-8xl italic leading-none mb-8"
          >
            Real <span className="text-primary">Impact.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
            className="font-body text-tertiary text-lg md:text-xl md:leading-relaxed"
          >
            We don't just talk about change—we measure it. Our work is driven by raw, undeniable metrics that translate directly into dignity, equity, and human lives improved across communities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8">
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: index * 0.15, ease: [0.76, 0, 0.24, 1] }}
              className="flex flex-col border-l-2 border-white/10 pl-6"
            >
              <div className="font-heading text-7xl md:text-8xl italic mb-4 text-light tracking-tight">
                <AnimatedNumber value={metric.value} />
                <span className="text-primary">{metric.suffix}</span>
              </div>
              <div className="font-body uppercase tracking-[0.2em] text-xs md:text-sm text-tertiary font-medium">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
