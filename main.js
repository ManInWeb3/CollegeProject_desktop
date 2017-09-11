// 'use strict'

// const shell = require('electron');

// const electron = require('electron');
// const app = electron.app;  // Module to control application life.

// const electron = require('electron');
// const app = electron.app;
// const BrowserWindow = electron.BrowserWindow;
// const Menu = electron.Menu;

const {app,BrowserWindow,Menu,ipcMain} = require('electron')
// const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.



// const ipcRenderer = require('electron').ipcRenderer;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;


const template = [
  // {
  //   label: 'Edit',
  //   submenu: [
  //     {role: 'undo'},
  //     {role: 'redo'},
  //     {type: 'separator'},
  //     {role: 'cut'},
  //     {role: 'copy'},
  //     {role: 'paste'},
  //     {role: 'pasteandmatchstyle'},
  //     {role: 'delete'},
  //     {role: 'selectall'}
  //   ]
  // },
  {
    label: 'View',
    submenu: [
      {role: 'reload'},
      {role: 'toggledevtools'},
      // {type: 'separator'},
      {role: 'resetzoom'},
      {role: 'zoomin'},
      {role: 'zoomout'},
      // {type: 'separator'},
      // {role: 'togglefullscreen'}
    ]
  },
  // {
  //   role: 'window',
  //   submenu: [
  //     {role: 'minimize'},
  //     {role: 'close'}
  //   ]
  // },
  {
    role: 'help',
    submenu: [
      {
        label: 'Learn More',
        click () { require('electron').shell.openExternal('https://electron.atom.io') }
      }
    ]
  }
]

const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)


// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1000, height: 625 });

  // and load the index.html of the app.
  mainWindow.loadURL('file://' + __dirname + '/login.html');
  // mainWindow.loadURL('file://' + __dirname + '/index.html?pin=111');
  // mainWindow.openDevTools();
  // mainWindow.setMenu(null);
  mainWindow.maximize()

  ipcMain.on('loginOK', (event, arg) => {
    // console.log("We got: "+arg);  // prints "ping"
    mainWindow.loadURL('file://' + __dirname + '/test.html?pin=' + arg);
  })


  ipcMain.on('testFINISHED', (event, arg) => {
    console.log("We got: testFINISHED "+arg);  // prints "ping"
    mainWindow.loadURL('file://' + __dirname + '/finished.html');
  })


  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    mainWindow = null;
  });




  // var x = 0;
  // var myTimer = function sendPOST2API(){
  //   console.log((new Date()).getSeconds());
  //   setTimeout( sendPOST2API, 5000 );
  // };

  // timeout_tester();


});


