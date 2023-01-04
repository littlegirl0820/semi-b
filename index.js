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
var turn = 0
var answers = []

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

  socket.on('start', (json) => {
    if(!started){
      started = true;
      io.emit(
        'game',
        {
          "answerer": members[0],
          "turn": 0
        }
      );
    }
  });

  socket.on('answer', (json) => {
    turn = turn + 1;
    let newAnswer = {
      "username": json["username"],
      "answer": json["answer"]
    };
    answers.push(newAnswer);

    if(turn < members.length){
      io.emit(
        'game',
        {
          "answerer": members[turn],
          "turn": turn,
          "question": newAnswer["answer"]
        }
      );
    }else{
      io.emit(
        'result',
        {
          "answers": answers
        }
      );
      
      members.splice(0);
      started = false;
      turn = 0;
      answers.splice(0);
    }
  });

  // ...
})