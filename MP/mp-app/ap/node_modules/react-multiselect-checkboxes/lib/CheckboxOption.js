"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _CheckboxWithIndeterminate = _interopRequireDefault(require("./CheckboxWithIndeterminate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CheckboxOption(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      isDisabled = props.isDisabled,
      isFocused = props.isFocused,
      isSelected = props.isSelected,
      innerRef = props.innerRef,
      innerProps = props.innerProps;
  return _react.default.createElement("div", _extends({
    ref: innerRef,
    className: cx((0, _emotion.css)(getStyles('option', props)), {
      option: true,
      'option--is-disabled': isDisabled,
      'option--is-focused': isFocused,
      'option--is-selected': isSelected
    }, className)
  }, innerProps), _react.default.createElement(_CheckboxWithIndeterminate.default, {
    readOnly: true,
    type: "checkbox",
    checked: isSelected
  }), children);
}

CheckboxOption.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  cx: _propTypes.default.func.isRequired,
  getStyles: _propTypes.default.func.isRequired,
  isDisabled: _propTypes.default.bool.isRequired,
  isFocused: _propTypes.default.bool.isRequired,
  isSelected: _propTypes.default.bool.isRequired,
  innerRef: _propTypes.default.any,
  // eslint-disable-line react/forbid-prop-types
  innerProps: _propTypes.default.any // eslint-disable-line react/forbid-prop-types

};
CheckboxOption.defaultProps = {
  children: null,
  innerRef: undefined,
  innerProps: {},
  className: null
};
var _default = CheckboxOption;
exports.default = _default;