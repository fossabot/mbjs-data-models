const { DateTime } = require('luxon')

class TimeUtil {
  static toDateTime (value) {
    value = value || DateTime.local()

    let constructor
    try {
      constructor = value.constructor.name
    }
    catch (e) { /* ignored */ }
    constructor = constructor || typeof value

    switch (constructor.toLowerCase()) {
      case 'date':
        return DateTime.fromJSDate(value)
      case 'number':
        return DateTime.fromMillis(value)
      case 'string':
        return DateTime.fromFormat(value)
      default:
        return value
    }
  }

  static toISO (value) {
    return TimeUtil.toDateTime(value).toISO()
  }

  static toMillis (value) {
    return TimeUtil.toDateTime(value).toMillis()
  }

  static fromISO (value) {
    return DateTime.fromISO(value)
  }
}

module.exports = TimeUtil
