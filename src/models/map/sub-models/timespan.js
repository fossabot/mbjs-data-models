import SchemaObject from 'schema-object'
import Time from './time'

/**
 * Timespan
 */
const Timespan = new SchemaObject({
  start: { type: Time, required: true },
  end: { type: Time }
})

export default Timespan
