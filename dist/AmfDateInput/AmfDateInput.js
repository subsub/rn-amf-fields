Object.defineProperty(exports,"__esModule",{value:true});var _jsxFileName='src/AmfDateInput/AmfDateInput.js';var _slicedToArray=function(){function sliceIterator(arr,i){var _arr=[];var _n=true;var _d=false;var _e=undefined;try{for(var _i=arr[typeof Symbol==='function'?Symbol.iterator:'@@iterator'](),_s;!(_n=(_s=_i.next()).done);_n=true){_arr.push(_s.value);if(i&&_arr.length===i)break;}}catch(err){_d=true;_e=err;}finally{try{if(!_n&&_i["return"])_i["return"]();}finally{if(_d)throw _e;}}return _arr;}return function(arr,i){if(Array.isArray(arr)){return arr;}else if((typeof Symbol==='function'?Symbol.iterator:'@@iterator')in Object(arr)){return sliceIterator(arr,i);}else{throw new TypeError("Invalid attempt to destructure non-iterable instance");}};}();var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _react=require('react');var _react2=_interopRequireDefault(_react);var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);var _reactNative=require('react-native');var _moment=require('moment');var _moment2=_interopRequireDefault(_moment);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var AmfDateInput=function(_Component){_inherits(AmfDateInput,_Component);function AmfDateInput(props){_classCallCheck(this,AmfDateInput);var _this=_possibleConstructorReturn(this,(AmfDateInput.__proto__||Object.getPrototypeOf(AmfDateInput)).call(this,props));_initialiseProps.call(_this);var year=month=day=errorMessage='',valid=false;if(_this.props.value){var _this$props$value$spl=_this.props.value.split('-');var _this$props$value$spl2=_slicedToArray(_this$props$value$spl,3);year=_this$props$value$spl2[0];month=_this$props$value$spl2[1];day=_this$props$value$spl2[2];}_this.state={valid:valid,errorMessage:errorMessage,year:year,month:month,day:day};return _this;}_createClass(AmfDateInput,[{key:'componentDidMount',value:function componentDidMount(){this.validate();}},{key:'componentDidUpdate',value:function componentDidUpdate(prevProps){if(this.props.value!==prevProps.value){this.validate();}}},{key:'render',value:function render(){var _state=this.state,year=_state.year,month=_state.month,day=_state.day;var validationStyle={};var validationText=void 0;if(!this.state.valid){validationStyle={borderColor:'red',borderWidth:1};validationText=_react2.default.createElement(_reactNative.Text,{style:style.errorText,__source:{fileName:_jsxFileName,lineNumber:77}},this.state.errorMessage);}var updateValue=this.updateValue;return _react2.default.createElement(_reactNative.View,{style:{flexDirection:'row',alignItems:'center'},__source:{fileName:_jsxFileName,lineNumber:83}},_react2.default.createElement(_reactNative.Text,{style:style.label,__source:{fileName:_jsxFileName,lineNumber:85}},this.props.label),_react2.default.createElement(_reactNative.View,{style:[style.pickerContainer,validationStyle],__source:{fileName:_jsxFileName,lineNumber:86}},_react2.default.createElement(_reactNative.Picker,{mode:'dropdown',onValueChange:function onValueChange(val){return updateValue('day',val);},selectedValue:day,style:{width:58},__source:{fileName:_jsxFileName,lineNumber:87}},days.map(function(i){return _react2.default.createElement(_reactNative.Picker.Item,{key:'d'+i,value:i,label:i,__source:{fileName:_jsxFileName,lineNumber:88}});})),_react2.default.createElement(_reactNative.Text,{style:style.dividerText,__source:{fileName:_jsxFileName,lineNumber:90}},'/'),_react2.default.createElement(_reactNative.Picker,{mode:'dropdown',onValueChange:function onValueChange(val){return updateValue('month',val);},selectedValue:month,style:{width:70},__source:{fileName:_jsxFileName,lineNumber:92}},months.map(function(i){return _react2.default.createElement(_reactNative.Picker.Item,{key:'m'+i,value:i,label:i,__source:{fileName:_jsxFileName,lineNumber:93}});})),_react2.default.createElement(_reactNative.Text,{style:style.dividerText,__source:{fileName:_jsxFileName,lineNumber:95}},'/'),_react2.default.createElement(_reactNative.Picker,{mode:'dropdown',onValueChange:function onValueChange(val){return updateValue('year',val);},selectedValue:year,style:{width:80},__source:{fileName:_jsxFileName,lineNumber:96}},years.map(function(i){return _react2.default.createElement(_reactNative.Picker.Item,{key:'y'+i,value:i,label:i,__source:{fileName:_jsxFileName,lineNumber:97}});}))),validationText);}}]);return AmfDateInput;}(_react.Component);var _initialiseProps=function _initialiseProps(){var _this2=this;this.updateValue=function(type,val){var year=type=='year'?val:_this2.state.year;var month=type=='month'?val:_this2.state.month;var day=type=='day'?val:_this2.state.day;_this2.setState({day:day,month:month,year:year});if(day==''||month==''||year=='')return;var date=(0,_moment2.default)([year,month,day].join('-'),'YYYY-MM-DD').format('YYYY-MM-DD');while(date=='Invalid date'){day=(parseInt(day)-1).padStart(2,'0');date=(0,_moment2.default)([year,month,day].join('-'),'YYYY-MM-DD').format('YYYY-MM-DD');}return _this2.props.onChange(date);};this.inputValid=function(){var _props=_this2.props,validation=_props.validation,label=_props.label;if(!validation)return{status:true};if(_this2.props.value===null||_this2.props.value===undefined)return{status:true};if(validation.required){if(_this2.props.value==='')return{status:false,message:label+' tidak boleh kosong'};}return{status:true};};this.validate=function(){var validationObject=_this2.inputValid();_this2.setState({valid:validationObject.status,errorMessage:validationObject.message});};};var months=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Ags','Sep','Okt','Nov','Des'];var days=['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','31'];var yearsConst=[];for(var i=1940;i<new Date().getFullYear()-18;i++){yearsConst.push(String(i));}var years=yearsConst;var style=_reactNative.StyleSheet.create({container:{flexDirection:'row',alignItems:'center'},dividerText:{fontSize:20,color:'#9B9B9B',marginHorizontal:4},errorText:{color:'red',margin:4,marginBottom:0},label:{color:'#454545',marginRight:16},pickerContainer:{flexDirection:'row',alignItems:'center'},selector:{flexDirection:'row',justifyContent:'center',alignItems:'center',height:30},picker:{textAlign:'center'}});AmfDateInput.defaultProps={layout:'vertical'};AmfDateInput.propTypes={label:_propTypes2.default.string,layout:_propTypes2.default.oneOf(['vertical','horizontal']),onChange:_propTypes2.default.func.isRequired,value:_propTypes2.default.string};exports.default=AmfDateInput;