import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/keenkeeper-project/',
  plugins: [react()]
})
