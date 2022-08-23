64-31.1 Projet de technologie web
<!-- .element style="font-size:0.7em;margin:4em 0;" -->

# JavaScript

![](images/common/logo_heg.png)
<!-- .element style="position:absolute; top:0; left:0;width:40%;" class="nopdf" -->

![](images/common/logo_hes-so.jpg)
<!-- .element style="position:absolute; top:0; right:0;width:10%;" class="nopdf" -->

[Boris.Fritscher@he-arc.ch](mailto:Boris.Fritscher@he-arc.ch)
<!-- .element style="position:absolute; bottom:20px; left:0;" class="nopdf" -->




# JavaScript

![](images/JavaScript-logo.png)<!-- .element: class="w-50" -->

<!-- .element: class="center pdf-w-30" -->



![](images/segue-blog-java-vs-javascript.png)




## The ECMAScript Standard Timeline

![](images/ecmascript_evolution.png)

http://wirfs-brock.com/allen/talks/forwardjs2016.pdf

<!-- .element: class="credits" -->



<!-- .slide: data-background-image="images/javascript_timeline.svg" -->

https://www.codecademy.com/articles/javascript-versions

<!-- .element: class="credits bottom" -->




# JavaScript

![](images/book-javascript-the-good-parts.jpg)<!-- .element: class="w-40" -->

<!-- .element: class="center" -->

### JavaScript is built on some very good ideas and a few very bad ones.

* Language of the web browser
* One of the most popular programming languages
* One of the most despised programming languages
* It is possible to get work done with it without knowing much about the language
* Programming is difficult business. It should never be undertaken in ignorance.



**JavaScript is an important language** because it is
the language of the web browser. Its association with
the browser makes it one of the most popular
programming languages in the world. **At the same
time, it is one of the most despised programming
languages in the world**. [...]

<!-- .element: class="small" -->

Most people in that situation **don’t even bother to
learn JavaScript first**, and then they are surprised
when JavaScript turns out to have significant
differences from the some other language they would
rather be using, and that those differences matter.

<!-- .element: class="small" -->

The amazing thing about JavaScript is that it is possible
to get work done with it without knowing much about
the language, or even knowing much about
programming. It is a language with enormous
expressive power. It is even better when you know what
you’re doing. **Programming is difficult business. It
should never be undertaken in ignorance.**

<!-- .element: class="small" -->

JavaScript: The Good Parts -- Douglas Crockford



Douglas Crockford: JavaScript: The Good Parts
https://www.youtube.com/watch?v=_DKkVvOt6dk

<iframe width="640" height="480" src="https://www.youtube.com/embed/_DKkVvOt6dk?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>




## JavaScript 101 (Part 1)

* Variables / Constants
* Types
* Template Strings
* Operators
* Arrays
* Loops
* Conditions
* Functions
* Objects



### Variables / Constants / Comments

```javascript
// This is a single line comment

// block variables use let over var!
let bar;
bar = 'hello';
let baz = 'world';

// variables before ES2015
// scope is only at the function level
var foo;

// constants
const cannotBeReassigned = 'The One';

/*
  This is a multi-line comment. It can go on
  for several lines, like this.
 */
```



### Types

JavaScript defines **6 types**:

* number
* boolean
* string
* object
* undefined
* null

<!-- .element: class="w-40 float-left" -->

```javascript
let aNumber = 3.12;
let aBoolean = true;
let aString = 'John Smith';
let anObject = { aProperty: null };
typeof aNumber === 'number';
typeof aBoolean === 'boolean';
typeof aString === 'string';
typeof anObject === 'object';
typeof anObject.aProperty === 'object';
typeof anObject.foobar === 'undefined';
// null is a type but
typeof null === 'object';
```
<!-- .element: class="w-50 float-left" -->

JavaScript is a dynamic language: when you declare a variable, you don't specify a type (and the type can change over time).<!-- .element: class="small clear" -->



### Template Strings

New in ES2015 in addition to '', "", there are ``.

