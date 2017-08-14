import React from 'react'
import AmfTextInput from './AmfTextInput'
import renderer from 'react-test-renderer'

test('AmfInputText simple render', () => {
  let props = {
    label: 'Label',
    onChange: () => {},
    value: null
  }

  const component = renderer.create(<AmfTextInput {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfInputText simple render with error', () => {
  let props = {
    label: 'Label',
    onChange: () => {},
    value: null
  }

  const component = renderer.create(<AmfTextInput {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
