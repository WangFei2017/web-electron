const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')

const globalShortcut = electron.globalShortcut;

/**
 * flash 插件使用
 */
// console.log(process.platform, process.arch);
let pluginName;
switch (process.platform) {
  case 'win32':
    pluginName = process.arch==='x64'
      ?'./pepflashplayer64_23_0_0_162/pepflashplayer64_23_0_0_162.dll'
      :'./pepflashplayer32_23_0_0_162/pepflashplayer32_23_0_0_162.dll';
    break
  case 'darwin':
    pluginName = 'PepperFlashPlayer.plugin'
    break
  case 'linux':
    pluginName = 'libpepflashplayer.so'
    break
}
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, pluginName));

// 可选：指定 flash 的版本，例如 v17.0.0.169
app.commandLine.appendSwitch('ppapi-flash-version', '23.0.0.162');
// flash 插件配置结束

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 1366, 
    height: 768, 
    frame:true,
    webPreferences: {
      // nodeIntegration: false //禁用node模块
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
  // mainWindow.loadURL('https://alphain.com.cn/')
  // mainWindow.loadURL('http://127.0.0.1:3001/alphabond/')

  // 开发者工具
  // mainWindow.webContents.openDevTools()
  // mainWindow.webContents.toggleDevTools();

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  })
  /**
   * 窗口最大化
   */
  mainWindow.maximize();
  /**
   * 注册快捷键
   */
  // globalShortcut.register('f5', function() {
  //   console.log('f5 is pressed');
  //   mainWindow.webContents.send('f5',{});
  //   // mainWindow.reload();
  // })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
  globalShortcut.unregisterAll();
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
