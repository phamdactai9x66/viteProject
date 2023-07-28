import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const DEFAULT_HOST = 'localhost'
const DEFAULT_PORT = 3000


export default defineConfig((config) => {
  return {
    plugins: [react()],
    resolve: {
      alias: {
        'src': path.resolve(__dirname, './src/'),
      }
    },
    server: {
      port: DEFAULT_PORT,
      host: DEFAULT_HOST,
      open: `http://${DEFAULT_HOST}:${DEFAULT_PORT}`
    },
    css: {
      // allow see file css in browser
      devSourcemap: true
    }
  }
})
