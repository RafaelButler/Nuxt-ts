import { mount, Wrapper } from '@vue/test-utils'
import Input from '@/components/Input.vue'

describe('Testing input component', () => {
  let wrapper: Wrapper<Input, Element>
  beforeEach(() => {
    wrapper = mount(Input)
  })
  it('should render input component', () => {
    wrapper.get('[data-test="input"]')
  })
})
