const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
    app.quit();
}

app.on('ready', () => {
    updateApp = require('update-electron-app');

    updateApp({
        updateInterval: '1 hour',
        notifyUser: true
    });
});

const createWindow = () => {
    // Create the browser window.
    const mainWindow = new BrowserWindow({
        width: 1300,
        height: 900,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            devTools: true,
            preload: path.join(__dirname, 'preload.js'),
        },
        fullscreen: true
    });

    // mainWindow.setMenu(null);

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(`${__dirname}/view`, 'index.html'));

    // Open the DevTools.
    // mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

app.on('ready', () => {
    updateApp = require('update-electron-app');

    updateApp({
        // repo: 'PhiloNL/electron-hello-world', // defaults to package.json
        updateInterval: '1 hour',
        notifyUser: true
    });
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

const isDev = require('electron-is-dev');

if (isDev) {
    console.log('Running in development');
} else {
    console.log('Running in production');
};

//Create Folder
const folderPath = `${app.getPath('appData')}/studycards/App Files`;

//If folder is not already existing => create folder
if (!fs.existsSync(folderPath)) {
    // create folder
    fs.mkdirSync(folderPath);
    console.log('Ordner wurde erstellt!');

} else {
    console.log('Ordner existiert bereits!');
};

//About file and file system

//standard path I use
const userPath = `${app.getPath('appData')}/studycards/App Files`;


//Check if a certain file is existing
ipcMain.on('checkfile_exists', (event, data) => {
    console.log(data)

    let FileData = data.FileProper;

    //File Data
    const filename = FileData.name;
    const filetype = FileData.type;
    const filePath = `${filename}.${filetype}`;

    const filepath = path.join(userPath, filePath);

    if (fs.existsSync(filepath)) {
        fs.readFile(filepath, 'utf8', (err, data) => {
            if (err) throw err;

            const file_data = JSON.parse(data);

            console.log(file_data);

            event.sender.send('FileExists', file_data);
        });

    } else {
        event.sender.send("FileDoesnt'tExists", 'false');
    };
});

//Save file with data in Roaming Folder
//This code block OVERWRITES the data of the expected file
ipcMain.on('gotData', (event, data) => {
    //Handle Data from preload.js
    let FileData = data.FileProper;
    let SaveData = data.dataToSave;

    //File Data
    const filename = FileData.name;
    const filetype = FileData.type;
    const filePath = `${filename}.${filetype}`;

    //File Path
    const userPath = `${app.getPath('appData')}/studycards/App Files`;
    let FilePath = path.join(userPath, filePath);

    // save file
    fs.writeFile(FilePath, JSON.stringify(SaveData), (err) => {
        //Check if error
        if (err) {
            console.error("there is an error josef" + err);
            return;
        };
    });
});