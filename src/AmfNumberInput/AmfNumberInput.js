import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'
import { TextField } from 'react-native-material-textfield'

export default class AmfNumberInput extends Component {

  static propTypes = { ...fieldPropTypes }

  onChange = val => this.props.onChange(val)

  onSubmitEditing = event => typeof this.props.onFinish === 'function' && this.props.onFinish(event)

  assignRef = ref => this.input = ref

  focus = () => this.input.focus()

  render() {

    const { label, value, error } = this.props

    const { onChange, onSubmitEditing, assignRef } = this

    return (
      <TextField
      label={label}
      onChangeText={onChange}
      keyboardType="numeric"
      returnKeyType="next"
      value={value || ''}
      error={error}
      onSubmitEditing={onSubmitEditing}
      ref={assignRef}
      />
    )
  }
}

