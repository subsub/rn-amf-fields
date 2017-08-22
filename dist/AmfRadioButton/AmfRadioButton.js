Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/AmfRadioButton/AmfRadioButton.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _fieldPropTypes=require('../fieldPropTypes');var _fieldPropTypes2=_interopRequireDefault(_fieldPropTypes);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _reactNativeSimpleRadioButton=require('react-native-simple-radio-button');var _reactNativeSimpleRadioButton2=_interopRequireDefault(_reactNativeSimpleRadioButton);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AmfRadioButton=function(_Component){_inherits(AmfRadioButton,_Component);function AmfRadioButton(props){_classCallCheck(this,AmfRadioButton);var _this=_possibleConstructorReturn(this,(AmfRadioButton.__proto__||Object.getPrototypeOf(AmfRadioButton)).call(this,props));_this.checkError();return _this;}_createClass(AmfRadioButton,[{key:'checkError',value:function checkError(){var _props=this.props,label=_props.label,options=_props.options,value=_props.value,onChange=_props.onChange;if(!label){throw new TypeError('Label for AmfRadioButton not exists. Did you forget to add label');}if(!options){throw new TypeError('Field "'+label+'" (AmfRadioButton) doesnt have options');}}},{key:'render',value:function render(){var _props2=this.props,label=_props2.label,options=_props2.options,value=_props2.value,onChange=_props2.onChange,required=_props2.required;var validationStyle={};var validationText=void 0;var selected=options.find(function(i){return i.value===value;});if(required&&selected===undefined&&value!==null){validationStyle={borderColor:'red',borderWidth:1};validationText=_react2.default.createElement(_reactNative.Text,{style:style.errorText,__source:{fileName:_jsxFileName,lineNumber:34}},label,' harus dipilih');}return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:38}},_react2.default.createElement(_reactNative.Text,{style:style.label,__source:{fileName:_jsxFileName,lineNumber:39}},this.props.label),_react2.default.createElement(_reactNativeSimpleRadioButton2.default,{formHorizontal:true,__source:{fileName:_jsxFileName,lineNumber:40}},options.map(function(option,i){return _react2.default.createElement(_reactNativeSimpleRadioButton.RadioButton,{labelHorizontal:true,key:i,__source:{fileName:_jsxFileName,lineNumber:42}},_react2.default.createElement(_reactNativeSimpleRadioButton.RadioButtonInput,{obj:option,index:i,isSelected:option.value===value,onPress:onChange,borderWidth:1,buttonInnerColor:'#009688',buttonOuterColor:option.value===value?'#009688':'#000000',buttonSize:16,buttonOuterSize:24,buttonStyle:{},buttonWrapStyle:{marginLeft:10},__source:{fileName:_jsxFileName,lineNumber:44}}),_react2.default.createElement(_reactNativeSimpleRadioButton.RadioButtonLabel,{obj:option,index:i,labelHorizontal:true,onPress:onChange,labelStyle:{},labelWrapStyle:{},__source:{fileName:_jsxFileName,lineNumber:57}}));})),validationText);}}]);return AmfRadioButton;}(_react.Component);var style=_reactNative.StyleSheet.create({button:{backgroundColor:'white',elevation:4,padding:8,margin:4,minWidth:80,borderRadius:32},buttonText:{textAlign:'center'},buttonSelected:{backgroundColor:'#7ED321',elevation:4,padding:8,margin:4,minWidth:80,borderRadius:32},buttonTextSelected:{textAlign:'center',color:'white'},errorText:{color:'red',margin:4,marginBottom:0},label:{color:'#454545',marginRight:16,marginBottom:8},radioForm:{padding:8}});AmfRadioButton.propTypes=_extends({},_fieldPropTypes2.default);exports.default=AmfRadioButton;