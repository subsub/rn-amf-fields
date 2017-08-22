import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'
import { View } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

class AmfSelectNested extends Component {
  constructor(props) {
    super(props)

    this.state = {
      valid: false,
      isFocused: false
    }

    this.checkError()
  }

  checkError() {

    const {
      label, 
      options
    } = this.props

    if (!label) {
      throw new TypeError('AmfSelect Nested really needs label give whitespace (" ", "\r") if you dont want any be print in select')
    }

    if (!options) {
      throw new TypeError('Field "' + label + '" need options to render correctly')
    }
  }

  componentDidMount() {
    this.validate()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isFocused !== this.state.isFocused) {
      if (!this.state.isFocused) this.validate()
    }
  }

 getLabel = (val) => {
   let option = this.props.options.find(i => i.value === val)
   return option && option.label
 }

 inputValid = () => {
   const { validation, label } = this.props
   if (!validation) return ({status: true})

   // check if pristine
   if (this.props.value === null || this.props.value === undefined) return ({status: true})

   // check if required
   if (validation.required) {
     if (this.props.value === '') return ({status: false, message: label + ' harus dipilih'})
   }

   return ({status: true})
 }

 onSelectWillShow = () => {
   if (this.props.validation && this.props.validation.required && this.props.value === null) {
     this.props.onChange('')
   }

   this.setState({isFocused: true})
 }

 onSelectWillHide = () => {
   this.setState({isFocused: false})
 }

 validate = () => {
   let validationObject = this.inputValid()
   this.setState({valid: validationObject.status, errorMessage: validationObject.message})
 }

 onChangeParent = (val) => this.setState({value1: val})

 onChange = (val) => this.props.onChange(val)

 render() {
   const { label, value, options, error } = this.props

   // for props with type use proxy function
   const { onChange, onChangeParent } = this

   const [ label1, label2 ] = label && label.split('|')
   const options1 = options.map((option, i) => ({ ...option, value:option.label}))
   const { value1 } = this.state
   const value1Options = options.find(option => option.label == value1)
   const options2 = value1Options ? value1Options.value : []

   return (
     <View>
       <Dropdown
         label={label1}
         data={options1}
         value={value1 || ''}
         onChangeText={onChangeParent}
         error={error}
				 animationDuration={128}
       />
       <Dropdown
         label={label2}
         data={options2}
         value={value || ''}
         onChangeText={onChange}
         error={error}
				 animationDuration={128}
       />
     </View>
   )
 }
}


const childItem = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
})

const parentItem = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(childItem).isRequired
})

AmfSelectNested.propTypes = {
  ...fieldPropTypes,
  option : PropTypes.arrayOf(parentItem),
  value : PropTypes.string
}

export default AmfSelectNested
