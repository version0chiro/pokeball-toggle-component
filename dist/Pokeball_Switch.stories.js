"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Pokeball_Switch = _interopRequireDefault(require("./Pokeball_Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: 'Example/Button',
  component: _Pokeball_Switch.default,
  argTypes: {
    backgroundColor: {
      control: 'color'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Pokeball_Switch.default, args);
};

var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  label: 'My Button'
};