import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { interpolateRdYlGn } from 'd3-scale-chromatic'

let { width, height } = Dimensions.get('window')

class AmfTextSelector extends Component {
  constructor(props) {
    super(props)
  }

  renderItems(item, index) {
    let color
    if (item.color == undefined) {
      let interpolation = 0
      if (index < this.props.items.length/2) interpolation = index/this.props.items.length
      else interpolation = (index+1)/this.props.items.length
      color = interpolateRdYlGn(interpolation)
    } else color = item.color

    let selected = this.props.selectedIndex == index

    return (
      <TouchableOpacity key={index} style={style.container}
        onPress={() => {
          this.props.onPress(index)
        }}
      >
        <View style={[style.indicator, {backgroundColor: selected ? '#421C58' : color}]}>
        </View>
        <View style={[style.textContainer, {backgroundColor: selected ? '#421C58' : 'white', borderColor: selected ? '#421C58' : '#D4D4D4'}]}>
          <Text style={{color: selected ? 'white' : 'black'}}>{item.label}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <ScrollView
        horizontal={true}
        style={this.props.style}
        contentContainerStyle={{padding: 16}}
      >
        { this.props.items.map(this.renderItems.bind(this)) }
      </ScrollView>
    )
  }
}

const style = StyleSheet.create({
  container: {
    marginHorizontal: 8,
    width: width*0.6
  },
  indicator: {
    height: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  textContainer: {
    padding: 16,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1
  }
})

const itemShape = PropTypes.shape({
  color: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
})

AmfTextSelector.propTypes = {
  items: PropTypes.arrayOf(itemShape).isRequired,
  onPress: PropTypes.func.isRequired,
  selectedIndex: PropTypes.number.isRequired
}

export default AmfTextSelector
