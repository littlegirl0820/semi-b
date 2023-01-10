import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

const config: UserConfig = {
  plugins: [sveltekit()],
  server: { host: true }
};

export default config;
