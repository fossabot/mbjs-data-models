const validator = require('validator')

const
  { annotation } = require('../fixtures'),
  { models } = require('../../dist'),
  { Annotation } = models

describe('Annotation', () => {
  it('creates an Annotation instance from random values', () => {
    const
      template = annotation(),
      anno = new Annotation(template),
      annoObj = anno.toObject()

    anno.should.be.instanceOf(Annotation)
    validator.isUUID(anno.uuid).should.equal(true)
    Object.keys(template).forEach(key => {
      annoObj[key].should.deep.equal(template[key])
    })
  })

  it('serialises an Annotation as JSON, then resurrects it', () => {
    const
      template = annotation(),
      anno = new Annotation(template),
      annoJSON = anno.serializeJSON(),
      annoNew = Annotation.fromJSON(annoJSON)

    anno.toObject().should.deep.equal(annoNew.toObject())
  })
})
