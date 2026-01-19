/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BrowserWindow,
  dialog,
  ipcMain,
  shell,
  type IpcMainInvokeEvent as InvokeEvnt,
  type WebContents,
} from "electron";
import { writeFile } from "fs/promises";
import { homedir } from "os";
import { join, resolve } from "path";

class IpcUtils {
  static beforeInputEvent(event: Electron.Event, input: Electron.Input) {
    if (
      input.control &&
      (input.alt || input.shift || !input.alt || !input.shift)
    )
      event.preventDefault();
    if (input.control && input.alt) event.preventDefault();
  }

  static CloseWindow(event: { sender: WebContents }) {
    const webContents = event.sender;

    const diag = dialog.showMessageBoxSync({
      type: "question",
      buttons: ["Sim", "Não"],
      title: "Confirmação",
      message: "Tem certeza que deseja fechar a janela?",
      defaultId: 1,
      cancelId: 1,
    });

    if (diag === 1) return;

    const mainWindow = BrowserWindow.fromWebContents(webContents);
    mainWindow?.close();
  }

  static MinimizeWindow(event: { sender: WebContents }) {
    const webContents = event.sender;
    const mainWindow = BrowserWindow.fromWebContents(webContents);
    mainWindow?.minimize();
  }

  static MaximizeWindow(event: { sender: WebContents }) {
    const webContents = event.sender;
    const mainWindow = BrowserWindow.fromWebContents(webContents);
    if (mainWindow?.isMaximized()) {
      mainWindow.unmaximize();
    } else {
      mainWindow?.maximize();
    }
  }
}

export default function IpcApp(mainWindow: BrowserWindow) {
  ipcMain.handle("download-exec", async (_: InvokeEvnt, kw: DownloadExec) => {
    if (!mainWindow) return;
    const dialogFile = await dialog.showSaveDialog(mainWindow, {
      title: "Escolha onde salvar a execução",
      defaultPath: resolve(homedir(), kw.file_name),
      filters: [
        {
          name: "Arquivo de execução compactado",
          extensions: ["zip"],
        },
      ],
    });

    if (dialogFile.canceled) return;

    const filePath = join(dialogFile.filePath);
    const buff = Buffer.from(kw.content, "base64");
    await writeFile(filePath, buff);
    return dialogFile.filePath;
  });

  ipcMain.handle("show-file-execution", (_: InvokeEvnt, filePath: string) => {
    shell.showItemInFolder(filePath);
  });
  ipcMain.on("close-window", IpcUtils.CloseWindow);
  ipcMain.on("minimize-window", IpcUtils.MinimizeWindow);
  ipcMain.on("maximize-window", IpcUtils.MaximizeWindow);
}
