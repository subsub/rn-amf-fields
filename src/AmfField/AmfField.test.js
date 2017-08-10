import React from 'react'
import AmfField from './AmfField'

test('AmfField without validation', () => {
  let props = { 
		type  : 'text',
		label : 'Label satu dua tiga',
		onChange : () => null,
		value : 'Satu
	}

  const component = renderer.create(<AmfField {...props} />)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
