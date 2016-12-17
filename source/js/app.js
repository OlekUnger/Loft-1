// ++++++++++++++++++++ P R E L O A D E R ++++++++++++++++++++++++++++++

var preloader = (function(){

    var percentsTotal = 1,
        preloader = $('.preloader');

    var imgPath = $('*').map(function(indx, element){
        
        var background = $(element).css('background-image'),
            img = $(element).is('img'),
            path = '';

        if(background != 'none'){
            path = background.replace('url("', '').replace('")','');
             console.log(path);
        }

        if(img){
            path = $(element).attr('src');

        }
        
        if(path) return path;
    });
    
    var setPercents = function(total, current){
        var persents = Math.ceil(current/total*100);
        $('.preloader_percents').text(persents + '%');
        if(persents>=100){
            preloader.fadeOut();
        }
    }

    var loadImages = function(images){
        if(!images.length) preloader.fadeOut();

        images.forEach(function(img, i, images){
            var fakeImage = $('<img>',{
                attr: {
                    src: img
                }
            });
            fakeImage.on('load error', function(){
                setPercents(images.length, percentsTotal);
                percentsTotal++;
            });
        });
    }

    return{
        init: function(){ 
            var imgs = imgPath.toArray();
            loadImages(imgs);
        }
    }

})();

preloader.init();





// +++++++++++++++++++ F U L L   S C R E E N   M E N U +++++++++++++++++++++++++

var fullScreenMenuModule = (function(){

    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
        $(".menuButton").on('click', _showFullScreenMenu); //fullScreenMenu open
            
    };

    var _showFullScreenMenu = function(e){
        e.preventDefault();
        $(this).toggleClass("active");
        $(".fullScreenMenu").fadeToggle().toggleClass("show");

    };

    return {
        init: init
    };
        
})();

fullScreenMenuModule.init();

// +++++++++++++++++++++++ F L I P ++++++++++++++++++++++++++++++++++++

var flipModule = (function(){

    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
        $(".autorize_btn").on('click', _flip); //flip
        $(".blockUser_nav").find("a.flipBack").on('click', _flipBack);
    };

    var _flip = function(e){
        e.preventDefault();
        $(".flipContainer").toggleClass("flip")
    };

    var _flipBack = function(e){
        e.preventDefault();
        $(".flipContainer").removeClass("flip")
    };

return {
        init: init
    };
        
})();

flipModule.init();

// ++++++++++++++++++++++++++++ V A L I D A T E ++++++++++++++++++++++++

var validate = function(){

    var validateForm = $('form');

    validateForm.each(function(){
    
        var validateForm = $(this);
        var validate = {};
        var validateThis = $(this).find('input');
        var validatingLength = $(this).find('input').length;
        var submitBtn = $(this).find('.submit');

    
        for(var i = 1; i <= validatingLength; i++){
      
            validate['input'+i] = false;
        }

        $('.input').blur(function(){
            var index =  $(this).prevAll().length+1;
            var validateThisVal = $(this).val();
            var validateThisType = $(this).attr('type');

            if(validateThisType === "email"){

        
                var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
                if(!validateThisVal.match(re)){
                    $(this).parent().addClass('not-valid');
                    $(this).parent().removeClass('is-valid');
                    return validate['input'+index] = false;
                } else{
                    $(this).parent().addClass('is-valid');
                    $(this).parent().removeClass('not-valid');
                    return validate['input'+index] = true;
                }
            } else {
        
                if(validateThisVal == ""){
                    $(this).parent().addClass('not-valid');
                    $(this).parent().removeClass('is-valid');
                    return validate['input'+index] = false;
                } else{
                    $(this).parent().addClass('is-valid');
                    $(this).parent().removeClass('not-valid');
                    return validate['input'+index] = true;
                }
            }
        });

    
        validateForm.on('submit', function(e){
            e.preventDefault();

     
            var falseCtn = 0;
            for(var i = 1; i <= validatingLength; i++){
                if(validate['input'+i] == false){
                falseCtn++;
                }
            }

            if(falseCtn > 0){
                $(this).unbind('submit').submit();
                $(this).click();
            }

        });


    });
};

validate();
   // ++++++++++++++++++ P A R A L L A X ++++++++++++++++++++++++++++


var parallaxModule = (function(){
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
	parallaxModule.init(wScroll);
};


// +++++++++++++++++++++++ M A P ++++++++++++++++++++++++++++++ 

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
};


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
// var simpleValidation = function(){

//   var validateForm = $('form');

//   // Gets all forms to Validate
//   validateForm.each(function(){
//     // Defining basic variables, bro
//     var validateForm = $(this);
//     var validate = {};
//     var validateThis = $(this).find('.formField');
//     var validatingLength = $(this).find('.formField').length;
//     var submitBtn = $(this).find('.submit');

//     // For Loop Getting Elements to Validate
//     for(var i = 1; i <= validatingLength; i++){
//       // Adding Inputs to object, false for default
//       validate['input'+i] = false;
//     }

//     $('.formField').blur(function(){
//       var index =  $(this).prevAll().length+1;
//       var validateThisVal = $(this).val();
//       var validateThisType = $(this).attr('type');

//       // Checks if input type is email
//       if(validateThisType === "email"){

//         // Email regex
//         var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//         // Condition to see if Email exists
//         if(!validateThisVal.match(re)){
//           $(this).addClass('not-valid');
//           $(this).removeClass('is-valid');
//           return validate['input'+index] = false;
//         } else{
//           $(this).addClass('is-valid');
//           $(this).removeClass('not-valid');
//           return validate['input'+index] = true;
//         }
//       } else{
//         // Makes sure input is filled out
//         if(validateThisVal == ""){
//           $(this).addClass('not-valid');
//           $(this).removeClass('is-valid');
//           return validate['input'+index] = false;
//         } else{
//           $(this).addClass('is-valid');
//           $(this).removeClass('not-valid');
//           return validate['input'+index] = true;
//         }
//       }
//     });


//     validateForm.submit(function(event){
//       // Prevents Default
//       event.preventDefault();

//       // Logging form errors
//       var falseCtn = 0;
//       for(var i = 1; i <= validatingLength; i++){
//         if(validate['input'+i] == false){
//           falseCtn++;
//         }
//       }

//       // Checking if any falses exist
//       if(falseCtn > 0){
//         $(this).unbind('submit').submit();
//         $(this).click();
//       } else{
//       }
//     });

//   });

// };

// simpleValidation();