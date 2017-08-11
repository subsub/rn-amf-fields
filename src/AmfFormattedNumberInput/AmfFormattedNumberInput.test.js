import React from 'react'
import AmfFormattedNumberInput from './AmfFormattedNumberInput'
import renderer from 'react-test-renderer'

test('AmfFormattedNumberInput without validation', () => {
  let props = {
    label: 'Label',
    onChangeValue: () => {},
    value: null
  }

  const component = renderer.create(<AmfFormattedNumberInput {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

