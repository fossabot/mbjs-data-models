const
  Chance = require('chance'),
  chance = new Chance(),
  uuidv4 = require('uuid/v4')

const
  { utils } = require('../dist'),
  { TimeUtil } = utils

const singleValues = {
  uuid () {
    return uuidv4()
  },
  bytesSize () {
    return chance.integer({
      min: Math.pow(10, 1),
      max: Math.pow(10, 10)
    })
  },
  word () {
    return chance.word({ min: 3, max: 6 })
  },
  sentence () {
    return chance.sentence({ words: chance.integer({ min: 3, max: 6 }) })
  },
  name () {
    return chance.name()
  },
  url () {
    return chance.url()
  },
  isoDateTime () {
    return TimeUtil.toISO()
  },
  hash () {
    return chance.hash()
  }
}

const tag = () => {
  return {
    title: singleValues.word(),
    value: singleValues.sentence()
  }
}

const map = () => {
  return {
    title: singleValues.sentence()
  }
}

const annotation = () => {
  return {
    author: singleValues.name(),
    motivation: singleValues.word(),
    context: singleValues.word(),
    target: {
      type: singleValues.word(),
      id: singleValues.url()
    },
    body: {
      type: singleValues.word(),
      value: singleValues.sentence(),
      source: {
        id: singleValues.url(),
        type: singleValues.word()
      },
      purpose: singleValues.word(),
      selector: {
        type: singleValues.word(),
        value: singleValues.sentence(),
        conformsTo: singleValues.word()
      }
    }
  }
}

const document = () => {
  const tags = new Array(chance.integer({min: 2, max: 10})).fill(null)
  return {
    author: singleValues.name(),
    source: {
      id: singleValues.url(),
      type: 'Video'
    },
    file: {
      added: singleValues.isoDateTime(),
      created: singleValues.isoDateTime(),
      updated: singleValues.isoDateTime(),
      bytes: singleValues.bytesSize(),
      hash: singleValues.hash(),
      mime: 'video/mp4',
      ext: 'mp4'
    },
    media: {
      format: {
        tags: tags.map(() => tag()),
        bitRate: 1000,
        duration: 476,
        name: 'mov',
        longName: 'QuickTime',
        nbStreams: 1,
        nbPrograms: 0,
        size: singleValues.bytesSize(),
        startTime: 0
      },
      streams: [{
        codec: {
          name: singleValues.word(),
          longName: singleValues.sentence(),
          tag: singleValues.hash(),
          tagString: singleValues.word(),
          timeBase: '1/2000',
          type: 'video',
          profile: 'main'
        },
        dimensions: {
          width: 1280,
          height: 720,
          codedWidth: 1280,
          codedHeight: 720,
          displayAspectRatio: '16:9',
          sampleAspectRatio: '16:9',
          pixelFormat: 'yuv422'
        },
        duration: 476,
        durationTs: 576585,
        maxBitRate: 1000,
        nbFrames: 4000,
        type: 'video',
        level: 10,
        timeBase: '1/50',
        avgFrameRate: 25.0,
        rFrameRate: '1/1000',
        startTime: 0
      }]
    }
  }
}

module.exports = {
  annotation,
  document,
  map,
  tag,
  singleValues
}
