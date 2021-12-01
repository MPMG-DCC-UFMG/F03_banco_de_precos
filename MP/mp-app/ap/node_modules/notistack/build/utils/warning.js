'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
/* eslint-disable */
var __DEV__ = process.env.NODE_ENV !== 'production';

exports.default = function (message) {
    if (!__DEV__) return;

    if (typeof console !== 'undefined') {
        console.error(message);
    }
    try {
        throw new Error(message);
    } catch (x) {};
};