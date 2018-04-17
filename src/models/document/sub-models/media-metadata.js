import SchemaObject from 'schema-object'

import MediaFormat from './media-format'
import MediaStream from './media-stream'

/**
 * Media content related metadata
 * @type {{new(values?: any): *}}
 */
const MediaMetadata = new SchemaObject({
  streams: [MediaStream],
  format: MediaFormat
})

export default MediaMetadata
