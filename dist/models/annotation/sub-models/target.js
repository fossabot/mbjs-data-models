'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _selector = require('./selector');

var _selector2 = _interopRequireDefault(_selector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Target = new _schemaObject2.default({
  type: { type: String, required: true },
  id: { type: String, required: true },
  selector: { type: _selector2.default }
});

exports.default = Target;
module.exports = exports['default'];