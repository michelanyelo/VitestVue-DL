import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import AboutView from '@/views/AboutView.vue'
import App from '@/App.vue'
import router from '@/router'

describe("Renderiza AboutView después de navegar a la ruta 'About'", async () => {
    const routerPrueba = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/about',
                name: 'about',
                component: AboutView
            }
        ]
    })

    it("Navega y renderiza la vista correspondiente", async () => {
        routerPrueba.push({ name: 'about' })
        await routerPrueba.isReady()

        const wrapper = mount(App, {
            global: {
                plugins: [router]
            }
        })

        expect(wrapper.findComponent(AboutView).exists()).toBeTruthy
    })
})