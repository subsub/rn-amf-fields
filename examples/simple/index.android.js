/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	TouchableOpacity,
	ScrollView,
	Image
} from 'react-native';
import { AmfField } from 'rn-amf-fields';

import SimpleFields from './SimpleFields'
import TableField from './TableField'

const switcher = { SimpleFields, TableField }

export default class simple extends Component {

	state = {
		page:'SimpleFields'
	}

  render() {
	  let Component = switcher[this.state.page];

		s = (val) => () => this.setState({page : val })

		return (
			<View>
				<TouchableOpacity onPress={s('SimpleFields')}><Text>Simple Fields</Text></TouchableOpacity>
				<TouchableOpacity onPress={s('TableField')}><Text>Table Field</Text></TouchableOpacity>
				<Component />


			</View>


		)

  }
}


AppRegistry.registerComponent('simple', () => simple);
