'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _mediaFormat = require('./media-format');

var _mediaFormat2 = _interopRequireDefault(_mediaFormat);

var _mediaStream = require('./media-stream');

var _mediaStream2 = _interopRequireDefault(_mediaStream);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Media content related metadata
 * @type {{new(values?: any): *}}
 */
const MediaMetadata = new _schemaObject2.default({
  streams: [_mediaStream2.default],
  format: _mediaFormat2.default
});

exports.default = MediaMetadata;
module.exports = exports['default'];