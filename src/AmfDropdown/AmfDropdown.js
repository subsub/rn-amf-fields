import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, View } from 'react-native'
import ModalDropdown from 'react-native-modal-dropdown'
import Icon from 'react-native-vector-icons/MaterialIcons'

class AmfDropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      valid: false,
      isFocused: false
    }

    this.item = this.props.item.map((item) => item.label)
  }

  componentDidMount() {
    this.validate()
  }

  componentWillReceiveProps(nextProps) {
    this.item = nextProps.item.map((item) => item.label)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isFocused !== this.state.isFocused) {
      if (!this.state.isFocused) this.validate()
    }
  }

  getLabel = (val) => {
    let item = this.props.item.find(i => i.value === val)
    if (item) return item.label

    return val
  }

  inputValid = () => {
    const { validation, label } = this.props
    if (!validation) return ({status: true})

    // check if pristine
    if (this.props.value === null || this.props.value === undefined) return ({status: true})

    // check if required
    if (validation.required) {
      if (this.props.value === '') return ({status: false, message: label + ' harus dipilih'})
    }

    return ({status: true})
  }

  onDropdownWillShow = () => {
    if (this.props.validation && this.props.validation.required && this.props.value === null) {
      this.props.onSelect('')
    }

    this.setState({isFocused: true})
  }

  onDropdownWillHide = () => {
    this.setState({isFocused: false})
  }

  onSelect = (idx, value) => {
    this.props.onSelect(this.props.item[idx].value)
  }

  validate = () => {
    let validationObject = this.inputValid()
    this.setState({valid: validationObject.status, errorMessage: validationObject.message})
  }

  renderSelector() {
    if (this.props.selector) return this.props.selector

    return (
      <View style={[style.option, this.props.optionStyle]}>
        <Text style={style.valueText}>{this.props.value ? this.getLabel(this.props.value) : ''}</Text>
        <Icon name="keyboard-arrow-down" size={16} style={style.icon} />
      </View>
    )
  }

  render() {
    const { layout } = this.props

    let validationStyle = {}
    let validationText
    
    if (!this.state.valid) {
      validationStyle = {borderColor: 'red', borderWidth: 1}
      validationText = <Text style={style.errorText}>{this.state.errorMessage}</Text>
    }

    let labelText
    if (this.props.label) {
      labelText = <Text style={[style.label, {marginBottom: layout == 'vertical' ? 8 : 0}]}>{this.props.label}</Text>
    }

    return (
      <View>
        <View style={ layout === 'horizontal' ? style.containerHorizontal : style.container }>
          { labelText }
          <ModalDropdown
            disabled={this.props.disabled}
            style={[style.dropdownContainer, this.props.style, validationStyle]}
            dropdownStyle={[style.dropdown, this.props.dropdownStyle]}
            options={this.item}
            onSelect={this.onSelect}
            onDropdownWillShow={this.onDropdownWillShow}
            onDropdownWillHide={this.onDropdownWillHide}>
            { this.renderSelector() }
          </ModalDropdown>
        </View>
        { validationText }
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {},
  containerHorizontal: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  dropdownContainer: {
    elevation: 4,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'transparent',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  dropdown: {
    width: 100,
    elevation: 4,
    padding: 8,
    height: 150
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
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 30
  },
  icon: {
    marginRight: 16
  },
  valueText: {
    marginLeft: 16
  }
})

const itemShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
})

AmfDropdown.defaultProps = {
  layout: 'vertical'
}

AmfDropdown.propTypes = {
  disabled: PropTypes.bool,
  dropdownStyle: PropTypes.object,
  item: PropTypes.arrayOf(itemShape).isRequired,
  label: PropTypes.string,
  layout: PropTypes.oneOf(['vertical', 'horizontal']),
  onSelect: PropTypes.func.isRequired,
  optionStyle: PropTypes.object,
  selector: PropTypes.element,
  style: PropTypes.object,
  validation: PropTypes.object,
  value: PropTypes.any,
}

export default AmfDropdown
