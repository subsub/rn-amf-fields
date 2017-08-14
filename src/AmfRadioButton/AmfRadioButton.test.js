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

test('AmfRadioButton simple render', () => {
  let props = { label, items, onPress }
	props.options = [
		{ label: 'Label1', value: 'value2' },
		{ label: 'Label2', value: 'value3' },
	]

  const component = renderer.create(<AmfRadioButton {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test.skip('AmfRadioButton with validation', () => {
  let props = { label, items, onPress,
    required: true,
    value: ''
  }

  const component = renderer.create(<AmfRadioButton {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

/**
 *
 */
test('AmfRadioButton without options', () => {
  let props = { label, items, onPress }

	console.error = jest.fn();

	expect(() => {
		const component = renderer.create(<AmfRadioButton {...props} />)
		let tree = component.toJSON()
	}).toThrowErrorMatchingSnapshot();
})
