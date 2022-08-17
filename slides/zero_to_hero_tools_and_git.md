643-1-1 Projet de technologies WEB de présentation
<!-- .element style="font-size:0.7em;margin:4em 0;" -->

# Zero to Hero

![](images/common/logo_heg.png)
<!-- .element style="position:absolute; top:0; left:0;width:40%;" class="nopdf" -->

![](images/common/logo_hes-so.jpg)
<!-- .element style="position:absolute; top:0; right:0;width:10%;" class="nopdf" -->

[Boris.Fritscher@he-arc.ch](mailto:Boris.Fritscher@he-arc.ch)
<!-- .element style="position:absolute; bottom:20px; left:0;" class="nopdf" -->

#### Part 1: From blank page to deployed website

#### *Tools and git*




# CSS Frameworks

<br/>

* don't reinvent the wheel
* use best practices
* get reusable components
* design oriented




### [Bootstrap](http://getbootstrap.com/)

![](images/bootstrap-logo.png)
<!-- .element: class="top right" -->

One framework, every device

**CSS**

Global CSS settings, fundamental HTML elements styled and enhanced with extensible classes, and an advanced grid system.
<!-- .element: class="smaller" -->

**Components**

Over a dozen reusable components built to provide iconography, dropdowns, input groups, navigation, alerts, and much more.
<!-- .element: class="smaller" -->

**Javascript**

Bring Bootstrap's components to life with over a dozen custom jQuery plugins. Easily include them all, or one by one. Or native javascript if using Boostrap.native.
<!-- .element: class="smaller" -->

Note:

Alternatives: Bootstrap, Foundation, Material Design libraries, UIKit, ...



![](images/bootstrap.png)



#### Grid system

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<title>Jumbotron Template for Bootstrap</title>
</head>
<body>
	<h1>Classic Bootstrap</h1>
	<div class="container-fluid">
		<div class="row">
			<div class="col-4">col-4</div>
			<div class="col-4">col-4</div>
			<div class="col-4">col-4</div>
		</div>
		<div class="row">
			<div class="offset-2 col-8">offset-2 col-8</div>
		</div>
		<div class="row">
			<div class="col-md-4">col-md-4</div>
			<div class="col-md-4">col-md-4</div>
			<div class="col-md-4">col-md-4</div>
		</div>
	</div>
	<h1>New Auto Layout</h1>
	<div class="container-fluid">
		<div class="row">
			<div class="col">Col</div>
			<div class="col">Col</div>
		</div>
		<div class="row">
			<div class="col">Col</div>
			<div class="col">Col</div>
			<div class="col">Col</div>
			<div class="col">Col</div>

			<div class="col">Col</div>
		</div>
		<div class="row">
			<div class="col">Col</div>
			<div class="col">Col</div>
			<div class="col-md-8">col-md-8</div>
			<div class="col">Col</div>
		</div>
		<div class="row">
			<div class="col">Col</div>
			<div class="col">Col</div>
			<div class="col-md-auto">col-md-auto</div>
			<div class="col">Col</div>
		</div>
	</div>
