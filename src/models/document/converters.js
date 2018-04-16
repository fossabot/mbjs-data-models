import path from 'path'

import Assert from '../../utils/assert'
import ObjectUtil from '../../utils/object'
import TimeUtil from '../../utils/time'

const fromIngestedMediaFile = function (file, baseURI = 'http://127.0.0.1') {
  Assert.isType(file, 'object', 'file object missing')
  Assert.ok(file.hash && file.stats && file.ffprobe, 'invalid arguments')

  const
    { hash, stats, ffprobe } = file.meta,
    { format } = ffprobe,
    mediaStreams = ffprobe.streams || [],
    uuid = ObjectUtil.uuid5(hash),
    uri = `${baseURI}/${uuid}`

  const payload = {
    uuid,
    source: {
      id: uri,
      type: 'Video'
    },
    file: {
      hash,
      added: TimeUtil.toISO(),
      created: TimeUtil.toISO(stats.birthtimeMs),
      updated: TimeUtil.toISO(stats.mtimeMs),
      bytes: stats.size,
      mime: file.source.type,
      ext: (path.extname(file.filename) || '.').substr(1)
    },
    media: {
      format: {
        type: format.type,
        tags: format.tags,
        bitRate: format.bit_rate,
        duration: format.duration,
        name: format.name,
        longName: format.long_name,
        nbStreams: format.nb_streams,
        nbPrograms: format.nb_programs,
        size: format.size,
        startTime: format.start_time
      },
      streams: mediaStreams.map(stream => {
        return {
          codec: {
            name: stream.codec_name,
            longName: stream.codec_long_name,
            tag: stream.codec_tag,
            tagString: stream.codec_tag_string,
            timeBase: stream.codec_time_base,
            type: stream.codec_type,
            profile: stream.profile
          },
          dimensions: {
            width: stream.width,
            height: stream.height,
            codedWidth: stream.coded_width,
            codedHeight: stream.coded_height,
            displayAspectRatio: stream.display_aspect_ratio,
            sampleAspectRatio: stream.sample_aspect_ratio,
            pixelFormat: stream.pix_fmt
          },
          duration: stream.duration,
          durationTs: stream.duration_ts,
          maxBitRate: stream.max_bit_rate,
          nbFrames: stream.nb_frames,
          level: stream.level,
          timeBase: stream.time_base,
          avgFrameRate: stream.avg_frame_rate,
          rFrameRate: stream.r_frame_rate,
          startTime: stream.start_time
        }
      })
    }
  }

  /** Check if we are running as a schema constructor */
  if (this && typeof this.populate === 'function') this.populate(payload)
  /** If not, return the payload object */
  else return payload
}

export {
  fromIngestedMediaFile
}
