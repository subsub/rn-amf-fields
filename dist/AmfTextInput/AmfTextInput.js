Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/AmfTextInput/AmfTextInput.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AmfTextInput=function(_Component){_inherits(AmfTextInput,_Component);function AmfTextInput(props){_classCallCheck(this,AmfTextInput);var _this=_possibleConstructorReturn(this,(AmfTextInput.__proto__||Object.getPrototypeOf(AmfTextInput)).call(this,props));_this.onBlur=function(){_this.validate();};_this.onFocus=function(){if(_this.props.validation&&_this.props.validation.required&&_this.props.value===null)_this.props.onChangeText('');};_this.inputValid=function(){var _this$props=_this.props,validation=_this$props.validation,label=_this$props.label;if(!validation)return{status:true};if(_this.props.value===null||_this.props.value===undefined)return{status:true};if(validation.required){if(_this.props.value==='')return{status:false,message:label+' tidak boleh kosong'};}if(validation.regex&&_this.props.value!==''){if(!validation.regex.test(_this.props.value))return{status:false,message:'Format tidak sesuai'};}if(validation.exactLength){if(_this.props.value.length!==parseInt(validation.exactLength))return{status:false,message:label+' harus '+validation.exactLength+' karakter'};}if(validation.minLength){if(_this.props.value.length<parseInt(validation.minLength))return{status:false,message:label+' minimal '+validation.minLength+' karakter'};}if(validation.maxLength){if(_this.props.value.length>parseInt(validation.maxLength))return{status:false,message:label+' maksimum '+validation.minLength+' karakter'};}return{status:true};};_this.validate=function(){var validationObject=_this.inputValid();_this.setState({valid:validationObject.status,errorMessage:validationObject.message});};_this.state={valid:false,message:''};return _this;}_createClass(AmfTextInput,[{key:'componentDidMount',value:function componentDidMount(){this.validate();}},{key:'render',value:function render(){var _this2=this;var textInputValidationStyle={};var validationText=void 0;if(!this.state.valid){textInputValidationStyle={borderColor:'red'};validationText=_react2.default.createElement(_reactNative.Text,{style:style.errorText,__source:{fileName:_jsxFileName,lineNumber:73}},this.state.errorMessage);}return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:77}},_react2.default.createElement(_reactNative.Text,{style:style.label,__source:{fileName:_jsxFileName,lineNumber:78}},this.props.label),_react2.default.createElement(_reactNative.TextInput,_extends({ref:function ref(_ref){_this2.textInput=_ref;}},this.props,{onFocus:this.onFocus,onBlur:this.onBlur,underlineColorAndroid:'transparent',style:[style.textInput,this.props.style,textInputValidationStyle],__source:{fileName:_jsxFileName,lineNumber:79}})),validationText);}}]);return AmfTextInput;}(_react.Component);var style=_reactNative.StyleSheet.create({errorText:{color:'red',margin:4,marginBottom:0},label:{color:'#454545',marginBottom:8},textInput:{backgroundColor:'white',height:40,padding:10,borderWidth:1,borderColor:'#DDDDDD',color:'#9B9B9B',fontSize:14,borderRadius:3,paddingBottom:10}});AmfTextInput.propTypes={label:_propTypes2.default.string.isRequired,onChangeText:_propTypes2.default.func.isRequired,style:_reactNative.TextInput.propTypes.style,validation:_propTypes2.default.object,value:_propTypes2.default.string};exports.default=AmfTextInput;