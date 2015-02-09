# Lecture 15. - Heroku and other free hosting services

> Date 02/12/2014


## Task for today

Create a blog that is based on Express and publish it to Heroku/OpenShift or similar.

* Create a free account in the given hosting provider and setup SSH keys
* Create a repository at GitHub that is used for the development of the blog
* Publish the blog by pushing it to the provider, such as `git push heroku master`
* Profit...?

While doing the task, find out whether to use existing blogging tool or create your own with Express.

## Links related to the lecture subject

* [Node.js High Availability at Box](http://tech.blog.box.com/2014/06/node-js-high-availability-at-box/ "Node.js High Availability at Box")
* [Video: What does an Open Source Microsoft Web Platform look like?](https://www.youtube.com/watch?v=VTyiVWAh6v0 "What does an Open Source Microsoft Web Platform look like?")

## Examples for the task

### Plain Express initiated with its generator

http://expressjs.com/starter/generator.html

Source code https://github.com/expressjs/generator

```sh
npm i -g express-generator
express lorenzos-sweets
cd lorenzos-sweets
npm i
DEBUG=lorenzos-sweets ./bin/www
```

Now open the browser at `http://localhost:3000` and you should see simple start page.

### Ghost

https://ghost.org/
http://support.ghost.org/installation/

Download the latest release from https://github.com/TryGhost/Ghost/releases,
unzip it and rename the folder as `lorenzos-sweets`.

```sh
npm i
npm start
```

Now open the browser at `http://localhost:2368` and you should see something,
but there is most likely an error due to missing database configuration.

