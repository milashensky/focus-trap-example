import {
    describe,
    it,
    expect,
    afterEach,
    beforeEach,
    vi,
} from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'

import TestComponent from './TestComponent.vue'

describe('FocusContext', () => {
    let pinia
    const componentClass = TestComponent

    const getDefaults = () => ({
        global: {
            plugins: [pinia],
        },
    })

    beforeEach(() => {
        pinia = createTestingPinia({
            stubActions: false,
            createSpy: vi.fn,
        })
    })

    afterEach(() => {
        vi.clearAllMocks()
        vi.restoreAllMocks()
    })

    describe('Integration', () => {
        const createComponent = (overrides = {}) => {
            const defaultOptions = getDefaults()
            const options = {
                ...defaultOptions,
                ...overrides,
                props: {
                    ...defaultOptions.props,
                    ...overrides.props,
                },
            }
            return mount(componentClass, options)
        }

        it('should allow focus on first context', () => {
            const component = createComponent({})
            const input1 = component.find('[data-test-id="input1"]')
            expect(input1.exists()).toBe(true)
            expect(input1.attributes('tabindex')).toBeUndefined()
            const button1 = component.find('[data-test-id="button1"]')
            expect(button1.exists()).toBe(true)
            expect(button1.attributes('tabindex')).toBeUndefined()
            expect(component.find('[data-test-id="input2"]').exists()).toBe(false)
            expect(component.find('[data-test-id="button2"]').exists()).toBe(false)
        })

        it('should trap focus on topmost context if rendered', async() => {
            const component = await createComponent({
                props: {
                    isRenderForm2: true,
                },
            })
            const input1 = component.find('[data-test-id="input1"]')
            expect(input1.exists()).toBe(true)
            expect(input1.attributes('tabindex')).toBe('-1')
            const button1 = component.find('[data-test-id="button1"]')
            expect(button1.exists()).toBe(true)
            expect(button1.attributes('tabindex')).toBe('-1')
            const input2 = component.find('[data-test-id="input2"]')
            expect(input2.exists()).toBe(true)
            expect(input2.attributes('tabindex')).toBeUndefined()
            const button2 = component.find('[data-test-id="button2"]')
            expect(button2.exists()).toBe(true)
            expect(button2.attributes('tabindex')).toBeUndefined()
            await component.setProps({
                isRenderForm2: true,
                isRenderForm3: true,
            })
            expect(input2.attributes('tabindex')).toBe('-1')
            expect(button2.attributes('tabindex')).toBe('-1')
        })

        it('should release focus trap from context once disabled', async() => {
            const component = await createComponent({
                props: {
                    isRenderForm2: true,
                },
            })
            await component.setProps({
                isRenderForm2: false,
            })
            const input1 = component.find('[data-test-id="input1"]')
            expect(input1.exists()).toBe(true)
            expect(input1.attributes('tabindex')).toBeUndefined()
            const button1 = component.find('[data-test-id="button1"]')
            expect(button1.exists()).toBe(true)
            expect(button1.attributes('tabindex')).toBeUndefined()
            expect(component.find('[data-test-id="input2"]').exists()).toBe(false)
            expect(component.find('[data-test-id="button2"]').exists()).toBe(false)
        })
    })
})
