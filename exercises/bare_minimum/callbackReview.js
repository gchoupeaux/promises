/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, function(err, data) {
    if (err) {
      callback(err);
    } else {
      var str = '';
      str += data;
      lines = str.split('\n');
      callback(err, lines[0]);
    }
  }); 
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {

  request.get(url, function(err, response) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, response.statusCode);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};


// fs.readFile(__dirname + '/README.md', 'utf8', function (err, content) {
//   console.log('Example from callbackReview.js')
//   if (err) {
//     console.log('fs.readFile failed :(\n', err)
//   } else {
//     console.log('fs.readFile successfully completed :)\n', content)
//   }
// });
