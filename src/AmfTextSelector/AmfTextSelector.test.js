import React from 'react'
import AmfTextSelector from './AmfTextSelector'
import renderer from 'react-test-renderer'

test('AmfTextSelector without validation', () => {
  let props = {
    label: 'Label',
    onPress: () => {},
    value: null,
		items: [
			{ label:'Option 1\nWith Enter\n', value:1 },
			{ label:'Option 2\nWith Enter\n', value:2 },
			{ label:'Option 3\nWith Enter\n', value:3 },
		]
	}

	const component = renderer.create(<AmfTextSelector {...props} />)

	let tree = component.toJSON()
	expect(tree).toMatchSnapshot()
})


