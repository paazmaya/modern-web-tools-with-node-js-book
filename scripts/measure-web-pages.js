// Run with PhantomJS 2

var page = require('webpage').create();

page.onResourceReceived = function(response) {
  console.log('Response #' + response.id + ', stage "' + response.stage + '", bodySize: ' + response.bodySize);
};

page.open('http://www.google.com/', function(status) {
  console.log('Status: ' + status);
  // Do other things here...

  phantom.exit();
});
