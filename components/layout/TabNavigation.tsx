"use client";

import { motion } from "framer-motion";
import { Box, Map, Network } from "lucide-react";

interface TabNavigationProps {
  activeTab: "load-plan" | "pricing" | "network";
  onTabChange: (tab: "load-plan" | "pricing" | "network") => void;
}

export default function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  const tabs = [
    {
      id: "load-plan" as const,
      label: "3D Load Planning",
      icon: Box,
      description: "Digital Twin & Bin Packing"
    },
    {
      id: "pricing" as const,
      label: "Dynamic Pricing",
      icon: Map,
      description: "Yield Manager Heatmap"
    },
    {
      id: "network" as const,
      label: "Network Balance",
      icon: Network,
      description: "Predictive Analytics"
    }
  ];

  return (
    <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <motion.button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative flex items-center gap-4 px-6 py-4 rounded-2xl border-2 transition-all min-w-[280px]
              ${isActive 
                ? 'bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border-blue-500/50' 
                : 'bg-slate-800/50 border-white/10 hover:border-white/20'
              }`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Active indicator */}
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-cyan-600/30 rounded-2xl"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            <div className={`relative z-10 p-3 rounded-xl ${isActive ? 'bg-gradient-to-br from-blue-600 to-cyan-600' : 'bg-slate-700'}`}>
              <tab.icon className="w-6 h-6 text-white" />
            </div>

            <div className="relative z-10 text-left">
              <h3 className="font-bold text-white">{tab.label}</h3>
              <p className="text-sm text-gray-400">{tab.description}</p>
            </div>

            {/* Glow effect when active */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-2xl bg-blue-500/20 blur-xl"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
