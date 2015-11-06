# Lecture 12. - More about unit testing and code coverage

> Date 11/11/2014

Continuing with unit tests and code coverage as they are crucial parts for making any given project trustworthy and  prone against regressions.

## Tasks for the day

1.  Find a project that some what small and might even have initial unit test done with `nodeunit`, but other unit testing frameworks are fine too
  - It could be the one you used in [task 2 of an earlier lecture](08-continuous-integration.md)
  - Extend those unit test or add them, to cover more methods of that module
2. Add code coverage check to the project used in first task
  - `script` property in `package.json` should contain the command which can be run with `npm run-script coverage`
3. Push coverage results of the previous tasks to coveralls.io
  - Either by yourself from your own clone
  - Or write short instructions in an issue of how to do it
4. Optional: Do the optional (third) task for Code Coverage from [an earlier lecture](10-front-end-dependencies.md)
