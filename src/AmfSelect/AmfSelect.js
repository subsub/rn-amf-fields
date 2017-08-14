import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'
import { Dropdown } from 'react-native-material-dropdown'

class AmfSelect extends Component {

 onChange = (val) => this.props.onChange(val)

 render() {

   const { label, value, options, error } = this.props

   const { onChange } = this.props

   return (
		 <Dropdown
			 label={label}
			 data={options}
			 value={value || ''}
			 onChangeText={onChange}
			 error={error}
		   animationDuration={128}
			/>
   )
 }
}

AmfSelect.propTypes = {
	...fieldPropTypes,
	value : PropTypes.string
}

export default AmfSelect
