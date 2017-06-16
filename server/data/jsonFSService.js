const fs = require('fs');

let getArray = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, file) => {
            if (err)
                reject(err);
            else {
                resolve(JSON.parse(file));
            }
        })
    })
}

let writeArrayToFile = (filePath, arr) => {
    return new Promise((resolve, reject) => {
        let arrtoSave = JSON.stringify(arr);
        fs.writeFile(filePath, arrtoSave, (err, file) => {
            if (err)
                reject(err);
            else {
                resolve();
            }
        })
    })
}
module.exports = {
    getArray: getArray,
    writeArrayToFile: writeArrayToFile
}