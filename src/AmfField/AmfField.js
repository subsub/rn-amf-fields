import React, { Component } from 'react'
import AmfTextInput from '../AmfTextInput/AmfTextInput'
import AmfLikertScale from '../AmfLikertScale/AmfLikertScale'
import AmfNumberInput from '../AmfNumberInput/AmfNumberInput'
import AmfFormattedNumberInput from '../AmfFormattedNumberInput/AmfFormattedNumberInput'
import AmfRadioButton from '../AmfRadioButton/AmfRadioButton'
import AmfRadioButtonVertical from '../AmfRadioButtonVertical/AmfRadioButtonVertical'
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

export default class AmfField extends Component {

	static propTypes = {...fieldPropTypes, type:PropTypes.string.isRequired }

  focus = () => typeof this.field.focus === 'function' && this.field.focus()

  render() {
    const props = this.props
    const type = props.type
    if (type in switcher) {
      const Component = switcher[type]
      return <Component { ...this.props } ref={ f => this.field = f } />
    } else {
      throw new TypeError ('Unknown type Field "' + type + '" in AmfField')
    }
  }
}

