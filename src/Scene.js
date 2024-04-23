import { useFrame, extend, useThree} from "@react-three/fiber";
import * as THREE from "three"
import {useRef} from "react";
import { OrbitControls } from "@react-three/drei";


extend({ OrbitControls: OrbitControls })
const Scene = () => {
    const cubeRef =useRef();
    const planeRef = useRef();

    useFrame((state,delta) => {
        // planeRef.current.rotation.y += delta;
        state.camera.position.x=Math.sin(state.clock.elapsedTime);
    })
    return (
        <>
        <OrbitControls/>
        <mesh ref={planeRef} position-x={-2}>
        <planeGeometry args={[2,2]} />
        <meshBasicMaterial color="orange" side={THREE.DoubleSide} />
        </mesh>
        <mesh ref={cubeRef} position-x={2} >
        <boxGeometry/>
        <meshBasicMaterial color="blue" />
        </mesh>
     
        </>
    )
    
}
export default Scene