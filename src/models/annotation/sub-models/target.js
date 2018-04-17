import SchemaObject from 'schema-object'

import Selector from './selector'

const Target = new SchemaObject({
  type: { type: String, required: true },
  id: { type: String, required: true },
  selector: { type: Selector }
})

export default Target
