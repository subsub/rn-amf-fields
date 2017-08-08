import React from 'react'
import AmfRadioButton from './AmfRadioButton'
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

test('AmfRadioButton without validation', () => {
  let props = { label, items, onPress }

  const component = renderer.create(<AmfRadioButton {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfRadioButton with validation', () => {
  let props = { label, items, onPress,
    required: true,
    value: ''
  }

  const component = renderer.create(<AmfRadioButton {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
