# Lecture 7. - Unit testing, Jasmine, PhantomJS

> Date 07/10/2014

[Second assignment is given.](../assignments/2-module.md)


## Unit testing in general

Unit testing, as the name suggests, is a way of testing units or portions of code.

## Popular unit testing frameworks

* [Jasmine](http://jasmine.github.io/ "Behavior-Driven JavaScript")
* [Mocha](http://visionmedia.github.io/mocha/ "Mocha is a feature-rich JavaScript test framework running on node.js and the browser, making asynchronous testing simple and fun")
* [Qunit](http://qunitjs.com/ "QUnit is a powerful, easy-to-use JavaScript unit testing framework")
* [nodeunit](https://github.com/caolan/nodeunit "Easy unit testing in node.js and the browser, based on the assert module")


## PhantomJS, a headless WebKit browser

In an environment where there is no availability of screens, such as a server,
continuous integration server specifically, is a need for tools which do not require the screen.
One such tool specifically made for browser based testing, is [PhantomJS][].

However the latest release of PhantomJS, `v1.9.8` from October 2014, is based on a [WebKit][] from 2011.
The next major release (`v2.0.0`) should be out soon and it will be based on a much newer [WebKit][], via [Qt][] `v5.3`
which is used underneath.


## Tasks for the day

1. Add unit tests to your `hello-node-js` repository by using `nodeunit`
  - Unit test spec files are placed in a directory called `tests`
  - Each unit test file named as its targeting source file and `_spec.js` suffix
2. Add a task runner task for running the unit tests
  - Make sure that tests can be run after a fresh clone of the repository,
    followed by `npm i` and `[task runner] test`, for example `grunt test`

## Links related to the lecture subject

* [Testing with Jasmine](http://blog.codeship.io/2013/07/30/testing-tuesday-16-javascript-testing-with-jasmine.html "javascript-testing-with-jasmine")
* [PhantomJS quick how to](http://www.sitepoint.com/headless-webkit-and-phantomjs/ "An example how to use PhantomJS")
* [Video: PhantomJS and Jasmine how to](https://www.youtube.com/watch?v=p5w6oNFT4ks#t=1550 "Jasmine and PhantomJS how to")
* [Testing Private Functions in JavaScript Modules](http://engineering.clever.com/2014/07/29/testing-private-functions-in-javascript-modules/ "Testing Private Functions in JavaScript Modules")

[PhantomJS]: http://phantomjs.org/ "PhantomJS is a headless WebKit scriptable with a JavaScript API"
[WebKit]: http://www.webkit.org/ "WebKit is an open source web browser engine"
[Qt]: http://qt-project.org/ "Qt is a cross-platform application and UI framework for developers using C++ or QML, a CSS & JavaScript like language"


## Examples for the tasks

### 1. Unit tests with nodeunit

Install dependencies first:

```sh
npm i nodeunit --save-dev
```

Create directory for tests and initial empty test file:

```sh
mkdir tests
touch tests/last-mod_spec.js
```

The test can be written as the following JavaScript, assuming that the
`LICENSE` file exists in the repository and its modification date is in October 2014.

```js
// last-mod_spec.js

var lastMod = require('../last-mod');

exports.lastMod = function(test){
  test.expect(4);

	// Non existing file
	var non = lastMod('not-to-be-found.js');
	test.strictEqual(non, false, 'False returned when file not existing');

	// Existing file
	var yes = lastMod('LICENSE'); // Date object
	test.equal(yes instanceof Date, true, 'Date object returned when file exists');

	// Correct year and month
	test.equal(yes.getFullYear(), 2014, 'Year is matching');
	test.equal(yes.getMonth(), 9, 'Month is October');

  test.done();
};
```

Run the tests with:

```sh
node_modules/.bin/nodeunit last-mod_spec.js --reporter verbose
```

### 2. Task runner for the unit tests

```sh
npm i grunt-contrib-nodeunit --save-dev
```

