import SchemaObject from 'schema-object'
import { ObjectUtil } from '../utils'

const schema = {
  title: { type: String, required: true },
  value: { type: String }
}

const config = {
  strict: false,
  computed: {
    slug () {
      return ObjectUtil.slug(this.title)
    }
  }
}

const Tag = new SchemaObject(schema, config)

export {
  schema,
  config
}
export default Tag
