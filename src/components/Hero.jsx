import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, Float } from '@react-three/drei';

function PlaceholderOrchid() {
  const groupRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.2;
    groupRef.current.rotation.z = Math.sin(t * 0.5) * 0.1;
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        {/* Center */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshStandardMaterial color="#FFFFFF" roughness={0.2} metalness={0.1} />
        </mesh>
        
        {/* Petals */}
        {[0, 1, 2, 3, 4].map((i) => (
          <mesh
            key={i}
            position={[
              Math.sin((i / 5) * Math.PI * 2) * 0.6,
              Math.cos((i / 5) * Math.PI * 2) * 0.6,
              -0.1
            ]}
            rotation={[0, 0, -(i / 5) * Math.PI * 2]}
          >
            <capsuleGeometry args={[0.2, 0.8, 16, 16]} />
            <meshStandardMaterial color="#9932CC" roughness={0.3} />
          </mesh>
        ))}
      </Float>
    </group>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center p-8 md:p-16 overflow-hidden">
      {/* Text Content */}
      <div className="z-10 md:w-1/2 flex flex-col items-start text-left space-y-6">
        <div className="glass-panel p-8 rounded-2xl w-full max-w-lg">
          <h2 className="text-xl md:text-2xl text-[#9932CC] font-medium tracking-wide uppercase mb-2">
            Priyanshi Jha
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Detail-oriented <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9932CC] to-pink-400">
              Finance & Accounting Analyst
            </span>
          </h1>
          <p className="text-gray-300 text-lg leading-relaxed">
            Bridging the gap between raw data and strategic decisions. Welcome to Organic Finance.
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <div className="w-full md:w-1/2 h-[50vh] md:h-screen absolute md:relative top-0 right-0 opacity-40 md:opacity-100 z-0 pointer-events-none md:pointer-events-auto">
        <Canvas camera={{ position: [0, 0, 4], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#FFFFFF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#9932CC" />
          <PlaceholderOrchid />
          <Environment preset="city" />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>
    </section>
  );
}
