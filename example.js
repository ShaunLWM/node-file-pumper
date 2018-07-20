let pump = require('./index');
pump("./test.exe", 5, "mb", (error) => {
    if (error) {
        return console.log(error);
    }

    console.log("done");
})