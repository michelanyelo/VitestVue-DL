import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import ContactView from '@/views/ContactView.vue'
import App from '@/App.vue'
import router from '@/router'


describe("Renderiza ContactView después de navegar a la ruta 'Contact'", async () => {
    const routerPrueba = createRouter({
        history: createWebHistory(),
        routes: [
            {
                path: '/contact',
                name: 'contact',
                component: ContactView
            },
        ]
    })

    it("Navega y renderiza la vista correspondiente", async () => {
        routerPrueba.push({ name: 'contact' })
        await routerPrueba.isReady()

        const wrapper = mount(App, {
            global: {
                plugins: [router],
            }
        })

        expect(wrapper.findComponent(ContactView).exists()).toBeTruthy
    })
})