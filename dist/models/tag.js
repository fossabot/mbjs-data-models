'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _utils = require('../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Schema = {
  title: { type: String, required: true },
  value: { type: String }
};

const Config = {
  strict: false,
  computed: {
    slug() {
      return _utils.ObjectUtil.slug(this.title);
    }
  }
};

const Tag = new _schemaObject2.default(Schema, Config);

exports.default = Tag;
module.exports = exports['default'];