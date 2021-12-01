"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxGroupHeading = CheckboxGroupHeading;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _emotion = require("emotion");

var _CheckboxWithIndeterminate = _interopRequireDefault(require("./CheckboxWithIndeterminate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function CheckboxGroup(props) {
  var children = props.children,
      className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      Heading = props.Heading,
      setValue = props.setValue,
      data = props.data,
      label = props.label,
      getValue = props.getValue,
      getOptionValue = props.selectProps.getOptionValue,
      theme = props.theme;

  var optionsIncludes = function optionsIncludes(v) {
    return !!data.options.find(function (opt) {
      return getOptionValue(opt) === getOptionValue(v);
    });
  };

  var numCheckedOptions = getValue().filter(function (v) {
    return optionsIncludes(v);
  }).length;
  var checked = numCheckedOptions === data.options.length;
  var indeterminate = numCheckedOptions > 0 && !checked;
  var checkboxProps = {
    indeterminate: indeterminate,
    checked: checked
  };

  var selectAllOptions = function selectAllOptions() {
    var newValue = _toConsumableArray(getValue().filter(function (v) {
      return !optionsIncludes(v);
    })).concat(_toConsumableArray(data.options));

    setValue(newValue);
  };

  var clearOptions = function clearOptions() {
    var newValue = getValue().filter(function (v) {
      return !optionsIncludes(v);
    });
    setValue(newValue);
  };

  return _react.default.createElement("div", {
    className: cx((0, _emotion.css)(getStyles('group', props)), {
      group: true
    }, className)
  }, _react.default.createElement(Heading, {
    checkboxProps: checkboxProps,
    getStyles: getStyles,
    cx: cx,
    theme: theme,
    onClick: function onClick() {
      if (indeterminate || checked) {
        clearOptions();
      } else {
        selectAllOptions();
      }
    }
  }, label), _react.default.createElement("div", null, children));
}

CheckboxGroup.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  cx: _propTypes.default.func.isRequired,
  getStyles: _propTypes.default.func.isRequired,
  Heading: _propTypes.default.func.isRequired,
  getValue: _propTypes.default.func.isRequired,
  setValue: _propTypes.default.func.isRequired,
  label: _propTypes.default.string.isRequired,
  data: _propTypes.default.shape({
    options: _propTypes.default.arrayOf(_propTypes.default.shape({
      label: _propTypes.default.node,
      value: _propTypes.default.any
    }))
  }).isRequired,
  theme: _propTypes.default.object.isRequired,
  // eslint-disable-line react/forbid-prop-types
  selectProps: _propTypes.default.objectOf(_propTypes.default.any).isRequired
};
CheckboxGroup.defaultProps = {
  children: null,
  className: undefined
};

function CheckboxGroupHeading(props) {
  var className = props.className,
      cx = props.cx,
      getStyles = props.getStyles,
      children = props.children,
      checkboxProps = props.checkboxProps,
      cleanProps = _objectWithoutProperties(props, ["className", "cx", "getStyles", "children", "checkboxProps"]);

  return _react.default.createElement("div", _extends({
    className: cx((0, _emotion.css)(getStyles('groupHeading', _objectSpread({}, props, checkboxProps))), {
      'group-heading': true
    }, className)
  }, cleanProps), _react.default.createElement(_CheckboxWithIndeterminate.default, _extends({
    readOnly: true,
    type: "checkbox"
  }, checkboxProps)), children);
}

CheckboxGroupHeading.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  cx: _propTypes.default.func.isRequired,
  getStyles: _propTypes.default.func.isRequired,
  checkboxProps: _propTypes.default.shape({
    checked: _propTypes.default.bool,
    indeterminate: _propTypes.default.bool
  }).isRequired
};
CheckboxGroupHeading.defaultProps = {
  children: null,
  className: undefined
};
var _default = CheckboxGroup;
exports.default = _default;