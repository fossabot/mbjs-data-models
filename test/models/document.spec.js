const validator = require('validator')

const
  { document } = require('../fixtures'),
  { models, utils } = require('../../src'),
  { Document } = models,
  { TimeUtil, Assert } = utils

describe('Document', () => {
  it('creates an empty Document instance', () => {
    const doc = new Document()

    doc.should.be.instanceOf(Document)
    validator.isUUID(doc.uuid).should.equal(true)
  })

  it('creates a Document instance with random content', () => {
    const
      template = document(),
      doc = new Document(template),
      docObject = doc.toObject()

    validator.isUUID(docObject.uuid).should.equal(true)

    docObject.author.should.equal(template.author)
    docObject.source.should.deep.equal(template.source)
    docObject.file.should.deep.equal(template.file)
    docObject.media.should.deep.equal(template.media)

    // FIXME: does not work with assert, should... some esoteric babel shit
    let res = (TimeUtil.fromISO(docObject.created).toISO() === docObject.created)
    if (!res) throw new Error('WTF: not equal!')

    res = (TimeUtil.fromISO(docObject.added).toISO() === docObject.added)
    if (!res) { throw new Error('WTF: not equal!') }

    (typeof docObject.updated === 'undefined').should.equal(true)
  })

  it('resurrects Document from JSON (pretty)', () => {
    const
      doc = new Document(document()),
      docJSON = doc.serializeJSON({ pretty: true}),
      newDoc = Document.fromJSON(docJSON)

    /** equal as 'live' object */
    doc.should.deep.equal(newDoc)

    /** equal as plain Object instance */
    Assert.isInstance(doc.toObject(), 'Object').should.equal(true)
    Assert.isInstance(newDoc.toObject(), 'Object').should.equal(true)
    doc.toObject().should.deep.equal(newDoc.toObject())
  })

  it('resurrects Document from JSON (ugly)', () => {
    const
      doc = new Document(document()),
      docJSON = doc.serializeJSON(),
      newDoc = Document.fromJSON(docJSON)

    doc.should.deep.equal(newDoc)
    doc.toObject().should.deep.equal(newDoc.toObject())
  })
})
