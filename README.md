[file-pumper](https://www.npmjs.com/package/node-file-pumper)

[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Installation

```sh
$ npm install -g node-file-pumper
```

```sh
$ yarn global add node-file-pumper
```

## Quick Start

Create 1mb file

```bash
$ pump --file=test.exe --size=1 --type=mb
```

## Command Line Options

        --version        output the version number
    -f, --file           file name to generate
    -s, --size           (int) file size
    -v, --type <mb|kb>   file size in kb or mb
    -h, --help           output usage information

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/node-file-pumper.svg
[npm-url]: https://npmjs.org/package/node-file-pumper
[downloads-image]: https://img.shields.io/npm/dm/node-file-pumper.svg
[downloads-url]: https://npmjs.org/package/node-file-pumper