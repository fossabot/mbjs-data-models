'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.computed = exports.methods = exports.Constructor = exports.BaseSchema = undefined;

var _schemaObject = require('schema-object');

var _schemaObject2 = _interopRequireDefault(_schemaObject);

var _luxon = require('luxon');

var _isUUID = require('validator/lib/isUUID');

var _isUUID2 = _interopRequireDefault(_isUUID);

var _object = require('../utils/object');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const checkAndSetUUID = (uuid, opts = {}) => {
  if (!uuid || !(0, _isUUID2.default)(uuid)) {
    let sig = opts.sig,
        ns = opts.ns || _object.uuidNamespaces.NULL,
        { data } = opts;

    if (data) sig = data.hash || data.signature || data.email;
    if (sig) {
      return _object2.default.uuid5(sig, ns);
    } else if (data.file && data.file.hash) {
      return _object2.default.uuid5(data.file.hash, ns);
    } else {
      return _object2.default.uuid4();
    }
  }
  return uuid;
};

const Constructor = function (data = {}) {
  /** Check and update the supplied data */
  data.uuid = checkAndSetUUID(data.uuid, { data });

  /** Populate data on the model */
  this.populate(data);

  /** Automatically set dates, if not already supplied */
  if (!this.created) this.created = _luxon.DateTime.local().toISO();
  if (!this.added) this.added = _luxon.DateTime.local().toISO();
};

const methods = {
  touch() {
    this.updated = _luxon.DateTime.local().toISO();
  }
};

const computed = {
  /** General alias for different IDs */
  id: function () {
    return this.uuid || this._id;
  }
};

const BaseSchema = {
  uuid: { type: String },
  created: { type: String },
  updated: { type: String },
  added: { type: String }
};

const BaseModel = new _schemaObject2.default(BaseSchema, {
  methods,
  computed,
  constructors: {
    default: Constructor
  }
});

exports.BaseSchema = BaseSchema;
exports.Constructor = Constructor;
exports.methods = methods;
exports.computed = computed;
exports.default = BaseModel;