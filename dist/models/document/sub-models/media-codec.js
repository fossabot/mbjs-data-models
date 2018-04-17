'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Media codec descriptor
 * @type {{new(values?: any): *}}
 */
const MediaCodec = new _schemaObject2.default({
  name: { type: String },
  longName: { type: String },
  tag: { type: String },
  tagString: { type: String },
  timeBase: { type: String },
  type: { type: String },
  width: { type: Number },
  height: { type: Number },
  profile: { type: String }
});

exports.default = MediaCodec;
module.exports = exports['default'];