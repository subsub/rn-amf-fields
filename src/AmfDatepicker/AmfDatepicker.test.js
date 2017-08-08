import React from 'react'
import AmfDatepicker from './AmfDatepicker'
import renderer from 'react-test-renderer'

// jest.mock('./DatepickerAndroid')

const onSelect = jest.fn()

test('AmfDatepicker without validation', () => {
  let props = { onSelect }

  const component = renderer.create(<AmfDatepicker {...props} />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfDatepicker with unselected date', () => {
  let props = { onSelect, selectedDate: null }
  let propsEmpty = { ...props, selectedDate: '' }
  
  const component = renderer.create(<AmfDatepicker {...props} />)
  const componentEmpty = renderer.create(<AmfDatepicker {...propsEmpty} />)
  let tree = component.toJSON()
  let treeEmpty = componentEmpty.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeEmpty).toMatchSnapshot()
})

test('AmfDatepicker with layout', () => {
  let props = {
    onSelect,
    layout: 'vertical'
  }
  let propsHorizontal = {
    ...props, layout: 'horizontal'
  }

  const component = renderer.create(<AmfDatepicker {...props} />)
  const componentHorizontal = renderer.create(<AmfDatepicker {...propsHorizontal} />)

  let tree = component.toJSON()
  let treeHorizontal = component.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeHorizontal).toMatchSnapshot()
})

test('test required validation of AmfDatepicker', () => {
  let props = { onSelect, validation: { required: true } }
  let propsNull = { ...props, selectedDate: null }
  let propsEmpty = { ...props, selectedDate: '' }
  let propsNotEmpty = { ...props, selectedDate: '2017-07-07' }

  const component = renderer.create(<AmfDatepicker {...props} />)
  const componentNull = renderer.create(<AmfDatepicker {...propsNull} />)
  const componentEmpty = renderer.create(<AmfDatepicker {...propsEmpty} />)
  const componentNotEmpty = renderer.create(<AmfDatepicker {...propsNotEmpty} />)

  let tree = component.toJSON()
  let treeNull = componentNull.toJSON()
  let treeEmpty = componentEmpty.toJSON()
  let treeNotEmpty = componentNotEmpty.toJSON()

  expect(tree).toMatchSnapshot()
  expect(treeNull).toMatchSnapshot()
  expect(treeEmpty).toMatchSnapshot()
  expect(treeNotEmpty).toMatchSnapshot()
})

test('AmfDatepicker test onPress', () => {
  let props = { onSelect }
  const component = new AmfDatepicker(props)
  component.openDatepicker = jest.fn()
  component.onPress()
  expect(component.openDatepicker).toHaveBeenCalled()
})

test('AmfDatepicker test componentDidUpdate', () => {
  let props = { onSelect }
  const component = new AmfDatepicker(props)
  component.validate = jest.fn()
  component.props.selectedDate = '2017-07-07'
  component.componentDidUpdate({selectedDate: '2017-07-06'})
  expect(component.validate).toHaveBeenCalled()
})

// test('AmfDatepicker test openDatepicker function', async () => {
//   let props = { onSelect }

//   const component = new AmfDatepicker(props)
//   component.openDatepicker('2017-07-07')
//   await expect(props.onSelect).resolves.toHaveBeenCalled()
// })
