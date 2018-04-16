'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formats = undefined;

var _luxon = require('luxon');

const {
  DATE_SHORT,
  DATE_FULL,
  TIME_24_SIMPLE,
  TIME_24_WITH_SECONDS,
  DATETIME_SHORT_WITH_SECONDS,
  DATETIME_SHORT,
  DATETIME_FULL_WITH_SECONDS,
  DATETIME_FULL
} = _luxon.DateTime;

class TimeUtil {
  static toDateTime(value) {
    value = value || _luxon.DateTime.local();

    let constructor;
    try {
      constructor = value.constructor.name;
    } catch (e) {/* ignored */}
    constructor = constructor || typeof value;

    switch (constructor.toLowerCase()) {
      case 'date':
        return _luxon.DateTime.fromJSDate(value);
      case 'number':
        return _luxon.DateTime.fromMillis(value);
      case 'string':
        return _luxon.DateTime.fromFormat(value);
      default:
        return value;
    }
  }

  static toISO(value) {
    return TimeUtil.toDateTime(value).toISO();
  }

  static toMillis(value) {
    return TimeUtil.toDateTime(value).toMillis();
  }

  static toFormat(value, format) {
    return TimeUtil.toDateTime(value).toFormat(format);
  }

  static fromISO(value) {
    return _luxon.DateTime.fromISO(value);
  }
}

const formats = {
  DATE_SHORT,
  DATE_FULL,
  TIME_24_SIMPLE,
  TIME_24_WITH_SECONDS,
  DATETIME_SHORT_WITH_SECONDS,
  DATETIME_SHORT,
  DATETIME_FULL_WITH_SECONDS,
  DATETIME_FULL
};

exports.formats = formats;
exports.default = TimeUtil;