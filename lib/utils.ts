import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Simulate bin packing algorithm data with precise grid placement inside the truck
export function generatePackages(count: number = 15) {
  const colors = [
    "#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A",
    "#98D8C8", "#F7DC6F", "#BB8FCE", "#85C1E2"
  ];

  const rows = 3; // front-to-back slots
  const columns = 3; // left-to-right slots
  const layers = 3; // vertical stacking
  const perLayer = rows * columns;
  const maxPackages = rows * columns * layers;
  const totalPackages = Math.min(count, maxPackages);

  const startX = -1.6;
  const startZ = -0.8;
  const xSpacing = 1.6;
  const zSpacing = 0.8;
  const baseY = 0.4;
  const ySpacing = 0.9;

  return Array.from({ length: totalPackages }, (_, index) => {
    const layerIndex = Math.floor(index / perLayer);
    const slotIndex = index % perLayer;
    const rowIndex = Math.floor(slotIndex / columns);
    const columnIndex = slotIndex % columns;

    const width = 0.65 + ((rowIndex + columnIndex) % 3) * 0.1;
    const height = 0.55 + (layerIndex % 2) * 0.15;
    const depth = 0.65 + ((rowIndex + columnIndex) % 2) * 0.1;

    const x = startX + rowIndex * xSpacing;
    const z = startZ + columnIndex * zSpacing;
    const y = baseY + layerIndex * ySpacing;

    return {
      id: index + 1,
      width: Number(width.toFixed(2)),
      height: Number(height.toFixed(2)),
      depth: Number(depth.toFixed(2)),
      color: colors[index % colors.length],
      position: {
        x: Number(x.toFixed(2)),
        y: Number(y.toFixed(2)),
        z: Number(z.toFixed(2))
      }
    };
  });
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
