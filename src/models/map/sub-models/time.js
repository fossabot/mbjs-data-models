const SchemaObject = require('schema-object')
const { BigNumber } = require('bignumber.js')

/**
 * Time
 * Holds the time both as UTC seconds
 * as a BigNumber (https://github.com/MikeMcl/bignumber.js),
 * and as an ISO DateTime for TZ related info
 */
const Time = new SchemaObject({
  datetime: { type: String, required: true },
  seconds: { type: BigNumber, default: BigNumber(0) }
})

module.exports = Time
