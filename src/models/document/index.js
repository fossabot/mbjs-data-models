import SchemaObject from 'schema-object'

import { constructors, computed, methods } from '../../defaults'
import { fromIngestedMediaFile } from './converters'
import { Source } from '../internal'
import * as subModels from './sub-models'

import TimeUtil from '../../utils/time'

/**
 * Main Document Type
 */
const schema = {
  /** Document ID & ownership **/
  uuid: { type: String },
  author: { type: String },

  /** Content metadata **/
  source: { type: Source },
  file: { type: subModels.FileMetadata },
  media: { type: subModels.MediaMetadata },

  /** Local document metadata **/
  added: { type: String, default: TimeUtil.toISO },
  created: { type: String, default: TimeUtil.toISO },
  updated: { type: String }
}

const docConstructors = constructors
docConstructors.fromIngestedMediaFile = fromIngestedMediaFile

const config = {
  strict: false,
  methods,
  computed,
  constructors: docConstructors
}

const Document = new SchemaObject(schema, config)

export {
  schema,
  config
}
export default Document
