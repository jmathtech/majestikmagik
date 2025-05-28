'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

interface MoonSceneProps {
  modelPath: string; // Path to the .glb model, e.g., '/models/moon.glb'
  spinSpeed?: number; // Optional: controls rotation speed, positive for one direction, negative for other
  
}

const MoonScene: React.FC<MoonSceneProps> = ({
  modelPath,
  spinSpeed = 0.001, // Default to a very slow spin
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const modelRef = useRef<THREE.Group | null>(null); // For the loaded moon model
  const animationFrameIdRef = useRef<number | null>(null);

  // Initial camera Z position - how far the camera is from the scene's origin
  const cameraZ = 5; // Adjust this value to zoom in/out

  const initializeScene = useCallback((currentMount: HTMLDivElement) => {
    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      55, // Field of View (degrees)
      currentMount.clientWidth / currentMount.clientHeight, // Aspect Ratio
      0.1, // Near clipping plane
      1000 // Far clipping plane
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.05); // Soft white light
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.99);
    directionalLight.position.set(5, 10, 7.5); // Position the light to cast on the model
    scene.add(directionalLight);

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(
      modelPath,
      (gltf) => {
        const loadedModel = gltf.scene;
        // Center the model and scale if necessary
        // Example: loadedModel.scale.set(0.5, 0.5, 0.5);
        loadedModel.position.set(0, 0, 0);

        scene.add(loadedModel);
        modelRef.current = loadedModel;
      },
      undefined, // onProgress callback (optional)
      (error) => {
        console.error(`Error loading GLB model from ${modelPath}:`, error);
      }
    );
  }, [modelPath, cameraZ]); // Dependencies for useCallback

  const animate = useCallback(() => {
    animationFrameIdRef.current = requestAnimationFrame(animate);

    const model = modelRef.current;
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;

    if (model && renderer && scene && camera) {
      // Spin the model around its Y-axis
      model.rotation.y += spinSpeed;

      // Optionally, spin on other axes:
      // model.rotation.x += spinSpeed * 0.5;

      renderer.render(scene, camera);
    }
  }, [spinSpeed]); // Dependency for useCallback

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Initialize scene only if renderer isn't already set up
    if (!rendererRef.current) {
        initializeScene(currentMount);
    }
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

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
        animationFrameIdRef.current = null;
      }

      const currentRenderer = rendererRef.current;
      const currentScene = sceneRef.current;
      const mountedElement = mountRef.current; // Use the ref's value at the time of cleanup

      // Dispose of Three.js objects to free resources
      if (currentRenderer) {
        if (currentRenderer.domElement && mountedElement && mountedElement.contains(currentRenderer.domElement)) {
            mountedElement.removeChild(currentRenderer.domElement);
        }
        currentRenderer.dispose();
        rendererRef.current = null;
      }

      if (currentScene) {
        currentScene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry?.dispose();
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else if (object.material) {
              object.material.dispose();
            }
          }
        });
        sceneRef.current = null;
      }

      modelRef.current = null;
      cameraRef.current = null;
    };
  }, [initializeScene, animate]); // Re-run effect if these functions change

  return (
    <div
      ref={mountRef}
      style={{
        width: '100%', // Takes full width of its parent
        height: '100%', // Takes full height of its parent
        overflow: 'hidden', // Ensures content doesn't spill
      }}
    />
  );
};

export default MoonScene;