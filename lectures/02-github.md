# Lecture 2. - GitHub forks and pull requests

> Date 02/09/2014


Git client should be configured with your GitHub account information, so that
the commits are registered to your user account at GitHub, instead of the current
computer. Example commands below, please substitute with your proper values:

```sh
git config --global user.name "Juga Paazmaya"
git config --global user.email paazmaya@yahoo.com
git config --global github.user paazmaya
```

In case you wish to make the above configuration changes to a given repository,
omit the `--global` parameter.

## Tasks that are done during this lecture:

1. Create local repository, `git init`
    - Add files to it, `git add`
    - Commit those files with a meaningful message, `git commit -m`
2. Create an empty repository at GitHub
    - Add that as a remote for the repository made in task 1.
    - Push your local repository to GitHub, making it public, `git push`
3. Create new repository at GitHub, with predefined files
    - Clone the repository, `git clone`
    - Make changes and push them
4. Tag the latest commit of the repository made in 3. with [Semantic Versioning](http://semver.org/) number, `git tag`
    - Add release notes to it in GitHub, thus making it a release
5. Create a fork from a repository of the student sitting next to you, that was created in 3.
    - Make few changes to the `README.md` and push
    - Create a Pull Request
6. Make changes to your own repository, which the other has forked
7. Update the fork created in 5., `git fetch`, `git merge`

Now that you are familiar with Git, GitHub and forking, feel free to fork this repository and
create a pull request that would add your presentation subject and date #11.


## Links related to the lecture subject

* [GitHub Guides: Hello World](https://guides.github.com/activities/hello-world/ "Hello World")
* [GitHub Glossary](https://help.github.com/articles/github-glossary/ "GitHub Glossary")
* [GIT FAQ](http://gitfaq.org/ "Help without manpages")
* [Visualizing Git Concepts with D3](http://www.wei-wang.com/ExplainGitWithD3/ "Visualizing Git Concepts with D3")
* [Git for Everyone](http://anotheruiguy.gitbooks.io/gitforeveryone/ "Git for Everyone")
* [Git-it Challenges](http://jlord.us/git-it/)
* [github-cheat-sheet](https://github.com/tiimgreen/github-cheat-sheet "A list of cool features of Git and GitHub")
* [A Visual Git Reference](http://marklodato.github.io/visual-git-guide/index-en.html "A Visual Git Reference")
* [Using pull requests](https://help.github.com/articles/using-pull-requests "GitHub - Using pull requests")
* [Configuring a remote for a fork](https://help.github.com/articles/configuring-a-remote-for-a-fork "GitHub - Configuring a remote for a fork")
* [How to Write a Git Commit Message](http://chris.beams.io/posts/git-commit/ "How to Write a Git Commit Message")
* [Git and GitHub Workflows at the Utah JUG](https://speakerdeck.com/matthewmccullough/git-and-github-workflows-at-the-utah-jug "Git and GitHub Workflows at the Utah JUG")
* [Javascript BEST PRACTICES PART 2](http://www.thinkful.com/learn/javascript-best-practices-2 "Javascript BEST PRACTICES PART 2")
* [Repository is marked as the wrong language](https://help.github.com/articles/my-repository-is-marked-as-the-wrong-language/ "Repository is marked as the wrong language")


## Examples for the tasks

### 1. Local repository with a file and a commit

```sh
mkdir first-git-project # create directory
cd first-git-project # go to the directory
git init # initialise a local git repository
touch README.md # create empty file
git add README.md # add a file under version control
git commit -m "First file created" README.md # commit the file
```

### 2. Create empty repository at GitHub and push to it

After creating the empty repository via GitHub web page, add it as a remote and push to it.

```sh
git remote add origin git@github.com:paazmaya/modern-web-tools-with-node-js-book.git
git push -u origin master
```

Please note that the `-u` parameter is a short version of `--set-upstream` which is seen in the
documentation. It needs to be used only at the first time pushing, after setting the remote
repository URL.

### 3. Repository with predefined files

After creating the repository via GitHub web page, and selecting a predefined `Node`
specific `.gitignore` file, license and default `README`, clone it to your computer.

```sh
git clone git@github.com:paazmaya/modern-web-tools-with-node-js-book.git
cd modern-web-tools-with-node-js-book # go to the directory
nano README.md # open the file in an editor
git commit -m "Updated description" README.md # commit the changed file
git push # make the changes public
```

### 4. Tagging

```sh
git tag v0.1.0 -m "Time to make the first release with basic functionality"
git push --tags
```

Now in the release page at GitHub repository, the release needs to be created.

### 5. Forking

```sh
git clone git@github.com:paazmaya/modern-web-tools-with-node-js-book.git
cd modern-web-tools-with-node-js-book # go to the directory
nano README.md # open the file in an editor
git commit -m "Updated description" README.md # commit the changed file
git push # make the changes public
```

The rest of the task needs to be done in the GitHub page of the fork repository,
where exists buttons for `compare` and `pull request`.

### 7. Updating fork

Assuming that the current working directory is the fork and it has `master`
checked out:

```sh
git remote add upstream git@github.com:paazmaya/modern-web-tools-with-node-js-book.git
git fetch upstream master
git merge upstream/master
git push
```
