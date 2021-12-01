"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChevronDown;

var _react = _interopRequireDefault(require("react"));

var _Svg = _interopRequireDefault(require("./Svg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ChevronDown() {
  return _react.default.createElement(_Svg.default, {
    style: {
      marginRight: -6
    }
  }, _react.default.createElement("path", {
    d: "M8.292 10.293a1.009 1.009 0 0 0 0 1.419l2.939 2.965c.218.215.5.322.779.322s.556-.107.769-.322l2.93-2.955a1.01 1.01 0 0 0 0-1.419.987.987 0 0 0-1.406 0l-2.298 2.317-2.307-2.327a.99.99 0 0 0-1.406 0z",
    fill: "currentColor",
    fillRule: "evenodd"
  }));
}