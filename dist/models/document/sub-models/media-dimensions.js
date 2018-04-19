'use strict';

const SchemaObject = require('schema-object');

/**
 * Media dimensionality
 * @type {{new(values?: any): *}}
 */
const MediaDimensions = new SchemaObject({
  width: { type: Number },
  height: { type: Number },
  codedWidth: { type: Number },
  codedHeight: { type: Number },
  displayAspectRatio: { type: String },
  sampleAspectRatio: { type: String },
  pixelFormat: { type: String }
});

module.exports = MediaDimensions;