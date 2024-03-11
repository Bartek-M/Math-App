const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

console.clear() // clear console
app.disableHardwareAcceleration() // DHA

// Create window
function createWindow() {
    const win = new BrowserWindow({
        width: 1200,
        height: 680,
        minWidth: 600,
        minHeight: 300,
        icon: path.join(__dirname, "./static/icons/app-icon.svg"),
        frame: false,
        webPreferences: {
            preload: path.join(__dirname, "./src/js/preload.js"),
            devTools: true
        }
    });

    win.loadFile("./index.html"); // Load html file

    // Functions
    ipcMain.on("minimize-app", () => { win.minimize() })
    ipcMain.on("maximize-app", () => { win.isMaximized() ? win.unmaximize() : win.maximize() })
    ipcMain.on("close-app", () => { app.quit() });

    // Events
    win.on("maximize", () => { win.webContents.send("maximized-app") })
    win.on("unmaximize", () => { win.webContents.send("umazimized-app") })
};

// Turn on the app
app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) { createWindow() } });
});

// Check if closed
app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit() } });