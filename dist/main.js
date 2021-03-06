"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const server = new server_1.Server();
server.bootstrap().then(server => {
    console.log('List ', server.application.address());
}).catch(error => {
    console.log('Server failed to start');
    console.log(error);
    process.exit(1);
});
