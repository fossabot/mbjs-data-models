const validator = require('validator')

const
  { map } = require('../fixtures'),
  { models } = require('../../src'),
  { Map } = models

describe('Map', () => {
  it('creates a Map instance from random values', () => {
    const
      template = map(),
      m = new Map(template)

    m.should.be.instanceOf(Map)
    validator.isUUID(m.uuid).should.equal(true)
    m.title.should.equal(template.title)
  })

  it('serialises a Map as JSON, then resurrects it', () => {
    const
      template = map(),
      m = new Map(template),
      mJSON = m.serializeJSON(),
      mNew = Map.fromJSON(mJSON)

    m.toObject().should.deep.equal(mNew.toObject())
  })
})
