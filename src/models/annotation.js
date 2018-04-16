import SchemaObject from 'schema-object'
import ObjectUtil from '../utils/object'
import { Constructor, computed, methods } from './base-model'

const Annotation = new SchemaObject({
  uuid: {
    type: String,
    default: ObjectUtil.uuid4,
    readonly: true
  },
  author: { type: String },

  type: {
    type: String,
    required: true,
    default: 'Annotation',
    readonly: true
  },
  motivation: { type: String },
  context: { type: String },

  target: {
    type: { type: String, required: true },
    id: { type: String, required: true },
    selector: {
      type: { type: String, required: true },
      value: { type: String, required: true },
      conformsTo: { type: String }
    }
  },

  body: {
    type: { type: String, required: true },
    value: { type: String },
    source: { type: String },
    purpose: { type: String },
    selector: {
      type: { type: String, required: true },
      value: { type: String, required: true },
      conformsTo: { type: String }
    }
  },

  created: { type: String },
  updated: { type: String }
}, {
  strict: false,
  constructors: {
    default: Constructor
  },
  computed,
  methods
})

export default Annotation
