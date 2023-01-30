// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge } = require('electron');

const data = require(`${__dirname}/../package.json`);

contextBridge.exposeInMainWorld('myAPI', {
    version: data.version
});