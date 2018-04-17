const validator = require('validator')

const
  { tag } = require('../fixtures'),
  { models, utils } = require('../../dist'),
  { Tag } = models,
  { TimeUtil, Assert } = utils

describe('Tag', () => {
  it('creates an empty Tag instance', () => {
    const tag = new Tag()

    tag.should.be.instanceOf(Tag)
  })
})
