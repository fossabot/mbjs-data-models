# Document

Used to store metadata about file-based
resources (e.g. audio, video, textfiles, etc.).

* The generated document UUID is a
[version 5](https://en.wikipedia.org/wiki/Universally_unique_identifier#Versions_3_and_5_(namespace_name-based))
and uses the property `doc.file.hash` as a basis for this. Exact duplicates should not be imported,
if the DB checks for existing UUIDs.

## Methods

### Constructor

Create a new, empty Document with an empty constructor.

```javascript
const doc = new Document()
```

Otherwise pass the properties, [as listed below](https://github.com/motionbank-js/motionbank-data-models#schema).

### Convenience

#### toJSON

Outputs the model as JSON text (with optional pretty printing).

```javascript
const
  doc = new Document(),
  // compact JSON
  compact = doc.serializeJSON(),
  // pretty JSON
  pretty = doc.serializeJSON({ pretty: true })
```

#### fromJSON

Resurrects a prior instance stored as JSON.

```javascript
const
  textdata = await fs.readFileAsync('/my/data/document.json'),
  doc = Document.fromJSON(textdata)
```

## Schema

Here is a random example using all currently available properties.

```javascript
const doc = new Document({
  uuid: 'a27693d7-020b-5dec-851d-a9c7c6f30ef8',
  author: 'Ryan Castro',
  source: {
    id: 'http://ahi.sn/laokdug',
    type: 'Video'
  },
  file: {
    added: '2018-04-17T01:12:05.190+02:00',
    created: '2018-04-17T01:12:05.191+02:00',
    updated: '2018-04-17T01:12:05.191+02:00',
    bytes: 3065500099,
    hash: 'b9ca06bdb57d0ad3d3a099c99593e1e20b8fbd98',
    mime: 'video/mp4',
    ext: 'mp4'
  },
  media: {
    streams: [
      {
        codec: {
          name: 'zewubu',
          longName: 'Rekun ded gizapev gejtulcu.',
          tag: '318332bff33d90e51863467d2e474f09c329e391',
          tagString: 'ajunasik',
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
        avgFrameRate: 25,
        rFrameRate: '1/1000',
        startTime: 0
      }
    ],
    format: {
      tags: [
        {
          title: 'gaszeuco',
          value: 'Kigvis maiwu ripde ad koh.'
        },
        {
          title: 'jectuote',
          value: 'Vitu wehzucih udbu oha pugetoni.'
        }
      ],
      bitRate: 1000,
      duration: 476,
      name: 'mov',
      longName: 'QuickTime',
      nbStreams: 1,
      nbPrograms: 0,
      size: 6478596780,
      startTime: 0
    }
  },
  added: '2018-04-17T01:12:05.196+02:00',
  created: '2018-04-17T01:12:05.196+02:00',
  updated: '2018-04-17T01:20:50.234+02:00'
})
```
