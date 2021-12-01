"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Dropdown;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Blanket = _interopRequireDefault(require("./Blanket"));

var _Menu = _interopRequireDefault(require("./Menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Dropdown(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      target = _ref.target,
      onClose = _ref.onClose,
      rightAligned = _ref.rightAligned;
  return _react.default.createElement("div", {
    style: {
      position: 'relative'
    }
  }, target, isOpen ? _react.default.createElement(_Menu.default, {
    rightAligned: rightAligned
  }, children) : null, isOpen ? _react.default.createElement(_Blanket.default, {
    onClick: onClose
  }) : null);
}

Dropdown.propTypes = {
  children: _propTypes.default.node,
  isOpen: _propTypes.default.bool,
  target: _propTypes.default.node,
  onClose: _propTypes.default.func,
  rightAligned: _propTypes.default.bool
};
Dropdown.defaultProps = {
  children: null,
  isOpen: false,
  target: null,
  onClose: function onClose() {},
  rightAligned: false
};