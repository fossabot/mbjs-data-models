'use strict';

const SchemaObject = require('schema-object');

const Selector = new SchemaObject({
  type: { type: String, required: true },
  value: { type: String, required: true },
  conformsTo: { type: String }
});

module.exports = Selector;