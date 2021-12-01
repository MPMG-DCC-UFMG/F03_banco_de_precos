"use strict";

var spacingAlone = function spacingAlone(theme) {
  return {
    spacing: theme.spacing(1)
  };
};

var spacingMultiply = function spacingMultiply(theme) {
  return {
    spacing: theme.spacing(5)
  };
};

var spacingDivide = function spacingDivide(theme) {
  return {
    spacing: theme.spacing(0.2)
  };
};

var spacingAdd = function spacingAdd(theme) {
  return {
    spacing: theme.spacing(1) + 5
  };
};

var spacingSubtract = function spacingSubtract(theme) {
  return {
    spacing: theme.spacing(1) - 5
  };
};

var variable = 3;

var spacingVariable = function spacingVariable(theme) {
  return {
    spacing: theme.spacing(variable)
  };
};

var spacingParamNameChange = function spacingParamNameChange(muiTheme) {
  return {
    spacing: muiTheme.spacing(1)
  };
};

function styleFunction(theme) {
  return {
    spacing: theme.spacing(1)
  };
}

var theme = {};
var shouldntTouch = theme.spacing.unit;

var styles = function styles(muiTheme) {
  return {
    root: {
      spacing: muiTheme.spacing(1)
    }
  };
};

var longChain = function longChain(theme) {
  return {
    spacing: theme.spacing(5) * 5
  };
};