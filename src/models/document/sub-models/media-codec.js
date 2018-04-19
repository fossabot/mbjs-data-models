const SchemaObject = require('schema-object')

/**
 * Media codec descriptor
 * @type {{new(values?: any): *}}
 */
const MediaCodec = new SchemaObject({
  name: { type: String },
  longName: { type: String },
  tag: { type: String },
  tagString: { type: String },
  timeBase: { type: String },
  type: { type: String },
  width: { type: Number },
  height: { type: Number },
  profile: { type: String }
})

module.exports = MediaCodec
