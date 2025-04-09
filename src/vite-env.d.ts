/// <reference types="vite/client" />
export { };

declare global {
  interface Window {
    store: {
      get: (key: string) => Promise<any>;
      set: (key: string, value: any) => Promise<void>;
    };
  }
}
