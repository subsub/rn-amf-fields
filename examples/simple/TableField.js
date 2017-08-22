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
import { AmfField, AmfTable } from 'rn-amf-fields';
import SimpleFields from './SimpleFields';

export default class TableField extends Component {

	state = {
		value: []
	}

	cc = (key) => (val) => this.setState({[key] : val})

	onTableChange = (index, amfKey, val) => {
		console.warn('kcing')
		let value = {...this.state.value}
		value[index] = {...this.state.value[index]}
		value[index][amfKey] = val
		this.setState({value})
	}

  render() {


		const cc = this.cc;

		const { 
		} = this.state;

    return (
			<View>
				<ScrollView>
				<AmfTable value={[{}]} onChange={this.onTableChange}>
					<AmfField label="Masukin ini field1" type="text" amfKey="field1" onChange={()=>null}/>
					<AmfField label="Satu dua tiga"      type="number" amfKey="field2" onChange={()=>null}/>
					<AmfField label="Empat imat enam"    type="text" amfKey="field3" onChange={()=>null}/>
					<View style={{flexDirection:'row', width:400, height:100, backgroundColor:'red'}}>
						<View style={{flex:1}}>
						<AmfField label="satu" type="text" amfKey="field4" onChange={()=>null} />
						</View>
						<View style={{flex:3}}>
						<AmfField label="dua" type="text" amfKey="field5"  onChange={()=>null}/>
						</View>
					</View>
					<View style={{flexDirection:'row', width:300, height:100, backgroundColor:'blue'}}>
						<View style={{flex:1}}>
							<AmfField label="tiga" type="text" amfKey="field6" onChange={()=>null} />
						</View>
						<View style={{flex:3}}>
							<AmfField label="empat" type="text" amfKey="field7"  onChange={()=>null}/>
						</View>
					</View>
				</AmfTable>
				</ScrollView>
			</View>
    );
  }
}
