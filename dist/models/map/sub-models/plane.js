'use strict';

const SchemaObject = require('schema-object');

/**
 * Plane coordinates
 */
const Plane = new SchemaObject({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  width: { type: Number, default: 0 },
  height: { type: Number, default: 0 }
});

module.exports = Plane;