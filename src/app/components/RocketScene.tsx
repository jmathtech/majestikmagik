'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const RocketScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rocketRef = useRef<THREE.Group | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const rocketZ = -10; // Z-position of the rocket (further back)
  const cameraZ = 5;   // Z-position of the camera

  const initializeScene = useCallback((currentMount: HTMLDivElement) => {
    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = cameraZ;
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 7);
    scene.add(directionalLight);

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(
      '/models/rocket.glb', // Path relative to the public folder
      (gltf) => {
        const loadedRocket = gltf.scene;
        loadedRocket.scale.set(0.3, 0.3, 0.3); // Adjust scale as needed

        const vFOV = THREE.MathUtils.degToRad(camera.fov);
        const visibleHeightAtZ = 2 * Math.tan(vFOV / 2) * Math.abs(camera.position.z - rocketZ);
        const visibleWidthAtZ = visibleHeightAtZ * camera.aspect;

        // *** MODIFICATION START ***
        // Initial position: Start off-screen to the left
        loadedRocket.position.set(
          -(visibleWidthAtZ / 2) - 3, // Start off-screen left by a bit
          (Math.random() - 0.5) * (visibleHeightAtZ / 3), // Randomize Y-position
          rocketZ
        );

        // Rotation to point diagonally right
        // Adjust these values to fine-tune the diagonal angle
        loadedRocket.rotation.z = Math.PI / 12; // Tilt slightly nose-up (or down, depending on model orientation)
        loadedRocket.rotation.y = -Math.PI / 8; // Adjust yaw to point towards screen bottom-right
        loadedRocket.rotation.x = Math.PI / 12; // Adjust pitch for a slight upward angle relative to its own axis
        // *** MODIFICATION END ***

        scene.add(loadedRocket);
        rocketRef.current = loadedRocket;
      },
      undefined,
      (error) => {
        console.error('Error loading rocket model:', error);
      }
    );
  }, []); // No dependencies, initialize once

  const animate = useCallback(() => {
    animationFrameIdRef.current = requestAnimationFrame(animate);

    const rocket = rocketRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    const scene = sceneRef.current;

    if (rocket && camera && renderer && scene) {
      const speed = 0.05; // Adjust speed of rocket

      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const currentRocketZ = rocket.position.z;
      const visibleHeightAtZ = 2 * Math.tan(vFOV / 2) * Math.abs(camera.position.z - currentRocketZ);
      const visibleWidthAtZ = visibleHeightAtZ * camera.aspect;

      // *** MODIFICATION START ***
      rocket.position.x += speed; // Move rocket from left to right
      rocket.rotation.y += 0.005; // Gentle rotation (adjust for speed of spin)

      // Reset rocket position when it goes off-screen right
      if (rocket.position.x > (visibleWidthAtZ / 2) + 3) { // Adjust threshold as needed
        rocket.position.x = -(visibleWidthAtZ / 2) - 3; // Reset to off-screen left
        rocket.position.y = (Math.random() - 0.5) * (visibleHeightAtZ / 3); // Randomize Y
        rocket.rotation.y = Math.random() * Math.PI; // Randomize rotation (optional)
      }
      // *** MODIFICATION END ***

      renderer.render(scene, camera);
    }
  }, []);


  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    initializeScene(currentMount);
    animate();

    const handleResize = () => {
      if (currentMount && cameraRef.current && rendererRef.current) {
        const cam = cameraRef.current;
        const rend = rendererRef.current;
        cam.aspect = currentMount.clientWidth / currentMount.clientHeight;
        cam.updateProjectionMatrix();
        rend.setSize(currentMount.clientWidth, currentMount.clientHeight);
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      if (rendererRef.current && currentMount && rendererRef.current.domElement) {
        currentMount.removeChild(rendererRef.current.domElement);
      }
      rendererRef.current?.dispose();
      // Dispose scene objects if necessary (geometries, materials)
      rocketRef.current = null;
      cameraRef.current = null;
      sceneRef.current = null;
      rendererRef.current = null;
    };
  }, [initializeScene, animate]);

  return (
    <div
      ref={mountRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0, // Behind hero content but above page background
        overflow: 'hidden',
      }}
    />
  );
};

export default RocketScene;