var fs = require("fs");

module.exports = function checkFileExists(file, callback) {

  fs.stat(file, function(err, stats) {

    if (err) {

      if (err.code === 'ENOENT') {

        //console.log("No such file: " + file);
        return callback(null, false);

      }

      callback(err);

    }

    //console.log("File exists: " + file);
    return callback(null, stats.isFile());

  });

};