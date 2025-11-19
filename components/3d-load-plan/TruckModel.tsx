"use client";

import { useRef } from "react";
import { Mesh } from "three";

export default function TruckModel() {
  const truckRef = useRef<Mesh>(null);

  return (
    <group position={[0, 0, 0]}>
      {/* Truck Container (transparent for "Digital Twin" effect) */}
      <mesh ref={truckRef} position={[0, 1.5, 0]} castShadow>
        <boxGeometry args={[5, 3, 2.5]} />
        <meshPhysicalMaterial 
          color="#3b82f6"
          transparent
          opacity={0.15}
          roughness={0.1}
          metalness={0.1}
          thickness={0.5}
          transmission={0.9}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
      
      {/* Truck Frame/Wireframe */}
      <lineSegments position={[0, 1.5, 0]}>
        <edgesGeometry args={[new THREE.BoxGeometry(5, 3, 2.5)]} />
        <lineBasicMaterial color="#60a5fa" linewidth={2} />
      </lineSegments>

      {/* Truck Cabin */}
      <mesh position={[-2.8, 1, 0]} castShadow>
        <boxGeometry args={[0.6, 2, 2.5]} />
        <meshStandardMaterial color="#1e40af" />
      </mesh>

      {/* Wheels */}
      {[-2.5, -1.5, 1.5, 2.5].map((z, i) => (
        <group key={i}>
          <mesh position={[-2.5, 0.3, z > 0 ? 1 : -1]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
            <meshStandardMaterial color="#1f2937" />
          </mesh>
          <mesh position={[2.5, 0.3, z > 0 ? 1 : -1]} rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.3, 0.3, 0.2, 16]} />
            <meshStandardMaterial color="#1f2937" />
          </mesh>
        </group>
      ))}
    </group>
  );
}

declare global {
  const THREE: typeof import('three');
}
