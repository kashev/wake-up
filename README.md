wake-up
=======

    'Everyone Needs to Wake Up'
    Kashev Dalmia
    kashev.dalmia@gmail.com

    Everyone Needs to Wake Up
    A Project for ARTD 313 @ UIUC, Sp 2014
    proj1b - dalmia3

# README.md

## About
This project was designed and built for the Spring 2014 semester of Art & Design 313 - Digital Interaction Design @ The University of Illinois at Urbana-Champaign. It is a survey of Android alarm clock design through an agile lens. It is currently live at:

http://kashevdalmia.com/wake-up
http://kashev.github.io/wake-up

## Build Instructions
Building this code from source requires `node`, `npm`, and `ruby`.

In the project root, run `npm install` to install all Javascript dependencies. Run `gem install sass` to be able to compile Sass files. Install `bourbon` and `neat` by running `gem install bourbon neat`, then install to the project by running `bourbon install` and `neat install` inside of `src/css/`. Build by typing `grunt` for the development, unminified version or `grunt dist` for a minified version. This will compile `sass` files, `jshint` lint all Javascript files, and move deployable code to `dist/`. Run `grunt server` for live updating dev server at `http://localhost:8000`.

## Thanks
This project is possible thanks to the work on the following projects:
- [Node](http://nodejs.org/)
- [Grunt](http://gruntjs.com/)
- [jQuery](http://jquery.com/)
- [Bespoke](http://markdalgleish.com/projects/bespoke.js/)
- [Sass](http://sass-lang.com/)
- [Bourbon](http://bourbon.io/)
- [Neat](http://neat.bourbon.io/)

Thanks to Professor Brad Tober for guidance.
