/**
 * Get the base directory where project assignments are,
 * and try to use them programmatically.
 */
'use strict';

var fs = require('fs'),
  path = require('path'),
  util = require('util');

if (process.argv.length !== 3) {
  util.error('Project checkout base directory must be defined');
  process.exit();
}


var getDirs = function (baseDir) {
  return fs.readdirSync(baseDir).filter(function (filepath) {
    var stat = fs.statSync(baseDir + '/' + filepath);
    return stat && stat.isDirectory();
  });
};

var readPackages = function (users, baseDir) {

  var packages = {};
  users.forEach(function (user) {
    var list = getDirs(baseDir + '/' + user);
    list.forEach(function (item) {
      var meta = user + '/' + item + '/package.json';
      if (fs.existsSync(meta)) {
        var json = fs.readFileSync(meta, 'utf8');
        var data = JSON.parse(json);
        packages[data.name] = baseDir + '/' + user + '/' + item;
      }
    });
  });
  return packages;
};

var requirePackages = function (packages) {
  Object.keys(packages).forEach(function (key) {
    console.log();
    var index = packages[key];
    console.log(key + ' - ' + index);

    try {
      var ins = require(index);
      console.log(util.inspect(ins));
    }
    catch (error) {
      console.log(key + ' failed');
      console.log(error);
    }
    console.log();
  });
};

var baseDir = path.resolve(String(process.argv.slice(2)));
util.log(baseDir);

var users = getDirs(baseDir);
var packages = readPackages(users, baseDir);

console.log(util.inspect(packages));

requirePackages(packages);

