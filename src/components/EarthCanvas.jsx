import React, { Suspense } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { TextGeometry } from "three-stdlib"; // Import TextGeometry from three-stdlib
import * as THREE from "three";
import { OrbitControls, Preload, useGLTF, Html } from "@react-three/drei"; // Import Html if needed

// Extend TextGeometry to make it available for React Three Fiber
extend({ TextGeometry });

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf"); // Replace with your actual model path
  return <primitive object={earth.scene} scale={4} position-y={0} />;
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 500,
        position: [-10, 6, 15], // Adjust camera position
      }}
      style={{
        width: "100%", // Ensure Canvas takes full width
        height: "100%", // Ensure Canvas takes full height
        
        // Add CSS styles here to customize the Canvas appearance


        
      }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      {/* Earth model */}
      <Suspense
        fallback={
          <mesh>
            <textGeometry
              args={["Loading...", { size: 1, height: 0.2 }]} // Example of text geometry
            />
            <meshStandardMaterial attach="material" color="white" />
          </mesh>
        }
      >
        <Earth />
      </Suspense>

      {/* Camera Controls */}
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />

      <Preload all />
    </Canvas>
  );
};

export default EarthCanvas;
