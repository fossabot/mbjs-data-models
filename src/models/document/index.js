const SchemaObject = require('schema-object')

const { constructors, computed, methods } = require('../../defaults')
const { fromIngestedMediaFile } = require('./converters')
const { Source } = require('../internal')
const subModels = require('./sub-models')

const TimeUtil = require('../../utils/time')

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
Document.schema = schema

module.exports = Document
