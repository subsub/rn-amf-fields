import React, { Component } from 'react'
import AmfTextInput from '../AmfTextInput/AmfTextInput'
import AmfLikertScale from '../AmfLikertScale/AmfLikertScale'
import AmfNumberInput from '../AmfNumberInput/AmfNumberInput'
import AmfFormattedNumberInput from '../AmfFormattedNumberInput/AmfFormattedNumberInput'
import AmfRadioButton from '../AmfRadioButton/AmfRadioButton'
import AmfDatepicker from '../AmfDatepicker/AmfDatepicker'
import AmfDateInput from '../AmfDateInput/AmfDateInput'
import AmfSelect from '../AmfSelect/AmfSelect'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'

const switcher = {
  'text': AmfTextInput,
  'likert': AmfLikertScale,
  'number': AmfNumberInput,
  'formatted-number': AmfFormattedNumberInput,
  'select': AmfSelect,
  'radio' : AmfRadioButton,
  'datepicker': AmfDatepicker,
  'date': AmfDateInput,
}

class AmfField extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { type } = this.props
    const props = this.props
    if (type in switcher) {
      const Component = switcher[type]
      return <Component {...props} />
    } else {
      throw new TypeError ('Unknown type Field "' + type + '" in AmfField')
    }
  }
}


AmfField.propTypes = {
  ...fieldPropTypes,
  type: PropTypes.string.isRequired,
  value: PropTypes.any
}

export default AmfField
