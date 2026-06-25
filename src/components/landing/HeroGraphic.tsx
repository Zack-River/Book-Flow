"use client";

import { motion } from "framer-motion";

export function HeroGraphic() {
  return (
    <div className="w-full h-[400px] min-[1000px]:h-[500px] relative rounded-2xl border border-outline-variant/30 overflow-hidden bg-surface-container-lowest">
      {/* Calendar Texture Background */}
      <div className="absolute inset-0 calendar-texture opacity-50"></div>
      
      {/* Graphic Container */}
      <div className="absolute inset-0 flex items-center justify-center scale-90 min-[1000px]:scale-95 xl:scale-100 transition-transform">
        <div className="relative w-[320px] h-[300px]">
          {/* Background Mini Calendar */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotate: 0 }}
            animate={{ opacity: 0.8, x: 0, rotate: 3 }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="absolute right-[-40px] top-[-20px] w-64 bg-surface-container-lowest border border-outline-variant rounded-xl shadow-card p-4 transform animate-float-delayed"
          >
            <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-2">
              <span className="font-body-sm font-semibold">June 2024</span>
              <div className="flex gap-1">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center font-label-caps text-[10px] text-on-surface-variant mb-2">
              <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center font-data-mono text-[12px]">
              <div className="text-secondary-fixed-dim">26</div>
              <div className="text-secondary-fixed-dim">27</div>
              <div className="text-secondary-fixed-dim">28</div>
              <div className="text-secondary-fixed-dim">29</div>
              <div className="text-secondary-fixed-dim">30</div>
              <div className="text-secondary-fixed-dim">31</div>
              <div>1</div>
              <div>2</div><div>3</div><div>4</div><div>5</div><div>6</div><div>7</div><div>8</div>
              <div>9</div><div>10</div><div>11</div><div>12</div><div>13</div><div>14</div><div>15</div>
              <div>16</div><div>17</div><div>18</div><div>19</div><div>20</div><div>21</div><div>22</div>
              <div>23</div><div>24</div><div>25</div><div>26</div>
              <div className="bg-primary text-on-primary rounded-full w-6 h-6 mx-auto flex items-center justify-center">27</div>
              <div>28</div><div>29</div>
            </div>
          </motion.div>

          {/* Main Floating Card */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
            className="absolute left-[-20px] top-[40px] bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lifted w-80 p-6 z-10 animate-float"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">SA</div>
                <div>
                  <h3 className="font-headline-md text-base">Dr. Sarah Ahmed</h3>
                  <p className="font-body-sm text-on-surface-variant">Dental Checkup</p>
                </div>
              </div>
              <span className="bg-tertiary/10 border border-tertiary/20 text-tertiary font-label-caps px-2 py-1 rounded text-[10px]">CONFIRMED</span>
            </div>
            
            <div className="bg-surface-container rounded-lg p-4 mb-4 border border-outline-variant/50">
              <div className="flex items-center gap-2 mb-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">calendar_today</span>
                <span className="font-data-mono text-sm text-on-surface">Thu 27 Jun</span>
              </div>
              <div className="flex items-center gap-2 text-on-surface-variant">
                <span className="material-symbols-outlined text-sm">schedule</span>
                <span className="font-data-mono text-sm text-on-surface">10:30 AM - 11:30 AM</span>
              </div>
            </div>
            
            <button className="w-full border border-outline-variant font-body-sm py-2 rounded-lg hover:bg-surface-container transition-colors cursor-pointer">Reschedule</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
