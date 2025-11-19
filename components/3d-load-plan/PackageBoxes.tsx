"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { generatePackages } from "@/lib/utils";
import * as THREE from "three";

interface Package {
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

export default function PackageBoxes() {
  const [packages] = useState<Package[]>(() => generatePackages(18));
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimating(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <group>
      {packages.map((pkg) => (
        <AnimatedBox key={pkg.id} pkg={pkg} animating={animating} />
      ))}
    </group>
  );
}

function AnimatedBox({ pkg, animating }: { pkg: Package; animating: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [targetPos] = useState(() => ({
    x: pkg.position.x,
    y: pkg.position.y,
    z: pkg.position.z
  }));

  useFrame((state) => {
    if (!meshRef.current) return;

    if (animating) {
      // Animate boxes falling into place
      meshRef.current.position.y = THREE.MathUtils.lerp(
        meshRef.current.position.y,
        targetPos.y,
        0.05
      );
      meshRef.current.rotation.y += 0.02;
    } else {
      // Subtle floating animation when in place
      meshRef.current.position.y = targetPos.y + Math.sin(state.clock.elapsedTime + pkg.id) * 0.02;
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={[targetPos.x, animating ? 10 : targetPos.y, targetPos.z]}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[pkg.width, pkg.height, pkg.depth]} />
      <meshStandardMaterial 
        color={pkg.color} 
        roughness={0.4}
        metalness={0.2}
      />
      {/* Edge lines for better visibility */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(pkg.width, pkg.height, pkg.depth)]} />
        <lineBasicMaterial color="#000000" opacity={0.2} transparent />
      </lineSegments>
    </mesh>
  );
}
