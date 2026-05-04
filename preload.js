const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('gg', {
  getSettings: () => ipcRenderer.invoke('settings:get')
});
