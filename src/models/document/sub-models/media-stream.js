import SchemaObject from 'schema-object'

import MediaDimensions from './media-dimensions'
import MediaCodec from './media-codec'

/**
 * Media stream descriptor
 * @type {{new(values?: any): *}}
 */
const MediaStream = new SchemaObject({
  codec: { type: MediaCodec },
  dimensions: { type: MediaDimensions },
  duration: { type: Number },
  durationTs: { type: Number },
  maxBitRate: { type: Number },
  nbFrames: { type: Number },
  type: { type: String },
  level: { type: Number },
  timeBase: { type: String },
  avgFrameRate: { type: Number },
  rFrameRate: { type: String },
  startTime: { type: Number }
})

export default MediaStream
