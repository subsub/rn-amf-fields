import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Picker } from 'react-native'
import moment from 'moment/min/moment-with-locales.min.js'

moment.locale('id')

class AmfDateInput extends Component {

  constructor(props) {
    super(props)
		
    let year = monthNumStr = month =  day = errorMessage = '', valid = false

    if (this.props.value) {
      [year, monthNumStr, day] = this.props.value.split('-')
      let tempMoment = moment(this.props.value)
      if (tempMoment.isValid()) {
        month = tempMoment.format('MMM')
      }
    }

    this.state = { valid, errorMessage, year, month, day }
  }

  componentDidMount() {
    this.validate()
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.validate()
      let year = monthNumStr = month =  day = ''
      if (this.props.value) {
        [year, monthNumStr, day] = this.props.value.split('-')
        let tempMoment = moment(this.props.value)
        if (tempMoment.isValid()) {
          month = tempMoment.format('MMM')
        }
      }
      this.setState({year, month, day})
    }
  }

  updateValue = (type, val) =>  {

    let year  = type == 'year'  ? val : this.state.year
    let month = type == 'month' ? val : this.state.month
    let day   = type == 'day'   ? val : this.state.day

    if (day == '' || month == '' || year == '') {
      this.setState({ day, month, year })
      return
    }
    
    let date = moment([year, month, day].join('-'), 'YYYY-MMM-DD').format('YYYY-MM-DD')
    console.log([year, month, day].join('-'))
    console.log(date, day, month, year)
    while (date == 'Invalid date') {
      day = (parseInt(day)-1).toString()
      date = moment([year, month, day].join('-'), 'YYYY-MMM-D').format('YYYY-MM-DD')
    }
    let monthNumStr = ''
      [year, monthNumStr, day] = date.split('-')

    this.setState({ day, month, year })

    return this.props.onChange(date)
  }

  inputValid = () => {
    const { validation, label } = this.props
    if (!validation) return ({status: true})

    // check if pristine
    if (this.props.value === null || this.props.value === undefined) return ({status: true})

    // check whether input is required
    if (validation.required) {
      if (this.props.value === '') return ({status: false, message: label + ' tidak boleh kosong'})
    }

    return ({status: true})
  }

  validate = () => {
    let validationObject = this.inputValid()
    this.setState({valid: validationObject.status, errorMessage: validationObject.message})
  }

  render() {
    const {year, month, day} = this.state

    let validationStyle = {}
    let validationText
    if (!this.state.valid) {
      validationStyle = {borderColor: 'red', borderWidth: 1}
      validationText = <Text style={style.errorText}>{this.state.errorMessage}</Text>
    }

    const updateValue = this.updateValue

    return (
      <View>
        <Text style={style.label}>{this.props.label}</Text>
        <View style={[style.pickerContainer, validationStyle]}>
          <Picker mode='dropdown' onValueChange={val => updateValue('day', val)} selectedValue={day} style={{flex: 1}}>
            { days.map(i => <Picker.Item key={'d' + i} value={i} label={i} />) }
          </Picker>

          <Picker mode='dropdown' onValueChange={val => updateValue('month', val)} selectedValue={month} style={{flex: 1}}>
            { months.map(i => <Picker.Item key={'m' + i} value={i} label={i} />) }
          </Picker>
          
          <Picker mode='dropdown' onValueChange={val => updateValue('year', val)} selectedValue={year} style={{flex: 1}}>
            { years.map(i => <Picker.Item key={'y' + i} value={i} label={i} />) }
          </Picker>

        </View>
        { validationText }
      </View>
    )
  }
}

const months = ['MM', 'Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']

const days   = ['DD', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31']

let yearsConst = ['YYYY']
for (let i=1940; i <= new Date().getFullYear() - 18; i++) { yearsConst.push(String(i)) }
const years = yearsConst


const style = StyleSheet.create({
  container : {
    flexDirection: 'row',
    alignItems: 'center',
    // paddingVertical: 8
  },
  dividerText: {
    fontSize: 20,
    color: '#9B9B9B',
    marginHorizontal: 4
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
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  },
  picker: {
    textAlign: 'center'
  }
})

AmfDateInput.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default AmfDateInput
