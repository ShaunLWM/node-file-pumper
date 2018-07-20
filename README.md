[![NPM Version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]

## Installation

```sh
$ npm install node-file-pumper
```

```sh
$ yarn add node-file-pumper
```

## Quick Start

Create a 5mb file in current directory

```bash
let pump = require('node-file-pumper');
pump("./test.exe", 5, "mb", (error) => {
    if (error) {
        return console.log(error);
    }

    console.log("done");
})
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/node-file-pumper.svg
[npm-url]: https://npmjs.org/package/node-file-pumper
[downloads-image]: https://img.shields.io/npm/dm/node-file-pumper.svg
[downloads-url]: https://npmjs.org/package/node-file-pumper