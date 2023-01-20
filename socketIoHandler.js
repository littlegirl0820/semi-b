import { Server } from 'socket.io';

export default function injectSocketIO(server) {
  const io = new Server(server);
  const members = [];
  const answers = [];
  const idMap = new Map();

  let isInGame = false;
  let currentTurn = 0;

  io.on('connection', (socket) => {
    socket.on('join', (json) => {
      if (
        !isInGame &&
        typeof json.username === 'string' &&
        json.username !== '' &&
        !members.includes(json.username)
      ) {
        members.push(json.username);
        idMap.set(socket.id, json.username);
        socket.emit('join', {
          result: 'OK',
          members: members.map((username) => {
            return { username: username };
          })
        });

        io.emit('members', {
          members: members.map((username) => {
            return { username: username };
          })
        });

        console.log(json.username + ' joined. Current members are [' + members + '].');
      } else if (isInGame) {
        socket.emit('join', {
          result: 'NG',
          reason: 'No room is currently open.'
        });
        console.log('Rejected ' + json.username + '. Current members are [' + members + '].');
      } else if (members.includes(json.username)) {
        socket.emit('join', {
          result: 'NG',
          reason: 'Duplicate user name.'
        });
        console.log('Rejected ' + json.username + '. Current members are [' + members + '].');
      } else {
        socket.emit('join', {
          result: 'NG',
          reason: 'User name invalid or not specified.'
        });
        console.log('Rejected ' + json.username + '. Current members are [' + members + '].');
      }
    });

    socket.on('members', () => {
      io.emit('members', {
        members: members.map((username) => {
          return { username: username };
        })
      });
    });

    socket.on('start', () => {
      if (!isInGame) {
        isInGame = true;
        io.emit('game', {
          answerer: members[0],
          turn: currentTurn + 1
        });
      }
    });

    socket.on('answer', (json) => {
      ++currentTurn;
      const newAnswer = {
        username: json.username,
        answer: json.answer
      };
      answers.push(newAnswer);

      if (currentTurn < members.length) {
        io.emit('game', {
          answerer: members[currentTurn],
          turn: currentTurn + 1,
          question: newAnswer['answer']
        });
      } else {
        io.emit('result', { answers: answers });

        // disconnect
        io.disconnectSockets();

        members.splice(0);
        isInGame = false;
        currentTurn = 0;
        answers.splice(0);
        idMap.clear();
      }
    });

    socket.on('disconnect', () => {
      if (isInGame) {
        io.emit('error', {
          reason: 'User ' + idMap.get(socket.id) + ' disconnect.'
        });

        io.disconnectSockets();

        members.splice(0);
        isInGame = false;
        currentTurn = 0;
        answers.splice(0);
        idMap.clear();
      } else {
        let member = idMap.get(socket.id);
        members.splice(members.indexOf(member), 1);
        idMap.delete(socket.id);
        io.emit('members', {
          members: members.map((username) => {
            return { username: username };
          })
        });
        console.log(member + ' left. Current members are [' + members + '].');
      }
    });
  });
}
