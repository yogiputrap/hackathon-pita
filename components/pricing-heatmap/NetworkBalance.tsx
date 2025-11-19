"use client";

import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Activity } from "lucide-react";

export default function NetworkBalance() {
  
  const predictions = [
    {
      route: "Jakarta → Surabaya",
      currentLoad: 85,
      predictedLoad: 45,
      trend: "down",
      action: "Increase marketing campaign",
      priority: "high"
    },
    {
      route: "Bandung → Medan",
      currentLoad: 40,
      predictedLoad: 75,
      trend: "up",
      action: "Prepare additional capacity",
      priority: "medium"
    },
    {
      route: "Semarang → Makassar",
      currentLoad: 50,
      predictedLoad: 68,
      trend: "up",
      action: "Optimize pricing strategy",
      priority: "low"
    },
    {
      route: "Palembang → Jakarta",
      currentLoad: 35,
      predictedLoad: 30,
      trend: "down",
      action: "Push flash deals to corporate clients",
      priority: "high"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 border border-white/10">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Predictive Network Balancing</h3>
            <p className="text-gray-400">AI-powered load forecasting for next 7 days</p>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/20 border border-green-500/30">
            <Activity className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-semibold">System Active</span>
          </div>
        </div>
      </div>

      {/* Predictions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {predictions.map((prediction, index) => {
          const isIncreasing = prediction.trend === "up";
          const isHighPriority = prediction.priority === "high";

          return (
            <motion.div
              key={prediction.route}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 border transition-all
                ${isHighPriority ? 'border-red-500/50 shadow-lg shadow-red-500/20' : 'border-white/10'}
              `}
            >
              {/* Route Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-lg font-bold text-white mb-1">{prediction.route}</h4>
                  <div className="flex items-center gap-2">
                    {isHighPriority && (
                      <AlertTriangle className="w-4 h-4 text-red-400" />
                    )}
                    <span className={`text-sm font-medium ${isHighPriority ? 'text-red-400' : 'text-gray-400'}`}>
                      {prediction.priority.toUpperCase()} PRIORITY
                    </span>
                  </div>
                </div>
                {isIncreasing ? (
                  <TrendingUp className="w-8 h-8 text-green-500" />
                ) : (
                  <TrendingDown className="w-8 h-8 text-red-500" />
                )}
              </div>

              {/* Load Comparison */}
              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Current Load</span>
                    <span className="text-sm font-bold text-white">{prediction.currentLoad}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${prediction.currentLoad}%` }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-400">Predicted Load (7 days)</span>
                    <span className={`text-sm font-bold ${isIncreasing ? 'text-green-400' : 'text-red-400'}`}>
                      {prediction.predictedLoad}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${prediction.predictedLoad}%` }}
                      transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                      className={`h-full ${isIncreasing ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-orange-500'}`}
                    />
                  </div>
                </div>
              </div>

              {/* Change Indicator */}
              <div className={`flex items-center gap-2 mb-4 px-3 py-2 rounded-lg ${isIncreasing ? 'bg-green-500/10' : 'bg-red-500/10'}`}>
                {isIncreasing ? (
                  <>
                    <TrendingUp className="w-4 h-4 text-green-400" />
                    <span className="text-sm text-green-400 font-medium">
                      +{Math.abs(prediction.predictedLoad - prediction.currentLoad)}% increase expected
                    </span>
                  </>
                ) : (
                  <>
                    <TrendingDown className="w-4 h-4 text-red-400" />
                    <span className="text-sm text-red-400 font-medium">
                      -{Math.abs(prediction.predictedLoad - prediction.currentLoad)}% decrease expected
                    </span>
                  </>
                )}
              </div>

              {/* Recommended Action */}
              <div className="flex items-start gap-3 p-4 rounded-xl bg-slate-900/50 border border-white/10">
                <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400 mb-1">Recommended Action:</p>
                  <p className="text-white font-medium">{prediction.action}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-2xl p-6 border border-blue-500/30"
        >
          <div className="flex items-center gap-3 mb-2">
            <Activity className="w-6 h-6 text-blue-400" />
            <span className="text-gray-400">Active Routes</span>
          </div>
          <p className="text-3xl font-bold text-white">24</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 rounded-2xl p-6 border border-green-500/30"
        >
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 text-green-400" />
            <span className="text-gray-400">Avg. Utilization</span>
          </div>
          <p className="text-3xl font-bold text-white">72%</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-2xl p-6 border border-purple-500/30"
        >
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-6 h-6 text-purple-400" />
            <span className="text-gray-400">High Priority</span>
          </div>
          <p className="text-3xl font-bold text-white">2</p>
        </motion.div>
      </div>
    </div>
  );
}
