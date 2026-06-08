import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Torus, Sphere } from "@react-three/drei";

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 4.2] }}>
      
      <ambientLight intensity={1.2} />
      <pointLight position={[5, 5, 5]} />

      {/* MAIN CORE RING */}
      <Float speed={1.2} rotationIntensity={1.5} floatIntensity={1}>
        <Torus args={[1, 0.35, 20, 120]}>
          <meshStandardMaterial
            color="#00ffff"
            wireframe
          />
        </Torus>
      </Float>

      {/* CORE PULSE (FIXED POSITION) */}
      <Float speed={1.8} rotationIntensity={2} floatIntensity={0.8}>
        <Sphere args={[0.25, 32, 32]} position={[0.6, 0, 0]}>
          <meshStandardMaterial color="#7c3aed" emissive="#7c3aed" />
        </Sphere>
      </Float>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}