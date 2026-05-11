"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sphere, MeshDistortMaterial, Float, Stars, Torus } from "@react-three/drei";
import * as THREE from "three";

function ParticleField({ isDark }: { isDark: boolean }) {
  const ref = useRef<THREE.Points>(null);
  const count = 2000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 60;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 60;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 60;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.005;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.08} color="#00d8ff" transparent opacity={isDark ? 0.6 : 0.15} sizeAttenuation />
    </points>
  );
}

function FloatingOrb({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
  return (
    <Float speed={speed} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[0.8, 64, 64]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0}
          metalness={0.9}
          transparent
          opacity={0.85}
        />
      </Sphere>
    </Float>
  );
}

function CoreRing() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.3;
      ref.current.rotation.z += delta * 0.1;
    }
  });
  return (
    <Torus ref={ref} args={[2.5, 0.04, 16, 120]} position={[0, 0, 0]}>
      <meshStandardMaterial color="#00d8ff" emissive="#00d8ff" emissiveIntensity={1.5} transparent opacity={0.5} />
    </Torus>
  );
}

function CoreRing2() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.25;
      ref.current.rotation.x -= delta * 0.1;
    }
  });
  return (
    <Torus ref={ref} args={[3.2, 0.03, 16, 120]} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
      <meshStandardMaterial color="#00a8cc" emissive="#00a8cc" emissiveIntensity={1.0} transparent opacity={0.4} />
    </Torus>
  );
}

function CentralOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    }
  });
  return (
    <Float speed={1.5} floatIntensity={0.5}>
      <Sphere ref={ref} args={[1.2, 128, 128]}>
        <MeshDistortMaterial
          color="#0a0a1a"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={1}
          envMapIntensity={2}
        />
      </Sphere>
    </Float>
  );
}

function MouseTracker() {
  const { camera } = useThree();
  useFrame((state) => {
    const { mouse } = state;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 1.5, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 1.5 + 1, 0.02);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene({ isDark }: { isDark: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00d8ff" />
      <pointLight position={[-10, -10, -5]} intensity={0.8} color="#00d8ff" />
      <pointLight position={[0, 5, -10]} intensity={0.5} color="#f59e0b" />

      <Stars radius={80} depth={50} count={isDark ? 3000 : 800} factor={3} saturation={0} fade speed={1} />
      <ParticleField isDark={isDark} />
      <CentralOrb />
      <CoreRing />
      <CoreRing2 />
      <FloatingOrb position={[-4, 2, -2]} color="#00a8cc" speed={1.2} />
      <FloatingOrb position={[4, -2, -3]} color="#00d8ff" speed={0.8} />
      <FloatingOrb position={[3, 3, -4]} color="#f59e0b" speed={1.5} />
      <MouseTracker />
    </Canvas>
  );
}
