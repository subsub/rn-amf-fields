import React from 'react'
import { Text } from 'react-native'
import AmfDropdown from './AmfDropdown'
import renderer from 'react-test-renderer'

let list = [{
  label: 'foo',
  value: 'foo'
}, {
  label: 'bar',
  value: 'bar'
}]
let onChange = jest.fn()
let validation = {
  required: true
}

test('AmfDropdown without validation', () => {
  let props = { list, onChange }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown with label', () => {
  let props = { list, onChange, label: 'Label' }
  let propsHorizontal = { ...props, layout: 'horizontal' }

  const component = renderer.create(<AmfDropdown {...props} />)
  const componentHorizontal = renderer.create(<AmfDropdown {...propsHorizontal} />)
  
  let tree = component.toJSON()
  let treeHorizontal = componentHorizontal.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeHorizontal).toMatchSnapshot()
})

test('AmfDropdown with custom selector', () => {
  let props = {
    list, onChange,
    selector: <Text>Custom Selector</Text>
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown with horizontal layout', () => {
  let props = {
    list, onChange,
    layout: 'horizontal'
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown with required validation', () => {
  let props = {
    list, onChange, validation
  }
  let propsWithValue = {
    ...props, value: 'foo'
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  const componentWithValue = renderer.create(<AmfDropdown {...propsWithValue} />)
  
  let tree = component.toJSON()
  let treeWithValue = componentWithValue.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeWithValue).toMatchSnapshot()
})

test('AmfDropdown with unmatch value', () => {
  let props = {
    list, onChange, validation,
    value: 'No Match'
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown with empty value', () => {
  let props = {
    list, onChange, validation,
    value: ''
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown with empty validation object', () => {
  let props = {
    list, onChange,
    validation: {}
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown test onChange function', () => {
  let props = {
    list, onChange
  }

  const component = new AmfDropdown(props)
  component.onChange(0, 'value')
  
  expect(props.onChange).toHaveBeenCalled()
})

test('AmfDropdown, test willHide event', () => {
  let props = {
    list, onChange
  }

  const component = new AmfDropdown(props)
  component.setState = jest.fn()
  component.onDropdownWillHide()
  
  expect(component.setState).toHaveBeenCalled()
})

test('AmfDropdown, test willShow event', () => {
  let props = {
    list, onChange
  }
  let propsWithValidation = {
    ...props, validation, value: null
  }

  const component = new AmfDropdown(props)
  component.setState = jest.fn()
  component.onDropdownWillShow()

  const componentWithValidation = new AmfDropdown(propsWithValidation)
  componentWithValidation.setState = jest.fn()
  componentWithValidation.onDropdownWillShow()

  expect(component.setState).toHaveBeenCalled()
  expect(propsWithValidation.onChange).toHaveBeenCalled()
})

test('AmfDropdown, test didUpdate event', () => {
  let props = {
    list, onChange
  }

  const component = new AmfDropdown(props)
  component.state = {isFocused: false}
  component.validate = jest.fn()
  component.componentDidUpdate({}, {isFocused: true})
  expect(component.validate).toHaveBeenCalled()

  const componentFocused = new AmfDropdown(props)
  componentFocused.state = {isFocused: true}
  componentFocused.validate = jest.fn()
  componentFocused.componentDidUpdate({}, {isFocused: false})
  expect(componentFocused.validate).not.toHaveBeenCalled()
})

test('AmfDropdown, test new list', () => {
  let props = {
    list, onChange
  }
  let newItem = [{
    label: 'new',
    value: 'new'
  }]
  let expected = newItem.map(i => i.label)

  const component = new AmfDropdown(props)
  component.componentWillReceiveProps({list: newItem})
  expect(component.list).toEqual(expected)
})
