'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _object = require('../utils/object');

var _object2 = _interopRequireDefault(_object);

var _baseModel = require('./base-model');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Annotation = new _schemaObject2.default({
  uuid: {
    type: String,
    default: _object2.default.uuid4,
    readonly: true
  },
  author: { type: String },

  type: {
    type: String,
    required: true,
    default: 'Annotation',
    readonly: true
  },
  motivation: { type: String },
  context: { type: String },

  target: {
    type: { type: String, required: true },
    id: { type: String, required: true },
    selector: {
      type: { type: String, required: true },
      value: { type: String, required: true },
      conformsTo: { type: String }
    }
  },

  body: {
    type: { type: String, required: true },
    value: { type: String },
    source: { type: String },
    purpose: { type: String },
    selector: {
      type: { type: String, required: true },
      value: { type: String, required: true },
      conformsTo: { type: String }
    }
  },

  created: { type: String },
  updated: { type: String }
}, {
  strict: false,
  constructors: {
    default: _baseModel.Constructor
  },
  computed: _baseModel.computed,
  methods: _baseModel.methods
});

exports.default = Annotation;
module.exports = exports['default'];