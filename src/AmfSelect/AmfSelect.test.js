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
  let props = { options, onChange, label:'Label' }

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
