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




# Tooling

![](images/yeoman-packages.png)<!-- .element: class="w-40" -->



### Editors

Exists in all form: from notepad.exe to full IDE: [WebStorm](https://www.jetbrains.com/webstorm/)

![](images/notepad.png)<!-- .element: class="w-40 float-left" -->

![](images/webstorm.png)<!-- .element: class="w-60 float-left" -->

In between: [Notepad++](https://notepad-plus-plus.org/), [Visual Studio Code](https://code.visualstudio.com/),  [Brackets](https://brackets.io/)
<br/>Online editors: [CodeSandbox](https://codesandbox.io), [StackBlitz](https://stackblitz.com/), [Cloud9](https://c9.io/), [Eclipse Che](http://www.eclipse.org/che/)
<br/>Browser integrated (F12): [Chrome DevTools](https://developer.chrome.com/devtools)




<iframe src="https://roadmap.sh/frontend" width="100%" height="100%"></iframe>

<!-- .element: class="center" -->

https://github.com/kamranahmedse/developer-roadmap

<!-- .element: class="credits" -->




### Preprocessors

A preprocessor is a program that processes its input data to produce output, that is used as input to another program

**CSS preprocessor:** Less, Sass, Stylus, ...

**JS preprocessor:** CoffeeScript, TypeScript, ECMAScript 2015 (ES6) (Traceur and Babel), ...

**HTML preprocessor:** Jade, Haml, Handlebars, ...

**Script loader:** Require, Webpack, ...

**Test framework:** Jasmine, Mocha, Qunit, ...



![](images/build_pipline.png)



### Example of Pre-Processors

[https://jsbin.com/mumavu/9/edit?html,css,js](https://jsbin.com/mumavu/9/edit?html,css,js)




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
* Project Tempaltes for vue, react, ...




## Lab 1: Vue.js

Setup a local Vue.js project

![](images/yeoman-packages.png)<!-- .element: class="w-30" -->



### Step 0: Install development environment

Download and install [Node.js](https://nodejs.org/) to get `npm`.

Download and install [Git](https://git-scm.com/download/win) to get `git`.

Download and install [Visual Studio Code](https://code.visualstudio.com/) to get `code`.


Check that it works from the shell:

```sh
$ git --version
git version X.Y.Z

$ node --version
vX.Y.Z

$ code --version
X.Y.Z
...
x64
```



### Step 1: Create a new project

First change to a parent folder in which the project folder will be created.
<!-- .element: class="red smaller" -->

Use vue/vite to create a new project.

```sh
C:\temp> npm init vue@latest
```

![](images/vue-create.png)<!-- .element: class="w-80" -->

<!-- .element: class="center" -->



### Step 2: Install Extensions

Change into the directory and launch vscode
```sh
$ cd labo-vue
$ code .
```

- install [vscode Vue Volar extension](vscode:extension/Vue.volar)
- install [vscode Prettier extension](vscode:extension/esbenp.prettier-vscode)
- install [vscode eslint extension](vscode:extension/dbaeumer.vscode-eslint)

- install [vue chrome devtool extension](https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)



### Step 3: Install dependencies

Must be done inside the project's root folder!
<!-- .element: class="red smaller" -->

```sh
$ npm install
```

This will read `package.json` and update `node_modules` folder.



### Step 4: Preview your app in the browser


Start the development server
```sh
npm run dev
```

edit a file and watch livereload in action.

For example add `<h1>Test vue!</h1>` to `<body>` in `./index.html`.
<!-- .element: class="small" -->

Stop the server with `ctrl+c`
<!-- .element: class="red" -->



### Step 5: Cleanup

- Delete `src/assets/base.css`
- Empty  `src/assets/main.css`
- Replace `src/App.vue` with this code:

```html
<template>
  <div class="container">
    <h1>Hello Bootstrap</h1>
    <div class="row">
      <div class="col-sm">
        <button class="btn btn-primary">{{ message }}</button>
      </div>
      <div class="col-sm">
        <i class="fas fa-ice-cream display-1 text-primary"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Hello Vue!",
    };
  },
};
</script>

<style></style>
````



### Step 6: Setup bootstrap and fontawesome

Check package.json (before and after)

1. Add dependencies

```sh
$ npm install --save bootstrap @popperjs/core
$ npm install --save @fortawesome/fontawesome-free
```


2. Inside `src/main.js` add imports

```javascript
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
```



### Step 6: Try more fontawesome

Check that the icon works:

<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ice-cream" class="svg-inline--fa fa-ice-cream fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#dc3545" d="M368 160h-.94a144 144 0 1 0-286.12 0H80a48 48 0 0 0 0 96h288a48 48 0 0 0 0-96zM195.38 493.69a31.52 31.52 0 0 0 57.24 0L352 288H96z"></path></svg>

<!-- .element: class="w-15" -->

Add another icon to the `App.vue template inside the button`

https://fontawesome.com/icons

```html
<i class="fa-solid fa-cake-candles"></i>
```



### Step 7: Use npm to install other packages

Lets try another bootstrap look.

```sh
npm install bootswatch --save
```

https://bootswatch.com/

try different CSS files from bootswatch in `main.js`

```javascript
import "bootswatch/dist/darkly/bootstrap.min.css";
```




### Test linting

We installed two linter:

- Prettier for code formatting
- ESLint for code quality

Run the command and check how the files are changed.

```sh
$ npm run lint
```

Copy this line into main.js and see what happens.

```js
let myvar = 'Hello World'
```

Check the PROBLEMS tab of vscode
(right-click to fix problem).




# Multi Page App<br/>vs<br/>Single Page Application (SPA)



![](images/multipage_app.png)



![](images/spa.png)



There is a big trend towards “single-page applications”, where some of the
responsibilities are moved from the server to the client side.

* The client initially fetches a single “shell” page, which provides a rendering
context and loads application modules (scripts, markup partials, stylesheets, etc.).
* When the user clicks on hyperlinks, the browser does not (immediately) send an
HTTP request to fetch a new page. Instead, the event is caught and processed by
a JavaScript router on the client side.
* Routing is done on the client side. The JavaScript router (typically provided by
an application framework) looks at the target URL and decides which JavaScript
function needs to be invoked. This function can update the DOM, sometimes in
drastic manners (giving the impression that we move from an “Customers List”
page to a “Customer Details” page).

<!--- .element: class="small" -->



![](images/8-1-ajax-pattern.png)<!--- .element: class="w-40" -->

<!--- .element: class="center" -->

http://www.websiteoptimization.com/secrets/ajax/8-1-ajax-pattern.html
<!--- .element: class="credits" -->




# Paper to WWW


![](images/web_development_process.jpg)

<!-- .element class="center" -->


Note:

Mobile application developement can also be done wiht HTML/CSS/JavaScript, with this kind of application and then be packaged into a native app with a webview.




# Objectifs

* Learn SPA with Vue.js
* Learn by Example: CatList App
* Only focus on frontent-app
* With API's <span class="smaller">and some cloud functions ("serverless")</span>

![](images/project_cat.png)<!-- .element: class="w-50" -->



![](images/shop-mobile.png)<!-- .element: class="w-20" -->
![](images/shop-desktop.png)<!-- .element: class="w-60" -->




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

https://www.jetbrains.com/lp/devecosystem-2020/

<!-- .element: class="credits"-->



![](images/java_web_frameworks.png)

https://www.jetbrains.com/lp/devecosystem-2020/java/

<!-- .element: class="credits"-->



![](images/2021-star-history.png)

<!-- .element: class="w-80"-->

https://www.codeinwp.com/blog/angular-vs-vue-vs-react/

<!-- .element: class="credits"-->


https://www.valuecoders.com/blog/technology-and-apps/vue-js-comparison-angular-react/

<!-- .element: class="credits"-->




![](images/angular_feelings.png)




### Vue.js a Model View ViewModel (MVVM) framework

![](images/mvvm.png)



# [Guide Vue.js](https://vuejs.org/guide/introduction.html)



### Vue constructor and text interpolation

HTML

<!-- .element: class="w-40 float-left" -->

Javascript

<!-- .element: class="w-40 float-right" -->

```html
<div id="app">
  {{ message }}
</div>


<script
src="https://unpkg.com/vue@3">
</script>
```
<!-- .element: class="w-40 float-left" -->


```javascript
Vue.createApp({
    data() {
        return {
        message: 'Hello Vue!'
        };
    }
}).mount('#app');
```
<!-- .element: class="w-40 float-right" -->



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




### Some Directives

| Directive         | Description |
|-------------------|-------------|
| v-model           | Create a two-way binding on a form input element or a component. |
| v-bind            | Dynamically bind one or more attributes, or a component prop to an expression. |
| v-if, v-else-if, v-else   | Conditionally render the element based on the truthy-ness of the expression value. |
| v-for             | Render the element or template block multiple times based on the source data. |
| v-on:click        | Attaches an event listener to the element. |


https://vuejs.org/api/built-in-directives.html#built-in-directives

<!-- .element: class="credits" -->




### Directive v-model data-bind input elements

```html
<div id="app">
  <p><label>Nom: <input v-model="name"></label></p>
  <p>Hello {{name}}</p>
</div>

<script src="https://unpkg.com/vue@3"></script>
```

```javascript
Vue.createApp({
  data() {
    return {
      name: ''  // Important attribute must exist on data object!
    };
  }
}).mount('#app');
```



### Directive v-model modifiers

.trim - trim input<br>
.lazy -  sync after change event

```html
<div id="app">
  <p><label>Nom: <input v-model.trim.lazy="name"></label></p>
  <p>Hello {{name}}</p>
  <pre>{{name}}</pre>
</div>

<script src="https://unpkg.com/vue@3"></script>
```

```javascript
Vue.createApp({
  data() {
    return {
      name: ''
    };
  },
}).mount('#app');
```

https://vuejs.org/guide/essentials/forms.html#modifiers

<!-- .element: class="credits" -->



### Directive v-model modifiers

.number - cast input string to numbers

```html
<div id="app">
  <p>
    <label>Num1: <input v-model.number="num1" type="number"></label> +
    <label>Num2: <input v-model.number="num2" type="number"></label>
    = {{ num1 + num2 }}
  </p>
</div>

<script src="https://unpkg.com/vue@3"></script>
```

```javascript
Vue.createApp({
  data() {
    return {
      num1: 4,
      num2: 2
    };
  },
}).mount('#app');
```

https://vuejs.org/guide/essentials/forms.html#number

<!-- .element: class="credits" -->




### Directive show / hide elements

Conditionally render the element based on the truthy-ness of the expression value.
```html
<div v-if="type === 'A'"> A </div>
```

Toggle’s the element’s display CSS property based on the truthy-ness of the expression value.
```html
<div v-show="type === 'B'"> B </div>
```



```html
<div id="app">
  <p><label>Nom: <input v-model="type"></label></p>
  <div v-if="type === 'A'"> A </div>
  <div v-show="type === 'B'"> B </div>
</div>

<script src="https://unpkg.com/vue@3"></script>
```

```javascript
Vue.createApp({
  data() {
    return {
      type: 'A'
    };
  },
}).mount('#app');
```



### Directive conditional
```html
<div v-if="type === 'A'">
  A
</div>

<div v-else-if="type === 'B'">
  B
</div>

<div v-else-if="type === 'C'">
  C
</div>

<div v-else>
  Not A/B/C
</div>
```




### Directive repeat elements

```html
<div v-for="item in items">
  {{ item.text }}
</div>
<div v-for="(val, index) in array"></div>
<div v-for="(val, key) in object"></div>
<div v-for="(val, key, index) in object"></div>
```

`v-bind:key="item.id"` needed on custom elements or for move ordering purpose

<!-- .element: class="small" -->



```html
<div id="app">
  <ul>
    <li v-for="name in names">{{ name }}</li>
  </ul>
</div>

<script src="https://unpkg.com/vue@3"></script>
```

```javascript
Vue.createApp({
  data() {
    return {
      names: ['Fred','Alice', 'Bob']
    };
  },
}).mount('#app');
```




### Vue Instance Methods

- Runs whenever an update occurs
- Not cached
- Getter/setter
- Typically invoked from v-on/@, but flexible



```html
<div id="app">
  <button v-on:click="addOne">Click Me!</button> {{count}}
</div>

<script src="https://unpkg.com/vue@3"></script>
```

```javascript
Vue.createApp({
  data() {
    return {
      count: 0
    };
  },
  methods: {
    addOne() {
      this.add(1);
    },
    add(nb) {
      this.count += nb;
    }
  }
}).mount('#app');
```



### Methods and Events

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



```html
<div id="app">
  <form v-on:submit.prevent="onSubmit"></form>

  <!-- chain modifiers -->
  <button @click.stop.prevent="showCoordinates($event)">Where did you click?</button>

  <!-- key modifier using keyAlias -->
  <input @keyup.enter="onEnter">
</div>

<script src="https://unpkg.com/vue@3"></script>
```

```javascript
Vue.createApp({
  data() {
    return {
      count: 0
    };
  },
  methods: {
    showCoordinates(evt) {
      console.log(evt.clientX, evt.clientY);
    },
    onEnter() {window.alert('hello');},
    onSubmit() {}
  }
}).mount('#app');
```






### Exercice Vue.js: model, if, for
Editer App.vue pour créer la page suivante :

![](images/exo_vue_01.jpg)<!-- .element: class="w-30" -->

<!-- .element: class="center box" -->

- Cliquer sur « Ajouter » ajoute le montant qui se trouve dans l’input à une liste en dessous.
- Si le montant n’est pas supérieur à 0 il faut indiquer un message d’erreur, autrement le message est caché.
- On peut effacer un élément de la liste avec le bouton « X »

<!-- .element: class="small" -->




# Lab 2: deploy to github pages

![](images/yeoman-ship.png)<!-- .element: class="w-30" -->



### Step 0: Install

Create a [github.com](https://github.com) account and install [git-scm.com](https://git-scm.com/download/win) to have a version of `git`.



### Step 0: Use LF also on windows

Create `.gitattributes` with content:

```txt
# Force all line endings to be \n
* text eol=lf

############################################################
# git can corrupt binary files if they're not set to binary.
############################################################

# Apple office documents are actually folders, so treat them as binary.
*.numbers binary
*.pages binary
*.keynote binary

# Image files
*.png binary
*.jpg binary
*.jpeg binary
*.gif binary
*.webp binary
*.ico binary

# Movie and audio files
*.mov binary
*.mp4 binary
*.mp3 binary
*.flv binary
*.ogg binary

# Compression formats
*.gz binary
*.bz2 binary
*.7z binary
*.zip binary

# Web fonts
*.ttf binary
*.eot binary
*.woff binary
*.otf binary

# Other
*.fla binary
*.swf binary
*.pdf binary

############################################################
# End binary settings
############################################################
```



### Step 1: Git Main

- Create github repository [labo-xyz](https://classroom.github.com/a/KHAPN3aT)
- Init a git repository
- Add and Commit your code.
- Add remote
- Push your code to Github.



### Step 2: Production version test

Create a built, mimified version of your page with your .
```sh
npm run build
```
*Notice that you have a dist folder with this new content.*

Test production version with:
```sh
npm run preview
```



### Step 3: Deploy static site on Github

Github offers to serve static web pages https://pages.github.com/

There are two options:

- User site: http://usernameABC.github.io by creating a special repository with the name: usernameABC.github.io
- Projet site: http://usernameABC.github.io/repositoryYXZ by creating a special branch gh-pages inside the repositoryXYZ


Note:

A special CNAME file can be put at the root of gh-pages to use a custom domain name.



## Setup Github and gh-pages via Github Actions

- configure github Actions to build and deploy to gh-pages
- configure vue to support /labo-xyz/ in production
- commit and push



### Github Action Config

- create folder `.github\workflows`
- add this file `build_deploy.yml`

```yml
name: Build and Deploy to GH-Pages

on:
  push:
    branches:
      - master
      - main

jobs:
  build_deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Code
        uses: actions/checkout@v2

      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '16'

      - name: Cache dependencies
        uses: actions/cache@v2
        with:
          path: ~/.npm
          key: ${{ runner.os }}-node-${{ hashFiles('**/package-lock.json') }}
          restore-keys: |
            ${{ runner.os }}-node-
      - run: npm ci
      #- run: npm test
      - run: npm run build

      - name: deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist

```



### Configure Vite publicPath
Edit `vite.config.js` file to handle subfolder deployment.
```sh
export default defineConfig({
  ...,
  base: process.env.NODE_ENV === "production" ? "/labo-test/" : "/",
});
```



### Try to deploy

After a successful ```npm run build``` commit all changes and push:
```sh
git add . --all
git commit
git push
```

The site can be accessed at: https://heg-web.github.io/labo-test/ when action workflow is finished.

<!-- .element: class="small" -->



### You did it!

Your First Single Page Web Application is deployed in Production!

![](images/youdidit.gif)




### Directive dynamique attributes

Dynamically bind one or more attributes, or a component prop to an expression.

```html
<div v-bind:attributes=""></div>

<img v-bind:src="'/base/' + n + '.jpg'">
```

A short form exists

```html
<div :attributes=""></div>

<img :src="'/base/' + n + '.jpg'">
```



### Directive bind multiples attributes

```html
<div :attr1="" :attr2=""></div>

<div v-bind="{attr1: '', attr2: ''}"></div>
```



### Directives bind dynamic css classes

```html
<div v-bind:class="{ active: isActive }"></div>
```

|          |                                       |
|----------|---------------------------------------|
| string   | :class="'classString'"                |
| variable | :class="classNameVariable"            |
| array    | :class="[classVarA, 'classNameB']"    |
| object   | :class="{className: someBooleann}"    |
| ternary  | :class="bool ? 'active' : 'inactive'" |
| method   | :class="classNameReturningFunction()" |

https://speakerdeck.com/bhawkes/introduction-to-vue-js?slide=27

<!-- .element: class="credits" -->




### Computed Properties

- Runs only when a dependency has changed
- Cached
- Should be used as a property, in place of data

```html
<div id="app">
  <p>{{date1}} {{date2()}} {{count}}</p>
  <button @click="count+=1">render</button>
</div>

<script src="https://unpkg.com/vue@3"></script>
```

```javascript
Vue.createApp({
  data() { return { count: 0 };
  },
  computed: {
    date1() { return new Date(); }
  },
  methods: {
    date2() { return new Date(); }
  }
}).mount('#app');
```



### Computed Properties Setter

Computed properties are by default getter-only, but you can also provide a setter when you need it:

```javascript
// ...
computed: {
  fullName: {
    // getter
    get() {
      return this.firstName + ' ' + this.lastName;
    },
    // setter
    set(newValue) {
      const names = newValue.split(' ');
      this.firstName = names[0];
      this.lastName = names[names.length - 1];
    }
  }
}
// ...
```




### Vue Concepts Summary

| Vue.js Concepts      | Description                                                              |
|----------------------|--------------------------------------------------------------------------|
| ViewModel            | the data shown to the user in the view and with which the user interacts |
| View                 | what the user sees (the DOM)                                             |
| Template             | HTML with additional markup                                              |
| Directives           | extend HTML with custom attributes and elements                          |
| Components           | a special kind of tag used for component-based application structure     |
| Expressions          | access variables and functions from the ViewModel                        |
| Computed             | Computed properties are cached, and only re-computed on reactive dependency changes  |
| Methods              | Methods to be mixed into the Vue instance                                |




### Exercice Vue.js: computed and methods
Editer App.vue pour créer la page suivante (avec des computed et des methods):

![](images/exo_vue_02.jpg)<!-- .element: class="w-30" -->

<!-- .element: class="center box" -->

- Récent ou Top filtre la liste selon les dernier ajouté d'abord ou de valeur décroissante.
- L'affichage des montants est tranformé pour toujours afficher 2 chiffres après la virgule et CHF.
- Ajouter une image du niveau: level 1 jusqu'à 10 level 2 jusqu'à 20 puis 3.
```https://gistcdn.githack.com/bfritscher/6ff8e74b80d44616944843fe83cc5d19/raw/2d4e25748fbbe681681932444a7ef339c90d4dde/chevron_${level}.svg```

<!-- .element: class="smaller" -->




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



```html
<div id="app">
  <my-tag></my-tag>
</div>

<script src="https://unpkg.com/vue@3"></script>
```

```javascript
app = Vue.createApp({});
app.component('my-tag', {
  template: `<div>{{ text }}<div>`,
  data() {
    return {
      text: 'Hello From My Tag!'
    }
  }
});
app.mount('#app');
```

> Note that Vue does not enforce the W3C rules for custom tag names (all-lowercase, must contain a hyphen) though following this convention is considered good practice.

<!-- .element: class="small" -->



### Components using .vue

![](images/vue-format.png)

https://speakerdeck.com/bhawkes/introduction-to-vue-js

<!-- .element: class="credits" -->



### Global vs Local Registrations

Global

```javascript
app.component('my-component', {
  // options
})
```

Local

```javascript
import MyTag from './components/MyTag';
const Child = {
  template: '<div>A custom component!</div>'
}
Vue.createApp({
  // ...
  components: {
    // <my-component> will only be available in parent's template
    'my-component': Child,
    'my-tag': MyTag // shorthand MyTag possible
  }
}).mount('#app');
```



### Components Communication in Vue.js

![](images/props-events.png)

<!-- .element: class="float-right w-50" -->

Component receive data through attributes binding by exposing properties.

Component send changes up to the parent by emiting events, to avoid mutations!



### Components Properties in Vue.js

In javascript use **camelCasing**, which will be converted to **kebab-case** in HTML.

In compoonent expose properties
```javascript
{
  //...
  props: ['myprop', 'myProp2'],
  // ...
  mounted(){
    this.myProp2;
  }
}
```

```html
<my-comp v-bind:myprop="" :my-prop2></my-comp>
```

Warning: changing an attribute of a bound object mutates it's state outside the scope of the component.



### Components Emitting Events

Define
```javascript
app.component('myCheckbox', {
  emits: ['hello'],
  methodes: {
    change() {
      this.$emit('hello', 'world');
    }
  },
  template: `<label>{{name}} <span @click="change">✓</span></label>`
});
```

Use

```html
<my-checkbox @hello="doSomethingWithWorld"></my-checkbox>
```



### Complet Component Example

```html
<div id="app">
  <my-countdown v-bind:start="count" v-on:zero="alarm()"></my-countdown>
</div>
<script src="https://unpkg.com/vue@3"></script>
```

```javascript
// Vue component
MyCountdown = {
  template: `<div v-on:click="countDown()">{{ count }}</div>`,
  props: ['start'],
  emits: ['zero'],
  data() {
    return {
      count: this.start
    };
  },
  methods: {
    countDown() {
      if (this.count <= 0) return;
      this.count = this.count -1;
      if(this.count === 0) {
        this.$emit('zero');
      }
    }
  }
};
// Main Vue instance
Vue.createApp({
  data() {
    return {
      count: 10
    };
  },
  methods: {
    alarm(){
      window.alert('Done');
    }
  },
  components: { // local component reference
    'my-countdown': MyCountdown
  }
}).mount('#app');
```




### Components Properties Validation in Vue.js

Define
```javascript
app.component('myCheckbox', {
  props: {
    isOk: {
      type: Boolean,
      required: true,
      default: false
    },
    name: {
      type: String,
      required: true,
      default: 'Bob'
    }
  },
  template: `<label>{{name}} <span v-if="isOk">✓</span></label>`
});
```

Use

```html
<my-checkbox :is-ok="booleanValue"></my-checkbox>
```



### Components Properties Validation GOTCHA

Objects and arrays need their defaults to be returned from a function:

```javascript
text: {
  type: Object,
  default: function () {
    return { message: 'hello mr. magoo' }
  }
}
```

[Example](https://codepen.io/sdras/pen/63d98696878200f6c0e987cd58341c39)


To listen for a native event on the root element of component, .native has to be added:
<!-- .element class="small" -->
`<my-checkbox @click.native="doSomething"></my-checkbox>`
<!-- .element class="small" -->
 By default, v-model on a component uses **value** as the prop and **input** as the event
<!-- .element class="small" -->




### Custom Events

Events can also be used to communicated between components.
Vue.js events do not *bubble up* or *trickle down* the tree.

We attach and emit on a common object for example the **$root**.

```javascript
// in component A
const clickHandler = clickCount => {
  console.log(`Oh, that's nice. It's gotten ${clickCount} clicks! :)`)
}
this.$root.$on('i-got-clicked', clickHandler);

// in component B
this.$root.$emit('i-got-clicked', this.clickCount);

// in component A to stop listening
// Stop listening.
this.$root.$off('i-got-clicked', clickHandler);
```




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




### Exercice Vue.js: components
Transformer (Refactor) l'application en composant selon:

![](images/exo_vue_03.jpg)<!-- .element: class="w-40" -->

<!-- .element: class="center box" -->

- Créer une fonction reutilisable toChf() qui retourne un nombre formaté en chf.
- Ajouter, transformer le code, pour que l'application fonctionne encore de la même façon.

<!-- .element: class="small" -->



### Exercice Vue.js: transitions

Ajouter des effets de transitions au message et à la liste:

![](images/exo_vue_04.gif)<!-- .element: class="w-40" -->

<!-- .element: class="center box" -->




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




### Lifecycle Hooks

https://vuejs.org/guide/essentials/lifecycle.html

created, mounted, unmounted, ...

![](images/lifecycle.png)

<!-- .element: class="w-40 right top" -->




### Exercice Vue.js: localStorage

Persister les données localement

- Sauvegarder dans le localstorage la liste à chaque fois que celle-ci change.
- Au chargement de la page, s'il y a une liste sauvegardé dans le localstorage, alors récupérer cette valeur.




# Multiples Views and Router

A SPA has to support multiple virtual views to simulate pages.

This can be achieved with a router, routes and components.



```javascript
const router = createRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/user/:id', name: 'user', component: User }
  ]
});
```

```html
<!-- will host the component corresponding to the route -->
<router-view></router-view>

<!-- Vue instance has a special property with route params -->
<div>{{ $route.params.id }}</div>

<!-- create links by lookup of the route -->
<router-link :to="{ name: 'user', params: { id: 123 }}">User</router-link>
```

```javascript
// changing route in code.
this.$router.push({ name: 'user', params: { id: 123 }})
```



### Example Flow of Components and Router


![](images/architecture_vue_general.png)

<!-- .element: class="float-left w-50" -->


![](images/architecture_vue.png)

<!-- .element: class="float-right w-50" -->



### $route.params vs component props

Using $route in your component creates a tight coupling with the route (views not reusable components).

$route.params are visible in the URL and string only!

Props are parameters of a component to pass down variables of any type.

It is possible to [Pass Props to Route Components](https://router.vuejs.org/guide/essentials/passing-props.html) to decouple them.

<!-- .element: class="smaller" -->



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




### Exercice Vue.js: router

Remplacer `createWebHistory` avec `createWebHashHistory` dans `src/router/index.js`

Ajouter deux pages supplémentaires pour créer ceci:

![](images/exo_vue_06.png)<!-- .element: class="w-50" -->

<!-- .element: class="center box" -->



### Exercice Vue.js: router

- Un lien principal Search,
- Une page Search qui génère dynamiquement l'attribut `to` d'un `<router-link>` selon le texte d'un input.
- Une page Profile qui affiche le nom du paramètre de l'URL.

![](images/exo_vue_06.png)<!-- .element: class="w-50" -->

<!-- .element: class="center box" -->




# Vue.js Advanced Stuff



### Access DOM through Refs

**ref** is used to register a reference to an element or a child component. The reference will be registered under the parent component’s $refs object.

```html
<div id="app">
  <div ref="someID"></div>
</div>

<script src="https://unpkg.com/vue@2"></script>
```

```javascript
Vue.createApp({
  mounted() {
    this.$refs.someID.innerText = 'DOM Direct Manipulation is BAD!';
  }
}).mount('#app');
```



### Watches

![](images/data.png)




### Vue.js more
- Composition API
- Mixins
- Custom Directives
- Slots
- Vue.nextTick
- Plugins
- Server-Side Rendering
- Code Splitting
- Route lazy loading
- State Management: Pina



### Resources

- https://vuejs.org/guide/introduction.html
- https://vuejs.org/api/
- https://www.grafikart.fr/formations/vuejs (attention Vue.js 2)




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




## API and Remote Data

Example api: https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc

Chrome DevTools allows to view Network Traffic

![](images/api_devtools.png)



### Testing API advanced requests

Most API require additional header in addition of other request than GET.

![](images/insomnia.png)<!-- .element: class="w-30" --> [Insomnia](https://insomnia.rest/download/#windows) a tool to test apis

![](images/api_insomnia.png)



### Getting JSON content with Fetch

```javascript
fetch('./api/some.json')
  .then(response => {
      return response.json();
    }
  )
  .then(data => {
      console.log(data);
  })
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
```

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch



### Getting JSON content with axios

```sh
npm install axios --save
```

```javascript
import axios from 'axios';

axios.get('https://api.thecatapi.com/v1/images/search', {
          headers: {
            'x-api-key': 'DEMO-API-KEY'
          }
        })
  .then(response => {
    console.log(response.headers);
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
```



### Load Data in Vue.js

```javascript
import { createApp } from "vue";
import axios from "axios";

createApp({
  data() {
    return {
      dataLoaded: false,
      apiReply: {}
    };
  },
  methods: {
    loadData: function () {
      axios
        .get("https://api.thecatapi.com/v1/images/search")
        .then((response) => {
          this.apiReply = response.data;
          this.dataLoaded = true;
        });
    }
  },
  created() {
    // or mounted
    this.loadData();
  }
}).mount("#app");
```
[![Edit Vue Axios](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/demo-vue-axios-piguss)




### Exercice Vue.js: axios
Transformer le projet précédent pour utiliser le site thecatapi.com:

![](images/exo_vue_07.png)<!-- .element: class="w-80" -->

<!-- .element: class="center box" -->



### Exercice Vue.js: axios

- Entrer du texte dans la boîte de recherche affiche une liste de Breeds
- Cliquer sur un élément de la liste amène à une page détaille.
- La page détaille utilise le code id de la Breed récupérer en tant que paramètre d'URL pour rechercher 6 photos de cette race.




## API with real data

- https://countapi.xyz/
- https://docs.thedogapi.com/
- https://docs.thecatapi.com/
- https://transport.opendata.ch/docs.html
- http://api.themoviedb.org/3/ //need proxy for api key or cors
- https://www.themealdb.com/api.php
- https://www.thecocktaildb.com/api.php

<!-- .element: class="smaller" -->



### Google Cusom Search API

https://developers.google.com/custom-search/json-api/v1/reference/cse/list

```javascript
`https://www.googleapis.com/customsearch/v1?cx=011288001747608865807:a7rxzv4srri&q=${item.name}&searchType=image&safe=high&key=AIzaSyBlh2KvC84vD0cebFOlMSnLe0-Dx1mc-2A`
```




### Async / Await

```javascript
async function myFirstAsyncFunction() {
  try {
    const fulfilledValue = await promise;
  }
  catch (rejectedValue) {
    // …
  }
}
```



```javascript
function logFetch(url) {
  return fetch(url)
    .then(response => response.text())
    .then(text => {
      console.log(text);
    }).catch(err => {
      console.error('fetch failed', err);
    });
}

async function logFetch(url) {
  try {
    const response = await fetch(url);
    console.log(await response.text());
  }
  catch (err) {
    console.log('fetch failed', err);
  }
}
```

```javascript
// map some URLs to json-promises
const jsonPromises = urls.map(async url => {
  const response = await fetch(url);
  return response.json();
});
```

https://developers.google.com/web/fundamentals/getting-started/primers/async-functions

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
https://github.com/vuejs/vuefire

To use login UI for firebase authentification

```sh
$ npm install firebaseui --save
```
https://github.com/firebase/FirebaseUI-Web



### Documentation

- https://firebase.google.com/
- https://firebase.google.com/docs/web/setup#add-sdks-initialize
- https://vuefire.vuejs.org/vuefire/getting-started.html
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
import { rtdbPlugin } from "vuefire";
Vue.use(rtdbPlugin);

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




### Serverless: Firebase Cloud Functions

https://github.com/firebase/functions-samples/tree/master/exif-images

https://firebase.google.com/docs/reference/functions/functions.storage.ObjectMetadata

https://cloud.google.com/vision/docs/reference/libraries#client-libraries-install-nodejs

https://firebase.google.com/docs/functions/config-env



### Firebase Functions: Keeping Secrets

```sh
$ firebase functions:config:set service.name="value"
firebase functions:config:get
```

```javascript
functions.config().someservice.id

exports.groupA = {
  function1: functions.https.onRequest(...);
  function2: functions.database.ref('\path').onWrite(...);
}
exports.groupB = require('./groupB');
```




### Deploy to Firebase

```sh
 $ firebase deploy --only functions
 $ firebase deploy --only hosting
 $ firebase deploy --only functions:function1,function2
```



## Possible next steps after deploy

- Analytics & SPA
  - Virutal page views
  - Events
- A/B testing your site!




![](images/buzz.jpg)

<!-- .element: class="center" -->
