import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'
import { TextField } from 'react-native-material-textfield'

class AmfTextInput extends Component {

 onChange = (val) => this.props.onChange(val);

 render() {

   const { label, value, error } = this.props

   const { onChange } = this

   return (
     <TextField
       label={label}
       onChangeText={onChange}
       keyboardType="default"
       returnKeyType="next"
       value={value || ''}
       error={error}
     />
   )
 }
}

AmfTextInput.propTypes = {
  ...fieldPropTypes,
  value : PropTypes.string
}

export default AmfTextInput
