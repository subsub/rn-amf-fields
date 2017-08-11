Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/AmfNumberInput/AmfNumberInput.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _reactNativeMaterialTextfield=require('react-native-material-textfield');var _numeral=require('numeral');var _numeral2=_interopRequireDefault(_numeral);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}_numeral2.default.register('locale','id',{delimiters:{thousands:'.',decimal:','},abbreviations:{thousand:'k',million:'m',billion:'b',trillion:'t'},ordinal:function ordinal(i){return'';},currency:{symbol:'Rp'}});_numeral2.default.locale('id');var AmfNumberInput=function(_Component){_inherits(AmfNumberInput,_Component);function AmfNumberInput(props){_classCallCheck(this,AmfNumberInput);var _this=_possibleConstructorReturn(this,(AmfNumberInput.__proto__||Object.getPrototypeOf(AmfNumberInput)).call(this,props));_this.onBlur=function(){_this.validate();};_this.onFocus=function(){if(_this.props.validation&&_this.props.validation.required&&_this.props.value===null)_this.props.onChangeValue(_this.props.pristineValue);};_this.inputValid=function(){var _this$props=_this.props,validation=_this$props.validation,label=_this$props.label,pristineValue=_this$props.pristineValue;if(!validation)return{status:true};if(_this.props.value===null||_this.props.value===undefined)return{status:true};if(validation.required){if(_this.props.value===pristineValue)return{status:false,message:label+' tidak boleh kosong'};}return{status:true};};_this.validate=function(){var validationObject=_this.inputValid();_this.setState({valid:validationObject.status,errorMessage:validationObject.message});};_this.state={valid:false,message:''};return _this;}_createClass(AmfNumberInput,[{key:'componentDidMount',value:function componentDidMount(){this.validate();}},{key:'render',value:function render(){var textInputValidationStyle={};var validationText=void 0;var _props=this.props,label=_props.label,value=_props.value,onChange=_props.onChange;if(!this.state.valid){textInputValidationStyle={borderColor:'red'};validationText=_react2.default.createElement(_reactNative.Text,{style:style.errorText,__source:{fileName:_jsxFileName,lineNumber:69}},this.state.errorMessage);}return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:73}},_react2.default.createElement(_reactNativeMaterialTextfield.TextField,{label:label,onChangeText:onChange,keyboardType:'number-pad',returnKeyType:'next',value:value||'',__source:{fileName:_jsxFileName,lineNumber:74}}),validationText);}}]);return AmfNumberInput;}(_react.Component);var style=_reactNative.StyleSheet.create({errorText:{color:'red',margin:4,marginBottom:0},label:{color:'#454545',marginBottom:8},textInput:{backgroundColor:'white',height:40,padding:10,borderWidth:1,borderColor:'#DDDDDD',color:'#9B9B9B',fontSize:14,borderRadius:3,paddingBottom:10}});AmfNumberInput.defaultProps={pristineValue:-1};AmfNumberInput.propTypes={delimiter:_propTypes2.default.string,label:_propTypes2.default.string.isRequired,onChange:_propTypes2.default.func.isRequired,precision:_propTypes2.default.number,pristineValue:_propTypes2.default.number,separator:_propTypes2.default.string,style:_reactNative.TextInput.propTypes.style,unit:_propTypes2.default.string,value:_propTypes2.default.number};exports.default=AmfNumberInput;