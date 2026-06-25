"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { HeroGraphic } from "./HeroGraphic";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export function HeroSection() {
  return (
    <section className="max-w-[1440px] mx-auto px-margin-mobile min-[1000px]:px-margin-desktop py-xl min-[1000px]:py-3xl flex flex-col gap-xl min-[1000px]:gap-2xl overflow-hidden">
      
      {/* Top Row: Text + Graphic */}
      <div className="flex flex-col min-[1000px]:flex-row items-center gap-xl min-[1000px]:gap-2xl">
        {/* Left Column */}
        <motion.div 
          className="w-full min-[1000px]:w-[50%] xl:w-[55%] flex flex-col gap-lg"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div>
            <motion.span variants={itemVariants} className="inline-block bg-surface-container border border-outline-variant rounded-full px-3 py-1 font-label-caps text-label-caps text-on-surface-variant mb-md uppercase">
              Booking infrastructure for service businesses
            </motion.span>
            <motion.h1 variants={itemVariants} className="font-display-lg text-display-lg text-on-surface mb-md">
              Every appointment,<br />perfectly placed.
            </motion.h1>
            <motion.p variants={itemVariants} className="font-body-lg text-body-lg text-on-surface-variant max-w-[576px]">
              The modern scheduling engine designed for clinics, salons, fitness studios, and consulting practices. Seamless booking for clients, powerful management for you.
            </motion.p>
          </div>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-md mt-sm">
            <Link href="/search" className="bg-primary text-on-primary font-body-md text-body-md px-6 py-3 rounded-lg hover:bg-[#003ea8] transition-all duration-200 active:scale-95 shadow-sm inline-flex items-center gap-2">
              Start booking free
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>arrow_forward</span>
            </Link>
            <button className="border border-outline-variant bg-surface text-on-surface font-body-md text-body-md px-6 py-3 rounded-lg hover:bg-surface-container transition-all duration-200 active:scale-95 inline-flex items-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 0" }}>play_circle</span>
              Watch demo
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          className="w-full min-[1000px]:w-[50%] xl:w-[45%]"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.4, type: "spring", stiffness: 50 }}
        >
          <HeroGraphic />
        </motion.div>
      </div>

      {/* Trusted By Section - Full Width Below */}
      <motion.div 
        className="mt-lg min-[1000px]:mt-xl border-t border-outline-variant/50 pt-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        <p className="font-label-caps text-label-caps text-on-surface-variant mb-md uppercase">TRUSTED BY INNOVATIVE TEAMS</p>
        <div className="flex flex-wrap gap-xl items-center opacity-60 grayscale">
          <span className="font-headline-md font-bold hover:grayscale-0 transition-all duration-300">AcmeCorp</span>
          <span className="font-headline-md font-bold hover:grayscale-0 transition-all duration-300">GlobalTech</span>
          <span className="font-headline-md font-bold hover:grayscale-0 transition-all duration-300">NovaHealth</span>
          <span className="font-headline-md font-bold hover:grayscale-0 transition-all duration-300">ZenStudio</span>
        </div>
      </motion.div>
      
    </section>
  );
}
