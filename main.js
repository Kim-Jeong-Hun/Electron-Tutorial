const { app, BrowserWindow } = require('electron');

app.whenReady().then(() => {

    // 새 프로그램 창을 만드는 작업
    const myWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    
    myWindow.loadFile("index.html");
});




