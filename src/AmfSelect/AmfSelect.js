import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'
import { Dropdown } from 'react-native-material-dropdown'

class AmfSelect extends Component {

 onChange = (val, index) => {
   this.props.onChange(this.props.options[index].value)
   return typeof this.props.onFinish === 'function' && this.props.onFinish()
 }

 render() {

   const { label, value, options, error } = this.props

   const { onChange } = this.props

   // adapt Amf options shape to dropdown shape
   let dropdownData = options.map(i => ({
     value: i.label,
     realValue: i.value
   }))
   let dropdownValue = ''
   let temp = options.find(i => i.value === value)
   if (temp) dropdownValue = temp.label

   return (
     <Dropdown
       label={label}
       data={dropdownData}
       value={dropdownValue || ''}
       onChangeText={this.onChange}
       error={error}
       animationDuration={128}
     />
   )
 }
}

AmfSelect.defaultProps = {
  layout: 'vertical'
}

AmfSelect.propTypes = {
  ...fieldPropTypes,
  value : PropTypes.string,
  layout: PropTypes.oneOf(['vertical', 'horizontal'])
}

export default AmfSelect
