"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DropdownButton;
exports.defaultDropdownButtonStyle = void 0;

var _theme = require("react-select/lib/theme");

var _emotion = require("emotion");

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var propTypes = {
  children: _propTypes.default.node.isRequired,
  onPress: _propTypes.default.func,
  iconAfter: _propTypes.default.node,
  style: _propTypes.default.object // eslint-disable-line react/forbid-prop-types

};
var defaultProps = {
  onPress: function onPress() {},
  style: {},
  iconAfter: null
};
var defaultDropdownButtonStyle = {
  padding: '8px 8px 5px 8px',
  backgroundColor: '#FFF',
  borderRadius: '2px',
  borderWidth: 0,
  boxShadow: '0 1px 1px 1px rgba(0, 0, 0, 0.08)',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: 1.36,
  alignItems: 'baseline',
  background: '#FFF',
  boxSizing: 'border-box',
  borderColor: _theme.colors.neutral20,
  color: '#515151',
  cursor: 'pointer',
  display: 'inline-flex',
  margin: 0,
  maxWidth: '100%',
  flexWrap: 'nowrap',
  outline: 'currentcolor none medium !important',
  textAlign: 'left',
  textDecoration: 'none',
  transition: 'background 0.1s ease-out 0s, box-shadow 0.15s cubic-bezier(0.47, 0.03, 0.49, 1.38) 0s',
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',
  width: 'auto',
  ':hover': {
    background: _theme.colors.neutral3
  }
};
exports.defaultDropdownButtonStyle = defaultDropdownButtonStyle;
var iconSpan = {
  alignSelf: 'center',
  display: 'flex',
  flexShrink: 0,
  lineHeight: 0,
  fontSize: 0,
  margin: '0px 4px'
};
var textSpan = {
  alignItems: 'center',
  alignSelf: 'center',
  flex: '1 1 auto',
  margin: 0,
  maxWidth: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
};
var defaultStyles = {
  iconSpan: iconSpan,
  textSpan: textSpan
};

function DropdownButton(_ref) {
  var onPress = _ref.onPress,
      children = _ref.children,
      iconAfter = _ref.iconAfter,
      buttonStyle = _ref.style;

  var styles = _objectSpread({}, defaultStyles, {
    button: buttonStyle
  });

  var childContent = typeof children === 'string' ? _react.default.createElement("span", {
    className: (0, _emotion.css)(styles.textSpan)
  }, children) : children;
  return _react.default.createElement("button", {
    type: "button",
    className: (0, _emotion.css)(styles.button),
    onClick: onPress
  }, childContent, !!iconAfter && _react.default.createElement("span", {
    className: (0, _emotion.css)(styles.iconSpan)
  }, iconAfter));
}

DropdownButton.propTypes = propTypes;
DropdownButton.defaultProps = defaultProps;