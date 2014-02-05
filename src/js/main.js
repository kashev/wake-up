/*
  Kashev Dalmia
  kashev.dalmia@gmail.com

  Everyone Needs to Wake Up
  A Project for ARTD 313 @ UIUC, Sp 2014
  proj1b - dalmia3

  main.js
*/

// Add to remove JSHint Error about $, Bespoke, etc.
/*global $:false */
/* global bespoke:false */
/* global var:false */

/* Anonymous Wrapper */
(function() {

$( document ).ready(function() {
  var deck = bespoke.from('#presentation', {
    // Plugins:
    keys:    true,
    touch:   true,
    bullets: 'li',
    scale:   true,
  });
});

})(); // Immediate Wrapper
