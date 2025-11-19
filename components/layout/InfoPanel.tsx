"use client";

import { motion } from "framer-motion";
import { Info, X } from "lucide-react";
import { useState } from "react";

interface InfoPanelProps {
  title: string;
  tips: string[];
}

export default function InfoPanel({ title, tips }: InfoPanelProps) {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) {
    return (
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 p-4 rounded-full bg-gradient-to-br from-blue-600 to-cyan-600 shadow-2xl shadow-blue-500/50 z-40"
      >
        <Info className="w-6 h-6 text-white" />
      </motion.button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      className="fixed bottom-6 right-6 max-w-md bg-slate-900/95 backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-2xl z-40"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600">
            <Info className="w-5 h-5 text-white" />
          </div>
          <h3 className="font-bold text-white">{title}</h3>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-start gap-2 text-sm text-gray-300"
          >
            <span className="text-blue-400 mt-1">•</span>
            <span>{tip}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
