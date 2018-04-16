'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fromIngestedMediaFile = undefined;

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _assert = require('../../utils/assert');

var _assert2 = _interopRequireDefault(_assert);

var _object = require('../../utils/object');

var _object2 = _interopRequireDefault(_object);

var _time = require('../../utils/time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const fromIngestedMediaFile = function (file, baseURI = 'http://127.0.0.1') {
  _assert2.default.isType(file, 'object', 'file object missing');
  _assert2.default.ok(file.hash && file.stats && file.ffprobe, 'invalid arguments');

  const { hash, stats, ffprobe } = file.meta,
        { format } = ffprobe,
        mediaStreams = ffprobe.streams || [],
        uuid = _object2.default.uuid5(hash),
        uri = `${baseURI}/${uuid}`;

  const payload = {
    uuid,
    source: {
      id: uri,
      type: 'Video'
    },
    file: {
      hash,
      added: _time2.default.toISO(),
      created: _time2.default.toISO(stats.birthtimeMs),
      updated: _time2.default.toISO(stats.mtimeMs),
      bytes: stats.size,
      mime: file.source.type,
      ext: (_path2.default.extname(file.filename) || '.').substr(1)
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
        };
      })
    }

    /** Check if we are running as a schema constructor */
  };if (this && typeof this.populate === 'function') this.populate(payload);
  /** If not, return the payload object */
  else return payload;
};

exports.fromIngestedMediaFile = fromIngestedMediaFile;