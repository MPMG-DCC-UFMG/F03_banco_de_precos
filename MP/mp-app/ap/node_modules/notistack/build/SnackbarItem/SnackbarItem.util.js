'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMuiClasses = exports.capitalise = exports.getTransitionDirection = exports.muiClasses = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../utils/constants');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DIRECTION = {
    right: 'left',
    left: 'right',
    bottom: 'up',
    top: 'down'
};

var muiClasses = exports.muiClasses = {
    root: {},
    anchorOriginTopCenter: {},
    anchorOriginBottomCenter: {},
    anchorOriginTopRight: {},
    anchorOriginBottomRight: {},
    anchorOriginTopLeft: {},
    anchorOriginBottomLeft: {}
};

/**
 * returns transition direction according the the given anchor origin
 * @param {object} anchorOrigin
 */
var getTransitionDirection = exports.getTransitionDirection = function getTransitionDirection() {
    var anchorOrigin = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constants.defaultAnchorOrigin;

    if (anchorOrigin.horizontal !== 'center') {
        return DIRECTION[anchorOrigin.horizontal];
    }
    return DIRECTION[anchorOrigin.vertical];
};

/**
 * Capitalises a piece of string
 * @param {string} text
 */
var capitalise = exports.capitalise = function capitalise(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

/**
 * Filteres classes object and returns the keys that are allowed
 * in material-ui snackbar classes prop
 * @param {object} classes
 */
var getMuiClasses = exports.getMuiClasses = function getMuiClasses(classes) {
    return Object.keys(classes).filter(function (key) {
        return muiClasses[key] !== undefined;
    }).reduce(function (obj, key) {
        return _extends({}, obj, _defineProperty({}, key, classes[key]));
    }, {});
};