import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

class AmfRadioButton extends Component {
  constructor(props) {
    super(props)

		this.checkError();
  }

	checkError() {
		const { label, options, value, onChange } = this.props;

		if (!label) {
			throw new TypeError('Label for AmfRadioButton not exists. Did you forget to add label');
		}

		if (!options) {
			throw new TypeError('Field "' + label + '" (AmfRadioButton) doesnt have options');
		}
	}

  render() {
    const { label, options, value, onChange, required } = this.props

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
        <RadioForm formHorizontal={true} >
          { options.map( (option, i) => (
            <RadioButton labelHorizontal={true} key={i} >
              {/*  You can set RadioButtonLabel before RadioButtonInput */}
              <RadioButtonInput
                obj={option}
                index={i}
                isSelected={option.value === value}
                onPress={onChange}
                borderWidth={1}
                buttonInnerColor={'#009688'}
                buttonOuterColor={option.value === value ? '#009688' : '#000000' }
                buttonSize={16}
                buttonOuterSize={24}
                buttonStyle={{}}
                buttonWrapStyle={{marginLeft: 10}}
              />
              <RadioButtonLabel
                obj={option}
                index={i}
                labelHorizontal={true}
                onPress={onChange}
                labelStyle={{}}
                labelWrapStyle={{}}
              />
            </RadioButton>
          ))}

        </RadioForm>
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
  required: PropTypes.bool,
  value: PropTypes.any
}

export default AmfRadioButton
