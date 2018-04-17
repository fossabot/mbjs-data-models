## Install :floppy_disk:

First you install...

```shell
npm i --save motionbank-data-models
```

... then you include ...

```javascript
const models = require('motionbank-data-models')
```

... then you get the :neckbeard:.

## Documentation :pineapple:

What you might want to know about the Data Models...
is most likely not yet here.

### Annotation :notebook:
    
Aims to conform to the [Web Annotation Model](https://www.w3.org/TR/annotation-model/) (one sweet, velvet morning).

* The generated document UUID is a random 
[version 4](https://en.wikipedia.org/wiki/Universally_unique_identifier#Version_4_(random))

```javascript
const
  { Annotation } = models,
  anno = new Annotation({
    // see below for schema ...
  })
```

#### Schema

Here is a random example using all currently available properties.

```javascript
const anno = new Annotation({
  // coming soon ...
})
```

### Document :file_folder:

Used to store metadata about file-based
resources (e.g. audio, video, textfiles, etc.).

* The generated document UUID is a
[version 5](https://en.wikipedia.org/wiki/Universally_unique_identifier#Versions_3_and_5_(namespace_name-based))
and uses the property `doc.file.hash` as a basis for this. Exact duplicates should not be imported,
if the DB checks for existing UUIDs.

```javascript
const
  { Document } = models,
  doc = new Document({
    // see below for schema ...
  })
```

#### Schema

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


### Convenience

#### toJSON

Serialises the current instance as JSON text data
(with optional pretty printing :lipstick:, whee).

```javascript
const
  anno = new Annotation(),
  // compact JSON
  compact = anno.serializeJSON(),
  // pretty JSON
  pretty = anno.serializeJSON({ pretty: true })
```

#### fromJSON

Resurrects a prior :skull: instance from strored JSON text data.

```javascript
const
  textdata = await fs.readFileAsync('/data/annotation.json'),
  anno = Annotation.fromJSON(textdata)
```

## Develop :fire:

Watch your changes while working with `npm run watch`.
And don't forget to always `npm run lint` and `npm test`
before you commit.

## Build :dizzy:

Make a clean and fresh production build with `npm run dist`, and get ready to :bomb:.
