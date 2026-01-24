// src/types/tawk.d.ts

interface Window {
  Tawk_API?: {
    maximize: () => void;
    minimize: () => void;
    toggle: () => void;
    showWidget: () => void;
    hideWidget: () => void;
  };
  Tawk_LoadStart?: Date;
}

export {};
