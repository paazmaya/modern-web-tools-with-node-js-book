# Lecture 10. - Front end third party dependencies and Code coverage

> Date 28/10/2014

[Third assignment is given.](../assignments/3-code-coverage.md)

## Front end dependencies

While Node.js is a back end JavaScript environment, the dependency management touched in the earlier
lecture is equally important for front end dependencies. There dependency managers such as
[Bower][] and [Component][], which are very similar to [npm][]. Many packages that are available
in one of them, is also available in the two other.

### Tasks for front end dependencies

1. In the project made in the [web server lecture](05-express.md "HTTP, Connect, Express")
  - Add a library for doing DOM selection and event handler binding by using a dependency manager
  - Use that library for putting the cursor in the first field when the user enter the feedback page
2. Write in `hello-node-js` repository `README.md` file when would you use a front end package manager
   and when you would add the 3rd party library directly under the project version control

## Code coverage of unit tests

Unit testing is usually providing stability to a project, but without knowing how much
code the tests are covering, it is difficult to trust the given stability.
Code coverage is a method used to describe how much of the code executed is truly tested.

One popular code coverage tool is [istanbul][], which can be installed with a command:

```sh
npm i -g istanbul
```

Coverage report can be generated with a command:

```sh
istanbul cover node_modules/.bin/nodeunit -- .
```

The above command runs `nodeunit .` throught `istanbul` which instruments the source and evaluates the
unit tests, resulting a folder called `coverage` that contains the report in several different formats.

The output should be something similar to:

```
=====================================================================
Writing coverage object [hello-node-js/coverage/coverage.json]
Writing coverage reports at [hello-node-js/coverage]
=====================================================================

=========================== Coverage summary ========================
Statements   : 83.08% ( 54/65 )
Branches     : 66.67% ( 8/12 )
Functions    : 85.71% ( 6/7 )
Lines        : 83.08% ( 54/65 )
=====================================================================
```

A full working example with `mocha` unit tests and `istanbul` code coverage can be
seen at [the `analyze-css` module][analyze-css].


### Tasks for code coverage

1. Make sure that the unit tests and the task runner made in the
   [unit testing lecture](07-unit-testing.md "Unit testing, Jasmine, PhantomJS") are working
   - Add code coverage check via command line for the project
   - Configure the command so it can be excuted with `npm run-script coverage`
   - Use coverage report to find out areas where tests are not touching
   - Add more unit tests to achieve at least 95% coverage
2. Push the code coverage report made in the 1st task to GitHub Pages ('gh-pages')
    branch, so it becomes available at `username.github.io/project-name`
3. Optional: Find a npm module that has unit tests and is running them via task runner
   - Add code coverage command to `package.json`, which can be executed with `npm run-script coverage`
   - Create pull request
   - Link the pull request to the list below


### Code coverage task runner pull requests

* [HeikkiAlanen @ filesize.js](https://github.com/avoidwork/filesize.js/pull/57)


## Links related to the lecture subject

* [JavaScript Code Coverage with Istanbul](http://ariya.ofilabs.com/2012/12/javascript-code-coverage-with-istanbul.html "JavaScript Code Coverage with Istanbul")
* [GitHub Pages](https://pages.github.com/ "Websites for you and your projects")

[Bower]: http://bower.io/ "A package manager for the web"
[Component]: https://github.com/componentjs/component "Component is a vertically integrated frontend solution, handling everything from package management to the build process, handling everything including HTML, JS, CSS, images, and fonts"
[istanbul]: http://gotwarlost.github.io/istanbul/ "istanbul: A Javascript code coverage tool written in JS"
[npm]: http://npmjs.org "Node Packaged Modules"
[analyze-css]: https://github.com/macbre/analyze-css "CSS selectors complexity and performance analyzer"
