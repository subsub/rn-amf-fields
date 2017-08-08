import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

class AmfCard extends Component {
  constructor(props) {
    super(props)
  }

  renderAction() {
    if (this.props.actionIcon) {
      return (
        <TouchableOpacity
          onPress={this.props.actionOnPress}
        >
          <Icon name={this.props.actionIcon} color={this.props.actionColor || 'black'} size={24}/>
        </TouchableOpacity>
      )
    }

    return null
  }

  renderTitle() {
    if (this.props.title) {
      return (
        <Text style={style.headerText}>{this.props.title}</Text>
      )
    }

    if (this.props.titleComponent) return this.props.titleComponent

    return (
      <View></View>
    )
  }

  renderHeader() {
    if (this.props.noHeader) return null

    return (
      <View style={style.headerContainer}>
        { this.renderTitle() }
        { this.props.actionComponent ? this.props.actionComponent : this.renderAction() }
      </View>
    )
  }

  render() {
    return (
      <TouchableOpacity
        style={[style.container, this.props.style]}
        onPress={this.props.onPress}
        disabled={this.props.disableTouch}
      >
        { this.renderHeader() }
        <View style={style.bodyContainer}>
          { this.props.body }
        </View>
      </TouchableOpacity>
    )
  }
}

const style = StyleSheet.create({
  bodyContainer: {
    padding: 16
  },
  container: {
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 4,
    elevation: 4
  },
  headerContainer: {
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#E8E8E8'
  },
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16
  }
})

AmfCard.propTypes = {
  title: PropTypes.string,
  titleComponent: PropTypes.element,
  actionComponent: PropTypes.element,
  actionIcon: PropTypes.string,
  actionColor: PropTypes.string,
  actionOnPress: PropTypes.func,
  body: PropTypes.element.isRequired,
  noHeader: PropTypes.bool,
  onPress: PropTypes.func,
  style: View.propTypes.style,
  disableTouch: PropTypes.bool
}

export default AmfCard
