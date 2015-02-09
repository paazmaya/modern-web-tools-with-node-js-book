# Second assignment

> Given in 7th Oct 2014, to be returned by 28th Oct 2014

Extend your existing project which was created in [the first assignment](2014-09-16.md).

Given that your application is triggered via command line as required in the first assignment,
now separate the functionality so that it can be used programmatically.

The entry point of the application, as described in `package.json` with the `main` property,
this script will be able to use the separate custom modules by requiring them.
In a same way these custom modules are used for unit tests.

This assignment has the following tasks:

- Before starting, tag the project with a release `v0.1.0` which should fulfill the requirements of the first assignment
- Add a task runner, such as `Grunt` or `gulp` to your project for linting and for running unit tests
- Add unit testing, by using a suitable library of your choosing
- Both linting and unit tests should be able to be run with a command `npm test`
- These tests are executed automatically on every push by a continuous integration service, such as Travis CI or Wercker
- The `README.md` should display a badge showing the current state of those tests
- Start planning how to create a task runner plugin of your project, so other could use it via task runner,
  and write about in `README.md` and also include it in a release plan
- Once the assignment is ready to be returned, tag is as a new release `v0.2.0`

Example projects that have both command line and programmatic usage available.
Please note that much more exists and you are free to take example from anywhere else.
The following two have pretty much the similar structure:

- [CSScomb](https://github.com/csscomb/csscomb.js)
- [ESLint](https://github.com/eslint/eslint)
- [Sakugawa](https://github.com/paazmaya/sakugawa)
