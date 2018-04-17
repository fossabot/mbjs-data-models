import SchemaObject from 'schema-object'

import { Source } from '../../internal'
import Selector from './selector'

const Body = new SchemaObject({
  type: { type: String, required: true },
  value: { type: String },
  source: { type: Source },
  purpose: { type: String },
  selector: { type: Selector }
})

export default Body
