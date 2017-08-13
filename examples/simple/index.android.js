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
  View
} from 'react-native';
import { AmfField } from 'rn-amf-fields';

export default class simple extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text : null,
			number : null,
			formattedNumber : null,
			select: null,
			radio: null,
			radio2: null,
		}
	}

	cc = (key) => (val) => this.setState({[key] : val})

  render() {

		const cc = this.cc;

		const { text, number, formattedNumber, select, radio, radio2 } = this.state;


    return (
      <View style={styles.container}>

				<AmfField type="text"             
					label="text" 
					onChange={cc('text')}            
					value={text}
				/>

				<AmfField type="number"             
					label="number" 
					onChange={cc('number')}            
					value={number}
				/>

				<AmfField type="formatted-number"             
					label="formatted-number" 
					onChange={cc('formattedNumber')}            
					value={formattedNumber}
				/>

				<AmfField type="select"             
					label="select" 
					onChange={cc('select')}            
					value={select}
					options={[
						{label: "label1", value: "value1" },
						{label: "label2", value: "value2" },
						{label: "label3", value: "value3" },
						{label: "label4", value: "value4" }
					
					]}
				/>

				<AmfField type="radio"             
					label="radio" 
					onChange={cc('radio')}            
					value={radio}
					options={[
						{label: "label1", value: "value1" },
						{label: "label2", value: "value2" },
						{label: "label3", value: "value3" },
						{label: "label4", value: "value4" }
					]}
				/>

				<AmfField type="radio"             
					label="Radio2" 
					onChange={cc('radio2')}            
					value={radio2}
					options={[
						{label: "Prempuan", value: "value1" },
						{label: "Laki-laki", value: "value2" },
					]}
				/>

				<Text>
					{text} {'\n'}
					{number} {'\n'}
					{formattedNumber} {'\n'}
					{select} {'\n'}
					{radio} {'\n'}
					{radio2} {'\n'}


				</Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('simple', () => simple);
