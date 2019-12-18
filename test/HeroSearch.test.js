import { mount } from '@vue/test-utils'
import HeroSearch from '@/components/HeroSearch'

describe('HeroSearch', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(HeroSearch, {
      propsData: {
        heading: [{ type: 'heading1', text: 'API Developer Portal', spans: [] }]
      }
    })
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})
