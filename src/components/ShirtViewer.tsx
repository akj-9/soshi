// src/components/ShirtViewer.tsx
'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import * as THREE from 'three'

function ShirtModel({ rotationY }: { rotationY: number }) {
  const { scene } = useGLTF('/models/shirt.glb')
  const ref = useRef<THREE.Group>(null!)

  useFrame(() => {
    ref.current.rotation.y = rotationY
  })

  return <primitive ref={ref} object={scene} scale={2} position={[0, -1, 0]} />
}

export default function ShirtViewer() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    container: containerRef,
  })

  const rotationY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 2])
  const smoothY = useSpring(rotationY, { damping: 10, stiffness: 100 })

  return (
    <section ref={containerRef} className="h-screen sticky top-0">
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} />
        <ShirtModel rotationY={smoothY.get()} />
        <OrbitControls enableZoom={false} enableRotate={false} />
      </Canvas>
    </section>
  )
}
