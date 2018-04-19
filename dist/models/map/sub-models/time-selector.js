'use strict';

const SchemaObject = require('schema-object');

const Timespan = require('./timespan');
const { MAP_SELECTOR_TIMELINE } = require('../../../constants');

/**
 * Time Selector
 */
const TimelineSelector = new SchemaObject({
  type: { type: String, readOnly: true, default: MAP_SELECTOR_TIMELINE },
  map: { type: String, required: true },
  selection: { type: Timespan, required: true }
});

module.exports = TimelineSelector;