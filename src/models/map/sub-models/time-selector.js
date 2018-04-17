import SchemaObject from 'schema-object'

import Timespan from './timespan'
import { MAP_SELECTOR_TIMELINE } from '../../../constants'

/**
 * Time Selector
 */
const TimelineSelector = new SchemaObject({
  type: { type: String, readOnly: true, default: MAP_SELECTOR_TIMELINE },
  map: { type: String, required: true },
  selection: { type: Timespan, required: true }
})

export default TimelineSelector
