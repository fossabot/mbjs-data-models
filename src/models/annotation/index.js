import SchemaObject from 'schema-object'

import { constructors, computed, methods } from '../../defaults'
import * as subModels from './sub-models'

const schema = {
  /** Document ID & ownership **/
  uuid: { type: String },
  type: { type: String, default: 'Annotation' },
  author: { type: String },

  /** Annotation data */
  motivation: { type: String },
  context: { type: String },
  target: { type: subModels.Target, required: true },
  body: { type: subModels.Body },

  /** Local document metadata **/
  created: { type: String },
  updated: { type: String }
}

const config = {
  strict: false,
  constructors,
  computed,
  methods
}

const Annotation = new SchemaObject(schema, config)

export {
  schema,
  config
}
export default Annotation
