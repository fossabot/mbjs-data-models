'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.config = exports.schema = undefined;

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _defaults = require('../../defaults');

var _utils = require('../../utils');

var _subModels = require('./sub-models');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = {
  uuid: { type: String, required: true },
  author: { type: String },
  title: { type: String, required: true },
  created: { type: String },
  updated: { type: String }
};

const config = {
  constructors: _defaults.constructors,
  computed: _defaults.computed,
  methods: _utils.ObjectUtil.merge(_defaults.methods, {
    selectGrid: function (x, y, width = 0, height = 0) {
      return new _subModels.GridSelector({
        map: this.uuid,
        selection: { x, y, width, height }
      });
    },
    selectTime: function (start, end = undefined) {
      return new _subModels.TimeSelector({
        map: this.uuid,
        selection: { start, end }
      });
    }
  })
};

const Map = new _schemaObject2.default(schema, config);

exports.schema = schema;
exports.config = config;
exports.default = Map;