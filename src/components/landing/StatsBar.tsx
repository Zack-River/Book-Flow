"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useState } from "react";

export function StatsBar() {
  const [inView, setInView] = useState(false);

  return (
    <section className="bg-inverse-surface py-16 text-inverse-on-surface">
      <motion.div 
        className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-xl text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, staggerChildren: 0.1 }}
        onViewportEnter={() => setInView(true)}
      >
        <div className="flex flex-col items-center gap-sm">
          <span className="font-data-mono text-3xl md:text-4xl text-inverse-primary font-bold">
            {inView ? <CountUp end={12} duration={2.5} /> : "0"}k+
          </span>
          <span className="font-label-caps text-label-caps opacity-80">Bookings / Month</span>
        </div>
        <div className="flex flex-col items-center gap-sm">
          <span className="font-data-mono text-3xl md:text-4xl text-inverse-primary font-bold">
            {inView ? <CountUp end={500} duration={2.5} /> : "0"}+
          </span>
          <span className="font-label-caps text-label-caps opacity-80">Active Providers</span>
        </div>
        <div className="flex flex-col items-center gap-sm">
          <span className="font-data-mono text-3xl md:text-4xl text-inverse-primary font-bold">
            {inView ? <CountUp end={99.9} decimals={1} duration={2.5} /> : "0"}%
          </span>
          <span className="font-label-caps text-label-caps opacity-80">Uptime</span>
        </div>
        <div className="flex flex-col items-center gap-sm">
          <span className="font-data-mono text-3xl md:text-4xl text-inverse-primary font-bold">
            {inView ? <CountUp end={0} duration={1} /> : "0"}
          </span>
          <span className="font-label-caps text-label-caps opacity-80">Missed Appointments</span>
        </div>
      </motion.div>
    </section>
  );
}
