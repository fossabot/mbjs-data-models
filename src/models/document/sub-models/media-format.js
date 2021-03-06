const SchemaObject = require('schema-object')

const { schema } = require('../../tag')

const Tag = new SchemaObject(schema)

/**
 * Media container format descriptor
 * @type {{new(values?: any): *}}
 */
const MediaFormat = new SchemaObject({
  tags: { type: [Tag] },
  bitRate: { type: Number },
  duration: { type: Number },
  name: { type: String },
  longName: { type: String },
  nbStreams: { type: Number },
  nbPrograms: { type: Number },
  size: { type: Number },
  startTime: { type: Number }
})

module.exports = MediaFormat
