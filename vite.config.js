import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  optimizeDeps: {
    include: ['dayjs','element-plus']
  },
  resolve: {
    dedupe: ['vue'], // 去重
    alias: {
      '@': '/src'
    }
  },
  build: {
    rollupOptions: {
      //忽略打包vue、element-plus
      external: ["vue", "element-plus", "axios"],
    },
    commonjsOptions: {
      include: [
        'node_modules/.pnpm/dayjs@1.11.3/node_modules/dayjs/dayjs.min.js',
        'node_modules/.pnpm/dayjs@1.11.3/node_modules/dayjs/plugin/customParseFormat.js',
        'node_modules/.pnpm/dayjs@1.11.3/node_modules/dayjs/plugin/localeData.js',
        'node_modules/.pnpm/dayjs@1.11.3/node_modules/dayjs/plugin/advancedFormat.js',
        'node_modules/.pnpm/dayjs@1.11.3/node_modules/dayjs/plugin/weekOfYear.js',
        'node_modules/.pnpm/dayjs@1.11.3/node_modules/dayjs/plugin/weekYear.js',
        'node_modules/.pnpm/dayjs@1.11.3/node_modules/dayjs/plugin/dayOfYear.js',
        'node_modules/.pnpm/dayjs@1.11.3/node_modules/dayjs/plugin/isSameOrAfter.js',
        'node_modules/.pnpm/dayjs@1.11.3/node_modules/dayjs/plugin/isSameOrBefore.js',
        'node_modules/.pnpm/escape-html@1.0.3/node_modules/escape-html/index.js'
      ]
    }
  }
})
