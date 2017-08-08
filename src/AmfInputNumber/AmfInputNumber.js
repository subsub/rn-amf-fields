import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

class AmfNumberInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      valid: false,
      message: ''
    }
  }

  componentDidMount() {
    this.validate()
  }

  onBlur = () => {
    this.validate()
  }

  onFocus = () => {
    if (this.props.validation && this.props.validation.required && this.props.value === null) this.props.onChangeValue(this.props.pristineValue)
  }

  inputValid = () => {
    const { validation, label, pristineValue } = this.props
    if (!validation) return ({status: true})

    // check if pristine
    if (this.props.value === null || this.props.value === undefined) return ({status: true})

    // check whether input is required
    if (validation.required) {
      if (this.props.value === pristineValue) return ({status: false, message: label + ' tidak boleh kosong'})
    }

    return ({status: true})
  }

  validate = () => {
    let validationObject = this.inputValid()
    this.setState({valid: validationObject.status, errorMessage: validationObject.message})
  }

  render() {
    let textInputValidationStyle = {}
    let validationText
    
    if (!this.state.valid) {
      textInputValidationStyle = { borderColor: 'red' }
      validationText = <Text style={style.errorText}>{this.state.errorMessage}</Text>
    }

    return (
      <View>
        <Text style={style.label}>{this.props.label}</Text>
        <TextInputMask
          ref={(tim) => {
            this.tim = tim
          }}
          type={'money'}
          options={{
            unit: this.props.unit || '',
            precision: this.props.precision || 0,
            separator: this.props.separator || ',',
            delimiter: this.props.delimiter || '.'
          }}
          style={[style.textInput, this.props.style, textInputValidationStyle]}
          onChangeText={(text) => {
            let val = this.tim.getRawValue()
            this.props.onChangeValue(val)
          }}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          value={this.props.value === this.props.pristineValue ? null : this.props.value}
        />
        { validationText }
      </View>
    )
  }
}

const style = StyleSheet.create({
  errorText: {
    color: 'red',
    margin: 4,
    marginBottom: 0
  },
  label: {
    color: '#454545',
    marginBottom: 8
  },
  textInput: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDDDDD',
    color: '#9B9B9B',
    fontSize: 14,
    borderRadius: 3,
    paddingBottom:10
  }
})

AmfNumberInput.defaultProps = {
  pristineValue: -1
}

AmfNumberInput.propTypes = {
  delimiter: PropTypes.string,
  label: PropTypes.string.isRequired,
  onChangeValue: PropTypes.func.isRequired,
  precision: PropTypes.number,
  pristineValue: PropTypes.number,
  separator: PropTypes.string,
  style: TextInput.propTypes.style,
  unit: PropTypes.string,
  value: PropTypes.number
}

export default AmfNumberInput
