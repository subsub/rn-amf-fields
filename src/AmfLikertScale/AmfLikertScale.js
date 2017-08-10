import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { interpolateRdYlGn } from 'd3-scale-chromatic'

class AmfLikertScale extends Component {
  constructor(props) {
    super(props)

    this.state = {
      circleDiameter: 0,
      itemMargin: 0,
      valid: false
    }
  }

  componentDidMount() {
    this.validate()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.selectedIndex !== this.props.selectedIndex) this.validate()
  }

  validate = () => {
    const { required, pristine, selectedIndex } = this.props

    if (!required) {
      this.setState({valid: true})
      return
    }

    if (pristine) {
      this.setState({valid: true})
      return
    }

    if (selectedIndex !== -1) {
      this.setState({valid: true})
      return
    }

    this.setState({valid: false})
    return
  }

  renderScale(item, index) {
    let interpolation = 0
    if (index < this.props.items.length/2) interpolation = index/this.props.items.length
    else interpolation = (index+1)/this.props.items.length

    return (
      <TouchableOpacity
        key={index}
        style={[
          style.scaleItem,
          {
            borderColor: interpolateRdYlGn(interpolation),
            backgroundColor: this.props.selectedIndex == index ? interpolateRdYlGn(interpolation) : 'white',
            width: this.state.circleDiameter,
            height: this.state.circleDiameter,
            borderRadius: this.state.circleDiameter/2
          }
        ]}
        onPress={() => {
          this.props.onPress(index)
        }}
      >
        <Text style={[style.scaleText, {color: this.props.selectedIndex == index ? 'white' : interpolateRdYlGn(interpolation), fontSize: this.state.circleDiameter/2.5}]}>{item.value}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    let validationStyle = {}
    let validationText
    if (!this.state.valid) {
      validationStyle = { borderColor: 'red', borderWidth: 1 }
      validationText = <Text style={style.errorText}>{this.props.label + ' harus dipilih'}</Text>
    }

    return (
      <View>
        <Text style={style.label}>{this.props.label}</Text>
        <View style={[{padding: 8}, validationStyle]}>
          <View style={style.scaleContainer}
            onLayout={(event) => {
              let base = event.nativeEvent.layout.width/this.props.items.length
              let itemMargin = base/this.props.items.length*1.5
              let diameter = (base)-(itemMargin)
              this.setState({circleDiameter: diameter, itemMargin: itemMargin})
            }}
          >
            { this.props.items.map(this.renderScale.bind(this)) }
          </View>
          <View style={[style.noteContainer, {marginHorizontal: this.state.itemMargin/2}]}>
            <Text style={{textAlign: 'center', width: this.state.circleDiameter}}>{this.props.items[0].label || 'Sangat Tidak Setuju'}</Text>
            <Text style={{textAlign: 'center', width: this.state.circleDiameter}}>{this.props.items[this.props.items.length-1].label || 'Sangat Setuju'}</Text>
          </View>
        </View>
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
  },
  scaleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 16
  },
  noteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  scaleItem: {
    borderWidth: 1,
    justifyContent: 'center'
  },
  scaleText: {
    textAlign: 'center'
  }
})

const itemShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
})

AmfLikertScale.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(itemShape).isRequired,
  onPress: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired,
  pristine: PropTypes.bool,
  required: PropTypes.bool
}

export default AmfLikertScale