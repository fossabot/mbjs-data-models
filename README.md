[comment]: # (ACHTUNG! This is an autogenerated file and will be automatically overwritten)
[comment]: # (To edit its contents please refer to the project dir '.readme')

# motionbank-data-models
> Data model library for Motion Bank

[![NPM version](https://badge.fury.io/js/motionbank-data-models.svg)](https://npmjs.org/package/motionbank-data-models)
[![Build status](https://secure.travis-ci.org/motionbank-js/motionbank-data-models.svg)](https://travis-ci.org/motionbank-js/motionbank-data-models)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/caea2d3c263b447f83818c6ed4ca3609)](https://www.codacy.com/app/motionbank-js/motionbank-data-models)
[![Maintainability](https://api.codeclimate.com/v1/badges/844037436b98a1e19e71/maintainability)](https://codeclimate.com/github/motionbank-js/motionbank-data-models)
[![Dependency Status](https://tidelift.com/badges/github/motionbank-js/motionbank-data-models)](https://tidelift.com/repo/github/motionbank-js/motionbank-data-models)


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


## License

:copyright: 2018 Mainz University of Applied Sciences (Motion Bank Project) – 
Released under the [MIT](https://github.com/motionbank-js/motionbank-data-models/blob/master/LICENSE) license

