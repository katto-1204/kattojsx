import { Canvas } from "@react-three/fiber";
import { Environment, PerspectiveCamera, ContactShadows } from "@react-three/drei";
import { Logo3D } from "./Logo3D";
import { Suspense } from "react";

import { useState } from "react";
import { useMotionValueEvent } from "framer-motion";

export function HeroScene({ scrollProgress }: { scrollProgress: any }) {
    const [progress, setProgress] = useState(0);

    useMotionValueEvent(scrollProgress, "change", (latest: number) => {
        // console.log("Progress:", latest); // Use in dev if needed
        setProgress(latest);
    });

    return (
        <div className="w-full h-full fixed inset-0 z-30 pointer-events-none touch-none" style={{ pointerEvents: 'none' }}>
            <Canvas
                className="pointer-events-none touch-none"
                style={{ pointerEvents: 'none' }}
                dpr={[1, 2]}
                shadows
                eventSource={document.body}
                eventPrefix="client"
            >
                <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={35} />
                <ambientLight intensity={2} />
                <directionalLight position={[10, 10, 10]} intensity={2} castShadow />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={3} />
                <pointLight position={[0, -5, 5]} intensity={1.5} color="#ff5500" />
                <Suspense fallback={null}>
                    <Environment preset="studio" />
                    <group position={[0, 0, 0]}>
                        <Logo3D scale={0.4} scrollProgress={progress} />
                    </group>
                </Suspense>
            </Canvas>
        </div>
    );
}
