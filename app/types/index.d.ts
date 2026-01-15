/// <reference types="vite/client" />
/// <reference types="unplugin-vue-router/client" />
/// <reference types="@electron-forge/plugin-vite/forge-vite-env" />
/// <reference types="unplugin-icons/types/vue" />

declare const MAIN_WINDOW_VITE_DEV_SERVER_URL: string | undefined;
declare const MAIN_WINDOW_VITE_NAME: string;

declare module "@/app/assets/pexels-maurizio.jpg" {
  const PexelsMaurizio: string;
  export default PexelsMaurizio;
}
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface WindowApi {
  closeWindow: () => Promise<void>;
  maximizeWindow: () => Promise<void>;
  minimizeWindow: () => Promise<void>;
}

interface Window {
  windowApi: WindowApi;
}
