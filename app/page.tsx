"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import TabNavigation from "@/components/layout/TabNavigation";
import LoadPlanStats from "@/components/3d-load-plan/LoadPlanStats";
import IndonesiaMap from "@/components/pricing-heatmap/IndonesiaMap";
import NetworkBalance from "@/components/pricing-heatmap/NetworkBalance";
import InfoPanel from "@/components/layout/InfoPanel";

// Dynamic import for 3D components to avoid SSR issues
const TruckViewer = dynamic(() => import("@/components/3d-load-plan/TruckViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-slate-900 rounded-2xl">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-400">Loading 3D Viewer...</p>
      </div>
    </div>
  )
});

export default function Home() {
  const [activeTab, setActiveTab] = useState<"load-plan" | "pricing" | "network">("load-plan");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
      <main className="container mx-auto px-6 pt-32 pb-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30"
          >
            <span className="text-blue-400 font-semibold">🚀 Powered by AI & Machine Learning</span>
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Transform Your Logistics
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Maximize capacity utilization, optimize pricing strategies, and predict network demand with AI-powered insights
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content Area */}
        <AnimatePresence mode="wait">
          {activeTab === "load-plan" && (
            <motion.section
              key="load-plan"
              id="load-plan"
              aria-labelledby="load-plan-heading"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              {/* Stats */}
              <LoadPlanStats />

              {/* 3D Viewer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative bg-slate-900 rounded-2xl p-6 border border-white/10">
                  <div className="mb-4">
                    <h3 id="load-plan-heading" className="text-2xl font-bold text-white mb-2">3D Load Planning Simulation</h3>
                    <p className="text-gray-400">Real-time bin packing algorithm visualization (Digital Twin)</p>
                  </div>
                  <div className="w-full h-[600px]">
                    <TruckViewer />
                  </div>
                  
                  {/* Info Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 rounded-xl p-4 border border-blue-500/30">
                      <p className="text-sm text-gray-400 mb-1">Algorithm Used</p>
                      <p className="text-white font-bold">3D Bin Packing</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-xl p-4 border border-purple-500/30">
                      <p className="text-sm text-gray-400 mb-1">Processing Time</p>
                      <p className="text-white font-bold">0.23 seconds</p>
                    </div>
                    <div className="bg-gradient-to-br from-green-600/10 to-emerald-600/10 rounded-xl p-4 border border-green-500/30">
                      <p className="text-sm text-gray-400 mb-1">Fill Rate Improvement</p>
                      <p className="text-white font-bold">+18.5%</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.section>
          )}

          {activeTab === "pricing" && (
            <motion.section
              key="pricing"
              id="pricing"
              aria-label="Dynamic pricing heatmap"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl blur-xl opacity-30"></div>
                <div className="relative">
                  <IndonesiaMap />
                </div>
              </div>
            </motion.section>
          )}

          {activeTab === "network" && (
            <motion.section
              key="network"
              id="network"
              aria-label="Network balancing insights"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <NetworkBalance />
            </motion.section>
          )}
        </AnimatePresence>

        {/* Footer Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center text-gray-500 text-sm"
        >
          <p>Built for OPTIMA-POS GLID System • Inspired by DHL, Uber Freight & UPS ORION</p>
        </motion.div>
      </main>

      {/* Info Panel with Tips */}
      {activeTab === "load-plan" && (
        <InfoPanel
          title="3D Load Planning Tips"
          tips={[
            "Drag to rotate the 3D truck view",
            "Scroll to zoom in/out",
            "Watch the Tetris-style animation as packages load",
            "AI optimizes space utilization to 98%"
          ]}
        />
      )}
      {activeTab === "pricing" && (
        <InfoPanel
          title="Dynamic Pricing Guide"
          tips={[
            "Red areas = High discount opportunities (>30%)",
            "Click on city markers to see details",
            "Routes with low utilization get automatic flash deals",
            "Revenue optimization happens in real-time"
          ]}
        />
      )}
      {activeTab === "network" && (
        <InfoPanel
          title="Network Balancing Insights"
          tips={[
            "AI predicts load changes 7 days ahead",
            "High priority routes need immediate action",
            "Red = Decreasing demand, Green = Increasing demand",
            "System proactively contacts sales team"
          ]}
        />
      )}
    </div>
  );
}
