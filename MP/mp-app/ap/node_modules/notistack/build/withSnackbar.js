'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = require('hoist-non-react-statics');

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _getDisplayName = require('./utils/getDisplayName');

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

var _SnackbarContext = require('./SnackbarContext');

var _SnackbarContext2 = _interopRequireDefault(_SnackbarContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var withSnackbar = function withSnackbar(Component) {
    var WrappedComponent = _react2.default.forwardRef(function (props, ref) {
        return _react2.default.createElement(
            _SnackbarContext2.default.Consumer,
            null,
            function (context) {
                return _react2.default.createElement(Component, _extends({}, props, {
                    ref: ref,
                    enqueueSnackbar: context.handleEnqueueSnackbar,
                    closeSnackbar: context.handleCloseSnackbar
                }));
            }
        );
    });

    if (process.env.NODE_ENV !== 'production') {
        WrappedComponent.displayName = 'WithSnackbar(' + (0, _getDisplayName2.default)(Component) + ')';
    }

    (0, _hoistNonReactStatics2.default)(WrappedComponent, Component);

    return WrappedComponent;
};

exports.default = withSnackbar;