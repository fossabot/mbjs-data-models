'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uuidNamespaces = undefined;

var _slug = require('slug');

var _slug2 = _interopRequireDefault(_slug);

var _deepExtend = require('deep-extend');

var _deepExtend2 = _interopRequireDefault(_deepExtend);

var _v = require('uuid/v4');

var _v2 = _interopRequireDefault(_v);

var _v3 = require('uuid/v5');

var _v4 = _interopRequireDefault(_v3);

var _isUUID = require('validator/lib/isUUID');

var _isUUID2 = _interopRequireDefault(_isUUID);

var _assert = require('./assert');

var _assert2 = _interopRequireDefault(_assert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const NULL = '00000000-0000-0000-0000-000000000000',
      MOTION_BANK = '71e9e787-b461-43d1-b70a-c7ec7191378c',
      { URL, DNS } = _v4.default;

const uuidNamespaces = {
  URL, DNS, MOTION_BANK, NULL
};

class ObjectUtil {
  /**
   * Deep-merge/extend objects
   * @param args
   * @return {Object}
   */
  static merge(...args) {
    _assert2.default.ok(args.length > 1, 'merge needs at least two arguments');
    args = args.map(arg => {
      return arg instanceof Object ? arg : {};
    });
    return _deepExtend2.default.apply(null, args.filter(arg => {
      return typeof arg !== 'undefined';
    }));
  }

  /**
   * Generate slugified string
   * @param value
   * @return {String}
   */
  static slug(value) {
    _assert2.default.isType(value, 'string', 'value must be string');
    return (0, _slug2.default)(value);
  }

  /**
   * Create a version 5 UUID
   * @param value
   * @param namespace
   * @return {String}
   */
  static uuid5(value, namespace = undefined) {
    _assert2.default.isType(value, 'string', 'value must be string');
    if (namespace) _assert2.default.ok((0, _isUUID2.default)(namespace), 'namespace must be UUID');
    return (0, _v4.default)(value || (0, _v2.default)(), namespace || uuidNamespaces.NULL);
  }

  /**
   * Create a version 4 UUID
   * @return {String}
   */
  static uuid4() {
    return (0, _v2.default)();
  }
}

exports.uuidNamespaces = uuidNamespaces;
exports.default = ObjectUtil;