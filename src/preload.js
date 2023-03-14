// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron');

//Package.js data
const AppData = require(`${__dirname}/../package.json`);


//Create , write , save , read files
let curr_stack;

//Changes value of "curr_stack"
let ChangeThisStackLoc = (stack) => {
    curr_stack = stack;
};

// Creates File
let CreateFile = (dataToSave) => {
    console.log("Data sended")
    console.log(curr_stack)

    //file name and type
    let FileProper = {
        name: curr_stack,
        type: 'json'
    };

    //Sends message to renderer process
    ipcRenderer.send('gotData', { FileProper, dataToSave });
};

//Check if File exists 
let CheckFileExists = () => {
    //file name and type
    let FileProper = {
        name: curr_stack,
        type: 'json'
    };
    //Sends message to renderer process
    ipcRenderer.send('checkfile_exists', { FileProper });
};

//Answer from ipcMain if file exists

//File Doesn't exists
ipcRenderer.on("FileDoesnt'tExists", (event, args) => {
    //Warning field to alert the user
    let Current_File_Exists = document.querySelector('#file-exist-green-warning-wrapper');
    let Current_File_DExists = document.querySelector('#file-exist-warning-wrapper');

    Current_File_DExists.style.display = 'block';
    Current_File_Exists.style.display = 'none';
});

//File exists
ipcRenderer.on("FileExists", (event, args) => {
    //Warning field to alert the user
    let Current_File_Exists = document.querySelector('#file-exist-green-warning-wrapper');
    let Current_File_DExists = document.querySelector('#file-exist-warning-wrapper');

    Current_File_DExists.style.display = 'none';
    Current_File_Exists.style.display = 'block';
});

//string similarity 
function SendStringToMain(string1, string2) {
    let s1 = string1.toLowerCase();
    let s2 = string2.toLowerCase();

    ipcRenderer.send('proveStringSimilarity', { string1, string2 });
};

//Main process checked if the solution and the user answer in the playground write-mode is similar
//Now the rendererProcess handles the answer from the main process
var clicked_repeat_mainProc;

ipcRenderer.on('StringIsSimilar', (event, arg) => {
    ChangeRepeatState(false)

    console.log("String is similar")
});

ipcRenderer.on('StringIsNotSimilar', (event, arg) => {
    ChangeRepeatState(true)

    console.log('String is not similar')
});

function ChangeRepeatState(state) {
    clicked_repeat_mainProc = state;

    console.log(clicked_repeat_mainProc)
};

function updateRepeatState(FrontEndResult) {
    let FER = FrontEndResult;
    FER = clicked_repeat_mainProc;

    console.log(clicked_repeat_mainProc)
    return FER;
};

//Communicate with renderer
contextBridge.exposeInMainWorld('App', {
    version: AppData.version,
    CreateFile: CreateFile,
    ChangeThisStackLoc: ChangeThisStackLoc,
    CheckFileExists: CheckFileExists,
    SendStringToMain: SendStringToMain,
    updateRepeatState: updateRepeatState,
});