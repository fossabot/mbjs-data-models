'use strict';

const isUUID = require('validator/lib/isUUID');

const ObjectUtil = require('./utils/object');
const { uuidNamespaces } = require('./utils/object');
const TimeUtil = require('./utils/time');

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
  if (!this.created) this.created = TimeUtil.toISO();
  if (!this.added) this.added = TimeUtil.toISO();
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
  if (!uuid || !isUUID(uuid)) {
    let sig = opts.sig,
        ns = opts.ns || uuidNamespaces.NULL,
        { data } = opts;

    if (data) sig = data.hash || data.signature || data.email;
    if (sig) {
      return ObjectUtil.uuid5(sig, ns);
    } else if (data.file && data.file.hash) {
      return ObjectUtil.uuid5(data.file.hash, ns);
    } else {
      return ObjectUtil.uuid4();
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
    this.updated = TimeUtil.toISO();
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

module.exports = {
  methods,
  computed,
  constructors
};