import React from 'react'
import AmfTextInput from './AmfTextInput'
import renderer from 'react-test-renderer'

test('AmfInputText without validation', () => {
  let props = {
    label: 'Label',
    onChange: () => {},
    value: null
  }

  const component = renderer.create(<AmfTextInput {...props} />)

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('AmfInputText with required validation', () => {
  let props = {
    label: 'Label',
    onChange: () => {},
    value: null,
    validation: {
      required: true
    }
  }

  const component = renderer.create(<AmfTextInput {...props} />)
  const componentError = renderer.create(<AmfTextInput {...props} value="" />)
  const componentErrorAB = renderer.create(<AmfTextInput {...props} value="ab" />)

  let tree = component.toJSON()
  let treeError = componentError.toJSON()
  let treeErrorAB = componentErrorAB.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeError).toMatchSnapshot()
  expect(treeErrorAB).toMatchSnapshot()
})

test('AmfInputText with regex validation', () => {
  let props = {
    label: 'Label',
    onChange: () => {},
    value: null,
    validation: {
      regex: /e/
    }
  }
  let propsNotNull = {
    label: 'Label',
    onChange: () => {},
    value: '',
    validation: {
      regex: /e/
    }
  }
  let propsRight = {
    label: 'Label',
    onChange: () => {},
    value: 'test',
    validation: {
      regex: /e/
    }
  }
  let propsWrong = {
    label: 'Label',
    onChange: () => {},
    value: 'ups',
    validation: {
      regex: /e/
    }
  }

  const component = renderer.create(<AmfTextInput {...props} />)
  const componentNotNull = renderer.create(<AmfTextInput {...propsNotNull} />)
  const componentRight = renderer.create(<AmfTextInput {...propsRight} />)
  const componentWrong = renderer.create(<AmfTextInput {...propsWrong} />)

  let tree = component.toJSON()
  let treeNotNull = componentNotNull.toJSON()
  let treeRight = componentRight.toJSON()
  let treeWrong = componentWrong.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeNotNull).toMatchSnapshot()
  expect(treeRight).toMatchSnapshot()
  expect(treeWrong).toMatchSnapshot()
})

test('AmfInputText with minLength validation', () => {
  let props = {
    label: 'Label',
    onChange: () => {},
    value: null,
    validation: {
      minLength: 2
    }
  }

  const component = renderer.create(<AmfTextInput {...props} />)
  const componentError = renderer.create(<AmfTextInput {...props} value="" />)
  const componentErrorAB = renderer.create(<AmfTextInput {...props} value="ab" />)

  let tree = component.toJSON()
  let treeError = componentError.toJSON()
  let treeErrorAB = componentErrorAB.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeError).toMatchSnapshot()
  expect(treeErrorAB).toMatchSnapshot()
})

test('AmfInputText with exactLength validation', () => {
  let props = {
    label: 'Label',
    onChange: () => {},
    value: null,
    validation: {
      exactLength: 2
    }
  }

  const component = renderer.create(<AmfTextInput {...props} />)
  const componentError = renderer.create(<AmfTextInput {...props} value="" />)
  const componentErrorAB = renderer.create(<AmfTextInput {...props} value="ab" />)
  const componentErrorABC = renderer.create(<AmfTextInput {...props} value="abC" />)

  let tree = component.toJSON()
  let treeError = componentError.toJSON()
  let treeErrorAB = componentErrorAB.toJSON()
  let treeErrorABC = componentErrorABC.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeError).toMatchSnapshot()
  expect(treeErrorAB).toMatchSnapshot()
  expect(treeErrorABC).toMatchSnapshot()
})

test('AmfInputText with maxLength validation', () => {
  let props = {
    label: 'Label',
    onChange: () => {},
    value: null,
    validation: {
      maxLength: 2
    }
  }

  const component = renderer.create(<AmfTextInput {...props} />)
  const componentError = renderer.create(<AmfTextInput {...props} value="" />)
  const componentErrorAB = renderer.create(<AmfTextInput {...props} value="ab" />)
  const componentErrorABC = renderer.create(<AmfTextInput {...props} value="abC" />)

  let tree = component.toJSON()
  let treeError = componentError.toJSON()
  let treeErrorAB = componentErrorAB.toJSON()
  let treeErrorABC = componentErrorABC.toJSON()
  expect(tree).toMatchSnapshot()
  expect(treeError).toMatchSnapshot()
  expect(treeErrorAB).toMatchSnapshot()
  expect(treeErrorABC).toMatchSnapshot()
})

test('AmfInputText onFocus', () => {
  let props = {
    label: 'Label',
    onChange: jest.fn(),
    value: 'test',
    validation: {
      required: true
    }
  }
  let propsPristine = {
    label: 'Label',
    onChange: jest.fn(),
    value: null,
    validation: {
      required: true
    }
  }
  let propsNull = {
    label: 'Label',
    onChange: jest.fn(),
    value: null
  }

  // const component = renderer.create(<AmfTextInput {...props} />)
  const component = new AmfTextInput(props)
  const componentPristine = new AmfTextInput(propsPristine)
  const componentWithoutValidation = new AmfTextInput(propsNull)

  component.onFocus()
  componentPristine.onFocus()
  componentWithoutValidation.onFocus()

  expect(props.onChange).not.toHaveBeenCalled()
  expect(propsPristine.onChange).toHaveBeenCalled()
  expect(propsNull.onChange).not.toHaveBeenCalled()
})

test('AmfInputText onBlur', () => {
  const component = new AmfTextInput({})

  component.validate = jest.fn()
  component.onBlur()

  expect(component.validate).toHaveBeenCalled()
})
