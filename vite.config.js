import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // This will fix the 404 issue on refresh
  },
  preview: {
    historyApiFallback: true, // Ensures that routes work in production preview as well
  },

})
