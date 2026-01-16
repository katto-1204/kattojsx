import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import { motion } from "framer-motion";
import { Logo3D } from "../3d/Logo3D";

const Logo = ({ style }: { style?: any }) => {
  return (
    <motion.div
      className="fixed top-4 left-0 z-50 px-4 sm:top-6 sm:px-6 origin-top-left"
      style={style}
    >
      <motion.div
        className="relative group cursor-pointer"
        whileTap={{ scale: 0.95 }}
      >
        {/* Main 3D Logo Canvas - Transparent background for clean look */}
        <div className="w-[180px] h-[50px] overflow-visible">
          <Canvas camera={{ position: [0, 0, 5], fov: 24 }} dpr={[1, 2]} alpha>
            <ambientLight intensity={1.5} />
            <pointLight position={[5, 5, 5]} intensity={2} />
            <pointLight position={[-5, -5, 5]} intensity={1} color="#ff5500" />
            <Suspense fallback={null}>
              <Environment preset="studio" />
              <Logo3D isStatic scale={1.0} position={[0, 0, 0]} />
            </Suspense>
          </Canvas>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Logo;
