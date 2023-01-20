import type { UserConfig, ViteDevServer } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';
import injectSocketIO from './socketIoHandler.js';

const webSocket = {
  name: 'webSocketServer',
  configureServer(server: ViteDevServer) {
    if (server.httpServer != null) {
      injectSocketIO(server.httpServer);
    } else {
      console.log('server.httpServer is null');
    }
  }
};

const config: UserConfig = {
  plugins: [sveltekit(), webSocket],
  server: { host: true }
};

export default config;
