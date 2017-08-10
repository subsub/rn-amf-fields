import React from 'react'
import AmfField from './AmfField'
import renderer from 'react-test-renderer'

test('AmfField without validation', () => {
  let props = { 
		type  : 'text',
		label : 'Label satu dua tiga',
		onChange : () => null,
		value : 'Satu'
	}

	const amfField = <AmfField {...props} />;
	expect(amfField).not.toBe(undefined);

  const component = renderer.create(amfField)
  
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})


/**
 * it should be last because console.error mock error
 *
 */
test('AmfField with wrong type', ()  => {
  let props = { 
		type  : 'zzzzzzzzzzzzzzzzzzzzzzzz',
		label : 'Label satu dua tiga',
		onChange : () => null,
		value : 'Satu'
	}

	console.error = jest.fn(); 
	//const errorMessage = 'Unknown type Field "' + props.type + '" in AmfField';
	expect( () => renderer.create(<AmfField {...props} />)).toThrowErrorMatchingSnapshot();
	expect(console.error).toBeCalled()
});
