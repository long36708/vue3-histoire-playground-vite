/**
 * @Author: longmo
 * @Date: 2025-05-17 12:25:37
 * @LastEditTime: 2025-05-17 14:50:42
 * @FilePath: histoire.config.js
 * @Description: 
 */
import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
    plugins: [
        HstVue(),
    ],
    setupFile: 'histoire.setup.js'
})
