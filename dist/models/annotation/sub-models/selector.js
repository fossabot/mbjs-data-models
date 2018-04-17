'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Selector = new _schemaObject2.default({
  type: { type: String, required: true },
  value: { type: String, required: true },
  conformsTo: { type: String }
});

exports.default = Selector;
module.exports = exports['default'];