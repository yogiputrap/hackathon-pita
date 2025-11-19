import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simulate bin packing algorithm data
export function generatePackages(count: number = 15) {
  const colors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", 
    "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E2"
  ];
  
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    width: Math.random() * 0.8 + 0.4,
    height: Math.random() * 0.8 + 0.4,
    depth: Math.random() * 0.8 + 0.4,
    color: colors[i % colors.length],
    position: {
      x: (Math.random() - 0.5) * 4,
      y: Math.random() * 3,
      z: (Math.random() - 0.5) * 2
    }
  }));
}

// Generate network data for Indonesia routes
export function generateNetworkData() {
  return [
    { city: "Jakarta", lat: -6.2088, lng: 106.8456, capacity: 85, demand: 90, pricing: "high" },
    { city: "Surabaya", lat: -7.2575, lng: 112.7521, capacity: 60, demand: 75, pricing: "medium" },
    { city: "Bandung", lat: -6.9175, lng: 107.6191, capacity: 40, demand: 55, pricing: "low" },
    { city: "Medan", lat: 3.5952, lng: 98.6722, capacity: 30, demand: 45, pricing: "low" },
    { city: "Semarang", lat: -6.9662, lng: 110.4200, capacity: 50, demand: 48, pricing: "high" },
    { city: "Makassar", lat: -5.1477, lng: 119.4327, capacity: 45, demand: 70, pricing: "medium" },
    { city: "Palembang", lat: -2.9761, lng: 104.7754, capacity: 35, demand: 60, pricing: "low" },
    { city: "Tangerang", lat: -6.1783, lng: 106.6319, capacity: 70, demand: 68, pricing: "high" },
  ];
}

// Calculate discount based on capacity and demand
export function calculateDiscount(capacity: number, demand: number): number {
  const utilization = (demand / capacity) * 100;
  if (utilization < 50) return 35;
  if (utilization < 70) return 20;
  if (utilization < 85) return 10;
  return 0;
}

// Get color based on pricing tier
export function getPricingColor(capacity: number, demand: number): string {
  const utilization = (demand / capacity) * 100;
  if (utilization < 50) return "#ef4444"; // Red - High discount
  if (utilization < 70) return "#f59e0b"; // Orange - Medium discount
  if (utilization < 85) return "#eab308"; // Yellow - Low discount
  return "#22c55e"; // Green - No discount
}
