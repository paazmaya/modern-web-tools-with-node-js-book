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
  debug: false
});

gh.authenticate({
  type: 'oauth',
  token: process.env.GITHUB_TOKEN
});

var options = {
  user: 'paazmaya',
  repo: pkg.name,
  state: 'all',
  per_page: 100
};

var names = [];


var fetchIssueComment = function () {
  var filename = 'issue-comments.json';
  gh.issues.repoComments(options, function (error, data) {
    console.log(data.length);

    fs.writeFileSync(filename, JSON.stringify(data, null, '  '));
  });
};

var fetchIssues = function () {
  var filename = 'issues.json';
  gh.issues.repoIssues(options, function (error, data) {
    console.log(data.length);

    fs.writeFileSync(filename, JSON.stringify(data, null, '  '));
  });
};

var fetchPullRequests = function () {
  var filename = 'pull-requests.json';
  gh.pullRequests.getAll(options, function (error, data) {
    console.log(data.length);

    fs.writeFileSync(filename, JSON.stringify(data, null, '  '));
  });
};

/**
 * Get list of unique usernames
 * @param {array} data
 */
var prUsers = function () {
  var filename = 'pull-requests.json';
  var data = JSON.parse(fs.readFileSync(filename));

  var list = {};
  data.forEach(function (item) {
    list[item.user.login] = item.user.html_url;
  });
  return Object.keys(list);
};


/**
 * Get list of unique usernames
 * @param {array} data
 */
var issueUsers = function () {
  var filename = 'issues.json';
  var data = JSON.parse(fs.readFileSync(filename));

  var list = {};
  data.forEach(function (item) {
    list[item.user.login] = item.user.html_url;
  });
  return Object.keys(list);
};

/**
 * Get list of unique usernames
 * @param {array} data
 */
var issueCommentUsers = function () {
  var filename = 'issue-comments.json';
  var data = JSON.parse(fs.readFileSync(filename));

  var list = {};
  data.forEach(function (item) {
    list[item.user.login] = item.user.html_url;
  });
  return Object.keys(list);
};


var mergeNames = function () {
  var names = [].concat(
    prUsers(),
    issueUsers(),
    issueCommentUsers()
  );

  return names.filter(function (item, index, list) {
    return list.lastIndexOf(item) > index;
  });
};

names = mergeNames();
console.log(names.length);
