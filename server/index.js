const WebSocket = require('ws');
const exitHook = require('exit-hook');
const fs = require('fs');

if (process.argv.length < 3) {
    console.error('Please add logstore argument!')
    process.exit(1);
}

const logStore = process.argv[2];

const wss = new WebSocket.Server({ port: 9431 });

const events = [];

console.log('WS server listening on 9431');

wss.on('connection', function connection(ws) {
    console.log('Extension connected!');

    ws.on('message', function incoming(message) {
        events.push(JSON.parse(message));
    });
});

exitHook(() => {
    fs.writeFileSync(logStore, JSON.stringify(events));
});