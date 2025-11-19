"use client";

import { motion } from "framer-motion";
import { Package, TrendingUp, Box, Zap } from "lucide-react";
import { useEffect, useState } from "react";

export default function LoadPlanStats() {
  const [utilization, setUtilization] = useState(0);
  const [packages, setPackages] = useState(0);
  const [weight, setWeight] = useState(0);
  const [efficiency, setEfficiency] = useState(0);

  useEffect(() => {
    // Animate stats counting up
    const timer1 = setInterval(() => {
      setUtilization(prev => prev < 98 ? prev + 2 : 98);
    }, 30);

    const timer2 = setInterval(() => {
      setPackages(prev => prev < 18 ? prev + 1 : 18);
    }, 100);

    const timer3 = setInterval(() => {
      setWeight(prev => prev < 2450 ? prev + 50 : 2450);
    }, 50);

    const timer4 = setInterval(() => {
      setEfficiency(prev => prev < 15.8 ? prev + 0.3 : 15.8);
    }, 80);

    return () => {
      clearInterval(timer1);
      clearInterval(timer2);
      clearInterval(timer3);
      clearInterval(timer4);
    };
  }, []);

  const stats = [
    {
      icon: Box,
      label: "Space Utilization",
      value: `${utilization}%`,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      iconColor: "text-blue-500"
    },
    {
      icon: Package,
      label: "Packages Loaded",
      value: packages.toString(),
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      iconColor: "text-purple-500"
    },
    {
      icon: TrendingUp,
      label: "Total Weight",
      value: `${weight}kg`,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      iconColor: "text-green-500"
    },
    {
      icon: Zap,
      label: "Efficiency Gain",
      value: `+${efficiency.toFixed(1)}%`,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-500"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className={`${stat.bgColor} relative overflow-hidden backdrop-blur-xl rounded-2xl p-6 border border-white/10 shadow-xl h-full flex flex-col justify-between`}
        >
          <span className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.color}`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="space-y-1">
            <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            <p className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.value}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
