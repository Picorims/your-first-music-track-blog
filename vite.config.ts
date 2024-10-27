import { defineConfig } from 'vitest/config';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	build: {
		assetsInlineLimit: 0, // disable asset inlining
	},
	assetsInclude: ['**/*.mid'],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
