const SchemaObject = require('schema-object')

const Plane = require('./plane')
const { MAP_SELECTOR_GRID } = require('../../../constants')

/**
 * Time Selector
 */
const GridSelector = new SchemaObject({
  type: { type: String, readOnly: true, default: MAP_SELECTOR_GRID },
  map: { type: String, required: true },
  selection: { type: Plane, required: true }
})

module.exports = GridSelector
