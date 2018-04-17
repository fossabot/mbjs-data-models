'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Plane coordinates
 */
const Plane = new _schemaObject2.default({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  width: { type: Number, default: 0 },
  height: { type: Number, default: 0 }
});

exports.default = Plane;
module.exports = exports['default'];