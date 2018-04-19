const SchemaObject = require('schema-object')
const Time = require('./time')

/**
 * Timespan
 */
const Timespan = new SchemaObject({
  start: { type: Time, required: true },
  end: { type: Time }
})

module.exports = Timespan
