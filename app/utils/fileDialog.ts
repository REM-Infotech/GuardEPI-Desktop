class FileDialogService {
  static setupFile(file: FileObject) {
    const fileBytes = atob(file.content);
    const fileObject = new File([fileBytes], file.name, {
      type: file.type,
    });

    return fileObject;
  }

  static async openFileXlsx() {
    const file = await window.fileDialogApi.openFileXlsx();

    if (file) {
      return FileDialogService.setupFile(file);
    }
  }

  static async openFiles() {
    const files = await window.fileDialogApi.openFiles();
    if (files) {
      const anexos: File[] = [];
      for (const file of files) {
        anexos.push(FileDialogService.setupFile(file));
      }

      return anexos;
    }
  }
}

export default FileDialogService;
