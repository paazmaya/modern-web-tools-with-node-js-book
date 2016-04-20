# Lecture 14. - Database

> Date 25/11/2014

Some projects need to use a database due to the need for some persistent data, such as user account information, settings and other similar things that should be kept same between different sessions.

Node.js has several modules that provide bindings to native database libraries, and some written completely in JavaScript.

npm registry itself uses CouchDB, which will be queried in the example below.

```js
/**
 * Search latest version of the given keyword
 * matching package
 * registry-search.js
 */
'use strict';

var name = 'node-sass';
var url = 'http://registry.npmjs.com';

var util = require('util');
var nano = require('nano');

if (process.argv.length === 3) {
	name = process.argv.pop();
}

var server = nano(url);
var registry = server.use(name);

//util.puts(util.inspect(registry));

registry.get('latest', function(err, body) {
	if (err) {
		util.error(err);
	}
	//util.puts(util.inspect(body));

	util.puts('Latest version of ' + name + ' is ' + body.version);
});
```

Install dependencies:

```sh
npm install nano
```

Run via command line, by searching the default package name defined in line 8:

```sh
node registry-search.js
```

Should provide an output similar to:

```
Latest version of node-sass is 1.2.3
```

Running with a package name defined via command line:

```sh
node registry-search.js nano
```

Outputs:

```
Latest version of nano is 6.0.2
```

## Links related to the lecture subject

* [npm - The JavaScript Package Registry](https://docs.npmjs.com/misc/registry "The JavaScript Package Registry")
* [nano - minimalistic couchdb driver for node.js](https://www.npmjs.com/package/nano "minimalistic couchdb driver for node.js")
* [CouchDB is a database that completely embraces the web](http://couchdb.apache.org/ "CouchDB is a database that completely embraces the web")
