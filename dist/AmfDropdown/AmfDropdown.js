Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/AmfDropdown/AmfDropdown.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _reactNativeModalDropdown=require('react-native-modal-dropdown');var _reactNativeModalDropdown2=_interopRequireDefault(_reactNativeModalDropdown);var _MaterialIcons=require('react-native-vector-icons/MaterialIcons');var _MaterialIcons2=_interopRequireDefault(_MaterialIcons);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AmfDropdown=function(_Component){_inherits(AmfDropdown,_Component);function AmfDropdown(props){_classCallCheck(this,AmfDropdown);var _this=_possibleConstructorReturn(this,(AmfDropdown.__proto__||Object.getPrototypeOf(AmfDropdown)).call(this,props));_this.getLabel=function(val){var item=_this.props.item.find(function(i){return i.value===val;});if(item)return item.label;return val;};_this.inputValid=function(){var _this$props=_this.props,validation=_this$props.validation,label=_this$props.label;if(!validation)return{status:true};if(_this.props.value===null||_this.props.value===undefined)return{status:true};if(validation.required){if(_this.props.value==='')return{status:false,message:label+' harus dipilih'};}return{status:true};};_this.onDropdownWillShow=function(){if(_this.props.validation&&_this.props.validation.required&&_this.props.value===null){_this.props.onSelect('');}_this.setState({isFocused:true});};_this.onDropdownWillHide=function(){_this.setState({isFocused:false});};_this.onSelect=function(idx,value){_this.props.onSelect(_this.props.item[idx].value);};_this.validate=function(){var validationObject=_this.inputValid();_this.setState({valid:validationObject.status,errorMessage:validationObject.message});};_this.state={valid:false,isFocused:false};_this.item=_this.props.item.map(function(item){return item.label;});return _this;}_createClass(AmfDropdown,[{key:'componentDidMount',value:function componentDidMount(){this.validate();}},{key:'componentWillReceiveProps',value:function componentWillReceiveProps(nextProps){this.item=nextProps.item.map(function(item){return item.label;});}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps,prevState){if(prevState.isFocused!==this.state.isFocused){if(!this.state.isFocused)this.validate();}}},{key:'renderSelector',value:function renderSelector(){if(this.props.selector)return this.props.selector;return _react2.default.createElement(_reactNative.View,{style:[style.option,this.props.optionStyle],__source:{fileName:_jsxFileName,lineNumber:80}},_react2.default.createElement(_reactNative.Text,{style:style.valueText,__source:{fileName:_jsxFileName,lineNumber:81}},this.props.value?this.getLabel(this.props.value):''),_react2.default.createElement(_MaterialIcons2.default,{name:'keyboard-arrow-down',size:16,style:style.icon,__source:{fileName:_jsxFileName,lineNumber:82}}));}},{key:'render',value:function render(){var layout=this.props.layout;var validationStyle={};var validationText=void 0;if(!this.state.valid){validationStyle={borderColor:'red',borderWidth:1};validationText=_react2.default.createElement(_reactNative.Text,{style:style.errorText,__source:{fileName:_jsxFileName,lineNumber:95}},this.state.errorMessage);}var labelText=void 0;if(this.props.label){labelText=_react2.default.createElement(_reactNative.Text,{style:[style.label,{marginBottom:layout=='vertical'?8:0}],__source:{fileName:_jsxFileName,lineNumber:100}},this.props.label);}return _react2.default.createElement(_reactNative.View,{__source:{fileName:_jsxFileName,lineNumber:104}},_react2.default.createElement(_reactNative.View,{style:layout==='horizontal'?style.containerHorizontal:style.container,__source:{fileName:_jsxFileName,lineNumber:105}},labelText,_react2.default.createElement(_reactNativeModalDropdown2.default,{disabled:this.props.disabled,style:[style.dropdownContainer,this.props.style,validationStyle],dropdownStyle:[style.dropdown,this.props.dropdownStyle],options:this.item,onSelect:this.onSelect,onDropdownWillShow:this.onDropdownWillShow,onDropdownWillHide:this.onDropdownWillHide,__source:{fileName:_jsxFileName,lineNumber:107}},this.renderSelector())),validationText);}}]);return AmfDropdown;}(_react.Component);var style=_reactNative.StyleSheet.create({container:{},containerHorizontal:{flexDirection:'row',alignItems:'center'},dropdownContainer:{elevation:4,borderRadius:25,borderWidth:1,borderColor:'transparent',backgroundColor:'white',justifyContent:'center'},dropdown:{width:100,elevation:4,padding:8,height:150},errorText:{color:'red',margin:4,marginBottom:0},label:{color:'#454545',marginRight:16},option:{flexDirection:'row',justifyContent:'space-between',alignItems:'center',height:30},icon:{marginRight:16},valueText:{marginLeft:16}});var itemShape=_propTypes2.default.shape({label:_propTypes2.default.string.isRequired,value:_propTypes2.default.any.isRequired});AmfDropdown.defaultProps={layout:'vertical'};AmfDropdown.propTypes={disabled:_propTypes2.default.bool,dropdownStyle:_propTypes2.default.object,item:_propTypes2.default.arrayOf(itemShape).isRequired,label:_propTypes2.default.string,layout:_propTypes2.default.oneOf(['vertical','horizontal']),onSelect:_propTypes2.default.func.isRequired,optionStyle:_propTypes2.default.object,selector:_propTypes2.default.element,style:_propTypes2.default.object,validation:_propTypes2.default.object,value:_propTypes2.default.any};exports.default=AmfDropdown;