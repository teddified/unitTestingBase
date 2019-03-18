import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Enzyme, { mount } from 'enzyme'
import InputSearch from './InputSearch'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

const SearchInputComponent = mount(<InputSearch placeholder="test" testing />)

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('input field has value', () => {
  expect(SearchInputComponent.props('placeholder')).toEqual({
    placeholder: 'test',
    testing: true
  })
})

it('change input value', () => {
  SearchInputComponent.find('button').simulate('click')

  expect(SearchInputComponent.find('input').props().value).toEqual('hello')
})
