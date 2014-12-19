# Lecture 8. - Automation and continuous integration

> Date 14/10/2014

Automated testing and building services which support Node.js, such as [Codeship][],
[Drone.io][], [Travis CI][], and [Wercker][], can be linked to
a GitHub repository with a hook, from where they fetch the latest
changes on every `git push` and publish the test/build results.


## Tasks for the day

1. Make sure your `hello-node-js` has linting and unit tests, that can be executed with `npm test`
  - Add one of the services mentioned above so that `npm test` is executed every time you push code to the repository
  - Add a badge on the top part of the `README.md` file which shows the current state
2. Find a npm module which has unit tests but is not using automated testing service
  - Create an issue for taking such service in use
  - The issue should include instructions of how to take such a service in use
  - The issue should describe how to add a badge that shows the current state
  - Link the issue in the list below

## Issues for adding automated testing

- [jukra @ html-compress](https://github.com/yuanfang829/html-compress/issues/1 "jukra @ html-compress")
- [tariel, simple-oauth2](https://github.com/andreareginato/simple-oauth2/pull/25 "tariel, simple-oauth2")
- [tuunanen @ object-merge](https://github.com/matthewkastor/object-merge/pull/4)
- [HeikkiAlanen @ nomnom](https://github.com/harthur/nomnom/issues/50)
- [Oona @ node-trello-slack](https://github.com/atuttle/node-trello-slack/pull/2)
- [merilainen-metropolia @ json-segment](https://github.com/chilijung/json-segment/issues/4)
- [markoham @ node-verifier](https://github.com/aliaksandr-pasynkau/node-verifier/issues/1)

## Links related to the lecture subject

[Writing Beautiful JavaScript Tests](https://speakerdeck.com/kimjoar/writing-beautiful-javascript-tests "Writing Beautiful JavaScript Tests")


[Codeship]: https://codeship.io/documentation/languages/nodejs/ "We use nvm to manage different node versions"
[drone.io]: http://docs.drone.io/node.html "Building Node.js Projects"
[travis ci]: http://docs.travis-ci.com/user/languages/javascript-with-nodejs/ "Building a Node.js project"
[wercker]: http://devcenter.wercker.com/articles/languages/nodejs.html "Wercker supports node.js"
