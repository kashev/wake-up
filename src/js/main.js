/*
  Kashev Dalmia
  kashev.dalmia@gmail.com

  Everyone Needs to Wake Up
  A Project for ARTD 313 @ UIUC, Sp 2014
  proj1b - dalmia3

  main.js
*/

// Add to remove JSHint Error about $, Bespoke, etc.
/* global $:false       */
/* global bespoke:false */

/* Anonymous Wrapper */
(function() {

$( document ).ready(function() {
  
  /* INITIALIZE BESPOKE */
  initBespoke();

  /* Make everything visible */
  $('#presentation').fadeIn('slow');
});


/* BESPOKE INITIALIZATION FUNCTION */
function initBespoke() {
  /* Create Bespoke Deck */
  var deck = bespoke.from('#presentation', {
    // Plugins:
    keys:    true,
    touch:   true,
    bullets: 'ul.bespoke-bullets-container li'
  });

  /* Set Click Handlers on Forward & Back Buttons */
  $('#back').click(function() {
    deck.prev();
  });

  $('#forward').click(function() {
    deck.next();
  });

}

})(); /* Anonymous Wrapper */