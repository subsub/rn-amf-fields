import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TextField } from 'react-native-material-textfield'
import fieldPropTypes from '../fieldPropTypes'
import numeral from 'numeral'

class AmfFormattedNumberInput extends Component {

  onChange = val => this.props.onChange(numeral(val).value())

  render() {

    const { label, value, error } = this.props

		const { onChange } = this;

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
			/>
    )
  }
}

AmfFormattedNumberInput.propTypes = {
	...fieldPropTypes,
	value : PropTypes.number
}

export default AmfFormattedNumberInput
