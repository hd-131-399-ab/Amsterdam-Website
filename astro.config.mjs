// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.google(),
			name: 'Caveat Brush',
			cssVariable: '--font-hand-display',
			fallbacks: ['cursive'],
		},
		{
			provider: fontProviders.google(),
			name: 'Patrick Hand',
			cssVariable: '--font-hand',
			fallbacks: ['cursive'],
		},
	],
});
