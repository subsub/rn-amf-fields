import React from 'react'
import AmfDateInput from './AmfDateInput'
import renderer from 'react-test-renderer'

test('AmfDateInput without validation', () => {
  let props = {
    label: 'Label',
    onChange: () => {},
    value: null
  }

  const component = renderer.create(<AmfDateInput {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

