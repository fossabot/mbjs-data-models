import SchemaObject from 'schema-object'
import { DateTime } from 'luxon'
import isUUID from 'validator/lib/isUUID'

import ObjectUtil, { uuidNamespaces } from '../utils/object'

const checkAndSetUUID = (uuid, opts = {}) => {
  if (!uuid || !isUUID(uuid)) {
    let
      sig = opts.sig,
      ns = opts.ns || uuidNamespaces.NULL,
      { data } = opts

    if (data) sig = data.hash || data.signature || data.email
    if (sig) {
      return ObjectUtil.uuid5(sig, ns)
    }
    else if (data.file && data.file.hash) {
      return ObjectUtil.uuid5(data.file.hash, ns)
    }
    else {
      return ObjectUtil.uuid4()
    }
  }
  return uuid
}

const Constructor = function (data = {}) {
  /** Check and update the supplied data */
  data.uuid = checkAndSetUUID(data.uuid, { data })

  /** Populate data on the model */
  this.populate(data)

  /** Automatically set dates, if not already supplied */
  if (!this.created) this.created = DateTime.local().toISO()
  if (!this.added) this.added = DateTime.local().toISO()
}

const methods = {
  serializeJSON (opts) {
    if (opts.pretty) return JSON.stringify(this.toObject(), null, ' ')
    return JSON.stringify(this.toObject())
  },
  touch () {
    this.updated = DateTime.local().toISO()
  }
}

const computed = {
  /** General alias for different IDs */
  id: function () {
    return this.uuid || this._id
  }
}

const constructors = {
  default: Constructor,
  fromJSON: function (data) {
    this.super(JSON.parse(data))
  }
}

const BaseSchema = {
  uuid: { type: String },
  created: { type: String },
  updated: { type: String },
  added: { type: String }
}

const BaseModel = new SchemaObject(
  BaseSchema,
  {
    methods,
    computed,
    constructors
  }
)

export {
  BaseSchema,
  Constructor,
  methods,
  computed,
  constructors
}

export default BaseModel
