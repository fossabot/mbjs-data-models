import SchemaObject from 'schema-object'

/**
 * Plane coordinates
 */
const Plane = new SchemaObject({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  width: { type: Number, default: 0 },
  height: { type: Number, default: 0 }
})

export default Plane
