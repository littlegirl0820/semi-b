import http from 'http';
import express from 'express';
import injectSocketIO from './socketIoHandler.js';
import { handler } from './build/handler.js';

const app = express();
const server = http.createServer(app);

// Inject SocketIO
injectSocketIO(server);

// SvelteKit handlers
app.use(handler);

server.listen(80, () => {
  console.log('listening on *:80');
});
