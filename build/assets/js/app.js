// ++++++++++++++++++++++++++++ V A L I D A T E - 1 ++++++++++++++++++++++++

var validate = function(){

    var validateForm = $('#autorizeForm');

    validateForm.each(function(){
    
        var validateForm = $(this);
        var validate = {};
        var validateThis = $(this).find('formField');
        var validatingLength = $(this).find('formField').length;
        var submitBtn = $(this).find('.submit');

    
        for(var i = 1; i <= validatingLength; i++){
      
            validate['input'+i] = false;
        }

        $('.formField').blur(function(){
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
                    return validate['input'+ index] = true;
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
    disableDefaultUi: true,
    mapTypeControl: false,
    zoomControl: false,
    scaleControl: false,
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
            this.move( bg2, wScroll, -85),
            this.move(user, wScroll, -70);
        }
    }
}());

window.onscroll = function(){
    var wScroll = window.pageYOffset;
    parallaxModule.init(wScroll);
};






// +++++++++++++++++++++++  P R E L O A D E R +++++++++++++++++++++

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

}());


preloader.init();
// ++++++++++++++++++ S L I D E R ++++++++++++++++++++++++

var slider = (function(){

	return{
		init: function(){
			var _this = this;

			_this.createDots();

			$('.sliderBtn').on('click', function(e){
				e.preventDefault();

				var $this = $(this),
					slides = $this.closest('.slider').find('.slider_item'),
					activeSlide = slides.filter('.active'),
					nextSlide = activeSlide.next(),
					prevSlide = activeSlide.prev(),
					firstSlide = slides.first(),
					lastSlide = slides.last();

				if($this.hasClass('next')){

					if(nextSlide.length){
						_this.moveSlide(nextSlide, 'forward');
					} else {
						_this.moveSlide(firstSlide, 'forward');
					}
					
				} else {
					if(prevSlide.length){
						_this.moveSlide(prevSlide, 'backward');
					} else {
						_this.moveSlide(lastSlide, 'backward');
					}

				}
			});

			$('.dot').on('click', function(e){
				e.preventDefault();

				var $this = $(this);
					dots = $this.closest('.slider_controls').find('.dot'),
					activeDot = dots.filter('.active'),
					dot = $this.closest('.dot'),
					curDotNum = dot.index(),
					direction =(activeDot.index()< curDotNum) ? 'forward' : 'backward';
					reqSlide = $this.closest('.slider').find('.slider_item').eq(curDotNum);

				_this.moveSlide(reqSlide, direction);
			});
		},

		moveSlide: function(slide, direction){
			var _this = this,
				container = slide.closest('.slider'),
				slides = container.find('.slider_item'),
				activeSlide = slides.filter('.active'),
				slideWidth = slides.width(),
				duration =  500,
				reqCssPosition = 0,
				reqSlideStrafe = 0;

			if(direction === 'forward'){
				reqCssPosition = slideWidth;
				reqSlideStrafe = -slideWidth;
			} else if(direction === 'backward'){
				reqCssPosition = -slideWidth;
				reqSlideStrafe = slideWidth;
			}

			slide.css('left', reqCssPosition).addClass('inslide');
			var movableSlide = slides.filter('.inslide');

			activeSlide.animate({left: reqSlideStrafe}, duration);
			movableSlide.animate({left: 0}, duration, function(){
				var $this = $(this);

				slides.css('left','0').removeClass('active');
				$this.toggleClass('inslide active');
				_this.setActiveDot(container.find('.slider_controls'));
			});
		},

		createDots: function(){
			var _this = this,
				container = $('.slider');

			var dotMarkup = '<a class="dot" href="#"></a>'; 
							

			container.each(function(){
				var $this = $(this),
					slides = $this.find('.slider_item'),
					dotContainer = $this.find('.slider_controls');

				for(var i = 0; i< slides.size(); i++){
					dotContainer.append(dotMarkup);
				}

				_this.setActiveDot(dotContainer);
			});
				
		},
		setActiveDot: function(container){
			var slides = container.closest('.slider').find('.slider_item');

			container
					.find('.dot')
					.eq(slides.filter('.active').index())
					.addClass('active')
					.siblings()
					.removeClass('active');
		}
	}

})();    

$(document).ready(function(){
	if($('.slider').length){
		slider.init();
	}
});

var smoothScroll =(function(){

    var init = function(){
        _setUpListners();
    };

    var _setUpListners = function(){
       $('.scrollDown').on('click', _smooth);

   };
    var _smooth = function (){

        var elementClick = $(this).attr('href'),
            destination = $(elementClick).offset().top;
    
            $('html').animate({scrollTop: destination}, 1000);
            return false;
    };

    return {
        init: init
    };


})();

smoothScroll.init();







// +++++++++++++++++++++++B L O G ++++++++++++++++++++++++++++++++++

