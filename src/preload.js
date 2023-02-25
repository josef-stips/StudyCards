// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');

//Package.js data
const AppData = require(`${__dirname}/../package.json`);


//Create , write , save , read files
// Creates File
let CreateFile = (dataToSave) => {
    console.log("Data sended")

    //file name and type
    const filename = document.getElementById('filename-input').value;
    const filetype = document.getElementById('filetype-input').value;

    let FileProper = {
        name: filename,
        type: filetype
    };

    //Sends message to renderer process
    ipcRenderer.send('gotData', { FileProper, dataToSave })
        // ipcRenderer.send('gotData', dataToSave);
};

//Communicate with renderer
contextBridge.exposeInMainWorld('App', {
    version: AppData.version,
    CreateFile: CreateFile
});