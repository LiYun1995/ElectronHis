import { app, BrowserWindow, globalShortcut, webContents } from 'electron'
const ipc = require('electron').ipcMain;
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let presWindow
// let newwin;
// ipc.on('add',()=>
// {
//     newwin = new BrowserWindow({
//         width: 600, 
//         height: 400,
//         frame:false,
//         parent: mainWindow, //win是主窗口
//     })
//     newwin.loadURL(path.join('file:',__dirname,'new.html')); //new.html是新开窗口的渲染进程
//     newwin.on('closed',()=>{newwin = null})

// })

const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

const manageURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080#manage`
  : `file://${__dirname}/index.html#manage`
function createWindow() {
  /**
   * Initial window options
   */

  // 检查快捷键是否注册成功
  // console.log(globalShortcut.isRegistered('CommandOrControl+X'))

  mainWindow = new BrowserWindow({
    height: 473,
    useContentSize: true,
    width: 363,
    frame: false,
    resizable: false,
    backgroundColor: "#d6d6d6",
  })

  mainWindow.loadURL(winURL)
  // mainWindow.openDevTools();

  presWindow = new BrowserWindow({
    show: false,
  })
  presWindow.loadURL(manageURL)
  let contents = presWindow.webContents
  let mainContents = mainWindow.webContents
  contents.closeDevTools()
  mainContents.closeDevTools()
  //快捷键 const ret = globalShortcut.register('F12', () => {
  //   mainWindow.webContents.openDevTools()
  // })

  // if (!ret) {
  //   console.log('registration failed')
  // }
  mainWindow.on('close', () => {
    // console.log(contents.browserWindowOptions.show)
    if (!contents.browserWindowOptions.show) {
      app.quit()
    }
  })

  ipc.on('zqz-show', function () {
    contents.browserWindowOptions.show = true
    // presWindow.show()
    presWindow.maximize()
  })

  ipc.on('closed', function () {
    presWindow = null
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
