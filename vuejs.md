64-31.1 Projet de technologie web

<!-- .element style="font-size:0.7em;margin:4em 0;" -->

# Vue.js

![](images/common/logo_heg.png)
<!-- .element style="position:absolute; top:0; left:0;width:40%;" class="nopdf" -->

![](images/common/logo_hes-so.jpg)
<!-- .element style="position:absolute; top:0; right:0;width:10%;" class="nopdf" -->

[Boris.Fritscher@he-arc.ch](mailto:Boris.Fritscher@he-arc.ch)
<!-- .element style="position:absolute; bottom:20px; left:0;" class="nopdf" -->

#### Build and deploy a Single Page Application




### Objectifs

* Learn Vue.js
* Learn by Example: LIA App
* Only focus on frontend
* With API's for data

![](images/lia.png)
<!-- .element: class="w-50 float-right" -->




# 1. The Foundation

- development environment
- initializing the Vue.js application
- establishing coding standards with ESLint and Prettier.
- configuring version control with Git



### Editors

Exists in all form: from notepad.exe to full IDE: [WebStorm](https://www.jetbrains.com/webstorm/)

![](images/notepad.png)<!-- .element: class="w-40 float-left" -->

![](images/webstorm.png)<!-- .element: class="w-60 float-left" -->

In between: [Notepad++](https://notepad-plus-plus.org/), [Visual Studio Code](https://code.visualstudio.com/)
<br/>Online editors: [CodeSandbox](https://codesandbox.io), [StackBlitz](https://stackblitz.com/), [Cloud9](https://c9.io/), [Eclipse Che](http://www.eclipse.org/che/)
<br/>Browser integrated (F12): [Chrome DevTools](https://developer.chrome.com/devtools)



### Ecosystem

<iframe src="https://roadmap.sh/frontend" width="100%" height="80%"></iframe>

<!-- .element: class="center" -->

https://github.com/kamranahmedse/developer-roadmap

<!-- .element: class="credits" -->



## Node.js & npm

![](images/nodejs-logo.png) <!-- .element: class="float-right w-15" -->
**Node.js** is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
https://nodejs.org/

*It allows to run JavaScript outside of the browser*

![](images/npm-logo.svg) <!-- .element: class="float-right w-15" -->
**npm** is a package manager for JavaScript bundled with Node.js and can run some tasks.
https://www.npmjs.com/



## Vite

![](images/logo-with-shadow.png) <!-- .element: class="float-left w-15" -->

Is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts:

* A dev server (Hot Module Replacement / Reload)
* A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.
* Project Templates for vue, react, ...



### Project Dependencies & Dev Server

Your `package.json` file lists all project dependencies. Vite, the build tool, provides a development server with Hot Module Replacement (HMR) for a fast feedback loop.

- **`npm install`**: Reads `package.json` and installs all necessary libraries into the `node_modules` folder.
- **`npm run dev`**: Starts the local development server. Any changes you make to your source files will instantly appear in the browser.



## Code Quality with ESLint & Prettier

- **ESLint**: A static analysis tool that finds problematic patterns or code that doesn't adhere to style guidelines. It helps prevent bugs.
- **Prettier**: An opinionated code formatter. It enforces a consistent code style (e.g., spacing, line breaks, quotes) across the entire project, eliminating arguments about style.

You can configure rules for both in `eslint.config.mjs` and `.prettierrc.json`.



### Linting and Formatting

- **Linting:** undefined variables, unused variables, ...
- **Formatting:** indentation, spaces, quotes, ...

![](images/lint-errors.png)



### Version Control

- **Git**: The industry-standard version control system for tracking code changes and collaborating with others.

<!-- .element: class="smaller" -->

![](images/git-lifecycle.png)

http://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository

<!-- .element: class="credits" -->



## VS Code Extensions for Vue

Extensions enhance your editor with better syntax highlighting, code completion, and error checking.

- **Vue - Official** (`Vue.volar`): The essential extension for Vue 3. It provides full language support for Vue's Single-File Components (`.vue` files).
- **ESLint** (`dbaeumer.vscode-eslint`): Integrates the ESLint linter to find and fix problems in your JavaScript code right in the editor.
- **Prettier - Code formatter** (`esbenp.prettier-vscode`): An opinionated code formatter that ensures your code has a consistent style.



### Production Builds

When you're ready to deploy your site, you need to create an optimized "build".

- **`npm run build`**: This command uses Vite to compile, minify, and bundle your code into a small set of static files (HTML, CSS, JS) in a `dist/` directory. This version is what you host on a server.
- **`npm run preview`**: A helpful command to serve your `dist/` folder locally, so you can check the production version before deploying.



![](images/build_pipline.png)



### CI/CD with GitHub Actions

Continuous Integration/Continuous Deployment (CI/CD) automates the process of building and deploying your application.

- **GitHub Actions**: A platform that lets you run automated workflows directly from your GitHub repository.
- **Workflow File**: A YAML file (e.g., `.github/workflows/deploy.yml`) defines the steps to run, such as checking out code, installing dependencies, and running the build command, whenever you push changes.




# Epic 0
##  Create the project backlog

- Create GitHub repository [here](https://classroom.github.com/a/HEaOY67z)
- Then click projects > new project > templates > Kanban
- Wait for issue creation




# Epic 1

## Vue.js Project Foundation

### Goal: Vue.js app ready and auto-deployed to GitHub Pages






# 2. Core Vue.js Concepts



### Multi Page App vs Single Page Application (SPA)

- Server computes HTML for each page request  vs Client computes HTML in the browser (SPA)
- Full page reload vs Client redraws only parts of the page (SPA)
- Initial page load is faster vs Initial page load is slower (SPA)

<!-- .element: class="small" -->

![](images/traditional-and-spa.jpg)


https://dzone.com/articles/the-comparison-of-single-page-and-multi-page-appli
<!-- .element: class="credits" -->



## Why Vue.Js?

<!-- https://codepen.io/jotavejv/pen/KgrXEa -->
<style>
  .reveal div.w{width:220px;height:220px;margin:auto;position:absolute;top:0;right:0;left:0;bottom:0;}:root{--outer:#2FB982;--inner:#34475F}.w svg{width:100%;height:auto}#outer,#inner{stroke-width:.5;stroke:var(--outer)}#outer{stroke-dasharray:285.5394592285156 285.5394592285156;stroke-dashoffset:285.5394592285156;animation:outer 4s 1s ease infinite}#inner{stroke-dasharray:165.98031616210938 165.98031616210938;stroke-dashoffset:165.98031616210938;animation:inner 4s 1s ease infinite}@keyframes outer{25%{stroke-dashoffset:0;stroke-width:.5;fill:#fff}50%,75%{stroke-dashoffset:0;fill:var(--outer);stroke-width:0}}@keyframes inner{25%{stroke-dashoffset:0;stroke-width:.5;fill:#fff}50%,75%{stroke-dashoffset:0;fill:var(--inner);stroke-width:0}}
</style>
<div style="position:relative;width:100%;height:220px;">
  <div class="w">
    <svg width="82px" height="70px" viewBox="-4 1 82 70" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <g id="vue" stroke="none" fill="none" transform="translate(-3.000000, 2.000000)">
        <path d="M15,0 L31,0 C31,0 33.7431643,4.8767365 35.1147464,7.31510474 L40,16 L50,0 L65,0 L40,42 L15,0 Z" id="inner">
        </path>
        <path d="M0,0 L40,68 L80,0 L65,0 C65,0 50.2018448,24.8609007 42.8027673,37.291351 C41.8685115,38.8609007 40,42 40,42 L15,0 L0,0 Z" id="outer">
        </path>
      </g>
    </svg>
  </div>
</div>

- address many of the challenges encountered in developing SPA
- large acceptation
- decouple DOM manipulation from application logic
- decouple the client side of an application from the server side
- declarative programming for user interface
- imperative programming for application business logic

<!-- .element: class="small"-->



![](images/programming_languages.png)

<!-- .element: class="w-80"-->

https://www.jetbrains.com/lp/devecosystem-2024/

<!-- .element: class="credits"-->



[![Star History Chart](https://api.star-history.com/svg?repos=vuejs/vue,facebook/react,angular/angular&type=Date)](https://www.star-history.com/#vuejs/vue&facebook/react&angular/angular&Date)



![](images/angular_feelings.png)



### Vue.js a Model View ViewModel (MVVM) framework

![](images/mvvm.png)



# [Guide Vue.js](https://vuejs.org/guide/introduction.html)



| Feature | Options API | Composition API |
| :--- | :--- | :--- |
| **Code Organization** | **Scattered by option type.** Logic for one feature is split across `data`, `methods`, `computed`, etc. | **Grouped by logical feature.** All related state, methods, and computeds for one feature **can*** be kept together. |
| **Reusability** | **Mixins.** Prone to issues like name collisions, implicit dependencies, and unclear property sources. | **Composables (Functions).** Provides explicit, type-safe, and conflict-free logic reuse. |
| **TypeScript Integration** | **Good, but can be clumsy.** The reliance on `this` requires complex typing that can sometimes fail to infer correctly, especially with mixins. | **Excellent and natural.** Built with TS in mind. Works with standard variables and functions, leading to robust type inference. |
| **Learning Curve** | **Lower initial curve.** The rigid structure is easy for beginners to follow ("fill in the blanks"). | **Steeper initial curve.** Requires understanding reactivity concepts like `ref` and `reactive` upfront. |
| **Reactivity Handling** | **Implicit.** State returned from `data()` is automatically made reactive by Vue "behind the scenes". | **Explicit & Fine-Grained.** You directly use functions like `ref()`, `reactive()`, `computed()` to create and control reactive state. |
| **`this` Context** | **Heavily reliant on `this`** to access the component instance. Can be a source of bugs in callbacks. | **No `this` needed in `<script setup>`.** You work directly with variables, simplifying the code and eliminating a class of errors. |
| **Performance & Bundle Size**| Generally very good and performant. | **Slightly better.** The setup is more efficient, and code is more tree-shaking friendly, which can lead to smaller production bundles. |

<!-- .element: class="smaller" -->



### Vue Single File Component (SFC)
- A Vue Single File Component (SFC) is a file with a `.vue` extension that encapsulates the structure, style, and behaviour of a component in a single file.
- script setup is a compile-time syntactic sugar that allows you to use Composition API features without the boilerplate of defining a component object.

```vue
<!-- App.vue -->
<template>
    <!-- HTML Markup -->
</template>

<script setup>
    // JavaScript Logic
</script>

<style scoped>
    /* CSS Styles */
</style>
```
<!-- .element: class="float-left w-40" -->


![](images/vue-format.png)

<!-- .element: class="float-right w-40" -->


https://speakerdeck.com/bhawkes/introduction-to-vue-js

<!-- .element: class="credits" -->


### Reactivity with `ref`

Reactivity system: When you change your data, the user interface automatically updates.
<!-- .element: class="smaller" -->

- **`ref`**: A function used to create a reactive variable for a primitive value (like a string, number, or boolean).
- **`.value`**: To access or modify the value of a `ref`, you must use its `.value` property in your `<script>` block. Vue automatically "unwraps" it in the template, so you don't need `.value` there.

<!-- .element: class="smaller" -->

```vue
<script setup>
import { ref } from "vue";

const count = ref(0); // Create a reactive number

function increment() {
  count.value++; // Access the value with .value in the script
}
</script>

<template>
  <p>Count: {{ count }}</p>   <!-- No .value needed in the template -->
  <button @click="increment">Increment</button>
</template>
```



### Text interpolation

Vue.js expressions are JavaScript-like code snippets that are usually placed in bindings such as `{{ expression }}`.

```html
<div>{{ message.toUpperCase() }}</div>       <!-- HELLO VUE.JS! -->
<div>{{ message.slice(0,5) }}</div>          <!-- Hello         -->
<div>You say {{ ok ? 'YES' : 'NO' }}</div>   <!-- You say NO    -->
```

> Template expressions are sandboxed and only have access to a whitelist of globals such as `Math` and `Date`. You should not attempt to access user defined globals in template expressions.

https://vuejs.org/guide/essentials/template-syntax.html

<!-- .element: class="credits" -->



### Event Listeners
We can use the v-on directive, which we typically shorten to the @ symbol, to listen to DOM events and run some JavaScript when they're triggered.

The usage would be `v-on:click="handler"` or with the shortcut, `@click="handler"`.

```html
<button v-on:click="increment">{{ count }}</button>
```



### Events modifiers

Methods used to handle events can access event object through $event

For common event manipulation there are helpers

|                            |                                                      |
|----------------------------|------------------------------------------------------|
| .stop                      | call event.stopPropagation().                        |
| .prevent                   | call event.preventDefault().                         |
| .{keyAlias}                | only trigger handler on certain keys.                |
| .right                     | only trigger handler for right button mouse events.  |
| .left                      | only trigger handler for left button mouse events.   |
| .middle                    | only trigger handler for middle button mouse events. |

https://vuejs.org/guide/essentials/event-handling.html#event-modifiers
<!-- .element: class="credits" -->





# Implement ISSUE
## Create a quantity counter




### Reactivity with `reactive`

For complex data like objects and arrays, Vue provides the `reactive` function.

<!-- .element: class="small" -->

- **`reactive`**: Returns a reactive version of an object. Unlike `ref`, you don't use `.value` to access or modify its properties.

<!-- .element: class="smaller" -->

```vue
<script setup>
import { reactive } from "vue";
const user = reactive({
  name: "Jane Doe",
  email: "jane@example.com",
  isActive: true
});
function deactivateUser() {
  user.isActive = false;
}
</script>

<template>
  <p>User: {{ user.name }}</p>
  <p>Status: {{ user.isActive ? 'Active' : 'Inactive' }}</p>
</template>
```



## `ref` vs. `reactive`

**When to use `ref` vs. `reactive`?**
  - Use `ref` for individual primitive values.
  - Use `reactive` for grouping multiple related values in an object.



### Two-Way Binding with `v-model`

`v-model` creates a two-way binding between a form input and a reactive variable. It's a shortcut that simplifies handling user input.

- When the user types in the input, the `message` ref is updated.
- If the `message` ref is changed in the script, the input field's value updates.

<!-- .element: class="small" -->

```vue
<script setup>
import { ref } from "vue";

const message = ref("");
</script>

<template>
  <!-- v-model syncs the input with the 'message' ref -->
  <input v-model="message" placeholder="Type something..." />
  <p>You are typing: {{ message }}</p>
</template>
```



### Directive v-model modifiers

.trim - trim input<br>
.lazy -  sync after change event

```vue
<script setup>
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <p><label>Nom: <input v-model.trim.lazy="name"></label></p>
  <p>Hello {{name}}</p>
  <pre>{{name}}</pre>
</template>
```

https://vuejs.org/guide/essentials/forms.html#modifiers

<!-- .element: class="credits" -->



### Directive v-model modifiers

.number - cast input string to numbers

```vue
<script setup>
import { ref } from "vue";

const num1 = ref(4);
const num2 = ref(2);
</script>

<template>
  <p>
    <label>Num1: <input v-model.number="num1" type="number"></label> +
    <label>Num2: <input v-model.number="num2" type="number"></label>
    = {{ num1 + num2 }}
  </p>
</template>
```

https://vuejs.org/guide/essentials/forms.html#number

<!-- .element: class="credits" -->



### Conditional Rendering with `v-if`

The `v-if`, `v-else-if`, and `v-else` directives allow you to conditionally render blocks of HTML.

- **`v-if`**: The block is only rendered if the expression is truthy.
- **`v-else-if` / `v-else`**: Must follow a `v-if` or `v-else-if` block.


```vue
<script setup>
import { ref } from 'vue'
const score = ref(85)
</script>

<template>
  <div v-if="score >= 90">Grade: A</div>
  <div v-else-if="score >= 80">Grade: B</div>
  <div v-else>Grade: C or lower</div>
</template>
```



### Rendering Lists with `v-for`

The `v-for` directive is used to render a list of items based on an array.
<!-- .element: class="small" -->

- **Syntax**: `item in items`, where `items` is the source array and `item` is an alias for the element being rendered.
- **`:key`**: It's crucial to provide a unique `key` for each item. This allows Vue to track each item's identity, making list updates much more efficient. Use a unique ID from your data, not the array index.

<!-- .element: class="smaller" -->

```vue
<script setup>
import { reactive } from "vue";
const items = reactive([
  { id: "a1", name: "First Item" },
  { id: "b2", name: "Second Item" },
  { id: "c3", name: "Third Item" }
]);
</script>
<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }}
    </li>
  </ul>
</template>
```



### v-for with objects and arrays variations

```html
<div v-for="item in items">
  {{ item.text }}
</div>
<div v-for="(val, index) in array"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, key, index) in object"></div>
```

https://vuejs.org/guide/essentials/list.html
<!-- .element: class="credits" -->



### Binding Attributes with `v-bind`

The `v-bind` directive (or its shorthand `:`) is used to dynamically bind one or more attributes, or a component prop to an expression.

```vue
<script setup>
import { ref } from "vue";

const isActive = ref(true);
</script>

<template>
  <button v-bind:class="{ active: isActive }" @click="isActive = !isActive">
    Toggle</button>
</template>
<style scoped>
.active {
  background-color: red;
  color: white;
}
</style>
```




# Implement ISSUE
## Create a first list + form
## Input validation and feedback




### Watching for Changes with `watch`

A `watch` function lets you perform a "side effect" in response to a data change. Side effects are operations that affect something outside of the component, like calling an API, or writing to `localStorage`.
<!-- .element: class="small" -->

- **First argument**: The reactive source to watch (`ref` or `reactive` object).
- **Second argument**: The callback function to run when the source changes.

<!-- .element: class="smaller" -->

```vue
<script setup>
import { ref, watch } from "vue";

const question = ref("");

// This watcher runs whenever the 'question' ref changes
watch(question, (newQuestion, oldQuestion) => {
  console.log(`Question changed from "${oldQuestion}" to "${newQuestion}"`);
  // You could call an API here, for example.
});
</script>

<template>
  <input v-model="question" placeholder="Ask a question" />
</template>
```



### Lifecycle Hooks

https://vuejs.org/guide/essentials/lifecycle.html

onMounted, onUpdated, onUnmounted

![](images/lifecycle.png)

<!-- .element: class="w-40 right top" -->

```vue
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  console.log(`the component is now mounted.`)
})
</script>
```



### JSON

JavaScript Object Notation is a lightweight data-interchange format. It is easy for *humans* to **read and write**. It is easy for *machines* to **parse and generate**. It is based on a subset of the JavaScript Programming Language

```json
{
  "key_string": "hello",
  "key_number": 3,
  "key_array": ["some text", 34]
  "key_object": {
    "other_key": "value"
    "key_boolean": true,
    "null possible": null
  }

}
```
http://json.org/



### JSON API in JavaScript

|                                   |                                                              |
|-----------------------------------|--------------------------------------------------------------|
| JSON.stringify( *object* )        | create a JSON_string                                         |
| JSON.parse( *JSON_string* )       | create an object from a string                               |


```javascript
//optional formatter and indentation spacing for pretty-print
JSON.stringify( {hello: {text: 'world'}}, null, 2 )
//results in the following string
'{
  "hello": {
    "text": "world"
  }
}'
```



### localStorage

Interface of the Web Storage API provides access to storage for a particular domain.

|                                    |                                                                                        |
|------------------------------------|----------------------------------------------------------------------------------------|
| localStorage.length                | Returns an integer representing the number of data items stored in the Storage object. |
| localStorage.key( number )         | will return the name of the nth key in the storage.                                    |
| localStorage.getItem( key )        | will return that key's value.                                                          |
| localStorage.setItem( key, value ) | will add that key to the storage, or update that key's value if it already exists.     |
| localStorage.removeItem( key )     | will remove that key from the storage.                                                 |
| localStorage.clear()               | will empty all keys out of the storage.                                                |

*localStorage content can be viewed in chrome developer tools resource tab*

<!-- .element: class="small" -->

https://developer.mozilla.org/en-US/docs/Web/API/Storage

<!-- .element: class="credits" -->





# Implement ISSUE
## Save the list with LocalStorage & JSON




### Computed Properties

`computed` properties let you create a new reactive value that is derived from other reactive data. They are cached and only re-evaluate when their dependencies change.

<!-- .element: class="small" -->

Use computed properties for any logic in your template. This keeps your templates clean and your calculations efficient.

<!-- .element: class="smaller" -->

```vue
<script setup>
import { ref, computed } from "vue";

const firstName = ref("Jane");
const lastName = ref("Doe");

// A computed property that combines first and last name
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`;
});
</script>

<template>
  <p>Full Name: {{ fullName }}</p>
</template>
```



### Computed Properties are cached

```vue
<script setup>
import { ref, computed } from "vue";
const count1 = ref(0);
const count2 = ref(0);
const date1 = computed(() => {
  count2.value; // to see the effect of count2 change
  return new Date();
});
const date2 = () => new Date();
</script>

<template>
  <p>{{date1}} {{date2()}} {{count}}
    <button @click="count1+=1">render</button>
    <button @click="count2+=2">render2</button>
  </p>
</template>
```





# Implement ISSUE
## Check items on the list




# 3. Components

Components are reusable, self-contained blocks of code. They are the building blocks of a Vue application.



### Component Based Applications

Components provide a way to write small parts with a consistent API that can easily be orchestrated as part of a larger screen, application or system.

<!-- .element: class="small" -->

An encapsulated set of behaviors or process and logic, with a well-known interface or API to access that component’s functionality.

<!-- .element: class="small" -->

![](images/webcomponents.jpg)

<!-- .element: class="w-40" -->

https://derickbailey.com/2015/08/26/building-a-component-based-web-ui-with-modern-javascript-frameworks/

<!-- .element: class="credits" -->



### Advantages of Components

A component is a small, potentially re-usable set of logic, behaviors and interface elements

* Reusable
* Data flow boundaries in/out
* Isolated scope
* Simple or with state easier to predict
* Testable

<!-- .element: class="float-left w-50" -->

![](images/component_example.png)

<!-- .element: class="w-40 float-right" -->

http://busypeoples.github.io/post/thinking-in-components-angular-js/

<!-- .element: class="clear credits" -->



### Components in Vue.js

![](images/components.png)



### Creating and Using a Component

A component is just a `.vue` file that can be imported and used in another component.
<!-- .element: class="smaller" -->

```vue
<!-- MyButton.vue -->
<template>
  <button class="my-button">
    Click Me
  </button>
</template>

<style>
.my-button {
  background-color: blue;
  color: white;
  border-radius: 4px;
}
</style>
```

<!-- .element: class="float-left w-40" -->

```vue
<!-- App.vue -->
<script setup>
// 1. Import the component
import MyButton from './MyButton.vue'
</script>

<template>
  <h1>My App</h1>
  <!-- 2. Use it in the template -->
  <my-button />
</template>
```

<!-- .element: class="float-left w-60" -->

 Vue does not enforce the W3C rules for custom tag names (all-lowercase, must contain a hyphen) though following this convention is considered good practice.

<!-- .element: class="credits" -->



### Components Communication in Vue.js

![](images/props-events.png)

<!-- .element: class="float-right w-50" -->

Component receive data through attributes binding by exposing properties.

Component send changes up to the parent by emiting events, to avoid mutations!



### Passing Data with Props

Props (short for "properties") are how you pass data from a parent component down to a child component.

- **`defineProps`**: A macro used in the child component to declare the props it expects to receive.

```vue
<!-- ChildComp.vue -->
<script setup>
const props = defineProps(["message"]);
</script>

<template>
  <p>{{ props.message }}</p>
</template>
```
<!-- .element: class="float-left w-50" -->

```vue
<!-- App.vue -->
<script setup>
import ChildComp from "./ChildComp.vue";
</script>

<template>
  <!-- Pass data to the 'message'
    prop using a v-bind -->
  <child-comp
     :message="'Hello from the parent!'" />
</template>
```

<!-- .element: class="float-right w-50" -->



### Emitting Events

Child components should not directly modify parent state. Instead, they should **emit events** to notify the parent that something happened. The parent then decides how to update its state. This is the "props down, events up" pattern.

- **`defineEmits`**: A macro used in the child to declare the events it can emit.
- **`$emit`**: The function used to trigger an event.



```vue
<!-- ChildComponent.vue -->
<script setup>
// Declare that this component can emit a 'response' event
const emit = defineEmits(["response"])

function sendResponse() {
  emit('response', 'Hello from the child!');   // Emit the event with an optional payload
}
</script>
<template>
  <button @click="sendResponse">Send Response</button>
</template>
```

```vue
<!-- App.vue -->
<script setup>
import { ref } from "vue";
import ChildComponent from "./ChildComponent.vue";
const childMsg = ref("");
function handleResponse(msg) {
  childMsg.value = msg
}
</script>
<template>
  <!-- Listen for the 'response' event with @response -->
  <ChildComponent @response="handleResponse" />
  <p>Message from child: {{ childMsg }}</p>
</template>
```



### Simplifying `v-model` on Components

You can use `v-model` on your own components to create a two-way binding, just like with native inputs. This is useful for creating custom form controls.

<!-- .element: class="small" -->

- **`defineModel`**: A new (Vue 3.4+) macro that makes this easy. It automatically declares a `modelValue` prop and an `update:modelValue` event.

<!-- .element: class="smaller" -->

```vue
<!-- CustomInput.vue -->
<script setup>
// This sets up a v-model binding
const model = defineModel();
</script>

<template>
<!-- use model variable -->
  <input v-model="model" />
</template>
```

<!-- .element: class="float-left w-50" -->

```vue
<!-- App.vue -->
<script setup>
import { ref } from "vue";
import CustomInput from "./CustomInput.vue";

const text = ref("Initial value");
</script>

<template>
  <!-- Now you can use v-model directly -->
  <CustomInput v-model="text" />
  <p>Current value: {{ text }}</p>
  <!-- This is equivalent to: -->
  <CustomInput :modelValue="text"
    @update:modelValue="text = $event" />
</template>
```

<!-- .element: class="float-right w-50" -->




# Implement ISSUE

- Create a ShoppingListItem component
- Create a quantity component
- Delete Items by Quantity
- Clear Completed Items




### Transitions

```html
<transition name="fade">
  <p v-if="show">hello</p>
</transition>

<transition-group name="flip-list" tag="ul">
  <!-- multiple elements / move animations -->
</transition-group>

```

```css
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s
}
.fade-enter-from, .fade-leave-to {
  opacity: 0
}
.flip-list-move, .flip-list-enter-active, .flip-list-leave-active {
  transition: transform 1s;
}
.flip-list-enter-from, .flip-list-leave-to {
  transform: scale(0);
}
```
https://vuejs.org/guide/built-ins/transition.html#css-based-transitions

<!-- .element: class="smaller" -->

https://vuejs.org/guide/built-ins/transition-group.html#move-transitions

<!-- .element: class="smaller" -->




# Implement ISSUE

## List Transitions




# 4. Routing with Vue Router

## Virtual pages in a SPA with Vue



### Vue Router Basics

Vue Router is the official library for adding navigation to your application.

- **`createRouter`**: Creates a router instance where you define your routes.
- **Routes**: A route maps a URL path (e.g., `/about`) to a specific component.
- **`<RouterView>`**: A component that acts as a placeholder, rendering the component for the current URL.
- **`<RouterLink>`**: A component for creating navigation links. It renders as an `<a>` tag but handles navigation without a full page reload.

<!-- .element: class="small" -->

https://router.vuejs.org/guide/#An-example

<!-- .element: class="credits" -->


```js
// main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import the router
const app = createApp(App);
app.use(router); // Tell Vue to use the router
app.mount("#app");
```



```js
// router.js
import { createRouter, createWebHashHistory } from "vue-router";

import AboutView from "../views/AboutView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/about", component: AboutView }
];

const router = createRouter({ history: createWebHashHistory(), routes });
export default router;
```

```vue
<!-- App.vue -->
<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>

  <!-- The component for the current route will be rendered here -->
  <RouterView />
</template>
```



### Route Parameters

You can define dynamic segments in your URL, called "params," to pass data to a route. This is common for detail pages (e.g., a specific user's profile).

- **Dynamic Route**: Define a route with a colon (e.g., `/users/:id`).
- **`useRoute`**: A function that gives you access to the current route object, including its params.



```js
// src/router/index.js
// ...
const routes = [
  // ...
  { path: "/users/:id", component: UserProfileView }
];
// ...
```

```vue
<!-- src/views/UserProfileView.vue -->
<script setup>
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()

onMounted(() => {
  // You can now fetch data for this specific user
  console.log(`Fetching data for user ID: ${route.params.id}`)
})
</script>

<template>
  <h1>User Profile</h1>
  <p>Displaying profile for user #{{ route.params.id }}</p>
</template>
```



### Example Flow of Components and Router


![](images/architecture_vue_general.png)

<!-- .element: class="float-left w-50" -->


![](images/architecture_vue.png)

<!-- .element: class="float-right w-50" -->



### Programmatic Navigation
You can navigate to different routes programmatically using the router instance.
- **`useRouter`**: A function that gives you access to the router instance, allowing you to navigate in code.
- prefer router-link if possible

```vue
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function goToUser(id) {
  router.push(`/users/${id}`)
}
</script>
```



### Lifecycle Hooks

Router also has some hooks

https://router.vuejs.org/guide/essentials/dynamic-matching.html#reacting-to-params-changes

https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards


```javascript
beforeRouteUpdate (to, from, next) {
  // react to route changes...
  // don't forget to call next()
}
```



### Sharing State Across Routes

When your application grows, you'll often need to share state between different pages (components). The simplest way to do this is to extract your reactive state into its own JavaScript file.


This is a basic form of "state management." For more complex scenarios, consider using a dedicated state management library like Pinia.
<!-- .element: class="small" -->


```js
// src/state.js
import { reactive } from "vue";

// Create a reactive object that can be imported anywhere
export const store = reactive({
  user: null,
  cart: []
});

export function login(userData) {
  store.user = userData;
}
```



```vue
<!-- AnyComponent.vue -->
<script setup>
// Import the shared state
import { store } from '../state.js'
</script>

<template>
  <div v-if="store.user">
    Welcome, {{ store.user.name }}
  </div>
    <div v-else>
        Please log in.
        <button @click="login({ name: 'User' })">Log In</button>
    </div>
</template>
```



# Implement ISSUE

### Create router
### Route parameters




## API and Remote Data

Example api: https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc

Chrome DevTools allows to view Network Traffic

![](images/api_devtools.png)



### Testing API advanced requests

Most API require additional header in addition of other request than GET.

![](images/insomnia.png)<!-- .element: class="w-30" --> [Insomnia](https://insomnia.rest/download/#windows) a tool to test apis

![](images/api_insomnia.png)



## API with real data

- https://countapi.xyz/
- https://docs.thedogapi.com/
- https://docs.thecatapi.com/
- https://transport.opendata.ch/docs.html
- http://api.themoviedb.org/3/ //need proxy for api key or cors
- https://www.themealdb.com/api.php
- https://www.thecocktaildb.com/api.php

<!-- .element: class="smaller" -->



### Fetching Data from an API

Most web applications need to fetch data from a server. The browser's `fetch` API is the standard way to do this.

- **`async/await`**: Modern syntax for handling asynchronous operations like API calls, making the code easier to read.
- **Loading State**: It's good practice to track a "loading" state so you can show a spinner or message to the user while the data is being fetched.



```vue
<script setup>
import { ref } from "vue";

const data = ref(null);
const isLoading = ref(false);
const error = ref(null);

async function loadData() {
  isLoading.value = true;
  try {
    const response = await fetch("https://api.thecatapi.com/v1/images/search", {
        headers: {
            'x-api-key': 'DEMO-API-KEY'
        }
    });
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    data.value = await response.json()
  } catch (e) {
    error.value = e.message;
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="error">Error: {{ error }}</div>
  <pre v-else>{{ data }}</pre>
</template>
```




# Implement ISSUE

### Getting Product details from the web




# 5. LLM with Firebase



### Integrating with Third-Party Services (e.g., Firebase)

Services like Firebase provide backend functionality (database, authentication, AI models) that you can easily integrate into your Vue app.

- **Firebase SDK**: You install the Firebase library via `npm` and initialize it with your project's configuration keys.
- **Service Abstraction**: It's a good practice to wrap third-party logic in your own "service" file (e.g., `src/services/firebase.js`). This keeps your components clean and makes it easier to manage the integration.




# Vue.js Advanced Stuff



### Access DOM through Refs

**ref** is used to register a reference to an element or a child component.

```vue
<script setup>
import { ref } from "vue";
const inputRef = ref(null);
function focusInput() {
  if (inputRef.value) {
    inputRef.value.focus();
  }
}
</script>

<template>
    <input ref="inputRef" />
    <button @click="focusInput">Focus Input</button>
</template>
```



### Vue.js more
- Mixins
- Custom Directives
- Slots
- Vue.nextTick
- Plugins
- Server-Side Rendering
- Code Splitting
- Route lazy loading
- State Management: Pinia
- Testing: Vue Test Utils, Jest
- TypeScript support



### Resources

- https://vuejs.org/guide/introduction.html
- https://vuejs.org/api/
- https://www.grafikart.fr/formations/vuejs




# JavaScript Asynchronous Programming



## Asynchronous programming techniques

JavaScript relies on asynchronous
programming:

* The JS engine is single-threaded. For this reason, IO operations have to be non-blocking.
* An event loop is used both in the browser and on the server (node.js):
  * As the program executes, events are added to a queue. Every event has an associate callback function.
  * A dispatcher takes the next event in the queue and invokes the callback function (on the single thread).
  * When the callback function returns, the dispatcher takes the next event in the queue, and continues forever (it’s an event loop).

<!-- .element: class="small" -->



### Callback

```javascript
setTimeout( function() {
    console.log("the callback has been invoked");
}, 2000);
```

An event will be added to the queue in 2000 ms. In other
words, the function passed as the first argument will be invoked
in 2 seconds or more (the thread might be busy when the event
is posted...).

<!-- .element: class="small" -->

```javascript
$(document).mousemove( function(event) {
    $("span").text(event.pageX + ", " + event.pageY);
});
```

An event will be added to the queue whenever the mouse
moves. In each case, the callback function has access to the
event attributes (coordinates, key states, etc.).

<!-- .element: class="small" -->



```javascript
$.get( "ajax/test.html", function( data ) {
    $( ".result" ).html( data );
    alert( "Load was performed." );
});
```

An event will be added when the AJAX request has been
processed, i.e. when a response has been received. The
callback function has access to the payload.


## Beyond simple callbacks...

* The principle of passing a callback function when invoking
an asynchronous operation is pretty straightforward.

* Things get more tricky as soon as you want to coordinate
multiple tasks. Consider this simple example...

Do this first...

... when done, do this.



### A first attempt...

```javascript
var milkAvailable = false;

function milkCow() {
  console.log("Starting to milk cow...");
  setTimeout(function() {
    console.log("Milk is available.");
    milkAvailable = true;
  },  2000);
}

milkCow();
console.log("Can I drink my milk? (" + milkAvailable + ")");
```

FAIL
<!-- .element: class="fragment error" -->



### Fixing the issue with a callback...

```javascript
var milkAvailable = false;

function milkCow(done) {
  console.log("Starting to milk cow...");
  setTimeout(function() {
    console.log("Milk is available.");
    milkAvailable = true;
    done();
  }, 2000);
}

milkCow( function() {
  console.log("Can I drink my milk? (" + milkAvailable + ")");   
});
```

SUCCESS
<!-- .element: class="fragment success" -->



### Beyond simple callbacks...

* Ok... but what happens when I have more than 2 tasks that I want to execute in sequence?

* Let’s say we want to have the sequence B, C, D, X, Y, Z, E, F, where X, Y and Z are asynchronous tasks.

```js
function f() {
  syncB();
  syncC();
  syncD();
  asyncX();
  asyncY();
  asyncZ();
  syncE();
  syncF();
}
```

<!-- .element: class="float-left w-40" -->

```
B  result  available
C  result  available
D  result  available
E  result  available
Z  result  available
Y  result  available
F  result  available
X  result  available
```
<!-- .element: class="fragment float-right w-40" -->



### Sequence with callbacks

```javascript
function f() {
  syncB();
  syncC();
  syncD();
  asyncX(function() {
    asyncY(function() {
      asyncZ(function() {
        syncE();
        syncF();
      });
    });
  });
}
```
<!-- .element: class="float-left w-40" -->


```
B  result  available
C  result  available
D  result  available
X  result  available
Y  result  available
Z  result  available
E  result  available
F  result  available
```
<!-- .element: class="fragment float-right w-40" -->


But welcome to the **"callback hell"** aka **"callback pyramid"**

<!-- .element: class="clear fragment" -->



### Callback parallel tasks
* Now, let's imagine that we have 3 asynchronous tasks. We want to invoke them in parallel and wait until all of them complete.
* Typical use case: you want to send several AJAX requests (to get different data models) and update your DOM once you have received all responses.

<!-- .element: class="small" -->

```javascript
function f( done ) {
 async1( function( r1 ) {
    reportResult( r1 );
  });
  async2( function( r2 ) {
    reportResult(r2);
  });
  async3( function( r3 ) {
    reportResult( r3 );
  })
  done();
}
```

<!-- .element: class="" -->

Double fail: not only is done() invoked to early, but also there is no result to send back...

<!-- .element: class="fragment error" -->



### Callback parallel tasks with counter

```javascript
function f( done ) {
  <span class="fragment highlight-current-red" data-fragment-index="1">var numberOfPendingTasks = 3;</span>
  var results = [];
  <span class="fragment highlight-current-red" data-fragment-index="2">
  function reportResult( result ) {
    result.push( result );
    numberOfPendingTasks ‐= 1;
    if ( numberOfPendingTasks === 0 ) {
      done( null, results );
    }
  }
  </span><span class="fragment highlight-current-red" data-fragment-index="3">
  async1( function( r1 ) {
    reportResult( r1 );
  });
  async2( function( r2 ) {
    reportResult( r2 );
  });
  async3( function( r3 ) {
    reportResult( r3 );
  });</span>
}
```

<!-- .element: class="parse-fragment float-left w-50" -->

When this reaches 0, I know that all the tasks have completed. I can
invoke the "done" callback function that I received from the client. I
can pass the array of results to the function.

<!-- .element: class="smaller float-right w-40" -->

When a task completes, it invokes this function and passes its result.
The result is added to the array and the number of pending tasks is
decremented.

<!-- .element: class="smaller float-right w-40"  -->

The three tasks are asynchronous, so they pass their own callback
functions and receive a result when the operation completes.

<!-- .element: class="smaller float-right w-40"  -->



# Async libs to the rescue: Promise



A **promise** must be in **one of three states**: *pending*, *fulfilled*, or *rejected*.

When *pending*, a promise:
  - may transition to either the *fulfilled* or *rejected* state.

When *fulfilled*, a promise:
  - **must not transition** to any other state.
  - must have a **value**, which must not change.

When *rejected*, a promise:
  - **must not transition** to any other state.
  - must have a **reason**, which must not change.

https://github.com/promises-aplus/promises-spec

<!-- .element: class="credits" -->



**A promise must provide a then method to access its current or eventual value or reason.**
A promise's `then` method accepts two arguments:
- `promise.then( onFullfilled,  onRejected )`
- If `onFulfilled` is a function:
  - it must be called after promise is *fulfilled*, with promise's value as its first argument.
  - it must not be called before promise is *fulfilled*.
  - it must not be called more than once.

- If `onRejected` is a function,
  - it must be called after promise is *rejected*, with promise's reason as its first argument.
  - it must not be called before promise is *rejected*.
  - it must not be called more than once

<!-- .element: class="small" -->

https://github.com/promises-aplus/promises-spec

<!-- .element: class="credits" -->



**then must return a promise.**

`promise2  = promise1.then(onFulfilled, onRejected);`

- If either onFulfilled or onRejected returns a value x, run the Promise Resolution Procedure Resolve(promise2, x).
- If either onFulfilled or onRejected throws an exception e, promise2 must be rejected with e as the reason.
- If onFulfilled is not a function and promise1 is fulfilled, promise2 must be fulfilled with the same value as promise1.
- If onRejected is not a function and promise1 is rejected, promise2 must be rejected with the same reason as promise1.

<!-- .element: class="small" -->

https://github.com/promises-aplus/promises-spec

<!-- .element: class="credits" -->



### Promise in ECMAScript 2015

```javascript
const promise = new Promise(function(resolve, reject) {
  // do a thing, possibly async, then…

  if (/* everything turned out fine */) {
    resolve("Stuff worked!");
  }
  else {
    reject(Error("It broke"));
  }
});

promise.then(function(result) {
  console.log(result); // "Stuff worked!"
}, function(err) {
  console.log(err); // Error: "It broke"
});
```

https://developers.google.com/web/fundamentals/getting-started/primers/promises

<!-- .element: class="credits" -->



Chaining Transforming values
```javascript
const promise = new Promise(function(resolve, reject) {
  resolve(1);
});

promise.then(function(val) {
  console.log(val); // 1
  return val + 2;
}).then(function(val) {
  console.log(val); // 3
})
```


Wait for all
```javascript
Promise.all(arrayOfPromises).then(function(arrayOfResults) {
  //...
})
```

https://developers.google.com/web/fundamentals/getting-started/primers/promises

<!-- .element: class="credits" -->




### Using Material instead of bootstrap

https://quasar.dev/start/vite-plugin

Read the docs, copy examples, ...




### Web App Manifest

Web App Manifests are one of the key pieces to making your web app look and feel like a native app

https://tomitm.github.io/appmanifest/

- Add to Homescreen
- Fullscreen
- Notifications
- Meta viewport
- Colors
- Zoom, touch interactions




# Synchronised persistent datastorage
## Firebase Database



### Install Firebase

```sh
$ npm install -g firebase-tools
```

Available commands: login, init, serve, deploy

Integration with Vue.js
```sh
$ npm install firebase --save
```

To use login UI for firebase authentification

```sh
$ npm install firebaseui --save
```
https://github.com/firebase/FirebaseUI-Web



### Documentation

- https://firebase.google.com/
- https://firebase.google.com/docs/web/setup#add-sdks-initialize
- https://firebase.google.com/docs/auth/web/github-auth

<!-- .element class="smaller" -->


```javascript
// plugins/firebase.js
import Vue from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";
// import "firebase/compat/storage";
// import "firebase/compat/firestore";

// Initialize Firebase
// Copy from google firebase console (Authentication>Web Setup)
const config = {
  apiKey: "AIzaSyDZt98CIUYUBPeW32wvtA5hWOFlSLp03C0",
  authDomain: "ptw.firebaseapp.com",
  databaseURL: "https://ptw.firebaseio.com",
  projectId: "firebase-ptw",
  storageBucket: "firebase-ptw.appspot.com",
  messagingSenderId: "281865054216",
  appId: "1:281865054216:web:e2d79f491c1cc7d1"
};
export default firebase.initializeApp(config);
```



### Lab: Firebase Messages

```javascript
import firebase from "@/plugins/firebase";
const $firebaseRefs = {
  messages: firebase.database().ref("/demo/messages"),
};
export default {
  data() {
    return {
      newMsg: "",
      messages: [],
    };
  },
  mounted() {
    $firebaseRefs.messages.on("value", this.updateMessages);
  },
  unmounted() {
    $firebaseRefs.messages.off("value", this.updateMessages);
  },
  methods: {
    updateMessages(snapshot) {
      const items = snapshot.val();
      this.messages = Object.keys(items).map((key) => {
        return {
          ".key": key,
          ...items[key],
        };
      });
    },
    send() {
      $firebaseRefs.messages.push({ txt: this.newMsg });
      this.newMsg = "";
    },
    remove(p) {
      $firebaseRefs.messages.child(p[".key"]).remove();
    },
  },
};
```



### Lab: Firebase Game

https://gist.github.com/bfritscher/f15258ad2161eda24a32159632738bcc



### Setup Firebase User Security

```javascript
{
    "rules": {
       "users": {
      "$uid": {
        // grants write access to the owner of this user account whose uid must exactly match the key ($uid)
        ".write": "auth !== null && auth.uid === $uid",
        ".read": "auth !== null && auth.uid === $uid"
        }
      }
    }
}
```

https://firebase.google.com/docs/database/security/quickstart




### Firebase Login:

https://gist.github.com/bfritscher/dea68fd13dbd172647eb60ebe5a2c3e5




![](images/buzz.jpg)

<!-- .element: class="center" -->
