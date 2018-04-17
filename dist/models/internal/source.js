'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Content source identifier
 * @type {{new(values?: any): *}}
 */
const Source = new _schemaObject2.default({
  id: { type: String, required: true },
  type: { type: String, required: true }
});

exports.default = Source;
module.exports = exports['default'];