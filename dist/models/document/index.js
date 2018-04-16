'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.schema = undefined;

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _baseModel = require('../base-model');

var _converters = require('./converters');

var _time = require('../../utils/time');

var _time2 = _interopRequireDefault(_time);

var _object = require('../../utils/object');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const subOptions = {
  strict: false
};

const Tag = new _schemaObject2.default({
  title: { type: String, required: true },
  value: { type: String }
}, {
  strict: false,
  computed: {
    slug() {
      return _object2.default.slug(this.title);
    }
  }
}, subOptions);

/**
 * Content source identifier
 * @type {{new(values?: any): *}}
 */
const Source = new _schemaObject2.default({
  id: { type: String },
  type: { type: String }
}, subOptions);

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
}, subOptions);

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
}, subOptions);

/**
 * Media container format descriptor
 * @type {{new(values?: any): *}}
 */
const MediaFormat = new _schemaObject2.default({
  tags: { type: [Tag] },
  bitRate: { type: Number },
  duration: { type: Number },
  name: { type: String },
  longName: { type: String },
  nbStreams: { type: Number },
  nbPrograms: { type: Number },
  size: { type: Number },
  startTime: { type: Number }
}, subOptions);

/**
 * Media stream descriptor
 * @type {{new(values?: any): *}}
 */
const MediaStream = new _schemaObject2.default({
  codec: { type: MediaCodec },
  dimensions: { type: MediaDimensions },
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
}, subOptions);

/**
 * Media content related metadata
 * @type {{new(values?: any): *}}
 */
const MediaMetadata = new _schemaObject2.default({
  streams: [MediaStream],
  format: MediaFormat
}, subOptions);

/**
 * Main Document Type
 */
const schema = {
  /** Document ID & ownership **/
  uuid: { type: String },
  author: { type: String },

  /** Content metadata **/
  source: { type: Source },
  file: { type: FileMetadata },
  media: { type: MediaMetadata },

  /** Local document metadata **/
  added: { type: String, default: _time2.default.toISO },
  created: { type: String, default: _time2.default.toISO },
  updated: { type: String }
};

const config = {
  strict: false,
  methods: _baseModel.methods,
  computed: _baseModel.computed,
  constructors: {
    default: _baseModel.Constructor,
    fromIngestedMediaFile: _converters.fromIngestedMediaFile
  }
};

const Document = new _schemaObject2.default(schema, config);

exports.schema = schema;
exports.config = config;
exports.default = Document;