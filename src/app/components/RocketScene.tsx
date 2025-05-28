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

  const rocketZ = -20; // Z-position of the rocket (further back)
  const cameraZ = 2;   // Z-position of the camera

  const initializeScene = useCallback((currentMount: HTMLDivElement) => {
    // Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      85,
      currentMount.clientWidth / currentMount.clientHeight,
      1,
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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.002);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.12);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // GLTF Loader
    const loader = new GLTFLoader();
    loader.load(
      '/models/rocket-ship.glb', // Path relative to the public folder
      (gltf) => {
        const loadedRocket = gltf.scene;
        loadedRocket.scale.set(0.7, 0.7, 0.7); // Adjust scale as needed

        // *** IMPORTANT: Enable transparency for all materials in the model ***
        loadedRocket.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            // Check if material is an array or single material
            if (Array.isArray(obj.material)) {
              obj.material.forEach(mat => {
                mat.transparent = true;
                mat.opacity = 1; // Start fully opaque
              });
            } else if (obj.material instanceof THREE.Material) {
              obj.material.transparent = true;
              obj.material.opacity = 1; // Start fully opaque
            }
          }
        });

        const vFOV = THREE.MathUtils.degToRad(camera.fov);
        const visibleHeightAtZ = 2 * Math.tan(vFOV / 2) * Math.abs(camera.position.z - rocketZ);
        const visibleWidthAtZ = visibleHeightAtZ * camera.aspect;

        loadedRocket.position.set(
          -(visibleWidthAtZ / 2) - 3, // Start off-screen left by a bit
          (Math.random() - 0.5) * (visibleHeightAtZ / 3), // Randomize Y-position
          rocketZ
        );

        loadedRocket.rotation.z = Math.PI / 2.1; // Tilt slightly nose-up
        loadedRocket.rotation.y = -Math.PI / 1; // Adjust yaw
        loadedRocket.rotation.x = Math.PI / 18; // Adjust pitch

        scene.add(loadedRocket);
        rocketRef.current = loadedRocket;
      },
      undefined,
      (error) => {
        console.error('Error loading rocket model:', error);
      }
    );
  }, [rocketZ]); // No dependencies, initialize once

  const animate = useCallback(() => {
    animationFrameIdRef.current = requestAnimationFrame(animate);

    const rocket = rocketRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const currentMount = mountRef.current; // Get current mount for clientWidth/Height

    if (rocket && camera && renderer && scene && currentMount) {
      const speed = 0.25; // Adjust speed of rocket
      const fadeZone = 2; // Distance from edge where fading starts (in Three.js units)

      const vFOV = THREE.MathUtils.degToRad(camera.fov);
      const currentRocketZ = rocket.position.z;
      const visibleHeightAtZ = 2 * Math.tan(vFOV / 2) * Math.abs(camera.position.z - currentRocketZ);
      const visibleWidthAtZ = visibleHeightAtZ * camera.aspect;

      // Calculate the visible left and right edges in Three.js coordinates
      const leftEdge = -(visibleWidthAtZ / 3);
      const rightEdge = (visibleWidthAtZ / 3);

      rocket.position.x += speed; // Move rocket from left to right
     
      // --- Fade In/Out Logic ---
      let targetOpacity = 1;

      // Fade in from left
      if (rocket.position.x < leftEdge + fadeZone) {
        targetOpacity = THREE.MathUtils.mapLinear(
          rocket.position.x,
          leftEdge - 2, // Start fading from further left (off-screen)
          leftEdge + fadeZone, // End fading in here
          0, 1
        );
      }
      // Fade out to right
      else if (rocket.position.x > rightEdge - fadeZone) {
        targetOpacity = THREE.MathUtils.mapLinear(
          rocket.position.x,
          rightEdge - fadeZone, // Start fading out here
          rightEdge + 2, // End fading out to further right (off-screen)
          1, 0
        );
      }

      // Apply opacity to all materials of the rocket
      rocket.traverse((obj) => {
        if (obj instanceof THREE.Mesh) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach(mat => {
              mat.opacity = targetOpacity;
            });
          } else if (obj.material instanceof THREE.Material) {
            obj.material.opacity = targetOpacity;
          }
        }
      });
      // --- End Fade In/Out Logic ---


      // Reset rocket position when it goes off-screen right
      if (rocket.position.x > rightEdge + 3) { // Adjust threshold as needed
        rocket.position.x = leftEdge - 3; // Reset to off-screen left
        rocket.position.y = (Math.random() - 0.6) * (visibleHeightAtZ / 3); // Randomize Y
      // rocket.rotation.y = Math.random() * Math.PI; // Randomize rotation (optional)
      }
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