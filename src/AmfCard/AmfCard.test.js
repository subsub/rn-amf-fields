import React from 'react'
import AmfCard from './AmfCard'
import renderer from 'react-test-renderer'

test('AmfCard without validation', () => {
  let props = {
    label: 'Label',
    onChangeText: () => {},
    value: null
  }

  const component = renderer.create(<AmfCard {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


