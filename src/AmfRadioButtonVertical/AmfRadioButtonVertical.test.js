import React from 'react'
import AmfRadioButtonVertical from './AmfRadioButtonVertical'
import renderer from 'react-test-renderer'

const label = 'Label'
const items = [{
  label: 'foo',
  value: 'foo'
}, {
  label: 'bar',
  value: 'bar'
}]
const onPress = jest.fn()

test('AmfRadioButtonVertical simple render', () => {
  let props = { label, items, onPress }
  props.options = [
    { label: 'Label1', value: 'value2' },
    { label: 'Label2', value: 'value3' },
  ]

  const component = renderer.create(<AmfRadioButtonVertical {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test.skip('AmfRadioButtonVertical with validation', () => {
  let props = { label, items, onPress,
    required: true,
    value: ''
  }

  const component = renderer.create(<AmfRadioButtonVertical {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

/**
 *
 */
test('AmfRadioButtonVertical without options', () => {
  let props = { label, items, onPress }

  console.error = jest.fn()

  expect(() => {
    const component = renderer.create(<AmfRadioButtonVertical {...props} />)
    let tree = component.toJSON()
  }).toThrowErrorMatchingSnapshot()
})
