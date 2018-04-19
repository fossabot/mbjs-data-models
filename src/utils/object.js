const slug = require('slug')
const merge = require('deep-extend')
const uuid4 = require('uuid/v4')
const uuid5 = require('uuid/v5')
const isUUID = require('validator/lib/isUUID')

const Assert = require('./assert')

const
  NULL = '00000000-0000-0000-0000-000000000000',
  MOTION_BANK = '71e9e787-b461-43d1-b70a-c7ec7191378c',
  { URL, DNS } = uuid5

const uuidNamespaces = {
  URL, DNS, MOTION_BANK, NULL
}

class ObjectUtil {
  /**
   * Deep-merge/extend objects
   * @param args
   * @return {Object}
   */
  static merge (...args) {
    Assert.ok(args.length > 1, 'merge needs at least two arguments')
    args = args.map(arg => {
      return arg instanceof Object ? arg : {}
    })
    return merge.apply(null, args.filter(arg => {
      return typeof arg !== 'undefined'
    }))
  }

  /**
   * Generate slugified string
   * @param value
   * @return {String}
   */
  static slug (value) {
    Assert.isType(value, 'string', 'value must be string')
    return slug(value)
  }

  /**
   * Create a version 5 UUID
   * @param value
   * @param namespace
   * @return {String}
   */
  static uuid5 (value, namespace = undefined) {
    Assert.isType(value, 'string', 'value must be string')
    if (namespace) Assert.ok(isUUID(namespace), 'namespace must be UUID')
    return uuid5(value || uuid4(), namespace || uuidNamespaces.NULL)
  }

  /**
   * Create a version 4 UUID
   * @return {String}
   */
  static uuid4 () {
    return uuid4()
  }

  static get uuidNamespaces () {
    return uuidNamespaces
  }
}

module.exports = ObjectUtil
