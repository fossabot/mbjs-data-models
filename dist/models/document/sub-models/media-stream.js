'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _mediaDimensions = require('./media-dimensions');

var _mediaDimensions2 = _interopRequireDefault(_mediaDimensions);

var _mediaCodec = require('./media-codec');

var _mediaCodec2 = _interopRequireDefault(_mediaCodec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Media stream descriptor
 * @type {{new(values?: any): *}}
 */
const MediaStream = new _schemaObject2.default({
  codec: { type: _mediaCodec2.default },
  dimensions: { type: _mediaDimensions2.default },
  duration: { type: Number },
  durationTs: { type: Number },
  maxBitRate: { type: Number },
  nbFrames: { type: Number },
  type: { type: String },
  level: { type: Number },
  timeBase: { type: String },
  avgFrameRate: { type: Number },
  rFrameRate: { type: String },
  startTime: { type: Number }
});

exports.default = MediaStream;
module.exports = exports['default'];