```javascript
// Basic literal string creation
const s1 = `This is a pretty little template string.`;

// Multiline strings
const s2 = `In ES5 this is
 not legal.`;

// Interpolate variable bindings
let name = "Bob", time = "today";
const s3 = `Hello ${name}, how are you ${time}?`;
```



### Operators

| Operator | Example |
|----------| --------|
| + | 2 + 5 === 7<br> 'H' + 3 === 'H3' |
| - | 5 - 3 === 2 |
| == | Returns true if the operands are equal.<br> 3 == var3 <br> "3" == var3 <br> 3 == '3' |
| != | 	Returns true if the operands are not equal. |
| === | Returns true if the operands are equal and of the same type. |
| !== | Returns true if the operands are of the same type but not equal, or are of different type. |

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
<!-- .elements class="credits" -->



### Array

```javascript
let myArray = [ 'a', 'b', 'c' ];
let firstItem = myArray[ 0 ];
let secondItem = myArray[ 1 ]; // access the item at index 1
let arrayLength = myArray.length;
```

#### Arrays are objects

```javascript
const fruits = ['apple', 'pear'];
console.log(typeof fruits); //object

// add elements to an array
fruits.push('banana');

// check if an array contains an element
const inArray = fruits.indexOf('banana') > -1;
const inArray = fruits.includes('banana'); // new in ES6

// remove 1 element from array
const removed = fruits.splice(fruits.indexOf('pear'), 1);

const length = fruits.length;
```



### Loop
```javascript
//iterate over an array
for (let i = 0; i < fruits.length; i++) {
    console.log( 'fruit at index ' + i + ' is ' + fruits[ i ] );
}
```

```javascript
let i = 0;
while (i < myArray.length) {
  console.log( `item at index ${i} is ${myArray[ i ]}` );
  i++;
}
```

```javascript
for (let value of array) {
  // do something with value
}
```

```javascript
for (let property in object) {
  // do something with object property
}
```



### Condition

```javascript
let name = "kittens";
if (name === "puppies") {
  name += "!";
} else if (name === "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}

name === "kittens!!"

// ternary
const  result = condition ? expression_if_true : expression_if_false
```



### Functions

```javascript
function add(a, b) {
  const total = a + b;
  return total;
}
add(); // NaN
// You can't perform addition on undefined

add(2, 3, 4); // 5
// added the first two; 4 was ignored

const addTwoNumbers = function(a, b) {
  return a + b;
};
addTwoNumbers // return the function
addTwoNumbers(2, 2) // === 4 // function call returns function result
```



### Arrow functions

```javascript
const hello = () => {
  return 'world';
}

// Parentheses are optional when there's only one parameter name:
(singleParam) => { statements }
singleParam => { statements }

const addTwoNumbers = (a, b) => a + b;
```

An arrow function does not create its own this context, so this has its original meaning from the enclosing context. => this behaves more like you might think

https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es

<!-- .element: class="credits" -->



### Objects are dynamic bags of properties

There are different ways to
**access properties** of an
object.<br/><br/>
JavaScript is **dynamic**: it is
possible to **add** and **remove**
properties to an object at any
time.<br/><br/>
Every object has a different list
of properties (**no class**).

<!-- .element: class="w-40 float-right small" -->

```javascript
// create an object
const person = {
    firstName: 'John',
    lastName: 'Smith'
};
// dynamically add/remove properties
person.gender = 'male';
person['zip'] = 2000;
const key = 'height';
person[key] = 170;

delete person.zip;

// check existence of a property
person.hasOwnProperty('gender');

// enumerate properties
for (const key in person) {
    console.log(key + ' : ' + person[key]);
}
```
<!-- .element: class="w-50 float-left" -->




### Visualize Variables

