import SchemaObject from 'schema-object'
import { ObjectUtil } from '../utils'

const Schema = {
  title: { type: String, required: true },
  value: { type: String }
}

const Config = {
  strict: false,
  computed: {
    slug () {
      return ObjectUtil.slug(this.title)
    }
  }
}

const Tag = new SchemaObject(Schema, Config)

export default Tag
