# Fourth assignment

> Given in 18th Nov 2014, to be returned by 9th Dec 2014

Extend your existing main project which was originally started in [the first assignment](1-command-line.md),
continued in [the second](2-module.md) and [the third](3-code-coverage.md) assignments.

Now that the project can be executed via command line and as a part of another application, it should be able to be executed via task runner.

A successful completion of this assignment is done when the following points can be evaluated as completed:

* Choose a task runner, for example gulp or Grunt
* Create a new repository, named after the task runner and your initial main project, for example `gulp-image-thumbnailer`, in case the main project was called `image-thumbnailer`
* Follow the best practises for the given task runner and its plugin guidelines when initialising the plugin, such as how to configure files
* Add your original project as a git url dependency, so it can be used
* The task runner project should contain a working example of how the plugin is used, for example in a `gulpfile.js` and via `devDependencies`
* By running `[task runner name]` in the project repository, after `npm i` should result success
* The initial project should accomplish the behaviour it was initially planned.

Please note that due to the requirements, the project done in previous assignments, should be in a working state and thus usable for the task runner.

Elevate the release status of the main project to `1.0.0`, by making a tag and use that version tree for the task runner project.
Once the task runner is to be considered ready, it should also be tagged as `1.0.0`.

