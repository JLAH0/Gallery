import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const PORT = process.env.PORT || 5173;

// https://vitejs.dev/config/
export default defineConfig({
server: {
  port: PORT,
  host: '0.0.0.0'
},
preview: {
  port: PORT,
  host: '0.0.0.0'
},
  plugins: [react()],
})
