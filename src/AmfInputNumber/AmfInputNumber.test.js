import React from 'react'
import AmfInputNumber from './AmfInputNumber'
import renderer from 'react-test-renderer'

test('AmfInputNumber without validation', () => {
  let props = {
    label: 'Label',
    onChangeValue: () => {},
    value: null
  }

  const component = renderer.create(<AmfInputNumber {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

