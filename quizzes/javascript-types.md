# JavaScript type quiz

A quiz about JavaScript types and their conversion.

---

Select the correct evaluation result

|                  | `true` | `false` |
| ---------------- | ------ | ------- |
| `0 == false`     |  [x]   |  [ ]    |
| `0 === false`    |  [ ]   |  [x]    |
| `1 == true`      |  [x]   |  [ ]    |
| `'1' == false`   |  [ ]   |  [x]    |

> Get it right!

---

---

Choose the returned value for each `typeof` operator use cases.
For example the first one would be executed as `typeof "Hello"` and would return a `"string"`.

| `typeof` ...  | `"object"` | `"number"` | `"array"` | `"string"` | `"function"` | `"undefined"` | `"boolean"` |
| ------------- | ---------- | ---------- | --------- | ---------- | ------------ | ------------- | ----------- |
|  `"Hello"`    | [ ]        | [ ]        | [ ]       | [x]        | [ ]          | [ ]           | [ ]         |
|  `true`       | [ ]        | [ ]        | [ ]       | [ ]        | [ ]          | [ ]           | [x]         |
|  `108`        | [ ]        | [x]        | [ ]       | [ ]        | [ ]          | [ ]           | [ ]         |
|  `[0, 1, 2]`  | [x]        | [ ]        | [ ]       | [ ]        | [ ]          | [ ]           | [ ]         |
|  `{}`         | [x]        | [ ]        | [ ]       | [ ]        | [ ]          | [ ]           | [ ]         |
|  `new Date()` | [x]        | [ ]        | [ ]       | [ ]        | [ ]          | [ ]           | [ ]         |
|  `undefined`  | [ ]        | [ ]        | [ ]       | [ ]        | [ ]          | [x]           | [ ]         |
|  `"true"`     | [ ]        | [ ]        | [ ]       | [x]        | [ ]          | [ ]           | [ ]         |
|  `12.8`       | [ ]        | [x]        | [ ]       | [ ]        | [ ]          | [ ]           | [ ]         |
|  `alert`      | [ ]        | [ ]        | [ ]       | [ ]        | [x]          | [ ]           | [ ]         |


> How about trying it in the console of your browser?

---


---

What are the output values of the following expressions?

`1 + 2`
- [ ] `12`
- [x] `3`

`"1" + 2`
- [ ] `12`
- [x] `"12"`
- [ ] `3`
- [ ] `"3"`

`+"1" + 2`
- [ ] `12`
- [ ] `"12"`
- [x] `3`
- [ ] `"3"`

`1 + "2"`
- [ ] `12`
- [x] `"12"`
- [ ] `3`
- [ ] `"3"`

`1+ +"2"`
- [ ] `12`
- [ ] `"12"`
- [x] `3`
- [ ] `"3"`

> String always wins! ...unless it is turned to a number first.

---

