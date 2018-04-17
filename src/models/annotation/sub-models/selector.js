import SchemaObject from 'schema-object'

const Selector = new SchemaObject({
  type: { type: String, required: true },
  value: { type: String, required: true },
  conformsTo: { type: String }
})

export default Selector
