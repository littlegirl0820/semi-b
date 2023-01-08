import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import injectSocketIO from './socketIoHandler.js';

const webSocket = {
  name: 'webSocketServer',
  configureServer(server: any) {
    injectSocketIO(server.httpServer);
  }
};

const config: UserConfig = {
  plugins: [sveltekit(), webSocket],
  server: { host: true }
};

export default config;
