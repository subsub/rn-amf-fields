import React, { Component } from 'react'
import AmfTextInput from '../AmfTextInput/AmfTextInput'
import AmfLikertScale from '../AmfLikertScale/AmfLikertScale'
import AmfNumberInput from '../AmfNumberInput/AmfNumberInput'
import AmfFormattedNumberInput from '../AmfFormattedNumberInput/AmfFormattedNumberInput'
import AmfRadioButton from '../AmfRadioButton/AmfRadioButton'
import AmfRadioButtonVertical from '../AmfRadioButton/AmfRadioButtonVertical'
import AmfDatepicker from '../AmfDatepicker/AmfDatepicker'
import AmfDateInput from '../AmfDateInput/AmfDateInput'
import AmfSelect from '../AmfSelect/AmfSelect'
import AmfSelectNested from '../AmfSelectNested/AmfSelectNested'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'

const switcher = {
  'text': AmfTextInput,
  'likert': AmfLikertScale,
  'number': AmfNumberInput,
  'formatted-number': AmfFormattedNumberInput,
  'select': AmfSelect,
  'select-nested': AmfSelectNested,
  'radio' : AmfRadioButton,
  'radio-vertical' : AmfRadioButtonVertical,
  'datepicker': AmfDatepicker,
  'date': AmfDateInput,
}

class AmfField extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { type, label, onChange, value, options  } = this.props
    if (type in switcher) {
      const Component = switcher[type]
      return <Component type={type} label={label} onChange={onChange} value={value} options={options} />
    } else {
      throw new TypeError ('Unknown type Field "' + type + '" in AmfField')
    }
  }
}


AmfField.propTypes = {...fieldPropTypes, type:PropTypes.string.isRequired}

export default AmfField
