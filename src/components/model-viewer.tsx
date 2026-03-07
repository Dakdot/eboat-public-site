"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";

export const ModelViewer = () => {
  const modelRef = useRef(null);

  const [modelSrc, setModelSrc] = useState("/models/boat-opt.glb");

  return (
    
  );
};