</body>
</html>
```
```css
.row > div {
  background-color: #9575CD;
  height: 100px;
  border: 2px solid #333;
  text-align: center;
  line-height: 90px;
  font-size: 20px;
  font-weight: bold;
}
.row {
  margin: 20px 0;
}
```
<!-- .element: class="hide" -->

[https://getbootstrap.com/docs/5.1/layout/grid/](https://getbootstrap.com/docs/5.1/layout/grid/)

<!-- .element: class="credits" -->



```html
<!doctype html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<meta name="description" content="">
	<meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors">
	<meta name="generator" content="Hugo 0.88.1">
	<title>Carousel Template · Bootstrap v5.1</title>

	<link rel="canonical" href="https://getbootstrap.com/docs/5.1/examples/carousel/">

	<!-- Bootstrap core CSS -->
	<link href="https://getbootstrap.com/docs/5.1/dist/css/bootstrap.min.css" rel="stylesheet"
		integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

	<!-- Favicons -->
	<link rel="apple-touch-icon" href="https://getbootstrap.com//docs/5.1/assets/img/favicons/apple-touch-icon.png" sizes="180x180">
	<link rel="icon" href="https://getbootstrap.com/docs/5.1/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
	<link rel="icon" href="https://getbootstrap.com/docs/5.1/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
	<link rel="manifest" href="https://getbootstrap.com/docs/5.1/assets/img/favicons/manifest.json">
	<link rel="mask-icon" href="https://getbootstrap.com/docs/5.1/assets/img/favicons/safari-pinned-tab.svg" color="#7952b3">
	<link rel="icon" href="https://getbootstrap.com/docs/5.1/assets/img/favicons/favicon.ico">
	<meta name="theme-color" content="#7952b3">

	<style>
		.bd-placeholder-img {
			font-size: 1.125rem;
			text-anchor: middle;
			-webkit-user-select: none;
			-moz-user-select: none;
			user-select: none;
		}

		@media (min-width: 768px) {
			.bd-placeholder-img-lg {
				font-size: 3.5rem;
			}
		}
	</style>

	<!-- Custom styles for this template -->
	<link href="https://getbootstrap.com/docs/5.1/examples/carousel/carousel.css" rel="stylesheet">
</head>

<body>
	<header>
		<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
			<div class="container-fluid">
				<a class="navbar-brand" href="#">Carousel</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
				<div class="collapse navbar-collapse" id="navbarCollapse">
					<ul class="navbar-nav me-auto mb-2 mb-md-0">
						<li class="nav-item">
							<a class="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled">Disabled</a>
						</li>
					</ul>
					<form class="d-flex">
						<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
						<button class="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	</header>

	<main>
		<div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
			<div class="carousel-indicators">
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
				<button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
			</div>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
						<rect width="100%" height="100%" fill="#777" /></svg>

					<div class="container">
						<div class="carousel-caption text-start">
							<h1>Example headline.</h1>
							<p>Some representative placeholder content for the first slide of the carousel.</p>
							<p><a class="btn btn-lg btn-primary" href="#">Sign up today</a></p>
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
						<rect width="100%" height="100%" fill="#777" /></svg>

					<div class="container">
						<div class="carousel-caption">
							<h1>Another example headline.</h1>
							<p>Some representative placeholder content for the second slide of the carousel.</p>
							<p><a class="btn btn-lg btn-primary" href="#">Learn more</a></p>
						</div>
					</div>
				</div>
				<div class="carousel-item">
					<svg class="bd-placeholder-img" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"
						aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false">
						<rect width="100%" height="100%" fill="#777" /></svg>

					<div class="container">
						<div class="carousel-caption text-end">
							<h1>One more for good measure.</h1>
							<p>Some representative placeholder content for the third slide of this carousel.</p>
							<p><a class="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
						</div>
					</div>
				</div>
			</div>
			<button class="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
			<button class="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
		</div>

		<!-- Marketing messaging and featurettes
  ================================================== -->
		<!-- Wrap the rest of the page in another container to center all the content. -->

		<div class="container marketing">

			<!-- Three columns of text below the carousel -->
			<div class="row">
				<div class="col-lg-4">
					<svg class="bd-placeholder-img rounded-circle" width="140" height="140"
						xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
						preserveAspectRatio="xMidYMid slice" focusable="false">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777"
							dy=".3em">140x140</text>
					</svg>

					<h2>Heading</h2>
					<p>Some representative placeholder content for the three columns of text below the carousel. This is
						the first column.</p>
					<p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
				</div><!-- /.col-lg-4 -->
				<div class="col-lg-4">
					<svg class="bd-placeholder-img rounded-circle" width="140" height="140"
						xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
						preserveAspectRatio="xMidYMid slice" focusable="false">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777"
							dy=".3em">140x140</text>
					</svg>

					<h2>Heading</h2>
					<p>Another exciting bit of representative placeholder content. This time, we've moved on to the
						second column.</p>
					<p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
				</div><!-- /.col-lg-4 -->
				<div class="col-lg-4">
					<svg class="bd-placeholder-img rounded-circle" width="140" height="140"
						xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
						preserveAspectRatio="xMidYMid slice" focusable="false">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#777" /><text x="50%" y="50%" fill="#777"
							dy=".3em">140x140</text>
					</svg>

					<h2>Heading</h2>
					<p>And lastly this, the third column of representative placeholder content.</p>
					<p><a class="btn btn-secondary" href="#">View details &raquo;</a></p>
				</div><!-- /.col-lg-4 -->
			</div><!-- /.row -->


			<!-- START THE FEATURETTES -->

			<hr class="featurette-divider">

			<div class="row featurette">
				<div class="col-md-7">
					<h2 class="featurette-heading">First featurette heading.
						<span class="text-muted">It’ll blow your mind.</span></h2>
					<p class="lead">Some great placeholder content for the first featurette here. Imagine some exciting
						prose here.</p>
				</div>
				<div class="col-md-5">
					<svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
						height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
						preserveAspectRatio="xMidYMid slice" focusable="false">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa"
							dy=".3em">500x500</text>
					</svg>

				</div>
			</div>

			<hr class="featurette-divider">

			<div class="row featurette">
				<div class="col-md-7 order-md-2">
					<h2 class="featurette-heading">Oh yeah, it’s that good.
						<span class="text-muted">See for yourself.</span></h2>
					<p class="lead">Another featurette? Of course. More placeholder content here to give you an idea of
						how this layout would work with some actual real-world content in place.</p>
				</div>
				<div class="col-md-5 order-md-1">
					<svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
						height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
						preserveAspectRatio="xMidYMid slice" focusable="false">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa"
							dy=".3em">500x500</text>
					</svg>

				</div>
			</div>

			<hr class="featurette-divider">

			<div class="row featurette">
				<div class="col-md-7">
					<h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
					<p class="lead">And yes, this is the last block of representative placeholder content. Again, not
						really intended to be actually read, simply here to give you a better view of what this would
						look like with some actual content. Your content.</p>
				</div>
				<div class="col-md-5">
					<svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500"
						height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500"
						preserveAspectRatio="xMidYMid slice" focusable="false">
						<title>Placeholder</title>
						<rect width="100%" height="100%" fill="#eee" /><text x="50%" y="50%" fill="#aaa"
							dy=".3em">500x500</text>
					</svg>

				</div>
			</div>

			<hr class="featurette-divider">

			<!-- /END THE FEATURETTES -->

		</div><!-- /.container -->


		<!-- FOOTER -->
		<footer class="container">
			<p class="float-end"><a href="#">Back to top</a></p>
			<p>&copy; 2017–2021 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
		</footer>
	</main>

	<script src="https://getbootstrap.com/docs/5.1/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous">
	</script>

