
// hamburger

(function(){
	$(".menuButton").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".fullScreenMenu").fadeToggle().toggleClass("show");
		
	});
})();


// flip
(function(){
	$(".autorize_btn").click(function(e){
		e.preventDefault();
		$(".flipContainer").toggleClass("flip")
	})
})();


// parallax

var parallax = (function(){
	// var bg1 = document.querySelector(".layer-1");
	var bg2 = document.querySelector(".layer-2");
	var user = document.querySelector(".blockUser-wrap");
	var headerWrap = document.querySelector(".header_wrap");

	return {
		move: function (block, windowScroll, strafeAmount) {
			var strafe = windowScroll/strafeAmount + '%';
			var tarnsformString = 'translate3d(0, '+strafe+', 0)';
			var style = block.style;

			style.top =strafe;
			style.transform = tarnsformString;
			style.webkitTransform = tarnsformString;
		},

		init: function(wScroll) {
			// this.move(bg1,wScroll, 85)
			this.move( bg2, wScroll, 85),
			this.move(user, wScroll, -50);

		}
	}
}());

window.onscroll = function(){
	var wScroll = window.pageYOffset;
	parallax.init(wScroll);
}

// blur

// var blur = (function() {
// 	var wrapper = document.querySelector(".blur_bg");
// 	var blurBg = document.querySelector(".blur_bg");

// 	return {
// 		set: function(){
// 			var imgWidth = document.querySelector(".talkAbout").offsetWidth,
// 			posLeft = -wrapper.offsetLeft,
// 			posTop = -wrapper.offsetTop,
// 			blurCss = form.style;

// 			blurCss.backgroundSize = imgWidth + 'px' + '' + auto;
// 			blurCss.backgroundPosition = posLeft + 'px' + '' + posTop + 'px';

// 		}
// 	}
// }());

// blur.set();
// window.onresize = function(){
// 	blur.set();
// }


// var map;
// function initMap() {
// 	map = new google.maps.Map(document.getElementById('map'),{
// 		center: {lat: 59.9558462, lng: 30.3410265},
// 		zoom: 12	
// 	});
// }

function initMap() {
  var customMapType = new google.maps.StyledMapType([
      {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#DFDCD5"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#0e2f65"
            },
            {
                "visibility": "on"
            }
        ]
    }
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: {lat: 59.94, lng: 30.325},
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });
  var image='assets/img/map-marker-n.png';
  var mapMarker= new google.maps.Marker({
  	position: {lat: 59.934, lng: 30.297},
  	map: map,
  	icon: image
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}