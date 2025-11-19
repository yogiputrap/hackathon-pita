"use client";

import { motion } from "framer-motion";
import { Truck, Brain, BarChart3, Bell, Share2, type LucideIcon } from "lucide-react";
import Button from "../ui/Button";

type HeaderTab = "load-plan" | "pricing" | "network";

interface HeaderProps {
  activeTab: HeaderTab;
  onTabChange: (tab: HeaderTab) => void;
}

const navItems: { id: HeaderTab; label: string; icon: LucideIcon }[] = [
  { id: "load-plan", label: "3D Load Plan", icon: BarChart3 },
  { id: "pricing", label: "Dynamic Pricing", icon: Brain },
  { id: "network", label: "Network Balance", icon: Share2 }
];

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-slate-900/80 border-b border-white/10"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 shadow-lg shadow-blue-500/50">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Logi+
              </h1>
              <p className="text-xs text-gray-400">AI-Driven Yield & Capacity Engine</p>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-3">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <motion.button
                  key={item.id}
                  type="button"
                  onClick={() => onTabChange(item.id)}
                  aria-pressed={isActive}
                  aria-label={`Show ${item.label}`}
                  className={`relative overflow-hidden rounded-2xl border px-4 py-2 text-sm font-semibold transition-all
                    ${isActive
                      ? "text-white border-white/30 shadow-lg shadow-blue-500/30"
                      : "text-gray-300 border-transparent hover:text-white hover:border-white/20"}
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isActive && (
                    <motion.span
                      layoutId="header-active-glow"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-cyan-600/30"
                      transition={{ type: "spring", stiffness: 260, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <item.icon className={`w-4 h-4 ${isActive ? "text-white" : "text-gray-400"}`} />
                    {item.label}
                  </span>
                </motion.button>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="relative p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors"
            >
              <Bell className="w-5 h-5 text-gray-300" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold">
                3
              </span>
            </motion.button>
            <Button variant="primary" size="sm">
              Dashboard
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
