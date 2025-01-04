import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

// Glowing Sphere Component
const GlowingSphere = ({ position, color, onClick }) => {
  const sphereRef = useRef();

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (sphereRef.current) {
      sphereRef.current.position.y = Math.sin(elapsed) * 0.5;
    }
  });

  return (
    <mesh ref={sphereRef} position={position} onClick={onClick}>
      <Sphere args={[1, 32, 32]}>
        <MeshDistortMaterial color={color} emissive={color} emissiveIntensity={1} distort={0.3} speed={2} />
      </Sphere>
    </mesh>
  );
};

// Particle Effect Background
const ParticleBackground = () => (
  <Stars radius={100} depth={50} count={500} factor={4} saturation={0.8} fade />
);

const InteractiveScene = () => {
  const handleClick = (id) => {
    alert(`Clicked on Sphere ${id}`);
  };

  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} />
      <ParticleBackground />
      <OrbitControls enableZoom enablePan autoRotate autoRotateSpeed={0.5} />
      <GlowingSphere position={[0, 0, 0]} color="blue" onClick={() => handleClick(1)} />
      <GlowingSphere position={[3, 2, -1]} color="green" onClick={() => handleClick(2)} />
      <GlowingSphere position={[-3, -2, 1]} color="red" onClick={() => handleClick(3)} />
    </Canvas>
  );
};

export default InteractiveScene;
