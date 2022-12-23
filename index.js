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

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('join', (json) => {
    // TODO: ユーザ名の重複、ゲーム中かどうかの検査
    result = {}
    socket.emit(result)
  });

  socket.on('members', (json) => {
    // TODO: メンバーの管理
    members = {}
    socket.emit(members)
  })

  // ...
})