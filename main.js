console.log("Main app proccess has been started");

// Import modules
const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: { preload: path.join(__dirname, 'preload.js') },
        titleBarStyle: 'hidden',
        titleBarOverlay: {
            color: '#2f3241',
            symbolColor: '#74b1be',
            height: 30
        }
    });

    win.loadFile("src/index.html");
};

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) { createWindow() } });
});

app.on('window-all-closed', () => { if (process.platform !== 'darwin') { app.quit() } });
