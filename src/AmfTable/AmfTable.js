import React, { Component, Children } from 'react'
import PropTypes from 'prop-types'
import fieldPropTypes from '../fieldPropTypes'
import { View, Text } from 'react-native'
import { Dropdown } from 'react-native-material-dropdown'

class AmfTable extends Component {

  constructor(props) {
    super(props)
  }

 onChange = (index, amfKey, val) => {
   this.props.onChange(index, amfKey, val)
 }

 setOnChange = (index, amfKey) => (val) => this.onChange(index, amfKey, val)

 addRow = () => this.props.addRow()


 traverseToChildren = (children, index) => {
   const setOnChange = this.setOnChange
   const { value } = this.props

   return Children.map(children,  C => {
     if (C.props.amfKey) {
       let amfKey = C.props.amfKey
       return React.cloneElement(C, {onChange:setOnChange(index, amfKey), value:value[index][amfKey]})
     }

     return React.cloneElement(C, {}, this.traverseToChildren(C.props.children, index))
   })

 }



 render() {

   const { label, value, options, error, children} = this.props

   const { traverseToChildren } = this

   return (
     <View>
       { value.map( (v, i) => traverseToChildren(children, i) )}
     </View>
   )
 }
}



/*
AmfTable.propTypes = {
	...fieldPropTypes,
	value : PropTypes.string
}
*/

export default AmfTable
