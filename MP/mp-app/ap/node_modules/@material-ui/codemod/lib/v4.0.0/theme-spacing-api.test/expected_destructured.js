"use strict";

var spacingAlone = function spacingAlone(_ref) {
  var spacing = _ref.spacing;
  return {
    spacing: spacing(1)
  };
};

var spacingMultiply = function spacingMultiply(_ref2) {
  var spacing = _ref2.spacing;
  return {
    spacing: spacing(5)
  };
};

var spacingDivide = function spacingDivide(_ref3) {
  var spacing = _ref3.spacing;
  return {
    spacing: spacing(0.2)
  };
};

var spacingAdd = function spacingAdd(_ref4) {
  var spacing = _ref4.spacing;
  return {
    spacing: spacing(1) + 5
  };
};

var spacingSubtract = function spacingSubtract(_ref5) {
  var spacing = _ref5.spacing;
  return {
    spacing: spacing(1) - 5
  };
};

var variable = 3;

var spacingVariable = function spacingVariable(_ref6) {
  var spacing = _ref6.spacing;
  return {
    spacing: spacing(variable)
  };
};

var spacingParamNameChange = function spacingParamNameChange(muiTheme) {
  return {
    spacing: muiTheme.spacing(1)
  };
};

function styleFunction(_ref7) {
  var spacing = _ref7.spacing;
  return {
    spacing: spacing(1)
  };
}

var longChain = function longChain(_ref8) {
  var spacing = _ref8.spacing;
  return {
    spacing: spacing(5) * 5
  };
};