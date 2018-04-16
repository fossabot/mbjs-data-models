import SchemaObject from 'schema-object'

import { Constructor, computed, methods } from '../base-model'
import { fromIngestedMediaFile } from './converters'

import TimeUtil from '../../utils/time'
import ObjectUtil from '../../utils/object'

const subOptions = {
  strict: false
}

const Tag = new SchemaObject({
  title: { type: String, required: true },
  value: { type: String }
}, {
  strict: false,
  computed: {
    slug () {
      return ObjectUtil.slug(this.title)
    }
  }
}, subOptions)

/**
 * Content source identifier
 * @type {{new(values?: any): *}}
 */
const Source = new SchemaObject({
  id: { type: String },
  type: { type: String }
}, subOptions)

/**
 * General file metadata
 * @type {{new(values?: any): *}}
 */
const FileMetadata = new SchemaObject({
  added: { type: String },
  created: { type: String },
  updated: { type: String },
  bytes: { type: Number },
  hash: { type: String },
  mime: { type: String },
  ext: { type: String }
})

/**
 * Media dimensionality
 * @type {{new(values?: any): *}}
 */
const MediaDimensions = new SchemaObject({
  width: { type: Number },
  height: { type: Number },
  codedWidth: { type: Number },
  codedHeight: { type: Number },
  displayAspectRatio: { type: String },
  sampleAspectRatio: { type: String },
  pixelFormat: { type: String }
}, subOptions)

/**
 * Media codec descriptor
 * @type {{new(values?: any): *}}
 */
const MediaCodec = new SchemaObject({
  name: { type: String },
  longName: { type: String },
  tag: { type: String },
  tagString: { type: String },
  timeBase: { type: String },
  type: { type: String },
  width: { type: Number },
  height: { type: Number },
  profile: { type: String }
}, subOptions)

/**
 * Media container format descriptor
 * @type {{new(values?: any): *}}
 */
const MediaFormat = new SchemaObject({
  tags: { type: [Tag] },
  bitRate: { type: Number },
  duration: { type: Number },
  name: { type: String },
  longName: { type: String },
  nbStreams: { type: Number },
  nbPrograms: { type: Number },
  size: { type: Number },
  startTime: { type: Number }
}, subOptions)

/**
 * Media stream descriptor
 * @type {{new(values?: any): *}}
 */
const MediaStream = new SchemaObject({
  codec: { type: MediaCodec },
  dimensions: { type: MediaDimensions },
  duration: { type: Number },
  durationTs: { type: Number },
  maxBitRate: { type: Number },
  nbFrames: { type: Number },
  type: { type: String },
  level: { type: Number },
  timeBase: { type: String },
  avgFrameRate: { type: Number },
  rFrameRate: { type: String },
  startTime: { type: Number }
}, subOptions)

/**
 * Media content related metadata
 * @type {{new(values?: any): *}}
 */
const MediaMetadata = new SchemaObject({
  streams: [MediaStream],
  format: MediaFormat
}, subOptions)

/**
 * Main Document Type
 */
const schema = {
  /** Document ID & ownership **/
  uuid: { type: String },
  author: { type: String },

  /** Content metadata **/
  source: { type: Source },
  file: { type: FileMetadata },
  media: { type: MediaMetadata },

  /** Local document metadata **/
  added: { type: String, default: TimeUtil.toISO },
  created: { type: String, default: TimeUtil.toISO },
  updated: { type: String }
}

const config = {
  strict: false,
  methods,
  computed,
  constructors: {
    default: Constructor,
    fromIngestedMediaFile
  }
}

const Document = new SchemaObject(schema, config)

export {
  schema,
  config
}
export default Document
