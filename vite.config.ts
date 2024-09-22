import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	base: '/playmat-tracker/',
	plugins: [sveltekit()]
});
