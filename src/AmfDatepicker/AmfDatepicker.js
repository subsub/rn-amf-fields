import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DatePickerAndroid, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import moment from 'moment'

class AmfDatepicker extends Component {
  constructor(props) {
    super(props)

    this.state = {
      valid: false,
      errorMessage: ''
    }
  }

  async openDatepicker(currentDate) {
    try {
      let options = {
        date : moment.unix(currentDate).valueOf()
      }
      const {action, year, month, day} = await DatePickerAndroid.open(options)

      if (action !== DatePickerAndroid.dismissedAction) {
        let formattedDate = moment({y: year, M: month, d: day}).format('YYYY-MM-DD')
        this.props.onSelect(formattedDate)
      } else {
        this.props.onSelect('')
      }

    } catch ({code, message}) {
      console.log(message)
    }
  }

  componentDidMount() {
    this.validate()
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedDate !== prevProps.selectedDate) {
      this.validate()
    }
  }

  onPress = () => {
    this.openDatepicker(moment(this.props.selectedDate, 'YYYY-MM-DD').unix())
  }

  inputValid = () => {
    const { validation, label } = this.props
    if (!validation) return ({status: true})

    // check if pristine
    if (this.props.selectedDate === null || this.props.selectedDate === undefined) return ({status: true})

    // check whether input is required
    if (validation.required) {
      if (this.props.selectedDate === '') return ({status: false, message: label + ' tidak boleh kosong'})
    }

    return ({status: true})
  }

  validate = () => {
    let validationObject = this.inputValid()
    this.setState({valid: validationObject.status, errorMessage: validationObject.message})
  }

  render() {
    let dateFormatted
    if (this.props.selectedDate && this.props.selectedDate !== '') dateFormatted = moment(this.props.selectedDate, 'YYYY-MM-DD').format('DD/MMM/YYYY')
    else dateFormatted = 'Pilih Tgl'

    let validationStyle = {}
    let validationText
    if (!this.state.valid) {
      validationStyle = {borderColor: 'red', borderWidth: 1}
      validationText = <Text style={styles.errorText}>{this.state.errorMessage}</Text>
    }

    return (
      <View>
        <View style={ this.props.layout === 'horizontal' ? styles.container : null}>
          <Text style={styles.label}>{this.props.label}</Text>
          <TouchableOpacity style={[styles.calendarButton, validationStyle]}
            onPress={this.onPress}
          >
            <Text>{ dateFormatted }</Text>
          </TouchableOpacity>
        </View>
        { validationText }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    alignItems: 'center'
  },
  calendarButton: {
    backgroundColor: 'white',
    elevation: 4,
    borderRadius: 16,
    width: 100,
    padding: 7,
    alignItems: 'center'
  },
  errorText: {
    color: 'red',
    margin: 4,
    marginBottom: 0
  },
  label: {
    color: '#454545',
    marginRight: 16
  },
})

AmfDatepicker.propTypes = {
  label: PropTypes.string,
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  onSelect : PropTypes.func.isRequired,
  selectedDate : PropTypes.string,
  validation: PropTypes.object
}

export default AmfDatepicker
