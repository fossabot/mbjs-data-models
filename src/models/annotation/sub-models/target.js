const SchemaObject = require('schema-object')

const Selector = require('./selector')

const Target = new SchemaObject({
  type: { type: String, required: true },
  id: { type: String, required: true },
  selector: { type: Selector }
})

module.exports = Target
