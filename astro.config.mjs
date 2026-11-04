// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Astro v7 + Tailwind CSS v4 (через @tailwindcss/vite)
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
});
