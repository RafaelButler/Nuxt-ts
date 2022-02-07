import { mount } from '@vue/test-utils'
import Button from '@/components/Button.vue'

describe('Testing button component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(Button)
  })

  afterEach(() => {
    wrapper.destroy()
  })

  it('A button component have Botao name', () => {
    const button = wrapper.find('button')
    expect(button.text()).toContain('Botao')
  })

  //   it('Find a button', () => {})

  //   it('A button component have click event', () => {
  //     wrapper.trigger('click')
  //   })
})
