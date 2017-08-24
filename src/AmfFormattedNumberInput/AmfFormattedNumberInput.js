import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'react-native-material-textfield'
import fieldPropTypes from '../fieldPropTypes'
import numeral from 'numeral'

export default class AmfFormattedNumberInput extends Component {

  static propTypes = { ...fieldPropTypes }

  onChange = val => this.props.onChange(numeral(val).value())

  onSubmitEditing = event => typeof this.props.onFinish === 'function' && this.props.onFinish(event)

  assignRef = ref => this.input = ref

  focus = () => this.input.focus()

  render() {

    const { label, value, error } = this.props

    const { onChange, onSubmitEditing, assignRef } = this

    let shownValue = value && numeral(value).format()

    // handle if zero (can be fill with zero)
    if (value === 0) {
      shownValue = '0'
    }

    return (
      <TextField
        label={label}
        onChangeText={onChange}
        keyboardType="numeric"
        returnKeyType="next"
        value={shownValue || ''}
        error={error}
        onSubmitEditing={onSubmitEditing}
        ref={assignRef}
      />
    )
  }
}
