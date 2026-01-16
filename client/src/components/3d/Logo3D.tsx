import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function Logo3D({ scrollProgress = 0, ...props }: any) {
    const meshRef = useRef<THREE.Group>(null);
    const [hovered, setHover] = useState(false);

    // Switch to the v24 TTF which is often more reliable for Drei Text
    const fontUrl = "https://fonts.gstatic.com/s/syne/v24/8vIS7w4qzmVxsWxjBZRjr0FKM_24vj6k.ttf";

    // Load favicon texture with error handling safety
    const texture = useTexture("/favicon.png");

    // Sound Effect Logic (Web Audio API)
    const playHoverSound = () => {
        try {
            const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.type = "sine";
            osc.frequency.setValueAtTime(400, ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);

            gain.gain.setValueAtTime(0.1, ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

            osc.start();
            osc.stop(ctx.currentTime + 0.15);
        } catch (e) {
            // Ignore auto-play strict errors
        }
    };

    // Create Pill Shape
    const pillShape = useMemo(() => {
        const shape = new THREE.Shape();
        const width = 5.2;
        const height = 1.4;
        const radius = height / 2;
        const x = -width / 2;
        const y = -height / 2;

        shape.moveTo(x + radius, y);
        shape.lineTo(x + width - radius, y);
        shape.quadraticCurveTo(x + width, y, x + width, y + radius);
        shape.lineTo(x + width, y + height - radius);
        shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        shape.lineTo(x + radius, y + height);
        shape.quadraticCurveTo(x, y + height, x, y + height - radius);
        shape.lineTo(x, y + radius);
        shape.quadraticCurveTo(x, y, x + radius, y);

        return shape;
    }, []);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Smooth mouse tracking (reduced as scroll progress increases)
        const mouseEffect = 1 - Math.min(scrollProgress * 5, 1);
        const mouseX = state.mouse.x * 0.4 * mouseEffect;
        const mouseY = state.mouse.y * 0.4 * mouseEffect;

        // Scroll transformation
        // Map scroll to progress: 0 to 1
        const progress = Math.min(scrollProgress / 0.25, 1);

        // Target coordinates
        // Move significantly left (-9.5) and Up (5.2) to account for parent scale (0.45)
        const targetX = THREE.MathUtils.lerp(0, -9.5, progress);
        const targetY = THREE.MathUtils.lerp(1.2, 5.2, progress);
        const targetZ = 0;

        // Scale logic
        const targetScale = hovered ? 1.05 : 1;
        const scrollScale = THREE.MathUtils.lerp(1, 0.35, progress);
        const finalScale = targetScale * scrollScale;

        // Opacity Logic
        // Persistent visibility - no fade out
        const opacity = 1;

        meshRef.current.scale.lerp(new THREE.Vector3(finalScale, finalScale, finalScale), 0.1);
        meshRef.current.position.set(targetX, targetY, targetZ);

        // Rotation Logic
        // Mouse tilt on X (Vertical tilt) - kept small
        meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, -mouseY, 0.1);

        // Y Rotation (Horizontal spin) -> Mouse + Scroll spin (Left to Right)
        // Scroll spin: 0 to 360 (2PI)
        const targetRotationY = mouseX + (Math.PI * 2 * progress);
        // We accumulate rotation, so we can just set it or lerp to it. 
        // Since 'progress' is absolute, target is absolute.
        meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetRotationY, 0.1);

        // Reset Z rotation (no steering wheel spin)
        meshRef.current.rotation.z = 0;

        // Apply opacity to children
        meshRef.current.traverse((child) => {
            if ((child as any).isMesh && (child as any).material) {
                const mat = (child as any).material;
                mat.transparent = true;
                mat.opacity = opacity;
                child.visible = opacity > 0.01;
            }
        });
    });

    return (
        <group {...props} dispose={null}>
            <Float
                speed={2}
                rotationIntensity={0.1}
                floatIntensity={0.2}
            >
                <group
                    ref={meshRef}
                    onPointerOver={() => {
                        setHover(true);
                        playHoverSound();
                    }}
                    onPointerOut={() => setHover(false)}
                >
                    {/* Main Pill Body - Flat faces (Extrude with bevel: false) */}
                    <mesh position={[0, 0, -0.075]}>
                        <extrudeGeometry
                            args={[pillShape, {
                                depth: 0.15,
                                bevelEnabled: false,
                                steps: 1
                            }]}
                        />
                        <meshStandardMaterial
                            color="#111111"
                            metalness={0.8}
                            roughness={0.2}
                            envMapIntensity={1}
                            transparent
                        />
                    </mesh>

                    {/* Content Group - Centered visually */}
                    <group position={[-0.2, 0, 0.08]}>
                        {/* Logo Coin Section */}
                        <group position={[-1.6, 0, 0.01]}>
                            <mesh rotation={[Math.PI / 2, 0, 0]}>
                                <cylinderGeometry args={[0.5, 0.5, 0.04, 64]} />
                                <meshStandardMaterial color="#ff5500" transparent />
                            </mesh>
                            <mesh position={[0, 0, 0.025]}>
                                <circleGeometry args={[0.48, 64]} />
                                <meshBasicMaterial map={texture} transparent={true} />
                            </mesh>
                        </group>

                        {/* Branding Text */}
                        <group position={[-0.6, 0, 0.01]}>
                            <Text
                                font={fontUrl}
                                position={[0, -0.05, 0]}
                                fontSize={0.55}
                                anchorX="left"
                                anchorY="middle"
                                color="white"
                                letterSpacing={-0.02}
                            >
                                KATTO
                            </Text>
                            {/* JSX - UNDER the 'O' */}
                            <Text
                                font={fontUrl}
                                position={[1.75, -0.35, 0]}
                                fontSize={0.2}
                                anchorX="center"
                                anchorY="middle"
                                color="#ff5500"
                            >
                                .JSX
                            </Text>
                        </group>
                    </group>

                    {/* Back Text: "HIRE ME" */}
                    <group position={[0, 0, -0.16]} rotation={[0, Math.PI, 0]}>
                        <Text
                            font={fontUrl}
                            position={[0, 0, 0]}
                            fontSize={0.4}
                            anchorX="center"
                            anchorY="middle"
                            color="white"
                            letterSpacing={0.05}
                        >
                            HIRE ME
                        </Text>
                    </group>
                </group>
            </Float>
        </group>
    );
}
