const { app, BrowserWindow, shell } = require('electron');
const path = require('node:path');
function createWindow() {
 const win = new BrowserWindow({width:1280,height:820,minWidth:850,minHeight:560,title:'NXT Browser',backgroundColor:'#090d18',webPreferences:{preload:path.join(__dirname,'preload.js'),contextIsolation:true,nodeIntegration:false,webviewTag:true}});
 win.loadFile(path.join(__dirname,'index.html'));
 win.webContents.setWindowOpenHandler(({url})=>{if(url.startsWith('https://')||url.startsWith('http://'))shell.openExternal(url);return {action:'deny'};});
}
app.whenReady().then(()=>{createWindow();app.on('activate',()=>{if(BrowserWindow.getAllWindows().length===0)createWindow();});});
app.on('window-all-closed',()=>{if(process.platform!=='darwin')app.quit();});
