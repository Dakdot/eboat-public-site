"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

interface ModelProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
}

function Model({ modelPath, scale = 1, position = [0, 0, 0] }: ModelProps) {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={scale} position={position} />;
}

interface ModelViewerProps {
  modelPath: string;
  scale?: number;
  position?: [number, number, number];
  className?: string;
  cameraPosition?: [number, number, number];
  enableZoom?: boolean;
  enableRotate?: boolean;
  enablePan?: boolean;
  backgroundColor?: string;
}

export function ModelViewer({
  modelPath,
  scale = 1,
  position = [0, 0, 0],
  className = "",
  cameraPosition = [0, 0, 5],
  enableZoom = true,
  enableRotate = true,
  enablePan = true,
  backgroundColor = "#f5f5f4",
}: ModelViewerProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas style={{ background: backgroundColor }}>
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={50}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <Model modelPath={modelPath} scale={scale} position={position} />
        </Suspense>
        <OrbitControls
          enableZoom={enableZoom}
          enableRotate={enableRotate}
          enablePan={enablePan}
        />
      </Canvas>
    </div>
  );
}
