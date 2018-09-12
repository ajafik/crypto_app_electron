const electron = require('electron');
const path = require('path');
const remote = electron.remote;
const ipc = electron.ipcRenderer;

const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', function(event){
    remote.getCurrentWindow().close();
});

const updateBtn = document.getElementById('updateBtn');

updateBtn.addEventListener('click', function(){
    ipc.send('update-notify-value', document.getElementById('notifyVal').value);

    remote.getCurrentWindow().close();
});