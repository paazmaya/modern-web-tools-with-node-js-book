# A quiz about npm commands

---

Which command creates the package.json file interactively?

|                  | true   | false  |
| ---------------- | ------ | ------ |
| npm install      |  [ ]   |  [x]   |
| npm init         |  [x]   |  [ ]   |
| npm package.json |  [ ]   |  [x]   |

> If you already have a package.json file, it'll read that first, and default to the options in there.

---

---

How do you install a package and save it as a dependency in the package.json file?

|                                      | true   | false  |
| ------------------------------------ | ------ | ------ |
| npm install <package name> --save    |  [x]   |  [ ]   |
| npm install <package name> --s       |  [ ]   |  [x]   |
| npm install <package name> --S       |  [x]   |  [ ]   |

> When uninstalling a package "save" flag will also update the dependency to package.json file: **npm uninstall <package name> --save**

---

---

How do you list packages?

|                  | true   | false  |
| ---------------- | ------ | ------ |
| npm list         |  [x]   |  [ ]   |
| npm ls           |  [x]   |  [ ]   |
| npm -l           |  [ ]   |  [x]   |
| npm list -g      |  [x]   |  [ ]   |

> Adding the "g" flag after "list" or "ls" will show you globally installed packages: **npm list -g** or **npm ls -g**

---
