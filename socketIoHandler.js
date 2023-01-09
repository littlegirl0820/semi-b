import { Server } from 'socket.io';

export default function injectSocketIO(server) {
  const io = new Server(server);
  const members = [];
  const answers = [];

  let started = false;
  let turn = 0;

  io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('join', (json) => {
      if (!started && !members.includes(json['username']) && json['username'] !== '') {
        members.push(json['username']);
        socket.emit('join', { result: 'OK' });
        io.emit('members', {
          members: members.map((username) => {
            return { username: username };
          })
        });
        console.log(json.username + ' joined. Current members are [' + members + '].');
      } else if (started) {
        socket.emit('join', {
          result: 'NG',
          reason: 'No room is currently open.'
        });
        console.log('Rejected ' + json.username + '. Current members are [' + members + '].');
      } else if (members.includes(json['username'])) {
        socket.emit('join', {
          result: 'NG',
          reason: 'Duplicate user name.'
        });
        console.log('Rejected ' + json.username + '. Current members are [' + members + '].');
      } else {
        socket.emit('join', {
          result: 'NG',
          reason: 'User name not specified.'
        });
        console.log('Rejected ' + json.username + '. Current members are [' + members + '].');
      }
    });

    socket.on('members', () => {
      socket.emit('members', {
        members: members.map((username) => {
          return { username: username };
        })
      });
    });

    socket.on('start', () => {
      if (!started) {
        started = true;
        io.emit('game', {
          answerer: members[0],
          turn: 0
        });
      }
    });

    socket.on('answer', (json) => {
      ++turn;
      const newAnswer = {
        username: json['username'],
        answer: json['answer']
      };
      answers.push(newAnswer);

      if (turn < members.length) {
        io.emit('game', {
          answerer: members[turn],
          turn: turn,
          question: newAnswer['answer']
        });
      } else {
        io.emit('result', { answers: answers });

        members.splice(0);
        started = false;
        turn = 0;
        answers.splice(0);
      }
    });

    // ...
  });

  console.log('Socket.IO injected');
}
