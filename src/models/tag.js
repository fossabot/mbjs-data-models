const SchemaObject = require('schema-object')

const { constructors, computed, methods } = require('../defaults')
const { ObjectUtil } = require('../utils')

const schema = {
  title: { type: String, required: true },
  value: { type: String }
}

const config = {
  strict: false,
  constructors,
  methods,
  computed: ObjectUtil.merge(computed, {
    slug () {
      return ObjectUtil.slug(this.title)
    }
  })
}

const Tag = new SchemaObject(schema, config)
Tag.schema = schema

module.exports = Tag
