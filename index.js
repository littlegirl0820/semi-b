const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static('public'));

server.listen(3000, () => {
  console.log('listening on *:3000');
});

var members = []
var started = false

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('join', (json) => {
    result = "NG";
    if (!started && !members.includes(json["username"])) {
      result = "OK";
      members.push(json["username"]);
    }
    socket.emit(
      { "result": result }
    );
  });

  socket.on('members', (json) => {
    socket.emit(
      { "members": members.map((username) => { return {"username": username}; }) }
    );
  })

  // ...
})