![](images/javascript_variables.png)
[https://pythontutor.com/visualize.html#mode=edit](https://pythontutor.com/visualize.html#code=const%20cars%20%3D%20%5B%5D%0A%0Aconst%20person%20%3D%20%7B%0A%20%20name%3A%20'Alice'%0A%7D%3B%0A%0Aconst%20car%20%3D%20%7B%0A%20%20doors%3A%204,%0A%20%20driver%3A%20person,%0A%20%20passengers%3A%20%5B%0A%20%20%20%20person,%0A%20%20%20%20%7B%0A%20%20%20%20%20%20name%3A%20'Bob',%0A%20%20%20%20%20%20family%3A%20%5Bperson%5D%0A%20%20%20%20%7D%5D%0A%7D%3B%0A%0Acars.push%28car%29%3B&cumulative=false&heapPrimitives=nevernest&mode=edit&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false)



<iframe width="100%" height="100%" frameborder="0" src="https://pythontutor.com/iframe-embed.html#code=const%20cars%20%3D%20%5B%5D%0A%0Aconst%20person%20%3D%20%7B%0A%20%20name%3A%20'Alice'%0A%7D%3B%0A%0Aconst%20car%20%3D%20%7B%0A%20%20doors%3A%204,%0A%20%20driver%3A%20person,%0A%20%20passengers%3A%20%5B%0A%20%20%20%20person,%0A%20%20%20%20%7B%0A%20%20%20%20%20%20name%3A%20'Bob',%0A%20%20%20%20%20%20family%3A%20%5Bperson%5D%0A%20%20%20%20%7D%5D%0A%7D%3B%0A%0Acars.push%28car%29%3B&codeDivHeight=400&codeDivWidth=350&cumulative=false&curInstr=4&heapPrimitives=nevernest&origin=opt-frontend.js&py=js&rawInputLstJSON=%5B%5D&textReferences=false"> </iframe>




# JavaScript WAT

![](images/Wat.jpg)

<!-- .element: class="center" -->



<p><video data-src="images/wat.mp4"></p>

http://stackoverflow.com/questions/9032856/what-is-the-explanation-for-these-bizarre-javascript-behaviours-mentioned-in-the

<!-- .element: class="credits" -->

https://www.destroyallsoftware.com/talks/wat

<!-- .element: class="credits" -->

Note:

Here's a list of explanations for the results you're seeing (and supposed to be seeing). The references I'm using are from the ECMA-262 standard.

[] + []

When using the addition operator, both the left and right operands are converted to primitives first (§11.6.1). As per §9.1, converting an object (in this case an array) to a primitive returns its default value, which for objects with a valid toString() method is the result of calling object.toString() (§8.12.8). For arrays this is the same as calling array.join() (§15.4.4.2). Joining an empty array results in an empty string, so step #7 of the addition operator returns the concatenation of two empty strings, which is the empty string.

[] + {}

Similar to [] + [], both operands are converted to primitives first. For "Object objects" (§15.2), this is again the result of calling object.toString(), which for non-null, non-undefined objects is "[object Object]" (§15.2.4.2).

{} + []

The {} here is not parsed as an object, but instead as an empty block (§12.1, at least as long as you're not forcing that statement to be an expression, but more about that later). The return value of empty blocks is empty, so the result of that statement is the same as +[]. The unary + operator (§11.4.6) returns ToNumber(ToPrimitive(operand)). As we already know, ToPrimitive([]) is the empty string, and according to §9.3.1, ToNumber("") is 0.

{} + {}

Similar to the previous case, the first {} is parsed as a block with empty return value. Again, +{} is the same as ToNumber(ToPrimitive({})), and ToPrimitive({}) is "[object Object]" (see [] + {}). So to get the result of +{}, we have to apply ToNumber on the string "[object Object]". When following the steps from §9.3.1, we get NaN as a result:

If the grammar cannot interpret the String as an expansion of StringNumericLiteral, then the result of ToNumber is NaN.
Array(16).join("wat" - 1)

As per §15.4.1.1 and §15.4.2.2, Array(16) creates a new array with length 16. To get the value of the argument to join, §11.6.2 steps #5 and #6 show that we have to convert both operands to a number using ToNumber. ToNumber(1) is simply 1 (§9.3), whereas ToNumber("wat") again is NaN as per §9.3.1. Following step 7 of §11.6.2, §11.6.3 dictates that

If either operand is NaN, the result is NaN.
So the argument to Array(16).join is NaN. Following §15.4.4.5 (Array.prototype.join), we have to call ToString on the argument, which is "NaN" (§9.8.1):

If m is NaN, return the String "NaN".
Following step 10 of §15.4.4.5, we get 15 repetitions of the concatenation of "NaN" and the empty string, which equals the result you're seeing. When using "wat" + 1 instead of "wat" - 1 as argument, the addition operator converts 1 to a string instead of converting "wat" to a number, so it effectively calls Array(16).join("wat1").

As to why you're seeing different results for the {} + [] case: When using it as a function argument, you're forcing the statement to be an ExpressionStatement, which makes it impossible to parse {} as empty block, so it's instead parsed as an empty object literal.

http://stackoverflow.com/questions/9032856/what-is-the-explanation-for-these-bizarre-javascript-behaviours-mentioned-in-the




### Assignment AlgoJS

1. Generate a github repository for you by  [clicking here](https://classroom.github.com/a/_3sCGKng)
2. Clone the project in VS Code
3. `npm install` dependencies
4. Install Mocha Sidebar [![Version](https://vsmarketplacebadge.apphb.com/version/maty.vscode-mocha-sidebar.svg)](https://marketplace.visualstudio.com/items?itemName=maty.vscode-mocha-sidebar) for VSCode
```
    "mocha.coverage": { // File > Preferences > Settings
        "enable": false
    }
```
5. Write code to pass the tests
6. Commit and push your changes
7. Check your status on https://pweb.bf0.ch/





## JavaScript 101 (Part 2)

* Classes
* Arrays the functional way
* DOM



### Classes since ECMAScript 2015

```javascript
class SkinnedMesh extends THREE.Mesh {
  constructor(geometry, materials) {
    super(geometry, materials);

    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
    //...
  }
  update(camera) {
    //...
    super.update();
  }
  static defaultMatrix() {
    return new THREE.Matrix4();
  }
}
const mesh = new SkinnedMesh(geometry, materials);
```




### Arrays the functional way

```javascript
const fruits = ['abricot', 'ananas', 'strawberry', 'orange'];

// creates a new array with the results of calling a provided function
// on every element in the calling array.
const transformedFruits = fruits.map(fruit => {
    return fruit.toUpperCase();
});

// executes a provided function once for each array element.
transformedFruits.forEach(fruit => {
    console.log(fruit);
});

// creates a new array with all elements that pass the test implemented
// by the provided function.
const aFruits = fruits.filter(fruit => {
    return fruit.charAt(0) === 'a';
});
```



### Arrays the functional way

```javascript
const fruits = ['abricot', 'ananas', 'strawberry', 'orange'];

// executes a reducer function (that you provide)
// on each element of the array,
// resulting in a single output value.

const count = fruits.reduce((val, fruit) => {
    console.log('reducer invoked with ' + val);
    return val + 1;
}, 0);
console.log('There are ' + count + ' fruits in the array');
```

There are more functional methods: sort, some, every, flat, flatMap
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

<!-- .element: class="small" -->




## ECMAScript 2015-2016

- Module
- Enhanced Object Literals
- Destructuring
- Default + Rest + Spread



### Modules since ECMAScript 2015

import/export functions and variables between files.

```javascript
// lib/math.js
export function sum(x, y) {
  return x + y;
}
export const pi = 3.141593;
```

```javascript
// app.js
import * as math from "lib/math";
console.log("2π = " + math.sum(math.pi, math.pi));
```



### import/export syntax
```javascript
import defaultMember from "module-name";
import * as name from "module-name";
import { member } from "module-name";
import { member as alias } from "module-name";
import { member1 , member2 } from "module-name";
import { member1 , member2 as alias2 , [...] } from "module-name";
import defaultMember, { member [ , [...] ] } from "module-name";
import defaultMember, * as name from "module-name";
import "module-name";
```

```javascript
export { name1, name2, …, nameN };
export { variable1 as name1, variable2 as name2, …, nameN };
export let name1, name2, …, nameN; // also var
export let name1 = …, name2 = …, …, nameN; // also var, const

export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };

export * from …;
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
```

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import<br/>
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

<!-- .element: class="credits" -->


### Enhanced Object Literals

```javascript
const make = 'Kia', model = 'Sorento', value = 40000
const car = {
  // with property value shorthand
  // syntax, you can omit the property
  // value if key matches variable
  // name
  make,  // same as make: make
  model, // same as model: model
  value, // same as value: value

  // computed values now work with
  // object literals
  ['make' + make]: true,

  // Method definition shorthand syntax
  // omits `function` keyword & colon
  depreciate() {
    this.value -= 2500;
  }
};
```

http://www.benmvp.com/learning-es6-enhanced-object-literals/

<!-- .element: class="credits" -->



### Destructuring

```javascript
// list matching
const [a, ,b] = [1,2,3];
a === 1;
b === 3;

// Fail-soft destructuring
const [a] = [];
a === undefined;

// Fail-soft destructuring with defaults
[a = 1] = [];
a === 1;

// object matching
const {name: n, likes: [,,c]} = {name: 'hello', likes: ['cat', 'dog', 'cow']};
n === 'hello';
c === 'cow';
```



### Default + Rest + Spread
```javascript
function f(x, y=12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
f(3) == 15

function f(x, ...y) {
  // y is an Array
  return x * y.length;
}
f(3, "hello", true) == 6

function f(x, y, z) {
  return x + y + z;
}
// Pass each elem of array as argument
f(...[1,2,3]) == 6
```



### ECMAScript 2015-2016

And a lot more:
- Iterators
- Generators
- Unicode
- Map, Set, WeakMap, WeakSet
- Proxies
- Symbols
- Async Await
- Tail Calls

https://github.com/DrkSephy/es6-cheatsheet<br/>
https://babeljs.io/learn-es2015/

<!-- .element: class="credits" -->




### DOM Document

```javascript
// access body Element
const element = document.body;

// find element(s)
const element = document.getElementById("some_id");

// returns an Element
const parentElement = document.querySelector("ul");

// returns an iterable of Elements
const elements = document.querySelectorAll("li");
const element = elements[0];

// create a new element
const element = document.createElement("div");

// add to DOM
parentElement.append(element);

// Page ready
document.addEventListener('DOMContentLoaded', function() {});
```

https://github.com/oneuijs/You-Dont-Need-jQuery
<!-- .element class="small" -->



### DOM Element

```javascript
// edit classes
element.classList.add("big");
element.classList.remove("big");
element.classList.toggle("big");

// edit content
const value = element.innerText;
element.innerText = "some text";
element.innerHTML = "text with <b>HTML</b>";

// edit attributes
const value = element.getAttribute("src");
element.setAttribute("src", "https://...");

// events: click, dblclick, change, keydown, mouseenter, mouseleave
element.addEventListener('click', () => {
  // handler function
  // do something
});
```



```html
<!DOCTYPE html>
<html>
<body onload="onload()">
  <ul class="list">
    <li>a</li>
    <li>b</li>
  </ul>
</body>
</html>
```

```css
.big{
  font-size: 200%;
}
```

```javascript
function onload() {
  const div = document.createElement('div');
  div.innerText = 'Hello';
  document.body.append(div);

  for (const li of document.querySelectorAll('.list li')) {
    li.addEventListener('click', () => {
      li.classList.toggle('big');
    })
  }
}
```




# Exercices

<!-- .element: class="text-white" -->

<!-- .slide: data-background-image="images/background_code.webp" -->

## [DOM JS Donations](https://github.com/bfritscher/cours-html-exercices/tree/master/DOM_JS_Donations)
<!-- .element: class="text-white" -->




### References

* https://developer.mozilla.org/fr/docs/Web/JavaScript/Une_r%C3%A9introduction_%C3%A0_JavaScript
* https://developer.mozilla.org/fr/docs/Web/JavaScript/Guide
* https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics
* http://sutterlity.gitbooks.io/apprendre-jquery/content/rappel_javascript.html
* http://eloquentjavascript.net/
* https://developer.chrome.com/devtools
* https://babeljs.io/learn-es2015/


