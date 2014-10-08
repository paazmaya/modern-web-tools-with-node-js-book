/**
 * Get a list of assignment projects and
 * clones them to a specific directory, and also runs `npm i` 
 * in them.
 */

var fs = require('fs'),
  util = require('util'),
  exec = require('child_process').exec,
  filename = __dirname + '/../assignments/assignment-projects.md';



var markdown = fs.readFileSync(filename, 'utf8'),
  lines = markdown.split('\n'),
  commands = [],
  expr = /\[(.+?)\]\((http.+?) "(.+?)"\)/;

lines.forEach(function (line) {
  line = line.trim();
  if (line.indexOf('* [') === 0) {
    var matches = expr.exec(line);
    util.log('Name: ' + matches[1]);
    util.log('URL: ' + matches[2]);
    util.log('Title: ' + matches[3]);
    
    var cwd = './' + matches[1].replace(/\s/, '-');
    var fbFile = cwd + '/palaute.md';
    var feedback = '# ' + matches[1] + '\n\n' +
      '> ' + matches[3] + '\n\n' +
      '## package-json-validator\n\n'
    if (!fs.existsSync(cwd)) {
      fs.mkdirSync(cwd);
    }
    fs.writeFileSync(fbFile, feedback, 'utf8');
    
    var dir = '/' + matches[2].split('/').pop();
    var clone = 'git clone ' + matches[2] + '.git';
    
    // Reverse order since the list is iterated from end
    commands.push(['npm test --verbose >> ../npm-test.txt', cwd + dir]);
    commands.push(['pjv -w >> ../palaute.md', cwd + dir]);
    commands.push(['npm i --verbose > ../npm-install.txt', cwd + dir]);
    commands.push([clone, cwd]);
  }
});

function iterate() {
  if (commands.length > 0) {
    var command = commands.pop();
    util.log(command);
    var child = exec(command[0], {cwd: command[1]}, function (error, stdout, stderr) {
      if (error !== null) {
        util.log('exec error: ' + error);
      }
      util.log('stdout: ' + stdout);
      util.log('stderr: ' + stderr);
    });
    
    child.on('exit', function (code, signal) {
      util.log('exit.code: ' + code);
      util.log('exit.signal: ' + signal);
      iterate();
    });
  }
}

iterate();