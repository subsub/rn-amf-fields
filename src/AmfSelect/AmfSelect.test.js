import React from 'react'
import { Text } from 'react-native'
import AmfSelect from './AmfSelect'
import renderer from 'react-test-renderer'

let options = [{
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

test('AmfSelect without validation', () => {
  let props = { options, onChange }

  const component = renderer.create(<AmfSelect {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfSelect with label', () => {
  let props = { options, onChange, label: 'Label' }
  let propsHorizontal = { ...props, layout: 'horizontal' }

  const component = renderer.create(<AmfSelect {...props} />)
  const componentHorizontal = renderer.create(<AmfSelect {...propsHorizontal} />)
  
  let tree = component.toJSON()
  let treeHorizontal = componentHorizontal.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeHorizontal).toMatchSnapshot()
})

test('AmfSelect with custom selector', () => {
  let props = {
    options, onChange,
    selector: <Text>Custom Selector</Text>
  }

  const component = renderer.create(<AmfSelect {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfSelect with horizontal layout', () => {
  let props = {
    options, onChange,
    layout: 'horizontal'
  }

  const component = renderer.create(<AmfSelect {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfSelect with required validation', () => {
  let props = {
    options, onChange, validation
  }
  let propsWithValue = {
    ...props, value: 'foo'
  }

  const component = renderer.create(<AmfSelect {...props} />)
  const componentWithValue = renderer.create(<AmfSelect {...propsWithValue} />)
  
  let tree = component.toJSON()
  let treeWithValue = componentWithValue.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeWithValue).toMatchSnapshot()
})

test('AmfSelect with unmatch value', () => {
  let props = {
    options, onChange, validation,
    value: 'No Match'
  }

  const component = renderer.create(<AmfSelect {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfSelect with empty value', () => {
  let props = {
    options, onChange, validation,
    value: ''
  }

  const component = renderer.create(<AmfSelect {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfSelect with empty validation object', () => {
  let props = {
    options, onChange,
    validation: {}
  }

  const component = renderer.create(<AmfSelect {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfSelect test onChange function', () => {
  let props = {
    options, onChange
  }

  const component = new AmfSelect(props)
  component.onChange('foo', 0)
  
  expect(props.onChange).toHaveBeenCalled()
})

test('AmfSelect, test willHide event', () => {
  let props = {
    options, onChange
  }

  const component = new AmfSelect(props)
  component.setState = jest.fn()
  component.onSelectWillHide()
  
  expect(component.setState).toHaveBeenCalled()
})

test('AmfSelect, test willShow event', () => {
  let props = {
    options, onChange
  }
  let propsWithValidation = {
    ...props, validation, value: null
  }

  const component = new AmfSelect(props)
  component.setState = jest.fn()
  component.onSelectWillShow()

  const componentWithValidation = new AmfSelect(propsWithValidation)
  componentWithValidation.setState = jest.fn()
  componentWithValidation.onSelectWillShow()

  expect(component.setState).toHaveBeenCalled()
  expect(propsWithValidation.onChange).toHaveBeenCalled()
})

test('AmfSelect, test didUpdate event', () => {
  let props = {
    options, onChange
  }

  const component = new AmfSelect(props)
  component.state = {isFocused: false}
  component.validate = jest.fn()
  component.componentDidUpdate({}, {isFocused: true})
  expect(component.validate).toHaveBeenCalled()

  const componentFocused = new AmfSelect(props)
  componentFocused.state = {isFocused: true}
  componentFocused.validate = jest.fn()
  componentFocused.componentDidUpdate({}, {isFocused: false})
  expect(componentFocused.validate).not.toHaveBeenCalled()
})

test.skip('AmfSelect, test new options', () => {
  let props = {
    options, onChange
  }
  let newItem = [{
    label: 'new',
    value: 'new'
  }]
  let expected = newItem.map(i => i.label)

  const component = new AmfSelect(props)
  component.componentWillReceiveProps({options: newItem})

  expect(component.options).toEqual(expected)
})
