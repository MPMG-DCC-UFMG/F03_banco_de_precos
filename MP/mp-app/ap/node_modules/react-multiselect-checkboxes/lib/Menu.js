"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Menu;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = require("react-select/lib/theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function Menu(_ref) {
  var rightAligned = _ref.rightAligned,
      props = _objectWithoutProperties(_ref, ["rightAligned"]);

  var shadow = _theme.colors.neutral10a;
  var style = {
    backgroundColor: 'white',
    borderRadius: 4,
    boxShadow: "0 0 0 1px ".concat(shadow, ", 0 4px 11px ").concat(shadow),
    marginTop: 8,
    position: 'absolute',
    zIndex: 2
  };

  if (rightAligned) {
    style.right = 0;
  }

  return _react.default.createElement("div", _extends({
    style: style
  }, props));
}

Menu.propTypes = {
  rightAligned: _propTypes.default.bool
};
Menu.defaultProps = {
  rightAligned: false
};