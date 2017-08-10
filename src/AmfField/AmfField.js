import React, { Component } from 'react'
import AmfTextInput from '../AmfTextInput/AmfTextInput'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'

const switcher = {
	'text': AmfTextInput,
}

class AmfField extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		const { type, label, onChange, value, list  } = this.props;
		console.log(onChange)
		if (type in switcher) {
			const Component = switcher[type];
			return <Component type={type} label={label} onChange={onChange} value={value}  />
		} else {
			throw new Error ('Unknown type Field "' + type + '" in AmfField');
		}
	}
}


AmfField.propTypes = {...fieldPropTypes, type:PropTypes.string.isRequired}

export default AmfField
