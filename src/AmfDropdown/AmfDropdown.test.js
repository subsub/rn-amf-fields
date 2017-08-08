import React from 'react'
import { Text } from 'react-native'
import AmfDropdown from './AmfDropdown'
import renderer from 'react-test-renderer'

let item = [{
  label: 'foo',
  value: 'foo'
}, {
  label: 'bar',
  value: 'bar'
}]
let onSelect = jest.fn()
let validation = {
  required: true
}

test('AmfDropdown without validation', () => {
  let props = { item, onSelect }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown with label', () => {
  let props = { item, onSelect, label: 'Label' }
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
    item, onSelect,
    selector: <Text>Custom Selector</Text>
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown with horizontal layout', () => {
  let props = {
    item, onSelect,
    layout: 'horizontal'
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown with required validation', () => {
  let props = {
    item, onSelect, validation
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
    item, onSelect, validation,
    value: 'No Match'
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown with empty value', () => {
  let props = {
    item, onSelect, validation,
    value: ''
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown with empty validation object', () => {
  let props = {
    item, onSelect,
    validation: {}
  }

  const component = renderer.create(<AmfDropdown {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDropdown test onSelect function', () => {
  let props = {
    item, onSelect
  }

  const component = new AmfDropdown(props)
  component.onSelect(0, 'value')
  
  expect(props.onSelect).toHaveBeenCalled()
})

test('AmfDropdown, test willHide event', () => {
  let props = {
    item, onSelect
  }

  const component = new AmfDropdown(props)
  component.setState = jest.fn()
  component.onDropdownWillHide()
  
  expect(component.setState).toHaveBeenCalled()
})

test('AmfDropdown, test willShow event', () => {
  let props = {
    item, onSelect
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
  expect(propsWithValidation.onSelect).toHaveBeenCalled()
})

test('AmfDropdown, test didUpdate event', () => {
  let props = {
    item, onSelect
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

test('AmfDropdown, test new item', () => {
  let props = {
    item, onSelect
  }
  let newItem = [{
    label: 'new',
    value: 'new'
  }]
  let expected = newItem.map(i => i.label)

  const component = new AmfDropdown(props)
  component.componentWillReceiveProps({item: newItem})
  expect(component.item).toEqual(expected)
})
