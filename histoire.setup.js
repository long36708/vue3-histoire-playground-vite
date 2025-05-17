/**
 * @Author: longmo
 * @Date: 2025-05-17 12:46:29
 * @LastEditTime: 2025-05-17 14:54:41
 * @FilePath: histoire.setup.js
 * @Description: 
 */
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { defineSetupVue3 } from '@histoire/plugin-vue'
export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
    const pinia = createPinia()
    app.use(pinia) // Add Pinia store

    app.use(ElementPlus)
    // Global component
    // app.component('GlobalComponent', MyGlobalComponent)

    // Global property
    // app.config.globalProperties.$t = key => translate(key)

    // Provide
    app.provide('key', 'meow')
})
