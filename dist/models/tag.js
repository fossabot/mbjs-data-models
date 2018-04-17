'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.schema = undefined;

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _defaults = require('../defaults');

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = {
  title: { type: String, required: true },
  value: { type: String }
};

const config = {
  strict: false,
  constructors: _defaults.constructors,
  methods: _defaults.methods,
  computed: _utils.ObjectUtil.merge(_defaults.computed, {
    slug() {
      return _utils.ObjectUtil.slug(this.title);
    }
  })
};

const Tag = new _schemaObject2.default(schema, config);

exports.schema = schema;
exports.config = config;
exports.default = Tag;