'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.schema = undefined;

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _defaults = require('../../defaults');

var _subModels = require('./sub-models');

var subModels = _interopRequireWildcard(_subModels);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = {
  /** Document ID & ownership **/
  uuid: { type: String },
  type: { type: String, default: 'Annotation' },
  author: { type: String },

  /** Annotation data */
  motivation: { type: String },
  context: { type: String },
  target: { type: subModels.Target, required: true },
  body: { type: subModels.Body },

  /** Local document metadata **/
  created: { type: String },
  updated: { type: String }
};

const config = {
  strict: false,
  constructors: _defaults.constructors,
  computed: _defaults.computed,
  methods: _defaults.methods
};

const Annotation = new _schemaObject2.default(schema, config);

exports.schema = schema;
exports.config = config;
exports.default = Annotation;