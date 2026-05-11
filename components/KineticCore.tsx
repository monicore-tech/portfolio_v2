"use client";

import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, PerspectiveCamera, Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

const ROLES = ["WEB DEVELOPER", "DATA ANALYST"];

function KineticText() {
  const [index, setIndex] = useState(0);
  const textRef = useRef<THREE.Group>(null);
  const meshRef = useRef<any>(null);

  // Morphing logic using GSAP
  useEffect(() => {
    const interval = setInterval(() => {
      if (!textRef.current) return;

      const nextIndex = (index + 1) % ROLES.length;

      const tl = gsap.timeline();

      // Rotate and scale effect for morphing
      tl.to(textRef.current.rotation, {
        x: Math.PI * 2,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setIndex(nextIndex);
          textRef.current!.rotation.x = 0;
        }
      });

      tl.to(textRef.current.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
        duration: 0.5,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      }, 0);

    }, 4000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <group ref={textRef}>
      <Text
        ref={meshRef}
        fontSize={0.5}
        maxWidth={4}
        lineHeight={1}
        letterSpacing={0.02}
        textAlign="center"
        font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuGkyMZhrib2Bg-4.ttf" // Inter Black
        anchorX="center"
        anchorY="middle"
      >
        {ROLES[index]}
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.4}
          roughness={0.1}
          metalness={0.9}
          transmission={0.8}
          thickness={0.5}
          emissive="#4E9BA6"
          emissiveIntensity={0.5}
          envMapIntensity={1}
        />
      </Text>
    </group>
  );
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Parallax Tilt
      const targetRotationX = -mouse.y * 0.3;
      const targetRotationY = mouse.x * 0.3;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotationX, 0.05);
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.05);
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <KineticText />
      </Float>

      {/* Visual accents */}
      <mesh position={[0, 0, -0.5]}>
        <planeGeometry args={[5, 2]} />
        <meshStandardMaterial
          color="#4E9BA6"
          transparent
          opacity={0.05}
          blending={THREE.AdditiveBlending}
        />
      </mesh>
    </group>
  );
}

export default function KineticCore() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  if (prefersReducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center p-8 bg-black">
        <h2 className="text-4xl font-black text-white text-center tracking-tighter">
          WEB DEVELOPER<br />
          <span className="text-[#4E9BA6]">&</span> DATA ANALYST
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full h-full cursor-grab active:cursor-grabbing">
      <Canvas dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} color="#4E9BA6" intensity={1.5} />
        <pointLight position={[-10, -10, -10]} color="#ffffff" intensity={0.5} />
        <spotLight position={[0, 5, 10]} angle={0.15} penumbra={1} intensity={2} color="#4E9BA6" />
        <Scene />
      </Canvas>
    </div>
  );
}
