!function(){function initBespoke(){var deck=bespoke.from("#presentation",{keys:!0,touch:!0,bullets:"ul li"});$("#back").click(function(){deck.prev()}),$("#forward").click(function(){deck.next()})}$(document).ready(function(){initBespoke(),$("#presentation").fadeIn("slow")})}();