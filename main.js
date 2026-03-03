const { app, BrowserWindow } = require('electron');

// 창을 만드는 함수
function createWindow() {
    // 새 창을 만들기 위해 필요한 기초 규칙을 정의한 생성자
    const myWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            // nodeIntegration : 렌더러 프로세스가 node.js를 직접 사용할 수 있게 허용할지 결정하는 옵션
            nodeIntegration: true
        }
    });

    myWindow.loadFile("index.html");
}

// app : 모든 창을 관리하는 관리자 객체
app.whenReady().then(createWindow);