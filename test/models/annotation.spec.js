const validator = require('validator')

const
  { annotation } = require('../fixtures'),
  { models, utils } = require('../../dist'),
  { Annotation } = models,
  { TimeUtil, Assert } = utils

describe('Annotation', () => {
  it('creates an empty Annotation instance', () => {
    const anno = new Annotation()

    anno.should.be.instanceOf(Annotation)
    validator.isUUID(anno.uuid).should.equal(true)
  })
})
