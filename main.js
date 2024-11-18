const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    webPreferences: {
      nodeIntegration: true, // Güvenlik için üretimde false olmalıdır
      contextIsolation: false // Güvenlik için üretimde true olmalıdır
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

// MacOS için pencere kapandığında uygulamayı kapatmaz
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
  
});

// MacOS için uygulama ikonuna tıklandığında pencere yoksa yeni pencere açar
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});