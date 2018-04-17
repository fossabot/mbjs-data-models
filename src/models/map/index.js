import SchemaObject from 'schema-object'

import { constructors, computed, methods } from '../../defaults'
import { ObjectUtil } from '../../utils'

import {
  GridSelector,
  TimeSelector
} from './sub-models'

const schema = {
  uuid: { type: String, required: true },
  author: { type: String },
  title: { type: String, required: true },
  created: { type: String },
  updated: { type: String }
}

const config = {
  constructors,
  computed,
  methods: ObjectUtil.merge(methods, {
    selectGrid: function (x, y, width = 0, height = 0) {
      return new GridSelector({
        map: this.uuid,
        selection: { x, y, width, height }
      })
    },
    selectTime: function (start, end = undefined) {
      return new TimeSelector({
        map: this.uuid,
        selection: { start, end }
      })
    }
  })
}

const Map = new SchemaObject(schema, config)

export {
  schema,
  config
}
export default Map
