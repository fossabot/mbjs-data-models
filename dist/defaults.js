'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.constructors = exports.computed = exports.methods = undefined;

var _isUUID = require('validator/lib/isUUID');

var _isUUID2 = _interopRequireDefault(_isUUID);

var _object = require('./utils/object');

var _object2 = _interopRequireDefault(_object);

var _time = require('./utils/time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Default constructor
 * @param data
 */
const defaultConstructor = function (data = {}) {
  /** Check and update the supplied data */
  data.uuid = checkAndSetUUID(data.uuid, { data });

  /** Populate data on the model */
  this.populate(data);

  /** Automatically set dates, if not already supplied */
  if (!this.created) this.created = _time2.default.toISO();
  if (!this.added) this.added = _time2.default.toISO();
};

/**
 * All available constructors
 */
const constructors = {
  default: defaultConstructor,
  fromJSON: function (data) {
    this.super(JSON.parse(data));
  }

  /**
   * Create different UUID types
   * @param uuid
   * @param opts
   * @return {*}
   */
};const checkAndSetUUID = (uuid, opts = {}) => {
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

/**
 * All available instance methods
 */
const methods = {
  serializeJSON(opts = {}) {
    if (opts.pretty) return JSON.stringify(this.toObject(), null, ' ');
    return JSON.stringify(this.toObject());
  },
  touch() {
    this.updated = _time2.default.toISO();
  }
};

/**
 * Default computed properties
 */
const computed = {
  /** General alias for different IDs */
  id: function () {
    return this.uuid || this._id;
  }
};

exports.methods = methods;
exports.computed = computed;
exports.constructors = constructors;