/// <reference types="vite/client" />
declare module 'virtual:ssr-assets' {
  export const bootstrapModules: string[];
}
declare module 'virtual:browser-entry' {
  export const abc: Record<string, { file: string }>;
}