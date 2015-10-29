/**
 * Get a list of assignment projects and
 * clones them to a specific directory, and also runs `npm i`
 * in them.
 *
 * npm i -g package-json-validator
 */

const fs = require('fs'),
  path = require('path'),
  util = require('util'),
  exec = require('child_process').exec,
  git = require('nodegit'),
  filename = __dirname + '/../assignments/assignment-projects.md',
  projectDir = path.normalize(__dirname + '/../../../modern-nodejs-assignment-projects/');

var markdown = fs.readFileSync(filename, 'utf8'),
  lines = markdown.split('\n'),
  masterTime = '2014-10-29 09:00:00',
  commands = [],
  expr = /\[(.+?)\]\((http.+?) "(.+?)"\)/,
  projects = []; // directories where projects have been checked out


if (!fs.existsSync(projectDir)) {
  fs.mkdirSync(projectDir);
}

function iterateLines(line) {
  line = line.trim();
  if (line.indexOf('* [') === 0) {
    var matches = expr.exec(line);
    util.log('Name: ' + matches[1]);
    util.log('URL: ' + matches[2]);
    util.log('Title: ' + matches[3]);

    var cwd = projectDir + '/' + matches[1].replace(/\s/, '-');
    var fbFile = cwd + '/palaute.md';
    var feedback = '# ' + matches[1] + '\n\n' +
      '> ' + matches[3] + '\n\n' +
      '## package-json-validator\n\n';
    if (!fs.existsSync(cwd)) {
      fs.mkdirSync(cwd);
    }
    fs.writeFileSync(fbFile, feedback, 'utf8');

    var dir = '/' + matches[2].split('/').pop();
    projects.push(cwd + dir);

    var clone = 'git clone ' + matches[2] + '.git';
    var checkout = 'git checkout "master@{' + masterTime + '}"';

    // Reverse order since the list is iterated from end
    commands.push(['npm test --verbose > ../npm-test.txt', cwd + dir]);
    commands.push(['pjv -w >> ../palaute.md', cwd + dir]);
    commands.push(['npm i --verbose > ../npm-install.txt', cwd + dir]);
    commands.push(['git show-ref --tags >> ../palaute.md', cwd + dir]);
    commands.push([checkout, cwd + dir]);
    commands.push([clone, cwd]);
  }
}

function iterateCommands(done) {
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

    child.on('exit', function (code) {
      util.log('exit.code: ' + code);

      // Give a breathing room for the PC
      setTimeout(function () {
        iterateCommands(done);
      }, 50);
    });
  }
  else {
    // all done
    if (typeof done === 'function') {
      done();
    }
  }
}

function checkFilesProperty(dir) {
  util.log('Checking files for ' + dir);
  var data = fs.readFileSync(dir + '/package.json', 'utf8');
  var pkg = JSON.parse(data);
  var feedbackFile = dir + '/../palaute.md';
  var feedback = '';

  console.log(util.inspect(pkg));

  feedback += 'Files property ';
  if (typeof pkg.files === 'object' && pkg.files instanceof Array) {
    feedback += 'found.'
  }
  else {
    feedback += 'not found.';
  }
  feedback += '\n\n';

  var index = '';
  feedback += 'Main property ';
  if (typeof pkg.main === 'string') {
    feedback += 'found.';
    index = 'node ' + dir + '/' + pkg.main + ' ';
  }
  else {
    feedback += 'not found.';
  }
  feedback += '\n\n';

  if (index !== '') {
    var list = '-h --help -V --version'.split(' ');
    // run: index -h
    list.forEach(function (key) {
      commands.push([index + key + ' >> ../palaute.md', dir]);
    });
  }

  fs.appendFileSync(feedbackFile, feedback, 'utf8');
}


lines.forEach(iterateLines);
iterateCommands(function () {
  projects.forEach(checkFilesProperty);
  iterateCommands();
});


