const
  Chance = require('chance'),
  chance = new Chance()

const
  { utils } = require('../dist'),
  { TimeUtil } = utils

const singleValues = {
  bytesSize () {
    return chance.integer({
      min: Math.pow(10, 1),
      max: Math.pow(10, 10)
    })
  }
}

const tag = () => {
  return {
    title: chance.word({syllables:3}),
    value: chance.sentence({words:5})
  }
}

const document = () => {
  const tags = new Array(chance.integer({min: 2, max: 10})).fill(null)
  return {
    author: chance.name(),
    source: {
      id: chance.url(),
      type: 'Video'
    },
    file: {
      added: TimeUtil.toISO(),
      created: TimeUtil.toISO(),
      updated: TimeUtil.toISO(),
      bytes: singleValues.bytesSize(),
      hash: chance.hash(),
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
          name: chance.word({syllables:2}),
          longName: chance.sentence({words:4}),
          tag: chance.hash(),
          tagString: chance.word({syllables:3}),
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
  document,
  tag,
  singleValues
}
