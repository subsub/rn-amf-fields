import React from 'react'
import AmfDateText from './AmfDateText'
import renderer from 'react-test-renderer'

test('AmfDateText without validation', () => {
  let props = {
    label: 'Label',
    onChange: () => {},
    value: null
  }

  const component = renderer.create(<AmfDateText {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

