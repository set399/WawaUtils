# About this package
- This package was originally meant to make Node.js's FS managment easier because it has unnecessary callbacks and promises that you have to rewrite constantly, these functions have their own built-in error handlers, so you do not need to constantly `try/catch` anymore
- Additionaly it has a `rand()` and `randint()` function for generating pseudo-random characters from the alphabet and numbers or from a range of integers
- It comes with 2 more extras meant mostly for web APIs, that being `isHex()` and `isURL()` 
# Installing and importing the package
- Open a terminal or command prompt in your NPM project directory and type `npm i @set399/wawautils`
- In your JS file, import it at the top using:
```js
// You can use either version 1 or 2 depending on your liking, version 1 is recommended more because if you already have existing functions with these names in your file, they will interfere 
const WawaUtils = require('@set399/wawautils'); // Version 1 | You can change "WawaUtils" to anything you want here 
const {makef, editf, readf, delf, readjsonf, editjsonf, rand, randit, isHex, isURL} // Version 2 | Use only if you're sure and want easy access to functions without having to retype the module variable name
```
- **In the rest of the README, we will be using Version 1 and the variable will be named `WawaUtils`**
# Filesystem (FS) functions (other than the 2 read functions, the other functions will return `true` if the operation was successful and `false` if not, and will also log the error in the console)
- **Disclaimer:**
- All file operations here are ASYNCHRONOUS!
- This means they have to be used inside an `async` function and have to be called with the `await` keyword
- If your function doesn't use async, you can create your own using: (this is called an IIFE)
```js
(async() {
  await functionName();
})();
```
- `makef`: Creates a new empty file in the specified `path`
```js
// Usage:
await WawaUtils.makef('path/to/the/file/filename.fileextension');
// Example:
await WawaUtils.makef('./myJsonFile.json');
```
- `editf`: Either rewrites an existing file in the specified `path` or if it doesn't exist, makes a new one for it with the `content` you specify, **it's encoding is set to UTF-8 by default**
```js
// Usage:
await WawaUtils.editf('path/to/the/file/filename.fileextension', 'filecontent');
// Example:
await WawaUtils.editf('./myInterestingTextFile.txt', 'Haiii!! :D I love using WawaUtils!! -w-');
```
- `readf`: Returns the file content from the file specified in the `path` (UTF-8 encoding)
```js
// Usage:
await WawaUtils.readf('path/to/the/file/filename.fileextension');
// Example: (will print out "Haiii!! :D I love using WawaUtils!! -w-" into the console as from the previous example)
const content = WawaUtils.readf('./myInterestingTextFile.txt');
console.log(content);
```
- `delf`: Deletes the file specified in the `path`
```js
// Usage:
await WawaUtils.delf('path/to/the/file/filename.fileextension');
// Example:
await WawaUtils.delf('./noooDontDeleteMeee.noo');
```
- `readjsonf`: Reads a JSON file and returns it's content that is automatically parsed as a variable (UTF-8 encoding)
```js
// Usage:
await WawaUtils.readjsonf('path/to/the/json/file/filename.json');
// Example: (let's say the file content is "{'e':1}")
const parsedJson = await WawaUtils.readjsonf('./myJsonFile.json');
console.log(parsedJson.e); // Prints out 1 into the console
```
- `editjsonf`: Either rewrites an existing JSON file in the specified `path` or if it doesn't exist, just like `editf`, it makes a new one with the specified `content`, with the encoding set as UTF-8
```js
// Usage:
await WawaUtils.editjsonf('path/to/the/json/file/filename.json');
// Example:
await WawaUtils.editjsonf('./');
```
# Randomization (pseudo-random) functions
- *Please keep in mind all of these functions use `Math.random()` which is predictable*
- `rand`: Generates characters and numbers based on the mode you specify using `type`, allowed are "all", "a-z", "A-Z", "a-z 0-9", "A-Z 0-9" and "0-9", it also additionally does as many characters as you set using `count`
// Usage:
WawaUtils.rand(type, count);
// Examples:
```js
WawaUtils.rand('all', 5) // Lowercase and uppercase letters along with numbers | Will print out something like "kJ7p1"
WawaUtils.rand('a-z', 5); // Lowercase letters | Will print out something like "lapfo"
WawaUtils.rand('A-Z', 5); // Uppercase letters | Will print out something like "MKFAN"
WawaUtils.rand('a-z 0-9', 5); // Lowercase letters and numbers | Will print out something like "bgf19"
WawaUtils.rand('A-Z 0-9', 5); // Uppercase letters and numbers | Will print out something like "1OEA7"
WawaUtils.rand('0-9', 5); // Numbers | Will print out something like "84195"
```
- `randint`: Generates a number from the range you specify using `min` and `max`
```js
// Usage:
WawaUtils.randint(min, max);
// Example:
WawaUtils.randint(1, 10);
```
# Extra functions
- `isHex`: Checks if the specified string is a HEX color code like #FF0000 using RegEx
```js
// Usage:
isHex('string');
// Examples:
isHex('#b7edb9'); // true
isHex('Basically anything that is not a hex code') // false 
```
- `isURL`: Checks if the specified string is structured like a URL using RegEx (Credit to https://stackoverflow.com/questions/3310216/url-regex-without-http-www )
```js
// Usage:
isURL('string');
// Examples:
isURL('https://github.com/set399/WawaUtils'); // true
isURL('Basically anything that is not a URL'); // false
```
