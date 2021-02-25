var i = 0,
    fs = require('fs'),
    newman = require('newman'); // ensure that you have run "npm i newman" in the same directory as this file



for (var i = 0; i < 9; i++) {
    newman.run({
        collection: ('https://www.getpostman.com/collections/b7d5efde826f8e315e0f'),
        reporters: 'cli'
      }, function (err, summary) {
      }).on('request', function (err, execution) { 
         if (err) { return console.error(err); }
         fs.writeFile(`data-response-${i++}.json`, execution.response.stream, function (error) {
            if (error) { console.error(error); }
         });
      });
    }
