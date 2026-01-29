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

function LoadingSpinner() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#888888" wireframe />
    </mesh>
  );
}

/**
 * A 3D model viewer component that displays GLTF/GLB 3D models with interactive controls.
 * 
 * @param modelPath - Path to the GLTF or GLB model file (relative to public directory)
 * @param scale - Scale factor for the model (default: 1)
 * @param position - Position of the model in 3D space [x, y, z] (default: [0, 0, 0])
 * @param className - Additional CSS classes for the wrapper div
 * @param cameraPosition - Initial camera position [x, y, z] (default: [0, 0, 5])
 * @param enableZoom - Enable zoom controls (default: true)
 * @param enableRotate - Enable rotation controls (default: true)
 * @param enablePan - Enable pan controls (default: true)
 * @param backgroundColor - Background color of the canvas (default: "#f5f5f4")
 * @param ariaLabel - Accessible label for the 3D model viewer
 */
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
  ariaLabel?: string;
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
  ariaLabel = "3D Model Viewer",
}: ModelViewerProps) {
  return (
    <div 
      className={`w-full h-full ${className}`}
      role="img"
      aria-label={ariaLabel}
    >
      <Canvas style={{ background: backgroundColor }}>
        <PerspectiveCamera
          makeDefault
          position={cameraPosition}
          fov={50}
        />
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <Suspense fallback={<LoadingSpinner />}>
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
