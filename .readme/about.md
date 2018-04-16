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

### Document

Used to store metadata about file-based
resources (e.g. audio, video, textfiles, etc.).

```javascript
const
  { Document } = models,
  doc = new Document({
    /* ... check the tests for the exact schema ... */
  })
```

[Check out this file](https://github.com/motionbank-js/motionbank-data-models/blob/master/.readme/document.md)
for more info on Documents.

## Develop :fire:

Watch your changes while working with `npm run watch`.
And don't forget to always `npm run lint` and `npm test`
before you commit.

## Build :dizzy:

Make a clean and fresh production build with `npm run dist`, and get ready to :bomb:.
