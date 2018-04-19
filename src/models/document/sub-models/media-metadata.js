const SchemaObject = require('schema-object')

const MediaFormat = require('./media-format')
const MediaStream = require('./media-stream')

/**
 * Media content related metadata
 * @type {{new(values?: any): *}}
 */
const MediaMetadata = new SchemaObject({
  streams: [MediaStream],
  format: MediaFormat
})

module.exports = MediaMetadata
