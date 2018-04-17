'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.schema = undefined;

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _defaults = require('../../defaults');

var _converters = require('./converters');

var _internal = require('../internal');

var _subModels = require('./sub-models');

var subModels = _interopRequireWildcard(_subModels);

var _time = require('../../utils/time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Main Document Type
 */
const schema = {
  /** Document ID & ownership **/
  uuid: { type: String },
  author: { type: String },

  /** Content metadata **/
  source: { type: _internal.Source },
  file: { type: subModels.FileMetadata },
  media: { type: subModels.MediaMetadata },

  /** Local document metadata **/
  added: { type: String, default: _time2.default.toISO },
  created: { type: String, default: _time2.default.toISO },
  updated: { type: String }
};

const docConstructors = _defaults.constructors;
docConstructors.fromIngestedMediaFile = _converters.fromIngestedMediaFile;

const config = {
  strict: false,
  methods: _defaults.methods,
  computed: _defaults.computed,
  constructors: docConstructors
};

const Document = new _schemaObject2.default(schema, config);

exports.schema = schema;
exports.config = config;
exports.default = Document;