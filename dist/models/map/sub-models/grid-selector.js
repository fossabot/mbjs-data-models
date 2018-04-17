'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _plane = require('./plane');

var _plane2 = _interopRequireDefault(_plane);

var _constants = require('../../../constants');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Time Selector
 */
const GridSelector = new _schemaObject2.default({
  type: { type: String, readOnly: true, default: _constants.MAP_SELECTOR_GRID },
  map: { type: String, required: true },
  selection: { type: _plane2.default, required: true }
});

exports.default = GridSelector;
module.exports = exports['default'];