const { contextBridge } = require('electron');
contextBridge.exposeInMainWorld('nxt',{version:process.versions.electron});
