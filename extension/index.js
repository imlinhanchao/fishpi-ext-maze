/* eslint-disable no-unused-vars */
const path = require('path');

let apiKey = '';
function activate(context, electron) {
    context.on('login', function(token) {
        apiKey = token;
        login(context, token);
    })

    context.on('logout', () => {
        apiKey = ''
    })

    context.on('quit', () => {
        console.dir('app was quit')
    })
}

function login(context, token) {
    let iconPath = path.join(__dirname, "..", "public", "icon.svg");
    context.setSidebar(iconPath, `https://maze.hancel.org/?token=${token}`);
}
module.exports = { activate }