import slug from 'slug'
import merge from 'deep-extend'
import uuid4 from 'uuid/v4'
import uuid5 from 'uuid/v5'
import isUUID from 'validator/lib/isUUID'

import Assert from './assert'

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
}

export {
  uuidNamespaces
}
export default ObjectUtil
