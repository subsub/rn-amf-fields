import React, { Component } from 'react'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { TextField } from 'react-native-material-textfield';

class AmfTextInput extends Component {
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
    if (this.props.validation && this.props.validation.required && this.props.value === null) this.props.onChange('')
  }

  inputValid = () => {
    const { validation, label, value } = this.props
    if (!validation) return ({status: true})

    // check if pristine
    if (value === null || value === undefined) return ({status: true})

    // check whether input is required
    if (validation.required) {
      if (value === '') return ({status: false, message: label + ' tidak boleh kosong'})
    }

    // check regex
    if (validation.regex && value !== '') {
      if (!validation.regex.test(value)) return ({status: false, message: 'Format tidak sesuai'})
    }

    // check whether input needs exact length
    if (validation.exactLength) {
      if (value.length !== parseInt(validation.exactLength)) return ({status: false, message: label + ' harus ' + validation.exactLength + ' karakter'})
    }

    // check whether input needs minimum length
    if (validation.minLength) {
      if (value.length < parseInt(validation.minLength)) return ({status: false, message: label + ' minimal ' + validation.minLength + ' karakter'})
    }

    // check whether input needs maximum length
    if (validation.maxLength) {
      if (value.length > parseInt(validation.maxLength)) return ({status: false, message: label + ' maksimum ' + validation.minLength + ' karakter'})
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

		const { label, onChange, value } = this.props;
    
    if (!this.state.valid) {
      textInputValidationStyle = { borderColor: 'red' }
      validationText = <Text style={style.errorText}>{this.state.errorMessage}</Text>
    }

    return (
      <View>
				<TextField
					label={label}
					onChangeText={onChange}
					keyboardType="default"
			    returnKeyType="next"
					options={{}}
					value={value || ""}
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

AmfTextInput.propTypes = fieldPropTypes;

export default AmfTextInput
