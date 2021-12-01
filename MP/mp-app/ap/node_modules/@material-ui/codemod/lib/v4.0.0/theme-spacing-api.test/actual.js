"use strict";

var spacingAlone = function spacingAlone(theme) {
  return {
    spacing: theme.spacing.unit
  };
};

var spacingMultiply = function spacingMultiply(theme) {
  return {
    spacing: theme.spacing.unit * 5
  };
};

var spacingDivide = function spacingDivide(theme) {
  return {
    spacing: theme.spacing.unit / 5
  };
};

var spacingAdd = function spacingAdd(theme) {
  return {
    spacing: theme.spacing.unit + 5
  };
};

var spacingSubtract = function spacingSubtract(theme) {
  return {
    spacing: theme.spacing.unit - 5
  };
};

var variable = 3;

var spacingVariable = function spacingVariable(theme) {
  return {
    spacing: theme.spacing.unit * variable
  };
};

var spacingParamNameChange = function spacingParamNameChange(muiTheme) {
  return {
    spacing: muiTheme.spacing.unit
  };
};

function styleFunction(theme) {
  return {
    spacing: theme.spacing.unit
  };
}

var theme = {};
var shouldntTouch = theme.spacing.unit;

var styles = function styles(muiTheme) {
  return {
    root: {
      spacing: muiTheme.spacing.unit
    }
  };
};

var longChain = function longChain(theme) {
  return {
    spacing: theme.spacing.unit * 5 * 5
  };
};