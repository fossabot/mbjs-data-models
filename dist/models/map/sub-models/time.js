'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _bignumber = require('bignumber.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Time
 * Holds the time both as UTC seconds
 * as a BigNumber (https://github.com/MikeMcl/bignumber.js),
 * and as an ISO DateTime for TZ related info
 */
const Time = new _schemaObject2.default({
  datetime: { type: String, required: true },
  seconds: { type: _bignumber.BigNumber, default: (0, _bignumber.BigNumber)(0) }
});

exports.default = Time;
module.exports = exports['default'];