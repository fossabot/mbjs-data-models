import SchemaObject from 'schema-object'

/**
 * General file metadata
 * @type {{new(values?: any): *}}
 */
const FileMetadata = new SchemaObject({
  added: { type: String },
  created: { type: String },
  updated: { type: String },
  bytes: { type: Number },
  hash: { type: String },
  mime: { type: String },
  ext: { type: String }
})

export default FileMetadata
