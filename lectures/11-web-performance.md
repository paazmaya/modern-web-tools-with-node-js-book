# Lecture 11. - Web performance

> Date 04/11/2014

Web performance is about making things in web preform better. It usually boils down making web pages load faster and
use less resources such as CPU and network bandwidth.

Easiest ways to start working towards better performing web sites, is to reduce the amount and the sizes
of any files. Concatenation, minification and compression can reduce the size of any assets considerably.

In most cases images are the biggest single file type served, however you will find just one task related them
from below. Another recently grown media type is video, but due to the complexity, it is not in the scope of this
lecture.

Please see a great presentation from Fluent 2014 conference by Ilya Grigorik,
[video](https://www.youtube.com/watch?v=7ubJzEi3HuA "Fluent 2014: Ilya Grigorik, Speed, Performance, and Human Perception")
and
[slides](https://docs.google.com/presentation/d/1taHkLOQ2vlTyiXPdUkc8jpc4sxOSSouGn2T6Ia9OHx4/present#slide=id.p19 "Speed, Performance, and Human Perception").

Further more JavaScripts and CSS files are usually minified from their development version, that contain additional
information such as usage examples and other comment, are removed along with any unnecessary white space.
Some minifiers also change the variable and function names so that they become one or two character long.

Node.js based minifiers such as [UglifyJS][] are [clean-css][] among the most popular and also have task runners
available.

Other ways for making better Web performance can be methods such as removing duplicate code, with [jsinspect][]
for example.

The tools originally designed for Web performance can be used to benefit a Node.js developer.


## Tasks for the day

1. Given that a popular npm module is downloaded several thousand times in a day, evaluate how much bandwidth
  can be saved on a one day interval if the given JavaScript is minified
  - Find a popular npm module
  - Calculate average download count for a single day based on one week
  - How big is the module and thus how much is being downloaded every day from npm registry
  - How much difference would be with a minified version
  - Write all this briefly in `hello-node-js` repository `README.md`, under a title "Minified npm packages"
2. Take a look at the project called [Sitespeed.io][]
  - Create a similar tool that downloads a web page and measures its weight
  - Evaluate which low level tool would be the most helpul, perhaps `phantomjs` or `request`
  - Write a script that downloads HTML and all JavaScript files of a given URL
  - The script should be added to the `hello-node-js` repository
  - Run with a command `node measure-site.js URL`, or `phantomjs measure-site.js URL`
  - It should then output the file sizes of the given downloaded files
  - Optional: compare original file sizes with ones minified locally
3. Optional: Find an open source web site which is nice, and measure its Web performance
  - The site should have a GitHub repository
  - Create an issue with at least one suggestion for making the web site perform better
  - Link the issue in the list below


### Issues for better Web performance


## Links related to the lecture subject

* [Performance tooling today](http://perf-tooling.today/ "Performance tooling today")
* [Perf Rocks Tools](http://www.perf.rocks/tools/ "Analysis, optimization and monitoring tools including Grunt, Gulp and Brocoli plugins")
* [Integrating performance tools into continuous delivery](https://speakerdeck.com/soulislove/integrating-performance-tools-into-continuous-delivery "Integrating performance tools into continuous delivery")
* [Book: High Performance Browser Networking](http://chimera.labs.oreilly.com/books/1230000000545/index.html "High Performance Browser Networking")
* [npm and front-end packaging](http://blog.npmjs.com/post/101775448305/npm-and-front-end-packaging "npm and front-end packaging")
* [600 million downloads from @npmjs in the last 30 days](https://twitter.com/seldo/status/529814744014651392 "600 million downloads from @npmjs in the last 30 days")
* [Presentation: The web is too slow](http://www.slideshare.net/AndyDavies/the-web-is-too-slow "The web is too slow")
* [How to Make a Performance Budget](http://danielmall.com/articles/how-to-make-a-performance-budget/ "How to Make a Performance Budget")

[jsinspect]: https://github.com/danielstjules/jsinspect "Detect copy-pasted and structurally similar code"
[UglifyJS]: https://github.com/mishoo/UglifyJS2/ "JavaScript parser / mangler / compressor / beautifier toolkit"
[clean-css]: https://github.com/jakubpawlowicz/clean-css "A fast, efficient, and well tested CSS minifier for node.js"
[Sitespeed.io]: http://www.sitespeed.io/ "Sitespeed.io is an open source tool that helps you analyze your website speed and performance based on performance best practices and metrics"
[cheerio]: https://github.com/cheeriojs/cheerio "Fast, flexible, and lean implementation of core jQuery designed specifically for the server."
[request]: https://github.com/request/request "Simplified HTTP request client"


## Examples for tasks

### 2. Download and measure

Once HTML is downloaded, it should be parsed for finding the JavaScript element, namely `script`.

A HTML parsing tool called [cheerio][] is used in the below example, as well as [request][]
for downloading the assets:

```js
// measure-sizes.js
var request = require('request');
var cheerio = require('cheerio');

var url = 'http://npmjs.com';

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {

    console.log(body);
    var $ = cheerio.load(body);
    var scripts = $.find('script');

    console.log(scripts);
  }
});
```

Before running the script, dependencies should be installed:

```sh
npm i request cheerio
```

Running the script:

```sh
node measure-sizes.js
```

Should provide something similar to:

```

```
