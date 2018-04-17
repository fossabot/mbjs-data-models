import SchemaObject from 'schema-object'

import Plane from './plane'
import { MAP_SELECTOR_GRID } from '../../../constants'

/**
 * Time Selector
 */
const GridSelector = new SchemaObject({
  type: { type: String, readOnly: true, default: MAP_SELECTOR_GRID },
  map: { type: String, required: true },
  selection: { type: Plane, required: true }
})

export default GridSelector
