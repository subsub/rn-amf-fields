Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/AmfSelect/AmfSelect.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _fieldPropTypes=require('../fieldPropTypes');var _fieldPropTypes2=_interopRequireDefault(_fieldPropTypes);var _reactNativeMaterialDropdown=require('react-native-material-dropdown');function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AmfSelect=function(_Component){_inherits(AmfSelect,_Component);function AmfSelect(){var _ref;var _temp,_this,_ret;_classCallCheck(this,AmfSelect);for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _ret=(_temp=(_this=_possibleConstructorReturn(this,(_ref=AmfSelect.__proto__||Object.getPrototypeOf(AmfSelect)).call.apply(_ref,[this].concat(args))),_this),_this.onChange=function(val,index){_this.props.onChange(_this.props.options[index].value);return typeof _this.props.onFinish==='function'&&_this.props.onFinish();},_temp),_possibleConstructorReturn(_this,_ret);}_createClass(AmfSelect,[{key:'render',value:function render(){var _props=this.props,label=_props.label,value=_props.value,options=_props.options,error=_props.error;var onChange=this.props.onChange;var dropdownData=options.map(function(i){return{value:i.label,realValue:i.value};});var dropdownValue='';var temp=options.find(function(i){return i.value===value;});if(temp)dropdownValue=temp.label;return _react2.default.createElement(_reactNativeMaterialDropdown.Dropdown,{label:label,data:dropdownData,value:dropdownValue||'',onChangeText:this.onChange,error:error,animationDuration:128,__source:{fileName:_jsxFileName,lineNumber:29}});}}]);return AmfSelect;}(_react.Component);AmfSelect.defaultProps={layout:'vertical'};AmfSelect.propTypes=_extends({},_fieldPropTypes2.default,{value:_propTypes2.default.string,layout:_propTypes2.default.oneOf(['vertical','horizontal'])});exports.default=AmfSelect;