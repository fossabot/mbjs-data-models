'use strict';

const assert = require('assert');

/**
 * Custom assert wrapper
 *
 * so we can always switch to the
 * assert library du jour...
 */
class Assert {
  /**
   * Assert "trueness" of a condition
   * @param {*} condition
   * @param {String} [msg] - Custom error msg
   */
  static ok(condition, msg = undefined) {
    assert(condition === true, msg);
    return true;
  }

  /**
   * Assert equality of two values
   * Note: The default is a non-strict, non-deep comparison.
   * @param {*} value
   * @param {*} compare
   * @param {Object} [opts] - e.g. { deep: true, strict: true, message: 'custom error msg' }
   */
  static equal(value, compare, opts = {}) {
    let fn = opts.strict ? assert.strictEqual : assert.equal;
    if (opts.deep) {
      fn = opts.strict ? assert.deepStrictEqual : assert.deepEqual;
    }
    fn(value, compare, opts.message);
    return true;
  }

  /**
   * Assert non-equality of two values
   * Note: The default is a non-strict, non-deep comparison.
   * @param {*} value
   * @param {*} compare
   * @param {Object} [opts] - Optional: e.g. { deep: true, strict: true, message: 'custom error msg' }
   */
  static notEqual(value, compare, opts = {}) {
    let fn = opts.strict ? assert.notStrictEqual : assert.notEqual;
    if (opts.deep) {
      fn = opts.strict ? assert.notDeepStrictEqual : assert.notDeepEqual;
    }
    fn(value, compare, opts.message);
    return true;
  }

  /**
   * Check if value is of type
   * @param {*} value
   * @param {String} type
   * @param {String} [msgPrefix] - Added in front of assert error msg
   */
  static isType(value, type, msgPrefix = undefined) {
    Assert.ok(typeof type === 'string', 'Assert.isType: Invalid type argument');

    const isType = typeof value,
          fullMsg = (`${msgPrefix}: ` || '') + `Value must be type '${type}', is type '${isType}'`;

    return Assert.equal(isType, type, { message: fullMsg });
  }

  /**
   * Check if value is an instance of a class
   * Note: checks the .constructor.name, then .name property
   * @param {*} value
   * @param {String} name
   * @param {String} [msgPrefix] - Added in front of assert error msg
   */
  static isInstance(value, name, msgPrefix = undefined) {
    Assert.ok(typeof name === 'string', 'Assert.isInstance: Invalid name rgument');

    let isName = value && value.constructor ? value.constructor.name : undefined;
    isName = isName || value.name;
    const fullMsg = (`${msgPrefix}: ` || '') + `Value must be instance of '${name}', is '${isName}'`;

    return Assert.equal(isName, name, { message: fullMsg });
  }
}

module.exports = Assert;