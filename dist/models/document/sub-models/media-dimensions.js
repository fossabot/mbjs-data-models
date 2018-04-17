'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Media dimensionality
 * @type {{new(values?: any): *}}
 */
const MediaDimensions = new _schemaObject2.default({
  width: { type: Number },
  height: { type: Number },
  codedWidth: { type: Number },
  codedHeight: { type: Number },
  displayAspectRatio: { type: String },
  sampleAspectRatio: { type: String },
  pixelFormat: { type: String }
});

exports.default = MediaDimensions;
module.exports = exports['default'];