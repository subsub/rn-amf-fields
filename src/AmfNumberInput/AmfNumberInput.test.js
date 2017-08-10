import React from 'react'
import AmfNumberInput from './AmfNumberInput'
import renderer from 'react-test-renderer'

test('AmfNumberInput without validation', () => {
  let props = {
    label: 'Label',
    onChangeValue: () => {},
    value: null
  }

  const component = renderer.create(<AmfNumberInput {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

