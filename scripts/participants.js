/**
 * Get a list of participants, as in anyone who has touched,
 * commented or even starred this repository.
 *
 * Before running this script, make sure that the
 * Github authentication token is available:
 * export GITHUB_TOKEN=...
 */

// https://github.com/mikedeboer/node-github
var github = require('github'),
  fs = require('fs');

var pkg = JSON.parse(fs.readFileSync('package.json'));

var gh = new github({
  version: '3.0.0',
  debug: true
});

console.log(pkg);
console.log('name: ' +pkg.name);

gh.authenticate({
  type: 'oauth',
  token: process.env.GITHUB_TOKEN
});

gh.issues.repoIssues({user: 'paazmaya', repo: pkg.name}, function (error, data) {
  console.dir(data);
});
