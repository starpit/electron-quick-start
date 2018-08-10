
const electron = require('electron'),
      { app } = electron

function createWindow(noHeadless, executeThisArgvPlease, subwindowPlease, subwindowPrefs) {
    const { BrowserWindow } = electron
    const opts = {}
    const mainWindow = new BrowserWindow(opts)
    mainWindow.loadURL(require('url').format({
      pathname: require('path').join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
  }))
}

app.on('ready', () => {
    createWindow(true)
})
