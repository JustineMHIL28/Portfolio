import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const torusRef = useRef<THREE.Mesh | null>(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = document.getElementById('c') as HTMLCanvasElement;
    if (!canvas) return;
    canvasRef.current = canvas;

    const W = canvas.width = window.innerWidth;
    const H = canvas.height = window.innerHeight;

    const sc = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(70, W / H, 0.1, 100);
    const ren = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    ren.setSize(W, H);
    ren.setPixelRatio(Math.min(devicePixelRatio, 2));
    cam.position.z = 6;

    const tGeo = new THREE.TorusKnotGeometry(2, 0.4, 120, 16);
    const tMat = new THREE.MeshBasicMaterial({ color: 0x111111, wireframe: true });
    const torus = new THREE.Mesh(tGeo, tMat);
    torusRef.current = torus;
    sc.add(torus);

    for (let i = 0; i < 60; i++) {
      const g = new THREE.SphereGeometry(0.04, 4, 4);
      const m = new THREE.MeshBasicMaterial({ color: 0x1a1a1a });
      const s = new THREE.Mesh(g, m);
      s.position.set((Math.random() - 0.5) * 18, (Math.random() - 0.5) * 14, (Math.random() - 0.5) * 8);
      sc.add(s);
    }

    const onScroll = () => { scrollYRef.current = window.scrollY; };
    const onResize = () => {
      const w = window.innerWidth, h = window.innerHeight;
      canvas.width = w; canvas.height = h;
      cam.aspect = w / h; cam.updateProjectionMatrix();
      ren.setSize(w, h);
    };

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);

    const rend = () => {
      requestAnimationFrame(rend);
      torus.rotation.x += 0.003;
      torus.rotation.y += 0.004;
      torus.position.y = -scrollYRef.current * 0.0015;
      ren.render(sc, cam);
    };
    rend();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      ren.dispose();
      sc.clear();
    };
  }, []);

  return null;
};
