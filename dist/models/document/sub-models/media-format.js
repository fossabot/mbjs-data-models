'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _tag = require('../../tag');

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Media container format descriptor
 * @type {{new(values?: any): *}}
 */
const MediaFormat = new _schemaObject2.default({
  tags: { type: [_tag2.default] },
  bitRate: { type: Number },
  duration: { type: Number },
  name: { type: String },
  longName: { type: String },
  nbStreams: { type: Number },
  nbPrograms: { type: Number },
  size: { type: Number },
  startTime: { type: Number }
});

exports.default = MediaFormat;
module.exports = exports['default'];