$(document).ready( function() {

/*

$("#bio").mouseenter( function() {

$(this).animate({height:'+=100px'});
});

$("#bio").mouseleave( function() {
  $(this).animate({height:"-=100px"});
});

$("#education").mouseenter( function() {

$(this).animate({height:'+=100px'});
});

$("#education").mouseleave( function() {
  $(this).animate({height:"-=100px"});
});

$("#design").mouseenter( function() {

$(this).animate({height:'+=100px'});
});

$("#design").mouseleave( function() {
  $(this).animate({height:"-=100px"});
});
*/

var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 37.774, lng: -122.419},
          zoom: 8
        });
      }

initMap();



});
