const SchemaObject = require('schema-object')

const
  { Source } = require('../../internal'),
  Selector = require('./selector')

const Body = new SchemaObject({
  type: { type: String, required: true },
  value: { type: String },
  source: { type: Source },
  purpose: { type: String },
  selector: { type: Selector }
})

module.exports = Body
