$(document).ready(function() {
  $('.video-btn').magnificPopup({
  	type:'video',
  });
  $('.counter').counterUp({
	    delay: 100,
	    time: 1000
	});
  $('.map').gmap3({
	  address: "Haltern am See, Weseler Str. 151",
	  zoom: 6,
	  mapTypeId : google.maps.MapTypeId.ROADMAP
	});
});