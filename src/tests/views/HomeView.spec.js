import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";

import HomeView from "@/views/HomeView.vue";

describe("HomeViewComponent", () => {
    const wrapper = mount(HomeView)

    it("El html de HomeView se mantiene en las pruebas", () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    // fallar a proposito
    it("La etiqueta img posee una clase fixed", () => {
        const img = wrapper.find('img')

        // la etiqueta img no posee id ni class
        expect(img.classes()).toContain('img-fluid')
    })
})

