'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _time = require('./time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Timespan
 */
const Timespan = new _schemaObject2.default({
  start: { type: _time2.default, required: true },
  end: { type: _time2.default }
});

exports.default = Timespan;
module.exports = exports['default'];