import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TextInput, Text, View } from 'react-native'
import { TextField } from 'react-native-material-textfield'
import numeral from 'numeral'


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

  onChangeText = val => this.props.onChange(numeral(val).value())

  render() {
    let textInputValidationStyle = {}
    let validationText

    const { label, value } = this.props

    if (!this.state.valid) {
      textInputValidationStyle = { borderColor: 'red' }
      validationText = <Text style={style.errorText}>{this.state.errorMessage}</Text>
    }

    let shownValue = value && numeral(value).format()
    if (value === 0) {
      shownValue = '0'
    }

    return (
      <View>
        <TextField
          label={label}
          onChangeText={this.onChangeText}
          keyboardType="numeric"
          returnKeyType="next"
          value={shownValue || ''}
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
  onChange: PropTypes.func.isRequired,
  precision: PropTypes.number,
  pristineValue: PropTypes.number,
  separator: PropTypes.string,
  style: TextInput.propTypes.style,
  unit: PropTypes.string,
  value: PropTypes.number
}

export default AmfNumberInput
