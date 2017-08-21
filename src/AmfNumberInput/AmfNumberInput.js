import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'
import { TextField } from 'react-native-material-textfield'

class AmfNumberInput extends Component {

 onChange = val => this.props.onChange(val)

 render() {

   const { label, value, error } = this.props

   const { onChange } = this
		
   return (
     <TextField
       label={label}
       onChangeText={onChange}
       keyboardType="numeric"
       returnKeyType="next"
       value={value || ''}
       error={error}
     />
   )
 }
}

AmfNumberInput.propTypes = {
  ...fieldPropTypes,
  value : PropTypes.string
}

export default AmfNumberInput
