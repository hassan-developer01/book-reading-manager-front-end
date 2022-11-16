import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: "src" },
      { find: '@app', replacement: "src/app" },
      { find: '@ast', replacement: "src/assets" },
      { find: '@img', replacement: "src/assets/images" },
      { find: '@elm', replacement: "src/app/layouts/elements" },
      { find: '@hooks', replacement: "src/app/hooks" },
      { find: '@service', replacement: "src/app/services" },
      { find: '@component', replacement: "src/app/components" },
    ],
  },
})
