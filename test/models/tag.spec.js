const validator = require('validator')

const
  { tag } = require('../fixtures'),
  { Tag } = require('../../src')

describe('Tag', () => {
  it('creates an empty Tag instance', () => {
    const tag = new Tag()
    tag.should.be.instanceOf(Tag)
  })

  it('creates a Tag instance from random values', () => {
    const
      template = tag(),
      t = new Tag(template)

    validator.isUUID(t.uuid).should.equal(true)
    t.title.should.equal(template.title)
    t.value.should.equal(template.value)
  })
})
