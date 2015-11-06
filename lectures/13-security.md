# Lecture 13. - Security

> Date 18/11/2014


[Fourth and last assignment is given.](../assignments/4-task-runner.md)

Security is probably the most important aspect of any software development.

## Discussion items

During the lecture, we had a discussion about the security aspects of 3rd party packages. In summarise the following points were brought up when considering what should be checked before taking any 3rd party code in use:

* Validate te code, lint
* Check the origin, who made it, is it public and how active, where is it downloaded from, suspicious web site
* `.exe` suffix
* Does it do what it is supposed to
* Does it do something that it is not supposed to do
* Suspicious instructions, such as using `sudo` or giving access to passwords
* Collects information, surveillance traffic
* Amount of downloads

Tools that could help in checking the above criteria:

* plato
* nsp

## Links related to the lecture subject

* [Node Security Project resources](https://nodesecurity.io/resources "Talks, blog posts, articles and papers that are about or tangentially related to node.js security")
* [Checking for vulnerable Node.js modules](http://nodeexamples.com/2014/08/16/checking-for-vulnerable-node-js-modules/ "Checking for vulnerable Node.js modules")
* [Debugging Node.js - How we found memory leaks and slow/infinite loops](https://medium.com/@Philmod/debugging-node-js-29b2097df36c "Debugging Node.js")
* [Node.js Security Tips](https://blog.codeship.com/node-js-security-tips/ "Node.js Security Tips")
* [Google Chrome - Gradually sunsetting SHA-1](http://googleonlinesecurity.blogspot.fi/2014/09/gradually-sunsetting-sha-1.html "Gradually sunsetting SHA-1")
* [OWASP NodeGoat Project](https://www.owasp.org/index.php/OWASP_Node_js_Goat_Project)


## Example for creating brute force passwords

... in order to prove how easy it is and why should sensitive data be handled with special care.

```js
/**
 * Brute force a password that uses SHA1 hash for encryption
 */
'use strict';

var crypto = require('crypto'),
	util = require('util');

var start = (new Date()).getTime();
var time = function () {
	return (new Date()).getTime() - start;
};

// from https://www.npmjs.com/package/char-range
var range = function(start, stop) {
	var result = [];
	for (var idx = start.charCodeAt(0), end = stop.charCodeAt(0); idx <= end; ++idx) {
		result.push(String.fromCharCode(idx));
	}
	return result;
};

var chars = range('a', 'z').concat(range('A', 'Z'),
	['å', 'ä', 'ö'], ['Å', 'Ä', 'Ö'],
	range('0', '9'));
//util.puts(util.inspect(chars));

var createHash = function (word) {
	var shasum = crypto.createHash('sha1');
	shasum.update(word);
	return shasum.digest('hex');
};

var maxLength = 3;
var password = 'Hel'; // Password that is looked for
var passHash = createHash(password);

var iterateChars = function(prefix) {
	var len = chars.length;
	for (var i = 0; i < len; ++i) {
		var word = prefix + chars[i];
		var sha1 = createHash(word);
		//util.puts(time() + ' ' + word + ' = ' + sha1);
		if (sha1 === passHash) {
			util.puts('Password found. Time used: ' + time() + ' ms');
			return;
		}
		if (word.length < maxLength) {
			iterateChars(word);
		}
	}
};

iterateChars('');
```

In order to improve the example and its efficiency, the iteration should be done
first against all characters in the first index, than second and third, as opposed now
iterating whole maximum length with first index being at the first character.

That is why the running time increases when the maximum length is increased, even
while the matching password is somewhat short.
