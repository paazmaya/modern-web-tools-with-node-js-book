# A quiz about Javascript scope

---

Which statemens apply to javascript scope

```javascript
var result = 4;

function calculate(x, y) {
  var x = 8;
  var result = x + y;
}

calculate(5, 10);

console.log(result);
```

|                                       | true   | false  |
| ------------------------------------- | ------ | ------ |
| `x in result is 5`                    |  [ ]   |  [x]   |
| `result in calculate function is 18`  |  [x]   |  [ ]   |
| `output of console log is 18`         |  [ ]   |  [x]   |

> Sorry... Try again

Which statemens apply to javascript scope

```javascript
function setUsername(name) {
  username = name;
  console.log("1:" + username);
}

setUsernama("Kate");

console.log("2:" + username);
```

|                                                 | yes    | no     |
| ----------------------------------------------- | ------ | ------ |
| `output of console log 1 is undefined`          |  [ ]   |  [x]   |
| `output of console log 2 is Kate`               |  [x]   |  [ ]   |

> Sorry... Try again

Which statemens apply to javascript scope

```javascript
var todos = [];

function addTodo(todo) {
  todos.push(todo);
}
addTodo("Make coffee");

console.log("1:" + todos.length);

addTodo("Buy more coffee");
addTodo("Outsource node.js tasks to Chine");

console.log("2:" + todos[2]);

```

|                                                 | yes    | no     |
| ----------------------------------------------- | ------ | ------ |
| `output of console log 1 is 1`                  |  [x]   |  [ ]   |
| `output of console log 2 is buy more coffee`    |  [ ]   |  [x]   |

> Sorry... Try again

Which statemens apply to javascript scope

|                                                                      | yes    | no     |
| -------------------------------------------------------------------- | ------ | ------ |
| `The lifetime of a JavaScript variable starts when it is declared.`  |  [x]   |  [ ]   |
| `Local variables stay in scope after the function is completed.`     |  [ ]   |  [x]   |
| `Global variables are deleted when you close the page.`              |  [x]   |  [ ]   |

> Sorry... Try again

---
