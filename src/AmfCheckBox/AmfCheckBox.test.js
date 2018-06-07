import React from 'react'
import AmfCheckBox from './AmfCheckBox'
import renderer from 'react-test-renderer'

const value = ['foo']
const label = 'Label'
const items = [{
  label: 'foo',
  value: 'foo'
}, {
  label: 'bar',
  value: 'bar'
}]
const onPress = jest.fn()

test('AmfCheckBox simple render', () => {
  let props = { value, label, items, onPress }
  props.options = [
    { label: 'Label1', value: 'value2' },
    { label: 'Label2', value: 'value3' },
  ]
  
  const component = renderer.create(<AmfCheckBox {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test.skip('AmfCheckBox with validation', () => {
  let props = { label, items, onPress,
    required: true,
    value: []
  }
  
  const component = renderer.create(<AmfCheckBox {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
  
/**
   *
   */
test('AmfCheckBox without options', () => {
  let props = { value, label, items, onPress }
  
  console.error = jest.fn()
  
  expect(() => {
    const component = renderer.create(<AmfCheckBox {...props} />)
    let tree = component.toJSON()
  }).toThrowErrorMatchingSnapshot()
})
