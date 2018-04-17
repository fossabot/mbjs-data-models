'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _timespan = require('./timespan');

var _timespan2 = _interopRequireDefault(_timespan);

var _constants = require('../../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Time Selector
 */
const TimelineSelector = new _schemaObject2.default({
  type: { type: String, readOnly: true, default: _constants.MAP_SELECTOR_TIMELINE },
  map: { type: String, required: true },
  selection: { type: _timespan2.default, required: true }
});

exports.default = TimelineSelector;
module.exports = exports['default'];