/**
 * Get a list of participants, as in anyone who has touched,
 * commented or even starred this repository.
 *
 * Before running this script, make sure that the
 * GitHub authentication token is available:
 * export GITHUB_TOKEN=...
 */

// https://github.com/mikedeboer/node-github
var github = require('github'),
  objectMerge = require('object-merge'),
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
 * Get list of unique usernames with link to profile
 * @param {string} filename
 * @returns {object} data
 */
var getNamelist = function (filename) {
  if (typeof filename !== 'string' || !fs.existsSync(filename)) {
    return {};
  }
  var data = JSON.parse(fs.readFileSync(filename));

  var list = {};
  data.forEach(function (item) {
    list[item.user.login] = item.user.html_url;
  });
  return list;
};

var getAllNames = function () {
  var lists = objectMerge(
    getNamelist('pull-requests.json'),
    getNamelist('issues.json'),
    getNamelist('issue-comments.json')
  );
  return lists;
};

var generateMarkdown = function () {
  var md = '';
  var names = getAllNames();
  Object.keys(names).sort().forEach(function (name) {
    var url = names[name];
    md += '[' + name + ']: ' + url + '\n';
  });
  return md;
};

var md = generateMarkdown();
console.log(md);

