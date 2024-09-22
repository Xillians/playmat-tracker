import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  kit: {
    adapter: adapter({
      paths: {
        base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
      }
    })
  },
  preprocess: vitePreprocess(),

};

export default config;
