import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

const name = 'index'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: { // 打包库
      entry: 'src/index.ts',
      name: name,
      fileName: (format) => {
        return format === 'es' ? `${name}.mjs` : `${name}.js` // es模块类型mjs
      }
    }
  },
  plugins: [
    react(),
    dts({
      outDir: "dist/types" // 打包类型
    })
  ],
})
