# String.prototype.occurences()

The occurences() method return an array with indexes of all occurrences of given character/substring, or empty array if no occurences were found or argument is not a string. Function is case sensitive.

```js
const test = 'This is just simple test to check of occurences of t';
test.occurences('t');
// expected output [ 11, 20, 23, 25, 51 ]

// chain with toLowerCase() to get non-sensitive result
test.toLowerCase().occurences('t');
// expected output [ 0, 11, 20, 23, 25, 51 ]

// you can also check for phrase
`${test}est`.occurences('test');
// expected output [ 20, 51 ]
```
If you want to have this method in your string protope just simply place this script inside you html file:
```html
<script src="https://github.com/jedluk/occurences/blob/master/index.js"></scirpt>
```
