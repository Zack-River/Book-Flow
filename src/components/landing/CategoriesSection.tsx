"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const categories = [
  { name: "Medical", icon: "medical_services", color: "text-primary", bg: "bg-primary/5 border-primary/20" },
  { name: "Dental", icon: "dentistry" },
  { name: "Beauty", icon: "face_retouching_natural" },
  { name: "Fitness", icon: "fitness_center" },
  { name: "Consulting", icon: "construction" },
  { name: "Education", icon: "school" },
  { name: "Home Services", icon: "home_repair_service" },
  { name: "Wellness", icon: "spa" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  }
};

export function CategoriesSection() {
  return (
    <section id="features" className="py-24 bg-surface-container-lowest border-y border-outline-variant/30 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-margin-mobile md:px-margin-desktop">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="font-headline-lg text-headline-lg text-center mb-xl"
        >
          Built for any service business
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-gutter"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {categories.map((cat, index) => {
            const isHighlighted = index === 0;
            const categoryUrl = `/search?category=${encodeURIComponent(cat.name.toLowerCase())}`;
            
            return (
              <motion.div key={cat.name} variants={cardVariants}>
                <Link 
                  href={categoryUrl}
                  className={`rounded-xl p-lg flex flex-col items-center justify-center gap-md hover:shadow-card hover:border-outline-variant transition-all cursor-pointer text-center group h-full ${isHighlighted ? `border-2 ${cat.bg}` : 'bg-surface-container border border-outline-variant/50'}`}
                >
                  <span className={`material-symbols-outlined text-4xl transition-all ${isHighlighted ? `${cat.color} group-hover:scale-110` : 'text-on-surface-variant group-hover:text-on-surface'}`}>
                    {cat.icon}
                  </span>
                  <span className={`font-headline-md text-base transition-colors ${isHighlighted ? cat.color : 'text-on-surface-variant group-hover:text-on-surface'}`}>
                    {cat.name}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
