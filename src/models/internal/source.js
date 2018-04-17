import SchemaObject from 'schema-object'

/**
 * Content source identifier
 * @type {{new(values?: any): *}}
 */
const Source = new SchemaObject({
  id: { type: String, required: true },
  type: { type: String, required: true }
})

export default Source
