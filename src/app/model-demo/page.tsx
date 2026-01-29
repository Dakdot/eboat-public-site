import { ModelViewer } from "@/components/model-viewer";

export default function ModelViewerDemo() {
  return (
    <div className="w-full min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <div>
          <h1 className="text-4xl font-bold font-inter mb-2">3D Model Viewer</h1>
          <p className="text-gray-600">
            This component can display 3D models in GLTF/GLB format.
          </p>
        </div>
        
        <div className="border rounded-lg shadow-lg overflow-hidden">
          <div className="bg-gray-100 p-4 border-b">
            <h2 className="text-xl font-semibold">Example 3D Model</h2>
            <p className="text-sm text-gray-600">
              Interact with the model: rotate, zoom, and pan
            </p>
          </div>
          <div className="h-[500px]">
            <ModelViewer
              modelPath="/models/example.gltf"
              scale={1}
              position={[0, 0, 0]}
              cameraPosition={[0, 2, 5]}
              enableZoom={true}
              enableRotate={true}
              enablePan={true}
              backgroundColor="#f5f5f4"
            />
          </div>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-2xl font-bold font-inter">Features</h2>
          <ul className="space-y-2">
            <li>Interactive controls: rotate, zoom, and pan</li>
            <li>Supports GLTF/GLB 3D model formats</li>
            <li>Customizable camera position and model scale</li>
            <li>Adjustable lighting and background color</li>
            <li>Responsive and works on all screen sizes</li>
          </ul>

          <h2 className="text-2xl font-bold font-inter mt-8">Usage</h2>
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
{`import { ModelViewer } from "@/components/model-viewer";

<ModelViewer
  modelPath="/models/your-model.glb"
  scale={1}
  position={[0, 0, 0]}
  cameraPosition={[0, 2, 5]}
  enableZoom={true}
  enableRotate={true}
  enablePan={true}
  backgroundColor="#f5f5f4"
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
