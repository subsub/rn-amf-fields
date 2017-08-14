import React from 'react'
import AmfLikertScale from './AmfLikertScale'
import renderer from 'react-test-renderer'

test('AmfLikertScale without validation', () => {
  let props = {
    label: 'Label',
    onPress: () => {},
    items: [
      {label:'Sangat Setuju', value: 1},
      {label:'Setuju Setuju', value: 2},
      {label:'Tida Setuju', value: 3},
      {label:'Sangat Tidak Setuju', value: 4},
    ],
    value: null
  }

  const component = renderer.create(<AmfLikertScale {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

