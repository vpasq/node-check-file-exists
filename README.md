## check-file-exists

* Checks if file exists.
* Returns true or false
* Is not depreciated

## Install

```
npm install check-file-exists --save
```

## Usage

```
var checkFileExists = require('check-file-exists');

var fileName = 'myFile.js';

checkFileExists(fileName, function(err, isFile) {

  console.log(isFile); // true or false

});
```
