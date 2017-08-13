import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import RadioForm from 'react-native-simple-radio-button'

class AmfRadioButton extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { label, options, value, required } = this.props

    let validationStyle = {}
    let validationText
    let selected = options.find(i => i.value === value)
    if (required && selected === undefined && value !== null) {
      validationStyle = { borderColor: 'red', borderWidth: 1 }
      validationText = <Text style={style.errorText}>{label} harus dipilih</Text>
    }

    return (
      <View>
        <Text style={style.label}>{this.props.label}</Text>
        <RadioForm
          radio_props={options}
          buttonColor='black'
          buttonSize={12}
          initial={options.findIndex((item) => item.value === value)}
          labelStyle={{marginBottom: 6}}
          onPress={this.props.onChange}
          style={[style.radioForm, validationStyle]}
        />
        { validationText }
      </View>
    )
  }
}

const style = StyleSheet.create({
  button: {
    backgroundColor: 'white',
    elevation: 4,
    padding: 8,
    margin: 4,
    minWidth: 80,
    borderRadius: 32
  },
  buttonText: {
    textAlign: 'center'
  },
  buttonSelected: {
    backgroundColor: '#7ED321',
    elevation: 4,
    padding: 8,
    margin: 4,
    minWidth: 80,
    borderRadius: 32
  },
  buttonTextSelected: {
    textAlign: 'center',
    color: 'white'
  },
  errorText: {
    color: 'red',
    margin: 4,
    marginBottom: 0
  },
  label: {
    color: '#454545',
    marginRight: 16,
    marginBottom: 8
  },
  radioForm: {
    padding: 8
  }
})

const itemShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
})

AmfRadioButton.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(itemShape).isRequired,
  onPress: PropTypes.func.isRequired,
  required: PropTypes.bool,
  value: PropTypes.any
}

export default AmfRadioButton