var blogModule =(function(){


    var     blog_nav = $('.blog_nav nav'),
            blog_navTop = blog_nav.offset().top;
            blog_link = $('.blog_nav').find('.nav_link'),
            button = $('.before');

    var init = function(){
        _setUpListners();
       
    };

    var _setUpListners = function(){
        $(window).on('scroll', _fixed);
        $(window).on('scroll', _checkArticle);
        blog_link.on('click', _scrollToArticle, _activeXOut);
        button.on('click', _activeX);    
    };


    var _scrollToArticle = function(e){
        e.preventDefault();
        var article = $(this).attr('href');

        _showArticle($(this).attr('href'), true);
    };

    var _fixed = function(){

        var 
            wScroll = $(window).scrollTop();
        
        if(blog_navTop < wScroll){
            blog_nav.addClass('fixed');
        } else {
            blog_nav.removeClass('fixed');
        }
    };

    var _activeX = function(){

        $('.blog_nav').toggleClass('activeX');
        
    };

    var _activeXOut = function(){
        $('.nav.')
    }


    var _showArticle = function(article, isAnimate){
       var direction = article.replace(/#/, ''),
           reqArticle = $('.blog_article').filter('[data-article="'+ direction +'"]'),
           reqArticlePos = reqArticle.offset().top;
       if(isAnimate){
           $('body, html').animate({scrollTop: reqArticlePos}, 500);
       } else {
           $('body, html').scrollTop(reqArticlePos);
       }
   };

    var _checkArticle = function(){

        $('.blog_article').each(function(){
            var $this= $(this),
                topEdge = $this.offset().top-300,
                bottomEdge = topEdge + $this.height(),
                wScroll = $(window).scrollTop();

            if(topEdge < wScroll && bottomEdge > wScroll){
                var currentId = $this.data('article');
                console.log(currentId);
                var   reqLink = $('.nav_link').filter('[href="#' + currentId +'"]');

                reqLink.closest('.nav_item').addClass('active').siblings().removeClass('active');
                window.location.hash = currentId;
            }

        });

    };



    return {
        init: init
    };
     

})();

blogModule.init();




// ++++++++++++++++++++++VALIDATE -2++++++++++++++++++++++++++++++++
// (function(){

//     var app = {
//         initialize: function(){
//             this.modules();
//             this.setUpListeners();
//         },

//         modules: function(){

//         },

//         setUpListeners: function(){
//             $('#feedbackForm').on('submit', app.submitForm);
//         },

//         submitForm: function(e) {
//             e.preventDefault();
//             var form = $(this);

//             app.validateForm(form);
//         },

//         validateForm: function(form){
//             var inputs = form.find('input');
//                 valid = true;

            

//             $.each(inputs, function(index, val){
//                 var input = $('input'),
//                     val = input.val(),
//                     f_item = input.parents('.feedback_item'),
//                     textError = 'Вы не заполнили поле';

//                 if(val===''){
//                     f_item.addClass('not-valid').removeClass('is-valid');
//                     valid = false
//                 } else {
//                     // f_item.addClass('is-valid');
//                 }
//                 return valid;
//             });
//         }
//     } 

//     app.initialize();
// })();

// +++++++++++++++++++SLIDER++++++++++++++++



    
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrVmFsaWRhdGUuanMiLCJmbGlwLmpzIiwiZnVsbFNjcmVlbk1lbnUuanMiLCJtYXAuanMiLCJwYXJhbGxheC5qcyIsInByZWxvYWRlci5qcyIsInNsaWRlci5qcyIsInNtb290aFNjcm9sbC5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gKysrKysrKysrKysrKysrKysrKysrKysrKysrKyBWIEEgTCBJIEQgQSBUIEUgLSAxICsrKysrKysrKysrKysrKysrKysrKysrK1xyXG5cclxudmFyIHZhbGlkYXRlID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgdmFsaWRhdGVGb3JtID0gJCgnI2F1dG9yaXplRm9ybScpO1xyXG5cclxuICAgIHZhbGlkYXRlRm9ybS5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgICAgICB2YXIgdmFsaWRhdGVGb3JtID0gJCh0aGlzKTtcclxuICAgICAgICB2YXIgdmFsaWRhdGUgPSB7fTtcclxuICAgICAgICB2YXIgdmFsaWRhdGVUaGlzID0gJCh0aGlzKS5maW5kKCdmb3JtRmllbGQnKTtcclxuICAgICAgICB2YXIgdmFsaWRhdGluZ0xlbmd0aCA9ICQodGhpcykuZmluZCgnZm9ybUZpZWxkJykubGVuZ3RoO1xyXG4gICAgICAgIHZhciBzdWJtaXRCdG4gPSAkKHRoaXMpLmZpbmQoJy5zdWJtaXQnKTtcclxuXHJcbiAgICBcclxuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDw9IHZhbGlkYXRpbmdMZW5ndGg7IGkrKyl7XHJcbiAgICAgIFxyXG4gICAgICAgICAgICB2YWxpZGF0ZVsnaW5wdXQnK2ldID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCcuZm9ybUZpZWxkJykuYmx1cihmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAgJCh0aGlzKS5wcmV2QWxsKCkubGVuZ3RoKzE7XHJcbiAgICAgICAgICAgIHZhciB2YWxpZGF0ZVRoaXNWYWwgPSAkKHRoaXMpLnZhbCgpO1xyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdGVUaGlzVHlwZSA9ICQodGhpcykuYXR0cigndHlwZScpO1xyXG5cclxuICAgICAgICAgICAgaWYodmFsaWRhdGVUaGlzVHlwZSA9PT0gXCJlbWFpbFwiKXtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXFxcIl0rKSopfChcXFwiLitcXFwiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFxdKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZighdmFsaWRhdGVUaGlzVmFsLm1hdGNoKHJlKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnbm90LXZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVbJ2lucHV0JytpbmRleF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdpcy12YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ25vdC12YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVsnaW5wdXQnK2luZGV4XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZih2YWxpZGF0ZVRoaXNWYWwgPT0gXCJcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnbm90LXZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVbJ2lucHV0JytpbmRleF0gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdpcy12YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ25vdC12YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZVsnaW5wdXQnKyBpbmRleF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgdmFsaWRhdGVGb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICBcclxuICAgICAgICAgICAgdmFyIGZhbHNlQ3RuID0gMDtcclxuICAgICAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSB2YWxpZGF0aW5nTGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgaWYodmFsaWRhdGVbJ2lucHV0JytpXSA9PSBmYWxzZSl7XHJcbiAgICAgICAgICAgICAgICBmYWxzZUN0bisrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZihmYWxzZUN0biA+IDApe1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS51bmJpbmQoJ3N1Ym1pdCcpLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5jbGljaygpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB9KTtcclxufTtcclxuXHJcbnZhbGlkYXRlKCk7IiwiLy8gKysrKysrKysrKysrKysrKysrKysrKysgRiBMIEkgUCArKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuXHJcbnZhciBmbGlwTW9kdWxlID0gKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIF9zZXRVcExpc3RuZXJzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfc2V0VXBMaXN0bmVycyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5hdXRvcml6ZV9idG5cIikub24oJ2NsaWNrJywgX2ZsaXApOyAvL2ZsaXBcclxuICAgICAgICAkKFwiLmJsb2NrVXNlcl9uYXZcIikuZmluZChcImEuZmxpcEJhY2tcIikub24oJ2NsaWNrJywgX2ZsaXBCYWNrKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9mbGlwID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQoXCIuZmxpcENvbnRhaW5lclwiKS50b2dnbGVDbGFzcyhcImZsaXBcIilcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9mbGlwQmFjayA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiLmZsaXBDb250YWluZXJcIikucmVtb3ZlQ2xhc3MoXCJmbGlwXCIpXHJcbiAgICB9O1xyXG5cclxucmV0dXJuIHtcclxuICAgICAgICBpbml0OiBpbml0XHJcbiAgICB9O1xyXG4gICAgICAgIFxyXG59KSgpO1xyXG5cclxuZmxpcE1vZHVsZS5pbml0KCk7XHJcblxyXG4iLCIvLyArKysrKysrKysrKysrKysrKysrIEYgVSBMIEwgICBTIEMgUiBFIEUgTiAgIE0gRSBOIFUgKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG5cclxudmFyIGZ1bGxTY3JlZW5NZW51TW9kdWxlID0gKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIF9zZXRVcExpc3RuZXJzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfc2V0VXBMaXN0bmVycyA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJChcIi5tZW51QnV0dG9uXCIpLm9uKCdjbGljaycsIF9zaG93RnVsbFNjcmVlbk1lbnUpOyAvL2Z1bGxTY3JlZW5NZW51IG9wZW5cclxuICAgICAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfc2hvd0Z1bGxTY3JlZW5NZW51ID0gZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgJChcIi5mdWxsU2NyZWVuTWVudVwiKS5mYWRlVG9nZ2xlKCkudG9nZ2xlQ2xhc3MoXCJzaG93XCIpO1xyXG5cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBpbml0XHJcbiAgICB9O1xyXG4gICAgICAgIFxyXG59KSgpO1xyXG5cclxuZnVsbFNjcmVlbk1lbnVNb2R1bGUuaW5pdCgpO1xyXG5cclxuIiwiLy8gKysrKysrKysrKysrKysrKysrKysrKysgTSBBIFAgKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrIFxyXG5cclxuZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuICB2YXIgY3VzdG9tTWFwVHlwZSA9IG5ldyBnb29nbGUubWFwcy5TdHlsZWRNYXBUeXBlKFtcclxuICAgICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZVwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiM0NDQ0NDRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwibGFuZHNjYXBlXCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjREZEQ0Q1XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInNhdHVyYXRpb25cIjogLTEwMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImxpZ2h0bmVzc1wiOiA0NVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5XCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcInNpbXBsaWZpZWRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ0cmFuc2l0XCIsXHJcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImFsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJ3YXRlclwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiIzBlMmY2NVwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9uXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuICAgIF0sIHtcclxuICAgICAgbmFtZTogJ0N1c3RvbSBTdHlsZSdcclxuICB9KTtcclxuICB2YXIgY3VzdG9tTWFwVHlwZUlkID0gJ2N1c3RvbV9zdHlsZSc7XHJcblxyXG4gIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xyXG4gICAgem9vbTogMTIsXHJcbiAgICBkaXNhYmxlRGVmYXVsdFVpOiB0cnVlLFxyXG4gICAgbWFwVHlwZUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgem9vbUNvbnRyb2w6IGZhbHNlLFxyXG4gICAgc2NhbGVDb250cm9sOiBmYWxzZSxcclxuICAgIGNlbnRlcjoge2xhdDogNTkuOTQsIGxuZzogMzAuMzI1fSxcclxuICAgIG1hcFR5cGVDb250cm9sT3B0aW9uczoge1xyXG4gICAgICBtYXBUeXBlSWRzOiBbZ29vZ2xlLm1hcHMuTWFwVHlwZUlkLlJPQURNQVAsIGN1c3RvbU1hcFR5cGVJZF1cclxuICAgIH1cclxuICB9KTtcclxuICB2YXIgaW1hZ2U9J2Fzc2V0cy9pbWcvbWFwLW1hcmtlci1uLnBuZyc7XHJcbiAgdmFyIG1hcE1hcmtlcj0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XHJcbiAgICBwb3NpdGlvbjoge2xhdDogNTkuOTM0LCBsbmc6IDMwLjI5N30sXHJcbiAgICBtYXA6IG1hcCxcclxuICAgIGljb246IGltYWdlXHJcbiAgfSk7XHJcblxyXG4gIG1hcC5tYXBUeXBlcy5zZXQoY3VzdG9tTWFwVHlwZUlkLCBjdXN0b21NYXBUeXBlKTtcclxuICBtYXAuc2V0TWFwVHlwZUlkKGN1c3RvbU1hcFR5cGVJZCk7XHJcbn07XHJcbiIsIiAgIC8vICsrKysrKysrKysrKysrKysrKyBQIEEgUiBBIEwgTCBBIFggKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG5cclxuXHJcbnZhciBwYXJhbGxheE1vZHVsZSA9IChmdW5jdGlvbigpe1xyXG4gICAgLy8gdmFyIGJnMSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGF5ZXItMVwiKTtcclxuICAgIHZhciBiZzIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxheWVyLTJcIik7XHJcbiAgICB2YXIgdXNlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYmxvY2tVc2VyLXdyYXBcIik7XHJcbiAgICB2YXIgaGVhZGVyV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyX3dyYXBcIik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBtb3ZlOiBmdW5jdGlvbiAoYmxvY2ssIHdpbmRvd1Njcm9sbCwgc3RyYWZlQW1vdW50KSB7XHJcbiAgICAgICAgICAgIHZhciBzdHJhZmUgPSB3aW5kb3dTY3JvbGwvc3RyYWZlQW1vdW50ICsgJyUnO1xyXG4gICAgICAgICAgICB2YXIgdGFybnNmb3JtU3RyaW5nID0gJ3RyYW5zbGF0ZTNkKDAsICcrc3RyYWZlKycsIDApJztcclxuICAgICAgICAgICAgdmFyIHN0eWxlID0gYmxvY2suc3R5bGU7XHJcblxyXG4gICAgICAgICAgICBzdHlsZS50b3AgPXN0cmFmZTtcclxuICAgICAgICAgICAgc3R5bGUudHJhbnNmb3JtID0gdGFybnNmb3JtU3RyaW5nO1xyXG4gICAgICAgICAgICBzdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0YXJuc2Zvcm1TdHJpbmc7XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24od1Njcm9sbCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLm1vdmUoYmcxLHdTY3JvbGwsIDg1KVxyXG4gICAgICAgICAgICB0aGlzLm1vdmUoIGJnMiwgd1Njcm9sbCwgLTg1KSxcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKHVzZXIsIHdTY3JvbGwsIC03MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KCkpO1xyXG5cclxud2luZG93Lm9uc2Nyb2xsID0gZnVuY3Rpb24oKXtcclxuICAgIHZhciB3U2Nyb2xsID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xyXG4gICAgcGFyYWxsYXhNb2R1bGUuaW5pdCh3U2Nyb2xsKTtcclxufTtcclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvLyArKysrKysrKysrKysrKysrKysrKysrKyAgUCBSIEUgTCBPIEEgRCBFIFIgKysrKysrKysrKysrKysrKysrKysrXHJcblxyXG52YXIgcHJlbG9hZGVyID0gKGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHBlcmNlbnRzVG90YWwgPSAxLFxyXG4gICAgICAgIHByZWxvYWRlciA9ICQoJy5wcmVsb2FkZXInKTtcclxuXHJcbiAgICB2YXIgaW1nUGF0aCA9ICQoJyonKS5tYXAoZnVuY3Rpb24oaW5keCwgZWxlbWVudCl7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdmFyIGJhY2tncm91bmQgPSAkKGVsZW1lbnQpLmNzcygnYmFja2dyb3VuZC1pbWFnZScpLFxyXG4gICAgICAgICAgICBpbWcgPSAkKGVsZW1lbnQpLmlzKCdpbWcnKSxcclxuICAgICAgICAgICAgcGF0aCA9ICcnO1xyXG5cclxuICAgICAgICBpZihiYWNrZ3JvdW5kICE9ICdub25lJyl7XHJcbiAgICAgICAgICAgIHBhdGggPSBiYWNrZ3JvdW5kLnJlcGxhY2UoJ3VybChcIicsICcnKS5yZXBsYWNlKCdcIiknLCcnKTtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhdGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoaW1nKXtcclxuICAgICAgICAgICAgcGF0aCA9ICQoZWxlbWVudCkuYXR0cignc3JjJyk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZihwYXRoKSByZXR1cm4gcGF0aDtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICB2YXIgc2V0UGVyY2VudHMgPSBmdW5jdGlvbih0b3RhbCwgY3VycmVudCl7XHJcbiAgICAgICAgdmFyIHBlcnNlbnRzID0gTWF0aC5jZWlsKGN1cnJlbnQvdG90YWwqMTAwKTtcclxuICAgICAgICAkKCcucHJlbG9hZGVyX3BlcmNlbnRzJykudGV4dChwZXJzZW50cyArICclJyk7XHJcbiAgICAgICAgaWYocGVyc2VudHM+PTEwMCl7XHJcbiAgICAgICAgICAgIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciBsb2FkSW1hZ2VzID0gZnVuY3Rpb24oaW1hZ2VzKXtcclxuICAgICAgICBpZighaW1hZ2VzLmxlbmd0aCkgcHJlbG9hZGVyLmZhZGVPdXQoKTtcclxuXHJcbiAgICAgICAgaW1hZ2VzLmZvckVhY2goZnVuY3Rpb24oaW1nLCBpLCBpbWFnZXMpe1xyXG4gICAgICAgICAgICB2YXIgZmFrZUltYWdlID0gJCgnPGltZz4nLHtcclxuICAgICAgICAgICAgICAgIGF0dHI6IHtcclxuICAgICAgICAgICAgICAgICAgICBzcmM6IGltZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZmFrZUltYWdlLm9uKCdsb2FkIGVycm9yJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIHNldFBlcmNlbnRzKGltYWdlcy5sZW5ndGgsIHBlcmNlbnRzVG90YWwpO1xyXG4gICAgICAgICAgICAgICAgcGVyY2VudHNUb3RhbCsrO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm57XHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKXsgXHJcbiAgICAgICAgICAgIHZhciBpbWdzID0gaW1nUGF0aC50b0FycmF5KCk7XHJcbiAgICAgICAgICAgIGxvYWRJbWFnZXMoaW1ncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSgpKTtcclxuXHJcblxyXG5wcmVsb2FkZXIuaW5pdCgpOyIsIi8vICsrKysrKysrKysrKysrKysrKyBTIEwgSSBEIEUgUiArKysrKysrKysrKysrKysrKysrKysrKytcclxuXHJcbnZhciBzbGlkZXIgPSAoZnVuY3Rpb24oKXtcclxuXHJcblx0cmV0dXJue1xyXG5cdFx0aW5pdDogZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcztcclxuXHJcblx0XHRcdF90aGlzLmNyZWF0ZURvdHMoKTtcclxuXHJcblx0XHRcdCQoJy5zbGlkZXJCdG4nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRzbGlkZXMgPSAkdGhpcy5jbG9zZXN0KCcuc2xpZGVyJykuZmluZCgnLnNsaWRlcl9pdGVtJyksXHJcblx0XHRcdFx0XHRhY3RpdmVTbGlkZSA9IHNsaWRlcy5maWx0ZXIoJy5hY3RpdmUnKSxcclxuXHRcdFx0XHRcdG5leHRTbGlkZSA9IGFjdGl2ZVNsaWRlLm5leHQoKSxcclxuXHRcdFx0XHRcdHByZXZTbGlkZSA9IGFjdGl2ZVNsaWRlLnByZXYoKSxcclxuXHRcdFx0XHRcdGZpcnN0U2xpZGUgPSBzbGlkZXMuZmlyc3QoKSxcclxuXHRcdFx0XHRcdGxhc3RTbGlkZSA9IHNsaWRlcy5sYXN0KCk7XHJcblxyXG5cdFx0XHRcdGlmKCR0aGlzLmhhc0NsYXNzKCduZXh0Jykpe1xyXG5cclxuXHRcdFx0XHRcdGlmKG5leHRTbGlkZS5sZW5ndGgpe1xyXG5cdFx0XHRcdFx0XHRfdGhpcy5tb3ZlU2xpZGUobmV4dFNsaWRlLCAnZm9yd2FyZCcpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0X3RoaXMubW92ZVNsaWRlKGZpcnN0U2xpZGUsICdmb3J3YXJkJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYocHJldlNsaWRlLmxlbmd0aCl7XHJcblx0XHRcdFx0XHRcdF90aGlzLm1vdmVTbGlkZShwcmV2U2xpZGUsICdiYWNrd2FyZCcpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0X3RoaXMubW92ZVNsaWRlKGxhc3RTbGlkZSwgJ2JhY2t3YXJkJyk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHQkKCcuZG90Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpO1xyXG5cdFx0XHRcdFx0ZG90cyA9ICR0aGlzLmNsb3Nlc3QoJy5zbGlkZXJfY29udHJvbHMnKS5maW5kKCcuZG90JyksXHJcblx0XHRcdFx0XHRhY3RpdmVEb3QgPSBkb3RzLmZpbHRlcignLmFjdGl2ZScpLFxyXG5cdFx0XHRcdFx0ZG90ID0gJHRoaXMuY2xvc2VzdCgnLmRvdCcpLFxyXG5cdFx0XHRcdFx0Y3VyRG90TnVtID0gZG90LmluZGV4KCksXHJcblx0XHRcdFx0XHRkaXJlY3Rpb24gPShhY3RpdmVEb3QuaW5kZXgoKTwgY3VyRG90TnVtKSA/ICdmb3J3YXJkJyA6ICdiYWNrd2FyZCc7XHJcblx0XHRcdFx0XHRyZXFTbGlkZSA9ICR0aGlzLmNsb3Nlc3QoJy5zbGlkZXInKS5maW5kKCcuc2xpZGVyX2l0ZW0nKS5lcShjdXJEb3ROdW0pO1xyXG5cclxuXHRcdFx0XHRfdGhpcy5tb3ZlU2xpZGUocmVxU2xpZGUsIGRpcmVjdGlvbik7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRtb3ZlU2xpZGU6IGZ1bmN0aW9uKHNsaWRlLCBkaXJlY3Rpb24pe1xyXG5cdFx0XHR2YXIgX3RoaXMgPSB0aGlzLFxyXG5cdFx0XHRcdGNvbnRhaW5lciA9IHNsaWRlLmNsb3Nlc3QoJy5zbGlkZXInKSxcclxuXHRcdFx0XHRzbGlkZXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9pdGVtJyksXHJcblx0XHRcdFx0YWN0aXZlU2xpZGUgPSBzbGlkZXMuZmlsdGVyKCcuYWN0aXZlJyksXHJcblx0XHRcdFx0c2xpZGVXaWR0aCA9IHNsaWRlcy53aWR0aCgpLFxyXG5cdFx0XHRcdGR1cmF0aW9uID0gIDUwMCxcclxuXHRcdFx0XHRyZXFDc3NQb3NpdGlvbiA9IDAsXHJcblx0XHRcdFx0cmVxU2xpZGVTdHJhZmUgPSAwO1xyXG5cclxuXHRcdFx0aWYoZGlyZWN0aW9uID09PSAnZm9yd2FyZCcpe1xyXG5cdFx0XHRcdHJlcUNzc1Bvc2l0aW9uID0gc2xpZGVXaWR0aDtcclxuXHRcdFx0XHRyZXFTbGlkZVN0cmFmZSA9IC1zbGlkZVdpZHRoO1xyXG5cdFx0XHR9IGVsc2UgaWYoZGlyZWN0aW9uID09PSAnYmFja3dhcmQnKXtcclxuXHRcdFx0XHRyZXFDc3NQb3NpdGlvbiA9IC1zbGlkZVdpZHRoO1xyXG5cdFx0XHRcdHJlcVNsaWRlU3RyYWZlID0gc2xpZGVXaWR0aDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0c2xpZGUuY3NzKCdsZWZ0JywgcmVxQ3NzUG9zaXRpb24pLmFkZENsYXNzKCdpbnNsaWRlJyk7XHJcblx0XHRcdHZhciBtb3ZhYmxlU2xpZGUgPSBzbGlkZXMuZmlsdGVyKCcuaW5zbGlkZScpO1xyXG5cclxuXHRcdFx0YWN0aXZlU2xpZGUuYW5pbWF0ZSh7bGVmdDogcmVxU2xpZGVTdHJhZmV9LCBkdXJhdGlvbik7XHJcblx0XHRcdG1vdmFibGVTbGlkZS5hbmltYXRlKHtsZWZ0OiAwfSwgZHVyYXRpb24sIGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHJcblx0XHRcdFx0c2xpZGVzLmNzcygnbGVmdCcsJzAnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0JHRoaXMudG9nZ2xlQ2xhc3MoJ2luc2xpZGUgYWN0aXZlJyk7XHJcblx0XHRcdFx0X3RoaXMuc2V0QWN0aXZlRG90KGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX2NvbnRyb2xzJykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0Y3JlYXRlRG90czogZnVuY3Rpb24oKXtcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcyxcclxuXHRcdFx0XHRjb250YWluZXIgPSAkKCcuc2xpZGVyJyk7XHJcblxyXG5cdFx0XHR2YXIgZG90TWFya3VwID0gJzxhIGNsYXNzPVwiZG90XCIgaHJlZj1cIiNcIj48L2E+JzsgXHJcblx0XHRcdFx0XHRcdFx0XHJcblxyXG5cdFx0XHRjb250YWluZXIuZWFjaChmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdFx0XHRzbGlkZXMgPSAkdGhpcy5maW5kKCcuc2xpZGVyX2l0ZW0nKSxcclxuXHRcdFx0XHRcdGRvdENvbnRhaW5lciA9ICR0aGlzLmZpbmQoJy5zbGlkZXJfY29udHJvbHMnKTtcclxuXHJcblx0XHRcdFx0Zm9yKHZhciBpID0gMDsgaTwgc2xpZGVzLnNpemUoKTsgaSsrKXtcclxuXHRcdFx0XHRcdGRvdENvbnRhaW5lci5hcHBlbmQoZG90TWFya3VwKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdF90aGlzLnNldEFjdGl2ZURvdChkb3RDb250YWluZXIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdH0sXHJcblx0XHRzZXRBY3RpdmVEb3Q6IGZ1bmN0aW9uKGNvbnRhaW5lcil7XHJcblx0XHRcdHZhciBzbGlkZXMgPSBjb250YWluZXIuY2xvc2VzdCgnLnNsaWRlcicpLmZpbmQoJy5zbGlkZXJfaXRlbScpO1xyXG5cclxuXHRcdFx0Y29udGFpbmVyXHJcblx0XHRcdFx0XHQuZmluZCgnLmRvdCcpXHJcblx0XHRcdFx0XHQuZXEoc2xpZGVzLmZpbHRlcignLmFjdGl2ZScpLmluZGV4KCkpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdFx0XHQuc2libGluZ3MoKVxyXG5cdFx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG59KSgpOyAgICBcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XHJcblx0aWYoJCgnLnNsaWRlcicpLmxlbmd0aCl7XHJcblx0XHRzbGlkZXIuaW5pdCgpO1xyXG5cdH1cclxufSk7XHJcbiIsInZhciBzbW9vdGhTY3JvbGwgPShmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgJCgnLnNjcm9sbERvd24nKS5vbignY2xpY2snLCBfc21vb3RoKTtcclxuXHJcbiAgIH07XHJcbiAgICB2YXIgX3Ntb290aCA9IGZ1bmN0aW9uICgpe1xyXG5cclxuICAgICAgICB2YXIgZWxlbWVudENsaWNrID0gJCh0aGlzKS5hdHRyKCdocmVmJyksXHJcbiAgICAgICAgICAgIGRlc3RpbmF0aW9uID0gJChlbGVtZW50Q2xpY2spLm9mZnNldCgpLnRvcDtcclxuICAgIFxyXG4gICAgICAgICAgICAkKCdodG1sJykuYW5pbWF0ZSh7c2Nyb2xsVG9wOiBkZXN0aW5hdGlvbn0sIDEwMDApO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogaW5pdFxyXG4gICAgfTtcclxuXHJcblxyXG59KSgpO1xyXG5cclxuc21vb3RoU2Nyb2xsLmluaXQoKTtcclxuIiwiXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gKysrKysrKysrKysrKysrKysrKysrKytCIEwgTyBHICsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuXHJcbnZhciBibG9nTW9kdWxlID0oZnVuY3Rpb24oKXtcclxuXHJcblxyXG4gICAgdmFyICAgICBibG9nX25hdiA9ICQoJy5ibG9nX25hdiBuYXYnKSxcclxuICAgICAgICAgICAgYmxvZ19uYXZUb3AgPSBibG9nX25hdi5vZmZzZXQoKS50b3A7XHJcbiAgICAgICAgICAgIGJsb2dfbGluayA9ICQoJy5ibG9nX25hdicpLmZpbmQoJy5uYXZfbGluaycpLFxyXG4gICAgICAgICAgICBidXR0b24gPSAkKCcuYmVmb3JlJyk7XHJcblxyXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIF9zZXRVcExpc3RuZXJzKCk7XHJcbiAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9zZXRVcExpc3RuZXJzID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIF9maXhlZCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfY2hlY2tBcnRpY2xlKTtcclxuICAgICAgICBibG9nX2xpbmsub24oJ2NsaWNrJywgX3Njcm9sbFRvQXJ0aWNsZSwgX2FjdGl2ZVhPdXQpO1xyXG4gICAgICAgIGJ1dHRvbi5vbignY2xpY2snLCBfYWN0aXZlWCk7ICAgIFxyXG4gICAgfTtcclxuXHJcblxyXG4gICAgdmFyIF9zY3JvbGxUb0FydGljbGUgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGFydGljbGUgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICAgICAgX3Nob3dBcnRpY2xlKCQodGhpcykuYXR0cignaHJlZicpLCB0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9maXhlZCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgIHZhciBcclxuICAgICAgICAgICAgd1Njcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZihibG9nX25hdlRvcCA8IHdTY3JvbGwpe1xyXG4gICAgICAgICAgICBibG9nX25hdi5hZGRDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBibG9nX25hdi5yZW1vdmVDbGFzcygnZml4ZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfYWN0aXZlWCA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgICAgICQoJy5ibG9nX25hdicpLnRvZ2dsZUNsYXNzKCdhY3RpdmVYJyk7XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfYWN0aXZlWE91dCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgJCgnLm5hdi4nKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB2YXIgX3Nob3dBcnRpY2xlID0gZnVuY3Rpb24oYXJ0aWNsZSwgaXNBbmltYXRlKXtcclxuICAgICAgIHZhciBkaXJlY3Rpb24gPSBhcnRpY2xlLnJlcGxhY2UoLyMvLCAnJyksXHJcbiAgICAgICAgICAgcmVxQXJ0aWNsZSA9ICQoJy5ibG9nX2FydGljbGUnKS5maWx0ZXIoJ1tkYXRhLWFydGljbGU9XCInKyBkaXJlY3Rpb24gKydcIl0nKSxcclxuICAgICAgICAgICByZXFBcnRpY2xlUG9zID0gcmVxQXJ0aWNsZS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICBpZihpc0FuaW1hdGUpe1xyXG4gICAgICAgICAgICQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHJlcUFydGljbGVQb3N9LCA1MDApO1xyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAkKCdib2R5LCBodG1sJykuc2Nyb2xsVG9wKHJlcUFydGljbGVQb3MpO1xyXG4gICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgIHZhciBfY2hlY2tBcnRpY2xlID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmJsb2dfYXJ0aWNsZScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyICR0aGlzPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgdG9wRWRnZSA9ICR0aGlzLm9mZnNldCgpLnRvcC0zMDAsXHJcbiAgICAgICAgICAgICAgICBib3R0b21FZGdlID0gdG9wRWRnZSArICR0aGlzLmhlaWdodCgpLFxyXG4gICAgICAgICAgICAgICAgd1Njcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRvcEVkZ2UgPCB3U2Nyb2xsICYmIGJvdHRvbUVkZ2UgPiB3U2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SWQgPSAkdGhpcy5kYXRhKCdhcnRpY2xlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SWQpO1xyXG4gICAgICAgICAgICAgICAgdmFyICAgcmVxTGluayA9ICQoJy5uYXZfbGluaycpLmZpbHRlcignW2hyZWY9XCIjJyArIGN1cnJlbnRJZCArJ1wiXScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcUxpbmsuY2xvc2VzdCgnLm5hdl9pdGVtJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBjdXJyZW50SWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogaW5pdFxyXG4gICAgfTtcclxuICAgICBcclxuXHJcbn0pKCk7XHJcblxyXG5ibG9nTW9kdWxlLmluaXQoKTtcclxuXHJcblxyXG5cclxuXHJcbi8vICsrKysrKysrKysrKysrKysrKysrKytWQUxJREFURSAtMisrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcbi8vIChmdW5jdGlvbigpe1xyXG5cclxuLy8gICAgIHZhciBhcHAgPSB7XHJcbi8vICAgICAgICAgaW5pdGlhbGl6ZTogZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICAgICAgdGhpcy5tb2R1bGVzKCk7XHJcbi8vICAgICAgICAgICAgIHRoaXMuc2V0VXBMaXN0ZW5lcnMoKTtcclxuLy8gICAgICAgICB9LFxyXG5cclxuLy8gICAgICAgICBtb2R1bGVzOiBmdW5jdGlvbigpe1xyXG5cclxuLy8gICAgICAgICB9LFxyXG5cclxuLy8gICAgICAgICBzZXRVcExpc3RlbmVyczogZnVuY3Rpb24oKXtcclxuLy8gICAgICAgICAgICAgJCgnI2ZlZWRiYWNrRm9ybScpLm9uKCdzdWJtaXQnLCBhcHAuc3VibWl0Rm9ybSk7XHJcbi8vICAgICAgICAgfSxcclxuXHJcbi8vICAgICAgICAgc3VibWl0Rm9ybTogZnVuY3Rpb24oZSkge1xyXG4vLyAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICAgICAgICAgIHZhciBmb3JtID0gJCh0aGlzKTtcclxuXHJcbi8vICAgICAgICAgICAgIGFwcC52YWxpZGF0ZUZvcm0oZm9ybSk7XHJcbi8vICAgICAgICAgfSxcclxuXHJcbi8vICAgICAgICAgdmFsaWRhdGVGb3JtOiBmdW5jdGlvbihmb3JtKXtcclxuLy8gICAgICAgICAgICAgdmFyIGlucHV0cyA9IGZvcm0uZmluZCgnaW5wdXQnKTtcclxuLy8gICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIFxyXG5cclxuLy8gICAgICAgICAgICAgJC5lYWNoKGlucHV0cywgZnVuY3Rpb24oaW5kZXgsIHZhbCl7XHJcbi8vICAgICAgICAgICAgICAgICB2YXIgaW5wdXQgPSAkKCdpbnB1dCcpLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbCA9IGlucHV0LnZhbCgpLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGZfaXRlbSA9IGlucHV0LnBhcmVudHMoJy5mZWVkYmFja19pdGVtJyksXHJcbi8vICAgICAgICAgICAgICAgICAgICAgdGV4dEVycm9yID0gJ9CS0Ysg0L3QtSDQt9Cw0L/QvtC70L3QuNC70Lgg0L/QvtC70LUnO1xyXG5cclxuLy8gICAgICAgICAgICAgICAgIGlmKHZhbD09PScnKXtcclxuLy8gICAgICAgICAgICAgICAgICAgICBmX2l0ZW0uYWRkQ2xhc3MoJ25vdC12YWxpZCcpLnJlbW92ZUNsYXNzKCdpcy12YWxpZCcpO1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmFsc2VcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgLy8gZl9pdGVtLmFkZENsYXNzKCdpcy12YWxpZCcpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkO1xyXG4vLyAgICAgICAgICAgICB9KTtcclxuLy8gICAgICAgICB9XHJcbi8vICAgICB9IFxyXG5cclxuLy8gICAgIGFwcC5pbml0aWFsaXplKCk7XHJcbi8vIH0pKCk7XHJcblxyXG4vLyArKysrKysrKysrKysrKysrKysrU0xJREVSKysrKysrKysrKysrKysrK1xyXG5cclxuXHJcblxyXG4gICAgIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
