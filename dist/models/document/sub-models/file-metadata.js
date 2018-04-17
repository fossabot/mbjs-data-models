'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * General file metadata
 * @type {{new(values?: any): *}}
 */
const FileMetadata = new _schemaObject2.default({
  added: { type: String },
  created: { type: String },
  updated: { type: String },
  bytes: { type: Number },
  hash: { type: String },
  mime: { type: String },
  ext: { type: String }
});

exports.default = FileMetadata;
module.exports = exports['default'];