# First assignment

> Given in 16th Sep 2014, to be returned by 7th Oct 2014

Come up with an idea for a project that you can use in your daily/weekly life,
in order to shorten the time used for repetitive tasks.

It could be renaming large quantities of files, resizing or applying filters on images,
or something which you might do from time to time.

Once you have the idea, create a GitHub repository for it:

- with a distinctive name
- license for open source
- introduction and feature/release plan for Autumn 2014 in the `README.md`
- use Semantic Versioning

The project can start as a command line tool, but later on should be able to be used
as a Node.js module inside someone else's application.

Usually a command line tool accepts certain parameters and options, thus there
should be at least the following two:

- `-h` and `--help` - Help and usage output
- `-V` and `--version` - Version, license and copyright information

There should be a `package.json` file describing the properties of this project.
It should contain all the required fields as per [npm][] requirements. Also consider
the optional fields which will make it easier to use your project.

The amount of downloaded packages from npm are increasing every day and while the amount of packages
increases, the package owners should take care of including only the `files` which are
necessary in their packages. Make sure this is done in your project.

This assignment will be marked as complete when the above requirements have been filled, before the
dead line, which it when the next assignment is given (7th October 2014) and
all the relevant code is available at GitHub.

Please create a pull request for adding a link to your project in
[the assignment projects list](assignment-projects.md) before the dead line.

[npm]: https://www.npmjs.org/ "Node Packaged Modules"
