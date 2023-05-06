// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer, ipcMain } = require('electron');

//Package.js data
const AppData = require(`${__dirname}/../package.json`);


//Create , write , save , read files
let curr_stack;
let Karteikarten;

//Changes value of "curr_stack"
let ChangeThisStackLoc = (stack, Kartei_Karten) => {
    curr_stack = stack;
    Karteikarten = Kartei_Karten;
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
ipcRenderer.on("FileDoesn'tExists", (event, args) => {
    //Warning field to alert the user
    let Current_File_Exists = document.querySelector('#file-exist-green-warning-wrapper');
    let Current_File_DExists = document.querySelector('#file-exist-warning-wrapper');
    let Current_File_IsOk = document.querySelector('#file-exist-yellow-warning-wrapper');

    let redWarningText = document.querySelector('#red-warning-text');

    Current_File_DExists.style.display = 'block';
    Current_File_Exists.style.display = 'none';
    Current_File_IsOk.style.display = 'none';

    let stack_vs = Karteikarten[curr_stack].vs.length;

    if (stack_vs > 0) {
        redWarningText.textContent = 'Your Cards are not saved! Save them by selecting and saving.';
    } else {
        Current_File_DExists.style.display = 'none';
    };
});

//File exists
ipcRenderer.on("FileExists", (event, args) => {
    let greenWarningText = document.querySelector('#green-warning-text');
    let yellowWarningText = document.querySelector('#yellow-warning-text');
    let redWarningText = document.querySelector('#red-warning-text');

    let State = CheckFileState(args); // Checks other things and compares the file data with the stack data
    // possible states:

    // return "all_similar";
    // return "file has more";
    // return "file has less";
    // return "file = 0 && stack > 0";
    // return "file > 0 && stack == 0";
    // return "file = 0 && stack = 0";

    console.log(State)

    //Warning field to alert the user
    let Current_File_Exists = document.querySelector('#file-exist-green-warning-wrapper');
    let Current_File_DExists = document.querySelector('#file-exist-warning-wrapper');
    let Current_File_IsOk = document.querySelector('#file-exist-yellow-warning-wrapper');

    //default
    Current_File_DExists.style.display = 'none';
    Current_File_IsOk.style.display = 'none';
    Current_File_Exists.style.display = 'block';

    // greenWarningText: p element of the alert message
    if (State == "all_similar") { // green: All cards are save
        greenWarningText.textContent = 'All Cards are saved. Open the "files" tap to monitor your saved file';

        console.log(State)

    } else if (State == "file has more") { // green: Stack can be updated
        greenWarningText.textContent = 'You can update your stack by adding cards from the file to the stack.'

        console.log(State)

    } else if (State == "file has less") { // yellow: File needs to be updated 
        yellowWarningText.textContent = 'You need to update your file. Select all cards and save them.'

        Current_File_IsOk.style.display = 'block';
        Current_File_Exists.style.display = 'none';

        console.log(State)

    } else if (State == "file = 0 && stack > 0") { // yellow: File needs to be updated because there are no cards anymore
        yellowWarningText.textContent = 'There are no cards in your file! Update it by saving.'

        Current_File_IsOk.style.display = 'block';
        Current_File_Exists.style.display = 'none';

        console.log(State)

    } else if (State == "file > 0 && stack == 0") { // green: Stack can be updated because there are no cards anymore in the stack but in the file
        yellowWarningText.textContent = `You can add cards to your stack by adding them from the file.`

        Current_File_IsOk.style.display = 'block';
        Current_File_Exists.style.display = 'none';

        console.log(State)

    } else if (State == "file = 0 && stack = 0") { // no one cares: file and stack don't have any cards
        Current_File_Exists.style.display = 'none';

        console.log(State)
    };
});

//If the file exists it checks different things (5).
//For example if the saved file has more cards than the stack
let CheckFileState = (args) => {
    // stack data from .json file
    let fileName = Object.keys(args)[0]; //name of the file
    let file_vs = args[fileName]['vs']; // frontside cards
    let file_bs = args[fileName]['rs']; // backside cards
    let file_all = [...file_vs, ...file_bs];

    //stack data from current selected stack
    let stack_vs = Karteikarten[curr_stack].vs;
    let stack_rs = Karteikarten[curr_stack].vr;
    let stack_all = [...stack_vs, ...stack_rs];

    console.log(file_all)
    console.log(stack_all)

    if (file_all.length == stack_all.length) {
        return "all_similar";

    } else if (file_all.length > stack_all.length && stack_all.length != 0) {
        return "file has more";

    } else if (file_all.length < stack_all.length && file_all.length != 0) {
        return "file has less";

    } else if (file_all.length == 0 && stack_all.length > 0) {
        return "file = 0 && stack > 0";

    } else if (file_all.length > 0 && stack_all.length == 0) {
        return "file > 0 && stack == 0";

    } else if (file_all.length == 0 && stack_all.length == 0) {
        return "file = 0 && stack = 0";
    };
};

//Return all Files
function ReturnFiles() {
    let FilesData = {
        'Names': [],
        'Data': {},
    };

    ipcRenderer.send("ReturnFiles", FilesData);
};

let FileObject;
ipcRenderer.on("ReturnedFiles", (event, args) => {
    FileObject = args;

    console.log(FileObject)
});

//md02 , delete one file
function deleteFileFromSys(file) { // file: file name
    console.log(file);

    ipcRenderer.send('DeleteFileFromSystem', file);
};

//string similarity 
function SendStringToMain(string1, string2) {
    let s1 = string1.toLowerCase();
    let s2 = string2.toLowerCase();

    ipcRenderer.send('proveStringSimilarity', { string1, string2 });
};

// handle message from main process 
let DeletingSuccess;
ipcRenderer.on('DeleteFileFromSystem_Response', (event, response) => {
    if (response.success) {
        console.log(response.message);
    } else {
        console.error(response.message);
    };
    DeletingSuccess = response.success; // boolean
});

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

function updateRepeatState() {
    if (clicked_repeat_mainProc) {
        return [clicked_repeat_mainProc, 'red'];

    } else {
        return [clicked_repeat_mainProc, 'green'];
    };
};

//Communicate with renderer
contextBridge.exposeInMainWorld('App', {
    version: AppData.version,
    CreateFile: CreateFile,
    ChangeThisStackLoc: ChangeThisStackLoc,
    CheckFileExists: CheckFileExists,
    SendStringToMain: SendStringToMain,
    updateRepeatState: updateRepeatState,
    ReturnFiles: ReturnFiles,
    // The Variable FileObject gets it value not immediatly so it's undefined in the beginning
    getFileObject: async() => {
        while (!FileObject) { // Warten, bis myVariable initialisiert ist
            await new Promise(resolve => setTimeout(resolve, 50));
        };
        return FileObject;
    },
    getFile_DeleteSuccess: async() => {
        while (DeletingSuccess == undefined) { // Warten, bis myVariable initialisiert ist
            await new Promise(resolve => setTimeout(resolve, 50));
        };
        return DeletingSuccess;
    },
    deleteFileFromSys: deleteFileFromSys,
});