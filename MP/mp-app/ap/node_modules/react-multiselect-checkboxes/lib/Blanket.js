"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Blanket;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Blanket(props) {
  return _react.default.createElement("div", _extends({
    style: {
      bottom: 0,
      left: 0,
      top: 0,
      right: 0,
      position: 'fixed',
      zIndex: 1
    }
  }, props));
}