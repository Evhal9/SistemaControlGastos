import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  theme: {
    extend: {
      colors: {
        lila: "#cdb4cb",
        rosa: "#ffc8dd",
        rosaOscuro: "#ffafcc",
        celeste: "#bde0fe",
        celesteOscuro: "#a2d2ff",
      },
    },
  },
})
