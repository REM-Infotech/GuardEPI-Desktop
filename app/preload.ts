// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
/* eslint-disable @typescript-eslint/no-explicit-any */
import { contextBridge, ipcRenderer } from "electron";

const windowApi = {
  closeWindow: (): void => ipcRenderer.send("close-window"),
  maximizeWindow: (): void => ipcRenderer.send("maximize-window"),
  minimizeWindow: (): void => ipcRenderer.send("minimize-window"),
};
try {
  const exposes = {
    windowApi: windowApi,
  };
  Object.entries(exposes).forEach(([k, v]) =>
    contextBridge.exposeInMainWorld(k, v)
  );
} catch {
  //
}

window.addEventListener("keypress", (e) => {
  if (e) {
    if (e.key === "F11") e.preventDefault();
    if (e.key === "F5") e.preventDefault();
  }
});
