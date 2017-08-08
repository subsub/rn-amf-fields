import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import AmfDropdown from '../AmfDropdown/AmfDropdown'
import moment from 'moment'

class AmfDateText extends Component {
  constructor(props) {
    super(props)

    const initialState = {
      valid: false,
      errorMessage: ''
    }

    if (this.props.value != '' && this.props.value != null && this.props.value != undefined) {
      console.log(this.props.value)
      let temp = this.props.value.split('-')
      this.state = {
        ...initialState,
        day: temp[2],
        month: temp[1],
        year: temp[0]
      }
    } else {
      this.state = {
        ...initialState,
        day: '',
        month: '',
        year: ''
      }
    }

    this.dayOptions = this.createDayOptions()
    this.monthOptions = this.createMonthOptions()
    this.yearOptions = this.createYearOptions()
  }

  componentDidMount() {
    this.validate()
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.validate()
    }
  }

  createDayOptions = () => {
    let opt = []
    for (let i = 1; i <= 31; i++) {
      let str = i.toString()
      let strPadded = str.length === 1 ? '0' + str : str
      opt.push({ label: strPadded, value: strPadded })
    }

    return opt
  }

  createMonthOptions = () => {
    let opt = []
    for (let i = 1; i <= 12; i++) {
      let str = i.toString()
      let strPadded = str.length === 1 ? '0' + str : str
      opt.push({ label: monthNames[i-1], value: strPadded })
    }

    return opt
  }

  createYearOptions = () => {
    let opt = []
    for (let i = 1940; i <= 2017; i++) {
      let str = i.toString()
      opt.push({ label: str, value: str })
    }

    return opt
  }

  updateDate(type, val) {
    let date
    let year = type == 'year' ? val : this.state.year
    let month = type == 'month' ? val : this.state.month
    let day = type == 'day' ? val : this.state.day

    this.setState({ day, month, year })

    if (day == '' || month == '' || year == '') return 'incomplete'

    do {
      date = moment(year + '-' + month + '-' + day, 'YYYY-MM-DD').format('YYYY-MM-DD')
      if (date == 'Invalid date') {
        let dayInt = parseInt(day)
        day = (dayInt-1).toString().padStart(2, '0')
      }
    } while (date == 'Invalid date')

    return date
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
    let dayObject = this.dayOptions.find((item) => item.value == this.state.day)
    let monthObject = this.monthOptions.find((item) => item.value == this.state.month)
    let yearObject = this.yearOptions.find((item) => item.value == this.state.year)

    let validationStyle = {}
    let validationText
    if (!this.state.valid) {
      validationStyle = {borderColor: 'red', borderWidth: 1}
      validationText = <Text style={style.errorText}>{this.state.errorMessage}</Text>
    }

    return (
      <View>
        <View style={ this.props.layout === 'horizontal' ? style.container : null}>
          <Text style={style.label}>{this.props.label}</Text>
          <View style={[style.pickerContainer, validationStyle]}>
            <AmfDropdown
              layout='horizontal'
              item={this.dayOptions}
              value={dayObject ? dayObject.value : null}
              onSelect={(val) => {
                let temp = val
                date = this.updateDate('day', temp)
                if (date != 'incomplete') this.props.onChange(date)
              }}
              selector={
                <View style={[style.selector, {width: 50}]}>
                  <Text style={style.textInput}>{dayObject ? dayObject.label : 'DD'}</Text>
                </View>
              }
            />
            <Text style={style.dividerText}>/</Text>
            <AmfDropdown
              layout='horizontal'
              item={this.monthOptions}
              value={monthObject ? monthObject.value : null}
              onSelect={(val) => {
                let temp = val
                date = this.updateDate('month', temp)
                if (date != 'incomplete') this.props.onChange(date)
              }}
              selector={
                <View style={[style.selector, {width: 50}]}>
                  <Text style={style.textInput}>{monthObject ? monthObject.label : 'MM'}</Text>
                </View>
              }
            />
            <Text style={style.dividerText}>/</Text>
            <AmfDropdown
              layout='horizontal'
              item={this.yearOptions}
              value={yearObject ? yearObject.value : null}
              onSelect={(val) => {
                let temp = val
                date = this.updateDate('year', temp)
                if (date != 'incomplete') this.props.onChange(date)
              }}
              selector={
                <View style={[style.selector, {width: 70}]}>
                  <Text style={style.textInput}>{yearObject ? yearObject.label : 'YYYY'}</Text>
                </View>
              }
            />
          </View>
        </View>
        { validationText }
      </View>
    )
  }
}

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']

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
    padding: 8
  },
  selector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 30
  },
  textInput: {
    textAlign: 'center'
  }
})

AmfDateText.defaultProps = {
  layout: 'vertical'
}

AmfDateText.propTypes = {
  label: PropTypes.string,
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default AmfDateText