</body>
</html>

```




# Design

![](images/web_development_process.jpg)

<!-- .element: class="center" -->





### Why Writing Web Design On Paper Will Help

- Easier and more accessible (draw everywhere)
- Chaos can be helpful (break the rules)
- It saves time & energy (more iterations)
- Easier to make notes and alterations on paper
- Focus on the big picture, not getting lost in details

http://gohunters.com/blog/10-reasons-writing-web-design-paper-will-help/

<!-- .element: class="credits" -->



![](images/04_paper_sketches.png)

<!-- .element: class="center w-80" -->

https://www.smashingmagazine.com/2014/03/building-clickthrough-prototypes-to-support-participatory-design/

<!-- .element: class="credits" -->



![](images/12.website-sketches.jpg)

<!-- .element: class="center" -->

http://designbeep.com/2012/05/17/33-great-examples-of-web-design-sketches/

<!-- .element: class="credits" -->




### Typography

Ty­pog­ra­phy mat­ters be­cause it helps con­serve reader at­ten­tion.

Good ty­pog­ra­phy can help your reader de­vote less at­ten­tion to the me­chan­ics of read­ing and more at­ten­tion to your mes­sage

http://practicaltypography.com/

<!-- .element: class="credits" -->



### Which is more readable?

![](images/roadsign-standard.jpg)

<!-- .element: class="float-left w-50" -->

![](images/roadsign-script.jpg)

<!-- .element: class="float-right w-50" -->

A high­way sign has a spe­cial pur­pose: it’s meant to be read quickly, from long dis­tances, at odd an­gles, and un­der vari­able light­ing and weather con­di­tions.

http://practicaltypography.com/

<!-- .element: class="credits" -->



### Same font different balance

![](images/speed-limit-75.svg)<!-- .element: class="w-80" -->

<!-- .element: class="center" -->

http://practicaltypography.com/

<!-- .element: class="credits" -->



### **Underlining** *Absolutely not*

<u>Un­der­lin­ing is an­other dreary type­writer habit. Type­writ­ers had no bold or italic styling. So the only way to em­pha­size text was to back up the car­riage and type un­der­scores be­neath the text. It was a workaround for short­com­ings in type­writer technology.</u>

Nei­ther your word proces­sor nor your web browser suf­fers from these short­com­ings. If you feel the urge to un­der­line, use **bold** or *italic* in­stead. In spe­cial sit­u­a­tions, like head­ings, you can also con­sider us­ing ALL CAPS, <span style="font-variant: small-caps">small caps</span>, or a change in <span style="font-size: 130%">point size</span>.

http://practicaltypography.com/

<!-- .element: class="credits" -->



<!-- .slide: data-background="images/typography-terminology.jpg" -->
<a href="https://www.supremo.tv/typeterms" target="_blank" style="width:100%;height:80vh;display:block;"></a>



### What is typography?

![](images/typo_realworld.png)<!-- .element: class="w-80" -->

<!-- .element: class="center" -->

https://www.gcflearnfree.org/beginning-graphic-design/typography/1/

<!-- .element: class="smaller" -->




# Design Principles

## Visual Perception And The Principles Of Gestalt

https://www.smashingmagazine.com/2014/03/design-principles-visual-perception-and-the-principles-of-gestalt/

<!-- .element: class="credits" -->



### The Key Ideas Behind Gestalt Theory

> The whole is other than the sum of the parts.
> — Kurt Koffka



### Similarity

> Elements that share similar characteristics are perceived as more related than elements that don’t share those characteristics.

![](images/gestalt-similarity-1.png)<!-- .element: class="left fragment current-visible w-80" -->
![](images/gestalt-similarity-2.png)<!-- .element: class="left fragment fade-in w-80" -->



### Common regions / Enclosure

> Elements are perceived as part of a group if they are located within the same closed region.

![](images/gestalt-similarity-1.png)<!-- .element: class="left fragment current-visible w-80" -->
![](images/gestalt-enclosure-2.png)<!-- .element: class="left fragment current-visible w-80" -->
![](images/gestalt-enclosure-3.png)<!-- .element: class="left fragment fade-in w-80" -->



### Proximity

> Objects that are closer together are perceived as more related than objects that are further apart.

![](images/gestalt-similarity-1.png)<!-- .element: class="left fragment current-visible w-80" -->
![](images/gestalt-proximity-2.png)<!-- .element: class="left fragment fade-in w-80" -->



### Closure

> When seeing a complex arrangement of elements, we tend to look for a single, recognizable pattern.

![](images/gestalt-closure-1.png)<!-- .element: class="left w-80" -->



### Continuation

> Elements arranged on a line or curve are perceived as more related than elements not on the line or curve.

![](images/gestalt-continuation-1.png)<!-- .element: class="left w-80" -->



### Connection

> Elements that are visually connected are perceived as more related than elements with no connection.

![](images/gestalt-connection-1.png)<!-- .element: class="left fragment current-visible w-50" -->
![](images/gestalt-connection-2.png)<!-- .element: class="left fragment fade-in w-50" -->



### Concepts applied to web composition

![](images/layout_mockup.png)<!-- .element: class="w-80" -->

<!-- .element: class="center" -->

https://www.gcflearnfree.org/beginning-graphic-design/layout-and-composition/1/

<!-- .element: class="smaller" -->




### Beyond Frameworks, Design Guidelines

- Google:  [Material Design](https://material.io/guidelines/)
- Microsoft: [Fluent Design System](http://fluent.microsoft.com/)




# Tooling

![](images/yeoman-packages.png)<!-- .element: class="w-40" -->



### Editors

Exists in all form: from notepad.exe to full IDE: [WebStorm](https://www.jetbrains.com/webstorm/)

![](images/notepad.png)<!-- .element: class="w-40 float-left" -->

![](images/webstorm.png)<!-- .element: class="w-60 float-left" -->

In between: [Notepad++](https://notepad-plus-plus.org/), [Visual Studio Code](https://code.visualstudio.com/),  [Atom](https://atom.io/)
<br/>Online editors: [CodeSandbox](https://codesandbox.io), [StackBlitz](https://stackblitz.com/), [Cloud9](https://c9.io/), [Eclipse Che](http://www.eclipse.org/che/)
<br/>Browser integrated (F12): [Chrome DevTools](https://developer.chrome.com/devtools)




![](images/web_dev_in_2021_intro.png)<!-- .element: class="w-100" -->

https://github.com/kamranahmedse/developer-roadmap

<!-- .element: class="credits" -->



![](images/web_dev_in_2021_frontend.png)<!-- .element: class="w-80" -->

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




![](images/Strip-Pepperidge-farm-650-final.jpg)




## Node.js & npm

![](images/nodejs-logo.png) <!-- .element: class="float-right w-15" -->
**Node.js** is a platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications.
https://nodejs.org/

*It allows to run JavaScript outside of the browser*

![](images/npm-logo.svg) <!-- .element: class="float-right w-15" -->
**npm** is a package manager for JavaScript bundled with Node.js and can run some tasks.
https://www.npmjs.com/




## WebPack

Webpack is an open-source JavaScript module bundler. Webpack takes modules with dependencies and generates static assets representing those modules.

![](images/webpack-process.svg)

<!-- .element: class="float-right w-60" -->

It takes the dependencies and generates a dependency graph allowing web developers to use a modular approach for their web application development purposes.

<!-- .element: class="smaller" -->

WebPack Loader plugins help to pre/postprocess files without needing a tasks pipeline.

<!-- .element: class="smaller" -->




## Lab 1a: MonCV

Creating a Curriculum vitae webpage, using Boostrap CSS and development tools.

![](images/yeoman-packages.png)<!-- .element: class="w-30" -->



### Step 0: Install development environment

Download and install [Node.js](https://nodejs.org/) to get `npm`.

Use `npm` to install `vue-cli` globally (--global or -g)

```sh
$ npm install -g @vue/cli
```
*We are using the -g (--global flag) to install in the global shared space accessible to all projects.*
<!-- .element: class="small" -->



### Step 1: Create a new project

Use vue-cli to create a new project.

```sh
$ vue create moncv
```

![](images/vue-cli-moncv.png)<!-- .element: class="w-80" -->

<!-- .element: class="center" -->



### Step 2: Review the generated app

```sh
$ cd moncv
$ code .
```

Install dependencies

```sh
$ npm install
```



### Step 3: Preview your app in the browser


Start the development server
```sh
npm run serve
```

edit a file and watch livereload in action

Stop the server `ctrl+c`



### Step 4a: Cleanup and Configure

1.  Delete `src/components` and `src/App.vue`

2. Add/Remove dependencies
```shell
$ npm install bootstrap --save
$ npm install @fortawesome/fontawesome-free --save
```

4. check package.json (before and after)

<!-- .element: class="small" -->



### Step 4b: Use LF also on windows

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



### Step 5: Setup bootstrap

Inside `src/main.js` replace all with

```javascript
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

