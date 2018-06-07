import React, { Component } from 'react'
import fieldPropTypes from '../fieldPropTypes'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import CheckboxGroup from 'react-native-checkbox-group'

class AmfCheckBox extends Component {
  constructor(props) {
    super(props)

    this.checkError()
  }

  checkError() {
    const { label, options, value, onChange } = this.props

    if (!label) {
      throw new TypeError('Label for AmfCheckBox not exists. Did you forget to add label')
    }

    if (!options) {
      throw new TypeError('Field "' + label + '" (AmfCheckBox) doesnt have options')
    }
  }

  render() {
    const { label, options, value, onChange, error } = this.props

    let validationText
    if (error !== '') validationText = <Text style={style.errorText}>{error}</Text>

    return (
      <View>
        <Text style={style.label}>{label}</Text>
        <CheckboxGroup
          callback={onChange}
          iconSize={30}
          checkedIcon="md-checkbox"
          uncheckedIcon="md-checkbox-outline"
          checkboxes={
            options.map( (option, i) => (
              {
                label: option.label,
                value: option.value,
                selected: value.indexOf(option.value) > -1
              }
            ))
          }
          labelStyle={{
            color: '#333'
          }}
          rowStyle={{
            flexDirection: 'row'
          }}
          rowDirection={'column'}
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
    marginRight: 16,
    marginBottom: 8
  }
})

AmfCheckBox.propTypes = {
  ...fieldPropTypes,
  value: PropTypes.array.isRequired,
}

export default AmfCheckBox
