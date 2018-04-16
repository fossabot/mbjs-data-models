import { DateTime } from 'luxon'

const {
  DATE_SHORT,
  DATE_FULL,
  TIME_24_SIMPLE,
  TIME_24_WITH_SECONDS,
  DATETIME_SHORT_WITH_SECONDS,
  DATETIME_SHORT,
  DATETIME_FULL_WITH_SECONDS,
  DATETIME_FULL
} = DateTime

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

  static toFormat (value, format) {
    return TimeUtil.toDateTime(value).toFormat(format)
  }

  static fromISO (value) {
    return DateTime.fromISO(value)
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
}

export {
  formats
}
export default TimeUtil
