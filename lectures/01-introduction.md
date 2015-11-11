# Lecture 1. - Introduction to Node.js and JavaScript

> Date 26/08/2014

This course (TT00CC06-3001) is about getting to know [Node.js][] and tools that are made with it.

The primary focus is towards functionality and tooling that can improve the workflow of a Web Developer.

JavaScript does have partially the same name as Java, but that is basically all what they have in common.
For example variable type requirements are very [different as this cartoon explains][difference].

## Testing your initial JavaScript skills

[You can't JavaScript under pressure](http://games.usvsth3m.com/javascript-under-pressure/ "You can't JavaScript under pressure")

Below is all the test game extracted from the above game, with possible solutions.

---

`i` will be an integer. Double it and return it.

```js
function doubleInteger(i) {
    return i;
}
```

```js
function doubleInteger(i) {
    return i * 2;
}
```

```js
assert(doubleInteger(123) === 246);
assert(doubleInteger(2) === 4);
assert(doubleInteger(4) === 8);
assert(doubleInteger(-10) === -20);
assert(doubleInteger(0) === 0);
assert(doubleInteger(100) === 200);
```

---


---

`i` will be an integer. Return true if it's even, and false if it isn't.

```js
function isNumberEven(i) {

}
```

```js
function isNumberEven(i) {
    return i % 2 === 0;
}
```

```js
assert(isNumberEven(1) === false);
assert(isNumberEven(2) === true);
assert(isNumberEven(3) === false);
assert(isNumberEven(0) === true);
assert(isNumberEven(-2) === true);
assert(isNumberEven(Math.floor(Math.random()*1000000)*2) === true);
```

---


---

`i` will be a string, but it may not have a file extension.
return the file extension (with no period) if it has one, otherwise `false`.

```js
function getFileExtension(i) {

}
```

```js
function getFileExtension(i) {
    return i.indexOf('.') !== -1 ? i.split('.').pop() : false;
}
```

```js
assert(getFileExtension('blatherskite.png') === 'png');
assert(getFileExtension('perfectlylegal.torrent') === 'torrent');
assert(getFileExtension('spaces are fine in file names.txt') === 'txt');
assert(getFileExtension('this does not have one') === false);
assert(getFileExtension('.htaccess') === 'htaccess');
```

---


---

You'll get an array `i`. Return the longest string inside it.

```js
function longestString(i) {

}
```

```js
function longestString(i) {
    return i.reduce(function (curr, prev) {
        if (typeof curr !== 'string' || prev && prev.length > curr.length) {
            return prev;
        }
        return curr;
    });
}
```

```js
assert(longestString(['a','ab','abc']) === 'abc');
assert(longestString(['big',[0,1,2,3,4],'tiny']) === 'tiny');
assert(longestString(['Hi','World','你好']) === 'World');
assert(longestString([true,false,'lol']) === 'lol');
assert(longestString([{object: true,mainly: 'to confuse you'},'x']) === 'abc');
```

---


---

`i` will be an array, containing integers, strings and/or arrays like itself.
Sum all the integers you find, anywhere in the nest of arrays.


```js
function arraySum(i) {

}
```

```js
function arraySum(i) {
    var total = 0;
    var iterate = function (list) {
        list.forEach(function (value) {
            if (typeof value === 'number') {
                total += value;
            }
            else if (value instanceof Array) {
                iterate(value);
            }
        });
    };
    iterate(i);
    return total +1;
}

```

```js
assert(arraySum([1,2,3,4,5]) === 15);
assert(arraySum([[1,2,false],'4','5']) === 3);
assert(arraySum([[[[[[[[[1]]]]]]]], 1]) === 2);
assert(arraySum([['A','B','C','easy as',1,2,3]], 1]) === 6);
```
---

## Further testing your skills against next level of JavaScript

How about trying [this quiz regarding ES2016?](http://perfectionkills.com/javascript-quiz-es6 "Javascript quiz. ES6 edition.")

## Testing Node.js in the cloud

While the local development environment is not necessarily available, there are few service which
provide virtual machines that can host environments such as Node.js.

* [Codeanywhere](https://codeanywhere.com "The only multi-platform cloud editor")
* [Nitrous.IO](https://www.nitrous.io/join/jN91bVe8Boc?utm_source=nitrous.io&utm_medium=copypaste&utm_campaign=referral)

## Links related to the lecture subject

* [Eloquent JavaScript](http://eloquentjavascript.net/ "This is a book about JavaScript, programming, and the wonders of the digital")
* [Javascript BEST PRACTICES PART 1](http://www.thinkful.com/learn/javascript-best-practices-1 "Javascript BEST PRACTICES PART 1")
* [Short, in-depth explanations of JavaScript code and concepts](http://jsforallof.us/ "Short, in-depth explanations of JavaScript code and concepts")
* [Programming JavaScript Applications](http://chimera.labs.oreilly.com/books/1234000000262/index.html "Programming JavaScript Applications - Free Early Release version")
* [Understanding Scope and Context in JavaScript](http://ryanmorr.com/understanding-scope-and-context-in-javascript/ "JavaScript’s implementation of scope and context is a unique feature of the language, in part because it is so flexible")
* [The Nodefirm - Training Courses](http://thenodefirm.com/blog/2013/08/25/new-public-training-courses/ "Since its inception, The Node Firm has been the go to choice for corporate Node.js training")
* [nodemeatspace.com](http://nodemeatspace.com/ "This project is to encourage and promote real world in-person events by/for the node.js community.")
* [nodeschool.io](http://nodeschool.io/ "Learn Node.JS with interactive lessons")
* [An Absolute Beginner's Guide to Node.js](http://blog.modulus.io/absolute-beginners-guide-to-nodejs "An Absolute Beginner's Guide to Node.js")
* [What's in a Function Name?](http://bocoup.com/weblog/whats-in-a-function-name "What's in a Function Name?")
* [Every Possible Way to Define a Javascript Function](http://www.bryanbraun.com/2014/11/27/every-possible-way-to-define-a-javascript-function "Every Possible Way to Define a Javascript Function")
* [Node.js tools for Visual Studio](http://nodejstools.codeplex.com/ "Node.js tools for Visual Studio")
* [Free Visual Studio for Developers](http://www.visualstudio.com/products/free-developer-offers-vs "Visual Studio free developer offering")

[node.js]: http://nodejs.org/ "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications"
[difference]: http://leftoversalad.tumblr.com/post/103503118002 "The difference between Java and JavaScript"
