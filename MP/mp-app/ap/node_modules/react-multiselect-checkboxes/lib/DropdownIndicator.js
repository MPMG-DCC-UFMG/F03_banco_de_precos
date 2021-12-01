"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropdownIndicator;

var _react = _interopRequireDefault(require("react"));

var _theme = require("react-select/lib/theme");

var _Svg = _interopRequireDefault(require("./Svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function DropdownIndicator() {
  return _react.default.createElement("div", {
    style: {
      color: _theme.colors.neutral20,
      height: 24,
      width: 32
    }
  }, _react.default.createElement(_Svg.default, null, _react.default.createElement("path", {
    d: "M16.436 15.085l3.94 4.01a1 1 0 0 1-1.425 1.402l-3.938-4.006a7.5 7.5 0 1 1 1.423-1.406zM10.5 16a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11z",
    fill: "currentColor",
    fillRule: "evenodd"
  })));
}