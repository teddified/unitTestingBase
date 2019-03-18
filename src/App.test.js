import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Enzyme, { mount } from 'enzyme'
import Calculator from './Calculator'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const Input = mount(<Calculator placeholder="test" testing />)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('check if image exists', () => {
  expect(Input.exists('[data-test="rotateLogo"]')).toEqual(true)
})

// Test if props are passed through
it('input field has value', () => {
  expect(Input.props()).toEqual({
    placeholder: 'test',
    testing: true
  })
})

// Test class selectors to match
it('reset value', () => {
  Input.find('button').simulate('click')

  expect(
    Input.find('[data-test="factor1"]')
      .at(0)
      .props().value
  ).toEqual(0)
  expect(
    Input.find('[data-test="factor2"]')
      .at(0)
      .props().value
  ).toEqual(0)
})

// Test business logic
it('calculate', () => {
  Input.find('[data-test="factor1"]')
    .at(0)
    .simulate('change', {
      target: { value: 5 }
    })
  Input.find('[data-test="factor2"]')
    .at(0)
    .simulate('change', {
      target: { value: 2 }
    })
  Input.find('button').simulate('click')

  expect(
    Input.find('[data-test="result"]')
      .at(0)
      .props().value
  ).toEqual(10)
})
