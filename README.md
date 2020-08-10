# Playground template

This template is intended to be a starting point for any quick little project in
Javascript and SASS. Includes fully set up Gulp, browser-sync, and so on.

# Gulp

* `gulp css` – builds SASS files from `/src/css` into CSS files in `/dist/css`
* `gulp watch:css` – watches `/src/css` for changes and executes `gulp css`
* `gulp js` – builds JS files from `/src/js` into `.min.js` files in `/dist/js`
* `gulp watch:js` – watches `/src/js` for changes and executes `gulp js`
* `gulp ts` – builds Typescript files from `/src/js` into `.js` and `.min.js` files in `/dist/js`
* `gulp watch:ts` – watches `/src/js` for changes and executes `gulp ts`
* `gulp all` – executes `gulp css`, `gulp js` and `gulp:ts`
* `gulp watch:all` – executes `gulp watch:css`, `gulp watch:js` and `gulp watch:ts`
