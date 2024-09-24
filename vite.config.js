import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: 'frontend', // Specifies the root directory of the project
  build: {
    outDir: '../dist', // Output directory
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'frontend/index.html'),
        about: resolve(__dirname, 'frontend/about.html'),
        blog: resolve(__dirname, 'frontend/blog.html'),
        contact: resolve(__dirname, 'frontend/contact.html'),
        'contractor-dashboard': resolve(__dirname, 'frontend/contractor-dashboard.html'),
        'farmer-dashboard': resolve(__dirname, 'frontend/farmer-dashboard.html'),
        feedback: resolve(__dirname, 'frontend/feedback.html'),
        privacy: resolve(__dirname, 'frontend/privacy.html'),
        terms: resolve(__dirname, 'frontend/terms.html'),
      },
    },
  },
  server: {
    port: 5173, // Specifies the port to use for the development server
    open: '/index.html', // Specifies the file to open in the browser when the development server starts
  },
});