document.addEventListener("DOMContentLoaded", () => {
  console.log("it works!");
});
```



### Step 6: add custom style file

Create a main.css file under src

Inside `src/main.js` after `boostrap.min.css`;

```javascript
import "./main.css";
```



### Step 7: try fontawesome

Add an icon to the `index.html`

```html
<i class="fas fa-ice-cream display-1"></i>
```
<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ice-cream" class="svg-inline--fa fa-ice-cream fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M368 160h-.94a144 144 0 1 0-286.12 0H80a48 48 0 0 0 0 96h288a48 48 0 0 0 0-96zM195.38 493.69a31.52 31.52 0 0 0 57.24 0L352 288H96z"></path></svg>

<!-- .element: class="w-20" -->



### Step 8: Use npm to install other packages

```sh
npm install bootswatch --save
```

https://bootswatch.com/

try different CSS files from bootswatch in index.html

```javascript
import "bootswatch/dist/darkly/bootstrap.min.css";
```




# Assignment 2a

Use lab1 to recreate/improve your CV with Boostrap and a development workflow

Add a [bootstrap progress bar](https://getbootstrap.com/docs/4.1/components/progress/) for your skills.




# New problems

* Editing code and making backups
* Commenting out code

-> Need for a version control system

![](images/code_quality_wtf.png)<!-- .element: class="bottom right" -->




# Git

Git is a free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.

Download on [git-scm.com](https://git-scm.com/download/win)



### Centralized VCS

![](images/vcs-centralized.png)<!-- .element: class="w-75" -->

<!-- .element: class="center" -->



### Distributed VCS like Git

![](images/vcs-distributed.png)<!-- .element: class="w-50" -->

<!-- .element: class="center" -->



### Distributed VCS Advantages

* FAST
* OFFLINE (fix/commit multiple operations)
* Geography
* Flexible Workflows
* Easier Merging
* Implicit Backup
* Scale out, not just up

*Disadvantages: no Locks, Disk space*

http://ericsink.com/vcbe/html/dvcs_advantages.html

<!-- .element: class="credits" -->



### Git basics

* **`git init`** create a new local git repository
* **`git add .`** add all modified and new files to stage
* **`git commit -m 'msg'`** commit staged files with msg
* **`git push`** send commits to remote server
* **`git pull`** download remote commits
* **`git clone`** copy a remote repository
* **`.gitignore`** ignore files or folders



### Git lifecycle

![](images/git-lifecycle.png)

http://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository

<!-- .element: class="credits" -->



### Exercice

Référence [git - petit guide](https://rogerdudler.github.io/git-guide/index.fr.html)

#### [Learn Git](https://www.katacoda.com/courses/git)

- Scenario 1 - Committing Files
- Scenario 2 - Committing Changes
- Scenario 3 - Working Remotely
- Scenario 4 - Undoing Changes



<iframe width="100%" height= "90%" src= "https://forms.office.com/Pages/ResponsePage.aspx?id=JPdyo7LAoE6r-w64xvhOQJIsLlkU-kNDqVHy3AasFwhUOTFOMkQwSTRMWERXWFJaQjVNS0RCV0RNMi4u&embed=true" frameborder= "0" marginwidth= "0" marginheight= "0" style= "border: none; max-width:100%; max-height:100vh" allowfullscreen webkitallowfullscreen mozallowfullscreen msallowfullscreen> </iframe>

https://forms.office.com/Pages/ResponsePage.aspx?id=JPdyo7LAoE6r-w64xvhOQJIsLlkU-kNDqVHy3AasFwhUOTFOMkQwSTRMWERXWFJaQjVNS0RCV0RNMi4u

<!-- .element: class="credits" -->



### Quiz git

- What is the main branch called in Git?
- What is the default name for a remote server?
- What new commands have you learned?
- What do they do?
- How to check the state of your git repository?
- How to revert changes to a file?



### Ressources

* http://git-scm.com/book/en/v2/Getting-Started-About-Version-Control
* http://rogerdudler.github.io/git-guide/
* http://onlywei.github.io/explain-git-with-d3/#freeplay
* http://pcottle.github.io/learnGitBranching/
* http://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository




# GitHub

[GitHub](https://github.com/) is a web-based Git repository hosting service, adding
its own features:

Wikis, bug tracking, **Markdown** rendering and static page hosting.

Unlike Git, which is strictly a command-line tool, GitHub provides
a web-based **graphical interface**



### Github Web

Browse commits, issues, fork, pull requests, wiki, Readme.md

![](images/github.png)




### Visual Studio Code Git Support

![](images/vscode_git.png)
<!-- .element: class="center" -->

[Documentation](https://code.visualstudio.com/docs/editor/versioncontrol#_git-support)
<!-- .element: class="small" -->




# Do Your Commit Messages Suck?

https://www.youtube.com/watch?v=8YjSty6bfog

<!-- .element: class="center" -->



<iframe width="640" height="480" src="https://www.youtube.com/embed/8YjSty6bfog?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>



### Conventional Commits

https://www.conventionalcommits.org/fr/v1.0.0/

* Automatically generating CHANGELOGs.
* Automatically determining a semantic version bump (based on the types of commits landed).
* Communicating the nature of changes to teammates, the public, and other stakeholders.
* Triggering build and publish processes.
* Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.

https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md




# Markdown
## From text to HTML



### Markdown Basics

[Markdown](http://daringfireball.net/projects/markdown/syntax) allows you to write using an easy-to-**read**, easy-to-**write** plain **text format**, which then converts to valid HTML.

```markdown
# The largest heading (an <h1> tag)
## The second largest heading (an <h2> tag)

