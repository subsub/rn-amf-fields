Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/AmfRadioButton/AmfRadioButton.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _reactNativeSimpleRadioButton=require('react-native-simple-radio-button');var _reactNativeSimpleRadioButton2=_interopRequireDefault(_reactNativeSimpleRadioButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AmfRadioButton=function(_Component){_inherits(AmfRadioButton,_Component);function AmfRadioButton(props){_classCallCheck(this,AmfRadioButton);return _possibleConstructorReturn(this,(AmfRadioButton.__proto__||Object.getPrototypeOf(AmfRadioButton)).call(this,props));}_createClass(AmfRadioButton,[{key:'render',value:function render(){var _props=this.props,label=_props.label,items=_props.items,value=_props.value,required=_props.required;var validationStyle={};var validationText=void 0;var selected=items.find(function(i){return i.value===value;});if(required&&selected===undefined&&value!==null){validationStyle={borderColor:'red',borderWidth:1};validationText=_react2.default.createElement(_reactNative.Text,{style:style.errorText,__source:{fileName:_jsxFileName,lineNumber:19}},label,' harus dipilih');}return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:23}},_react2.default.createElement(_reactNative.Text,{style:style.label,__source:{fileName:_jsxFileName,lineNumber:24}},this.props.label),_react2.default.createElement(_reactNativeSimpleRadioButton2.default,{radio_props:items,buttonColor:'black',buttonSize:12,initial:items.findIndex(function(item){return item.value===value;}),labelStyle:{marginBottom:6},onPress:this.props.onPress,style:[style.radioForm,validationStyle],__source:{fileName:_jsxFileName,lineNumber:25}}),validationText);}}]);return AmfRadioButton;}(_react.Component);var style=_reactNative.StyleSheet.create({button:{backgroundColor:'white',elevation:4,padding:8,margin:4,minWidth:80,borderRadius:32},buttonText:{textAlign:'center'},buttonSelected:{backgroundColor:'#7ED321',elevation:4,padding:8,margin:4,minWidth:80,borderRadius:32},buttonTextSelected:{textAlign:'center',color:'white'},errorText:{color:'red',margin:4,marginBottom:0},label:{color:'#454545',marginRight:16,marginBottom:8},radioForm:{padding:8}});var itemShape=_propTypes2.default.shape({label:_propTypes2.default.string.isRequired,value:_propTypes2.default.any.isRequired});AmfRadioButton.propTypes={label:_propTypes2.default.string.isRequired,items:_propTypes2.default.arrayOf(itemShape).isRequired,onPress:_propTypes2.default.func.isRequired,required:_propTypes2.default.bool,value:_propTypes2.default.any};exports.default=AmfRadioButton;