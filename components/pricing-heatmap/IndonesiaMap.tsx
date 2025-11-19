"use client";

import { motion } from "framer-motion";
import { generateNetworkData, calculateDiscount, getPricingColor } from "@/lib/utils";
import { AlertCircle, TrendingDown, MapPin } from "lucide-react";
import { useState } from "react";

export default function IndonesiaMap() {
  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const networkData = generateNetworkData();

  // Simple SVG map of Indonesia (simplified representation)
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Title */}
      <div className="relative z-10 mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">Network Capacity Heatmap</h3>
        <p className="text-gray-400">Real-time pricing opportunities across Indonesia</p>
      </div>

      {/* Legend */}
      <div className="relative z-10 flex gap-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-red-500"></div>
          <span className="text-sm text-gray-300">High Discount (&gt;30%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-orange-500"></div>
          <span className="text-sm text-gray-300">Medium (15-30%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-yellow-500"></div>
          <span className="text-sm text-gray-300">Low (&lt;15%)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 rounded-full bg-green-500"></div>
          <span className="text-sm text-gray-300">Optimal</span>
        </div>
      </div>

      {/* Map container */}
      <div className="relative w-full h-[500px] bg-slate-800/50 rounded-xl border border-white/10 overflow-hidden">
        {/* Simplified Indonesia Map using relative positioning */}
        <svg className="w-full h-full" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid meet">
          {/* Background grid */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="1000" height="500" fill="url(#grid)" />

          {/* Simplified Indonesia outline */}
          <path
            d="M 150 150 Q 200 120 300 140 L 400 130 Q 500 140 600 150 L 700 160 Q 750 170 800 180 L 850 190 Q 900 180 920 200 L 900 220 Q 850 240 800 230 L 750 240 Q 700 250 650 240 L 600 250 Q 550 260 500 250 L 450 260 Q 400 270 350 260 L 300 250 Q 250 240 200 230 L 150 220 Q 120 200 150 150 Z"
            fill="rgba(59, 130, 246, 0.1)"
            stroke="rgba(59, 130, 246, 0.3)"
            strokeWidth="2"
          />

          {/* City markers with connections */}
          {networkData.map((city, index) => {
            const discount = calculateDiscount(city.capacity, city.demand);
            const color = getPricingColor(city.capacity, city.demand);
            const x = (city.lng - 95) * 10 + 50;
            const y = 250 - (city.lat * 25);
            
            return (
              <g key={city.city}>
                {/* Connection lines */}
                {index > 0 && (
                  <motion.line
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    x1={(networkData[index - 1].lng - 95) * 10 + 50}
                    y1={250 - (networkData[index - 1].lat * 25)}
                    x2={x}
                    y2={y}
                    stroke={color}
                    strokeWidth="2"
                    strokeDasharray="5,5"
                  />
                )}

                {/* Pulse effect for high discount areas */}
                {discount > 20 && (
                  <motion.circle
                    cx={x}
                    cy={y}
                    r="20"
                    fill={color}
                    opacity="0.2"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.2, 0, 0.2]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                )}

                {/* City marker */}
                <motion.circle
                  cx={x}
                  cy={y}
                  r="8"
                  fill={color}
                  stroke="white"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.5 }}
                  style={{ cursor: "pointer" }}
                  onClick={() => setSelectedCity(city.city)}
                />
              </g>
            );
          })}
        </svg>

        {/* City info cards */}
        <div className="absolute top-4 right-4 space-y-2 max-h-[480px] overflow-y-auto">
          {networkData.map((city, index) => {
            const discount = calculateDiscount(city.capacity, city.demand);
            const utilization = (city.demand / city.capacity) * 100;
            const color = getPricingColor(city.capacity, city.demand);

            return (
              <motion.div
                key={city.city}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, x: -5 }}
                onClick={() => setSelectedCity(city.city)}
                className={`bg-slate-900/90 backdrop-blur-xl rounded-xl p-4 border border-white/10 cursor-pointer transition-all
                  ${selectedCity === city.city ? 'ring-2 ring-blue-500 shadow-lg shadow-blue-500/50' : 'hover:border-white/20'}`}
                style={{ minWidth: "280px" }}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" style={{ color }} />
                    <h4 className="font-bold text-white">{city.city}</h4>
                  </div>
                  {discount > 0 && (
                    <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-red-500/20">
                      <TrendingDown className="w-3 h-3 text-red-400" />
                      <span className="text-xs font-bold text-red-400">-{discount}%</span>
                    </div>
                  )}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Utilization:</span>
                    <span className="font-medium" style={{ color }}>
                      {utilization.toFixed(0)}%
                    </span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Capacity:</span>
                    <span className="font-medium text-white">{city.capacity}%</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Demand:</span>
                    <span className="font-medium text-white">{city.demand}%</span>
                  </div>
                </div>

                {discount > 20 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-3 pt-3 border-t border-white/10"
                  >
                    <div className="flex items-start gap-2 text-xs text-orange-400">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <p>
                        <strong>Push Sales Here!</strong> Low capacity utilization detected.
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