> Blockquotes

Text styling *italic* and **bold**

Links (<a href="url">title</a>)
[title](url)

Images (<img src="src" alt="">)
![alt](src)
```



### Markdown List and Table

```markdown
Unordered lists
* Item
* Item

- Item
- Item

Ordered lists
1. Item 1
2. Item 2
3. Item 3

some: `c0de`

| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |
```
<!-- .element: class="float-left w-50" -->

* Item
* Item

<br/>

1. Item 1
2. Item 2

&nbsp;&nbsp;some: `c0de`

| Name | Description          |
| ------------- | ----------- |
| Help      | Display the help window.|
| Close     | Closes a window     |



### Visual Studio Code

Can preview markdown in realtime.

<!-- .element: class="smaller" -->

![](images/vscode_markdown_preview.png)

<!-- .element: class="w-60" -->

Warning: markdown on github is a special variant!

<!-- .element: class="red" -->




# Lab 1b: deploy

![](images/yeoman-ship.png)<!-- .element: class="w-30" -->



### Step 0: Install

Create a [github.com](https://github.com) account and install [git-scm.com](https://git-scm.com/download/win) to have a version of `git`.



### Step 1: Git Master

- Create github repository [moncv-xyz](https://classroom.github.com/a/t120H1t3)
- Commit your code to a git repository.
- Commit & push your code to Github.
- Change something and create a new commit.
- Clone the project into another folder.



### Step 2: Production version

Create a built, mimified version of your page with your .
```sh
npm run build
```
*Notice that you have a dist folder with this new content.*



### Step 3: Deploy static site on Github

Github offers to serve static web pages https://pages.github.com/

There are two options:

- User site: http://usernameABC.github.io by creating a special repository with the name: usernameABC.github.io
- Projet site: http://usernameABC.github.io/repositoryYXZ by creating a special branch gh-pages inside the repositoryXYZ

**Deploy and test your site!**

*Try to deploy a new version with a changed CSS template.*

Note:

A special CNAME file can be put at the root of gh-pages to use a custom domain name.



## Setup Github and gh-pages via Github Actions

- configure vue-cli to support /moncv-xyz/ in production
- configure github Actions to build and deploy to gh-pages (see below)
- commit and push



### Github Action Config

- create folder .github\workflows
- add this file build_deploy.yml

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
          node-version: '14'

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



### Try to deploy

After a successful ```npm run build``` commit all changes and push:
```sh
git add . --all
git commit
git push
```

The site can be accessed at: https://heg-web.github.io/moncv-xyz/ when action workflow is finished.

<!-- .element: class="small" -->



### FIX path of static assets

Create a `vue.config.js` file to handle subfolder deployment.
```sh
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/moncv-test/" : "/"
};
```
Rebuild and deploy site to test the fix.

https://cli.vuejs.org/config/#publicpath

<!-- .element: class="small" -->




# Adding interactions to the web



# Lab 1c: better interactions

We want to improve our page with some interactions and behaviors.



### Step 1: Use npm to install a plugin

```sh
$ npm install ityped
```

Use the plugin:

```javascript
import { init } from 'ityped'

const oneElement = document.querySelector('#one');
init(oneElement, { showCursor: false, strings: ['Nice', 'One' ] });
```




### Step 2: DevTools

**F12** opens the browser's developer tools, explore your webpage DOM structure.

- Can you edit the page?
- Can you test different CSS?
- Can you interact with the JavaScript?

https://developer.chrome.com/devtools/docs/dom-and-styles
