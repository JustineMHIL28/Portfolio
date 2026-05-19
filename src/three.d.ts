declare module 'three' {
  export class Scene {
    add(obj: any): void;
    clear(): void;
  }

  export class PerspectiveCamera {
    position: { z: number };
    aspect: number;
    constructor(fov: number, aspect: number, near: number, far: number);
    updateProjectionMatrix(): void;
  }

  export class WebGLRenderer {
    constructor(params: { canvas: HTMLCanvasElement; alpha: boolean; antialias: boolean });
    setSize(w: number, h: number): void;
    setPixelRatio(ratio: number): void;
    render(scene: Scene, camera: PerspectiveCamera): void;
    dispose(): void;
  }

  export class MeshBasicMaterial {
    constructor(params: { color: number; wireframe?: boolean });
  }

  export class Mesh {
    position: { x: number; y: number; z: number; set(x: number, y: number, z: number): void };
    rotation: { x: number; y: number; z: number };
    constructor(geometry: any, material: MeshBasicMaterial);
  }

  export class TorusKnotGeometry {
    constructor(radius: number, tube: number, tubularSegments: number, radialSegments: number);
  }

  export class SphereGeometry {
    constructor(radius: number, widthSegments: number, heightSegments: number);
  }
}
