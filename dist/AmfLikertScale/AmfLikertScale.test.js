var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/AmfLikertScale/AmfLikertScale.test.js';var _react=require('react');var _react2=_interopRequireDefault(_react);var _AmfLikertScale=require('./AmfLikertScale');var _AmfLikertScale2=_interopRequireDefault(_AmfLikertScale);var _reactTestRenderer=require('react-test-renderer');var _reactTestRenderer2=_interopRequireDefault(_reactTestRenderer);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}test('AmfLikertScale without validation',function(){var props={label:'Label',onPress:function onPress(){},items:[{label:'Sangat Setuju',value:1},{label:'Setuju Setuju',value:2},{label:'Tida Setuju',value:3},{label:'Sangat Tidak Setuju',value:4}],value:null};var component=_reactTestRenderer2.default.create(_react2.default.createElement(_AmfLikertScale2.default,_extends({},props,{__source:{fileName:_jsxFileName,lineNumber:18}})));var tree=component.toJSON();expect(tree).toMatchSnapshot();});