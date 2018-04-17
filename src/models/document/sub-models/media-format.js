import SchemaObject from 'schema-object'

import Tag from '../../tag'

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

export default MediaFormat
