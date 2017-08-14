import React from 'react'
import { Text } from 'react-native'
import AmfSelectNested from './AmfSelectNested'
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

test('AmfSelectNested simple render', () => {
  let props = { label:'\r', options, onChange }

  const component = renderer.create(<AmfSelectNested {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfSelectNested with label', () => {
  let props = { options, onChange, label: 'Label' }
  let propsHorizontal = { ...props, layout: 'horizontal' }

  const component = renderer.create(<AmfSelectNested {...props} />)
  const componentHorizontal = renderer.create(<AmfSelectNested {...propsHorizontal} />)
  
  let tree = component.toJSON()
  let treeHorizontal = componentHorizontal.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeHorizontal).toMatchSnapshot()
})

test('AmfSelectNested with unmatch value', () => {
  let props = {
		label: 'Label',
    options, onChange, validation,
    value: 'No Match'
  }

  const component = renderer.create(<AmfSelectNested {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfSelectNested with empty value', () => {
  let props = {
		label: 'Label',
    options, onChange, validation,
    value: ''
  }

  const component = renderer.create(<AmfSelectNested {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfSelectNested with empty validation object', () => {
  let props = {
		label: 'Label',
    options, onChange,
    validation: {}
  }

  const component = renderer.create(<AmfSelectNested {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfSelectNested test onChange function', () => {
  let props = {
		label: 'Label',
    options, onChange
  }

  const component = new AmfSelectNested(props)
  component.onChange(0, 'value')
  
  expect(props.onChange).toHaveBeenCalled()
})

test('AmfSelectNested, test willHide event', () => {
  let props = {
		label: 'Label',
    options, onChange
  }

  const component = new AmfSelectNested(props)
  component.setState = jest.fn()
  component.onSelectWillHide()
  
  expect(component.setState).toHaveBeenCalled()
})

test('AmfSelectNested, test willShow event', () => {
  let props = {
		label: 'Label',
    options, onChange
  }
  let propsWithValidation = {
    ...props, validation, value: null
  }

  const component = new AmfSelectNested(props)
  component.setState = jest.fn()
  component.onSelectWillShow()

  const componentWithValidation = new AmfSelectNested(propsWithValidation)
  componentWithValidation.setState = jest.fn()
  componentWithValidation.onSelectWillShow()

  expect(component.setState).toHaveBeenCalled()
  expect(propsWithValidation.onChange).toHaveBeenCalled()
})

test('AmfSelectNested, test didUpdate event', () => {
  let props = {
		label: 'Label',
    options, onChange
  }

  const component = new AmfSelectNested(props)
  component.state = {isFocused: false}
  component.validate = jest.fn()
  component.componentDidUpdate({}, {isFocused: true})
  expect(component.validate).toHaveBeenCalled()

  const componentFocused = new AmfSelectNested(props)
  componentFocused.state = {isFocused: true}
  componentFocused.validate = jest.fn()
  componentFocused.componentDidUpdate({}, {isFocused: false})
  expect(componentFocused.validate).not.toHaveBeenCalled()
})

test.skip('AmfSelectNested, test new options', () => {
  let props = {
		label: 'Label',
    options, onChange
  }
  let newItem = [{
    label: 'new',
    value: 'new'
  }]
  let expected = newItem.map(i => i.label)

  const component = new AmfSelectNested(props)
  component.componentWillReceiveProps({options: newItem})

  expect(component.options).toEqual(expected)
})
