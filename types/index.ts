export interface Package {
  id: number;
  width: number;
  height: number;
  depth: number;
  color: string;
  position: {
    x: number;
    y: number;
    z: number;
  };
}

export interface CityData {
  city: string;
  lat: number;
  lng: number;
  capacity: number;
  demand: number;
  pricing: "high" | "medium" | "low";
}

export interface RouteData {
  route: string;
  currentLoad: number;
  predictedLoad: number;
  trend: "up" | "down";
  action: string;
  priority: "high" | "medium" | "low";
}

export interface LoadPlanStats {
  utilization: number;
  packages: number;
  weight: number;
  efficiency: number;
}
