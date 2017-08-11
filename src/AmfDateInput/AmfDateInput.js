import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View, Picker } from 'react-native'
import moment from 'moment'

class AmfDateInput extends Component {

  constructor(props) {
    super(props)
		
		let year = month =  day = errorMessage = '', valid = false;

    if (this.props.value) {
			[year, month, day] = this.props.value.split('-');
    }

		this.state = { valid, errorMessage, year, month, day }
  }

  componentDidMount() {
    this.validate()
  }

  componentDidUpdate(prevProps) {
    if (this.props.value !== prevProps.value) {
      this.validate()
    }
  }

  updateDate = (type, val) =>  {

    let year  = type == 'year'  ? val : this.state.year
    let month = type == 'month' ? val : this.state.month
    let day   = type == 'day'   ? val : this.state.day

    this.setState({ day, month, year })

    if (day == '' || month == '' || year == '') return;

		let date = moment([year, month, day].join('-'), 'YYYY-MM-DD').format('YYYY-MM-DD')

		while (date == 'Invalid date') {
			day = (parseInt(day)-1).toString().padStart(2, '0')
			date = moment([year, month, day].join('-'), 'YYYY-MM-DD').format('YYYY-MM-DD')
		}

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
		const {year, month, day} = this.state;

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
						<Picker mode='dropdown' onValueChange={val => updateValue('day', val)} value={day}>
							{ days.map(i => <Picker.Item key={i} value={i} label={i} />) }
						</Picker>
            <Text style={style.dividerText}>/</Text>

						<Picker mode='dropdown' onValueChange={val => updateValue('day', val)} value={month}>
							{ months.map(i => <Picker.Item key={i} value={i} label={i} />) }
						</Picker>
            <Text style={style.dividerText}>/</Text>
							
						<Picker mode='dropdown' onValueChange={val => updateValue('day', val)} value={year}>
							{ years.map(i => <Picker.Item key={i} value={i} label={i} />) }
						</Picker>

          </View>
        </View>
        { validationText }
      </View>
    )
  }
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Ags', 'Sep', 'Okt', 'Nov', 'Des']

const days   = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '31']

let yearsConst = []
for (let i=1940; i< new Date().getFullYear() - 18; i++) { yearsConst.push(String(i)) }
const years = yearsConst;


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

AmfDateInput.defaultProps = {
  layout: 'vertical'
}

AmfDateInput.propTypes = {
  label: PropTypes.string,
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

export default AmfDateInput
