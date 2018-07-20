const fs = require('fs');

module.exports = (name = "test.js", size = 1, type = "mb", cb) => {
    let fsize = parseInt(size);
    let bsize = 0;
    let fopen = fs.openSync(name, 'w');
    switch (type) {
        case 'kb':
            bsize = fsize * 10024;
            break;
        case 'mb':
            bsize = fsize * 1048576;
            break;
        default:
            return cb("Error: Use mb or kb as type parameter");
            break;
    }

    let bufferSize = 256;
    for (i = 0; i < bsize / bufferSize; i++) {
        fs.writeSync(fopen, '0'.repeat(bufferSize));
    }

    fs.closeSync(fopen);
    return cb(null, name);
}