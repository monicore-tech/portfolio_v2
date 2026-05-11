"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Box, Float } from "@react-three/drei";
import * as THREE from "three";

function Primitive({ type, position, scale, speed }: any) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x += 0.005 * speed;
      ref.current.rotation.y += 0.005 * speed;
    }
  });

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={0.5}>
      {type === "sphere" ? (
        <Sphere ref={ref} args={[1, 32, 32]} position={position} scale={scale}>
          <meshStandardMaterial
            color="#4E9BA6"
            transparent
            opacity={0.3}
            wireframe
          />
        </Sphere>
      ) : (
        <Box ref={ref} args={[1, 1, 1]} position={position} scale={scale}>
          <meshStandardMaterial
            color="#4E9BA6"
            transparent
            opacity={0.2}
          />
        </Box>
      )}
    </Float>
  );
}

export default function AmbientTexture() {
  const primitives = useMemo(() => [
    { type: "sphere", position: [-2, 1, -2], scale: 1.2, speed: 0.2 },
    { type: "box", position: [2, -1, -3], scale: 1.5, speed: 0.15 },
    { type: "sphere", position: [0, 0, -5], scale: 2, speed: 0.1 },
    { type: "box", position: [-3, -2, -1], scale: 0.8, speed: 0.3 },
  ], []);

  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#4E9BA6" intensity={1} />
        {primitives.map((p, i) => (
          <Primitive key={i} {...p} />
        ))}
      </Canvas>
    </div>
  );
}
