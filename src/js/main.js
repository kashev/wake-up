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
/* global d3:false      */

/* Anonymous Wrapper */
(function() {

$( document ).ready(function() {
  /* Create Bespoke Deck */
  var deck = bespoke.from('#presentation', {
    // Plugins:
    keys:    true,
    touch:   true,
    bullets: 'li',
    scale:   true,
  });

  /* Create Use Case Diagrams in D3 */
  // test
  var timelyUseCase = d3.select("#timely-use-case")
    .append("svg")
    .attr("width", 100)
    .attr("height", 100);
  timelyUseCase.append("circle")
    .style("stroke", "gray")
    .style("fill", "white")
    .attr("r", 40)
    .attr("cx", 50)
    .attr("cy", 50)
    .on("mouseover", function(){d3.select(this).style("fill", "aliceblue");})
    .on("mouseout", function(){d3.select(this).style("fill", "white");});
});

})(); /* Anonymous Wrapper */