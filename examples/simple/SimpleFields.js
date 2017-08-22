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
	ScrollView,
	Image
} from 'react-native';
import { AmfField } from 'rn-amf-fields';

export default class SimpleField extends Component {

	state = {
		text : null,
		number : null,
		formattedNumber : null,
		select: null,
		selectNested: null,
		radio: null,
		radio2: null,
		datepicker: null,
		date: null,
	}

	cc = (key) => (val) => this.setState({[key] : val})

  render() {

		const cc = this.cc;

		const { 
			text,
			number,
			formattedNumber,
			select,
			selectNested,
			radio,
			radio2, 
			datepicker,
			date,
		} = this.state;


    return (
			<ScrollView>

      <View style={styles.container}>
				<Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
        />
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

				<AmfField type="select-nested"             
					label="selectNestedParent|selectNestedChild" 
					onChange={cc('selectNested')}            
					value={selectNested}
					options={[
						{label: "parent1", value: [  
							{ label: "parent1child1" , value:"11"},
							{ label: "parent1child2" , value:"12"},
							{ label: "parent1child3" , value:"13"},
							{ label: "parent1child4" , value:"14"}
						]},
						{label: "parent2", value: [, 
							{ label: "parent2child1" , value:"21"},
							{ label: "parent2child2" , value:"22"},
							{ label: "parent2child3" , value:"23"},
							{ label: "parent2child4" , value:"24"}
						]}
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

				<AmfField type="datepicker"             
					label="datepicker" 
					onChange={cc('datepicker')}            
					value={datepicker}
				/>

				<AmfField type="date"             
					label="date" 
					onChange={cc('date')}            
					value={date}
				/>

				<Text>
					{text} {'\n'}
					{number} {'\n'}
					{formattedNumber} {'\n'}
					{select} {'\n'}
					{radio} {'\n'}
					{radio2} {'\n'}
					{datepicker} {'\n'}
					{date} {'\n'}


				</Text>

      </View>
			</ScrollView>
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
