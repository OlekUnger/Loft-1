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


    var     blog_nav = $('.blog_nav .nav'),
            blog_navTop = blog_nav.offset().top,
            blog_link = $('.blog_nav').find('.nav_link'),
            button = $('.before');

    var init = function(){
        _setUpListners();
       
    };

    var _setUpListners = function(){
        $(window).on('scroll', _fixed);
        $(window).on('scroll', _checkArticle);
        blog_link.on('click', _scrollToArticle);
        blog_link.on('click',  _activeXOut);
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
        $('.blog_nav').removeClass('activeX');
    };

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



    
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrVmFsaWRhdGUuanMiLCJmbGlwLmpzIiwiZnVsbFNjcmVlbk1lbnUuanMiLCJtYXAuanMiLCJwYXJhbGxheC5qcyIsInByZWxvYWRlci5qcyIsInNsaWRlci5qcyIsInNtb290aFNjcm9sbC5qcyIsImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICsrKysrKysrKysrKysrKysrKysrKysrKysrKysgViBBIEwgSSBEIEEgVCBFIC0gMSArKysrKysrKysrKysrKysrKysrKysrKytcclxuXHJcbnZhciB2YWxpZGF0ZSA9IGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgdmFyIHZhbGlkYXRlRm9ybSA9ICQoJyNhdXRvcml6ZUZvcm0nKTtcclxuXHJcbiAgICB2YWxpZGF0ZUZvcm0uZWFjaChmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAgICAgdmFyIHZhbGlkYXRlRm9ybSA9ICQodGhpcyk7XHJcbiAgICAgICAgdmFyIHZhbGlkYXRlID0ge307XHJcbiAgICAgICAgdmFyIHZhbGlkYXRlVGhpcyA9ICQodGhpcykuZmluZCgnZm9ybUZpZWxkJyk7XHJcbiAgICAgICAgdmFyIHZhbGlkYXRpbmdMZW5ndGggPSAkKHRoaXMpLmZpbmQoJ2Zvcm1GaWVsZCcpLmxlbmd0aDtcclxuICAgICAgICB2YXIgc3VibWl0QnRuID0gJCh0aGlzKS5maW5kKCcuc3VibWl0Jyk7XHJcblxyXG4gICAgXHJcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8PSB2YWxpZGF0aW5nTGVuZ3RoOyBpKyspe1xyXG4gICAgICBcclxuICAgICAgICAgICAgdmFsaWRhdGVbJ2lucHV0JytpXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJCgnLmZvcm1GaWVsZCcpLmJsdXIoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gICQodGhpcykucHJldkFsbCgpLmxlbmd0aCsxO1xyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdGVUaGlzVmFsID0gJCh0aGlzKS52YWwoKTtcclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRlVGhpc1R5cGUgPSAkKHRoaXMpLmF0dHIoJ3R5cGUnKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHZhbGlkYXRlVGhpc1R5cGUgPT09IFwiZW1haWxcIil7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcXFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFxcXCJdKykqKXwoXFxcIi4rXFxcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcXSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYoIXZhbGlkYXRlVGhpc1ZhbC5tYXRjaChyZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ25vdC12YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlWydpbnB1dCcraW5kZXhdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtdmFsaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdub3QtdmFsaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVbJ2lucHV0JytpbmRleF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaWYodmFsaWRhdGVUaGlzVmFsID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ25vdC12YWxpZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2lzLXZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbGlkYXRlWydpbnB1dCcraW5kZXhdID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaXMtdmFsaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdub3QtdmFsaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVbJ2lucHV0JysgaW5kZXhdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIFxyXG4gICAgICAgIHZhbGlkYXRlRm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgXHJcbiAgICAgICAgICAgIHZhciBmYWxzZUN0biA9IDA7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPD0gdmFsaWRhdGluZ0xlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKHZhbGlkYXRlWydpbnB1dCcraV0gPT0gZmFsc2Upe1xyXG4gICAgICAgICAgICAgICAgZmFsc2VDdG4rKztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoZmFsc2VDdG4gPiAwKXtcclxuICAgICAgICAgICAgICAgICQodGhpcykudW5iaW5kKCdzdWJtaXQnKS5zdWJtaXQoKTtcclxuICAgICAgICAgICAgICAgICQodGhpcykuY2xpY2soKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgfSk7XHJcbn07XHJcblxyXG52YWxpZGF0ZSgpOyIsIi8vICsrKysrKysrKysrKysrKysrKysrKysrIEYgTCBJIFAgKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrXHJcblxyXG52YXIgZmxpcE1vZHVsZSA9IChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIuYXV0b3JpemVfYnRuXCIpLm9uKCdjbGljaycsIF9mbGlwKTsgLy9mbGlwXHJcbiAgICAgICAgJChcIi5ibG9ja1VzZXJfbmF2XCIpLmZpbmQoXCJhLmZsaXBCYWNrXCIpLm9uKCdjbGljaycsIF9mbGlwQmFjayk7XHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfZmxpcCA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKFwiLmZsaXBDb250YWluZXJcIikudG9nZ2xlQ2xhc3MoXCJmbGlwXCIpXHJcbiAgICB9O1xyXG5cclxuICAgIHZhciBfZmxpcEJhY2sgPSBmdW5jdGlvbihlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgJChcIi5mbGlwQ29udGFpbmVyXCIpLnJlbW92ZUNsYXNzKFwiZmxpcFwiKVxyXG4gICAgfTtcclxuXHJcbnJldHVybiB7XHJcbiAgICAgICAgaW5pdDogaW5pdFxyXG4gICAgfTtcclxuICAgICAgICBcclxufSkoKTtcclxuXHJcbmZsaXBNb2R1bGUuaW5pdCgpO1xyXG5cclxuIiwiLy8gKysrKysrKysrKysrKysrKysrKyBGIFUgTCBMICAgUyBDIFIgRSBFIE4gICBNIEUgTiBVICsrKysrKysrKysrKysrKysrKysrKysrKytcclxuXHJcbnZhciBmdWxsU2NyZWVuTWVudU1vZHVsZSA9IChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBpbml0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICBfc2V0VXBMaXN0bmVycygpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX3NldFVwTGlzdG5lcnMgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgICQoXCIubWVudUJ1dHRvblwiKS5vbignY2xpY2snLCBfc2hvd0Z1bGxTY3JlZW5NZW51KTsgLy9mdWxsU2NyZWVuTWVudSBvcGVuXHJcbiAgICAgICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX3Nob3dGdWxsU2NyZWVuTWVudSA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICQoXCIuZnVsbFNjcmVlbk1lbnVcIikuZmFkZVRvZ2dsZSgpLnRvZ2dsZUNsYXNzKFwic2hvd1wiKTtcclxuXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogaW5pdFxyXG4gICAgfTtcclxuICAgICAgICBcclxufSkoKTtcclxuXHJcbmZ1bGxTY3JlZW5NZW51TW9kdWxlLmluaXQoKTtcclxuXHJcbiIsIi8vICsrKysrKysrKysrKysrKysrKysrKysrIE0gQSBQICsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKyBcclxuXHJcbmZ1bmN0aW9uIGluaXRNYXAoKSB7XHJcbiAgdmFyIGN1c3RvbU1hcFR5cGUgPSBuZXcgZ29vZ2xlLm1hcHMuU3R5bGVkTWFwVHlwZShbXHJcbiAgICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxyXG4gICAgICAgIFwic3R5bGVyc1wiOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNDQ0NDQ0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcImxhbmRzY2FwZVwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcImNvbG9yXCI6IFwiI0RGRENENVwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2lcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJ2aXNpYmlsaXR5XCI6IFwib2ZmXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWRcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJzYXR1cmF0aW9uXCI6IC0xMDBcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJsaWdodG5lc3NcIjogNDVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJzaW1wbGlmaWVkXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLmljb25cIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwidHJhbnNpdFwiLFxyXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJhbGxcIixcclxuICAgICAgICBcInN0eWxlcnNcIjogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcclxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiYWxsXCIsXHJcbiAgICAgICAgXCJzdHlsZXJzXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcIiMwZTJmNjVcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvblwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICB9XHJcbiAgICBdLCB7XHJcbiAgICAgIG5hbWU6ICdDdXN0b20gU3R5bGUnXHJcbiAgfSk7XHJcbiAgdmFyIGN1c3RvbU1hcFR5cGVJZCA9ICdjdXN0b21fc3R5bGUnO1xyXG5cclxuICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcclxuICAgIHpvb206IDEyLFxyXG4gICAgZGlzYWJsZURlZmF1bHRVaTogdHJ1ZSxcclxuICAgIG1hcFR5cGVDb250cm9sOiBmYWxzZSxcclxuICAgIHpvb21Db250cm9sOiBmYWxzZSxcclxuICAgIHNjYWxlQ29udHJvbDogZmFsc2UsXHJcbiAgICBjZW50ZXI6IHtsYXQ6IDU5Ljk0LCBsbmc6IDMwLjMyNX0sXHJcbiAgICBtYXBUeXBlQ29udHJvbE9wdGlvbnM6IHtcclxuICAgICAgbWFwVHlwZUlkczogW2dvb2dsZS5tYXBzLk1hcFR5cGVJZC5ST0FETUFQLCBjdXN0b21NYXBUeXBlSWRdXHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgdmFyIGltYWdlPSdhc3NldHMvaW1nL21hcC1tYXJrZXItbi5wbmcnO1xyXG4gIHZhciBtYXBNYXJrZXI9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xyXG4gICAgcG9zaXRpb246IHtsYXQ6IDU5LjkzNCwgbG5nOiAzMC4yOTd9LFxyXG4gICAgbWFwOiBtYXAsXHJcbiAgICBpY29uOiBpbWFnZVxyXG4gIH0pO1xyXG5cclxuICBtYXAubWFwVHlwZXMuc2V0KGN1c3RvbU1hcFR5cGVJZCwgY3VzdG9tTWFwVHlwZSk7XHJcbiAgbWFwLnNldE1hcFR5cGVJZChjdXN0b21NYXBUeXBlSWQpO1xyXG59O1xyXG4iLCIgICAvLyArKysrKysrKysrKysrKysrKysgUCBBIFIgQSBMIEwgQSBYICsrKysrKysrKysrKysrKysrKysrKysrKysrKytcclxuXHJcblxyXG52YXIgcGFyYWxsYXhNb2R1bGUgPSAoZnVuY3Rpb24oKXtcclxuICAgIC8vIHZhciBiZzEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxheWVyLTFcIik7XHJcbiAgICB2YXIgYmcyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXllci0yXCIpO1xyXG4gICAgdmFyIHVzZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJsb2NrVXNlci13cmFwXCIpO1xyXG4gICAgdmFyIGhlYWRlcldyYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlcl93cmFwXCIpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbW92ZTogZnVuY3Rpb24gKGJsb2NrLCB3aW5kb3dTY3JvbGwsIHN0cmFmZUFtb3VudCkge1xyXG4gICAgICAgICAgICB2YXIgc3RyYWZlID0gd2luZG93U2Nyb2xsL3N0cmFmZUFtb3VudCArICclJztcclxuICAgICAgICAgICAgdmFyIHRhcm5zZm9ybVN0cmluZyA9ICd0cmFuc2xhdGUzZCgwLCAnK3N0cmFmZSsnLCAwKSc7XHJcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGJsb2NrLnN0eWxlO1xyXG5cclxuICAgICAgICAgICAgc3R5bGUudG9wID1zdHJhZmU7XHJcbiAgICAgICAgICAgIHN0eWxlLnRyYW5zZm9ybSA9IHRhcm5zZm9ybVN0cmluZztcclxuICAgICAgICAgICAgc3R5bGUud2Via2l0VHJhbnNmb3JtID0gdGFybnNmb3JtU3RyaW5nO1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKHdTY3JvbGwpIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5tb3ZlKGJnMSx3U2Nyb2xsLCA4NSlcclxuICAgICAgICAgICAgdGhpcy5tb3ZlKCBiZzIsIHdTY3JvbGwsIC04NSksXHJcbiAgICAgICAgICAgIHRoaXMubW92ZSh1c2VyLCB3U2Nyb2xsLCAtNzApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSgpKTtcclxuXHJcbndpbmRvdy5vbnNjcm9sbCA9IGZ1bmN0aW9uKCl7XHJcbiAgICB2YXIgd1Njcm9sbCA9IHdpbmRvdy5wYWdlWU9mZnNldDtcclxuICAgIHBhcmFsbGF4TW9kdWxlLmluaXQod1Njcm9sbCk7XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gKysrKysrKysrKysrKysrKysrKysrKysgIFAgUiBFIEwgTyBBIEQgRSBSICsrKysrKysrKysrKysrKysrKysrK1xyXG5cclxudmFyIHByZWxvYWRlciA9IChmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBwZXJjZW50c1RvdGFsID0gMSxcclxuICAgICAgICBwcmVsb2FkZXIgPSAkKCcucHJlbG9hZGVyJyk7XHJcblxyXG4gICAgdmFyIGltZ1BhdGggPSAkKCcqJykubWFwKGZ1bmN0aW9uKGluZHgsIGVsZW1lbnQpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIHZhciBiYWNrZ3JvdW5kID0gJChlbGVtZW50KS5jc3MoJ2JhY2tncm91bmQtaW1hZ2UnKSxcclxuICAgICAgICAgICAgaW1nID0gJChlbGVtZW50KS5pcygnaW1nJyksXHJcbiAgICAgICAgICAgIHBhdGggPSAnJztcclxuXHJcbiAgICAgICAgaWYoYmFja2dyb3VuZCAhPSAnbm9uZScpe1xyXG4gICAgICAgICAgICBwYXRoID0gYmFja2dyb3VuZC5yZXBsYWNlKCd1cmwoXCInLCAnJykucmVwbGFjZSgnXCIpJywnJyk7XHJcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXRoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGltZyl7XHJcbiAgICAgICAgICAgIHBhdGggPSAkKGVsZW1lbnQpLmF0dHIoJ3NyYycpO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYocGF0aCkgcmV0dXJuIHBhdGg7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgdmFyIHNldFBlcmNlbnRzID0gZnVuY3Rpb24odG90YWwsIGN1cnJlbnQpe1xyXG4gICAgICAgIHZhciBwZXJzZW50cyA9IE1hdGguY2VpbChjdXJyZW50L3RvdGFsKjEwMCk7XHJcbiAgICAgICAgJCgnLnByZWxvYWRlcl9wZXJjZW50cycpLnRleHQocGVyc2VudHMgKyAnJScpO1xyXG4gICAgICAgIGlmKHBlcnNlbnRzPj0xMDApe1xyXG4gICAgICAgICAgICBwcmVsb2FkZXIuZmFkZU91dCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB2YXIgbG9hZEltYWdlcyA9IGZ1bmN0aW9uKGltYWdlcyl7XHJcbiAgICAgICAgaWYoIWltYWdlcy5sZW5ndGgpIHByZWxvYWRlci5mYWRlT3V0KCk7XHJcblxyXG4gICAgICAgIGltYWdlcy5mb3JFYWNoKGZ1bmN0aW9uKGltZywgaSwgaW1hZ2VzKXtcclxuICAgICAgICAgICAgdmFyIGZha2VJbWFnZSA9ICQoJzxpbWc+Jyx7XHJcbiAgICAgICAgICAgICAgICBhdHRyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjOiBpbWdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZha2VJbWFnZS5vbignbG9hZCBlcnJvcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICBzZXRQZXJjZW50cyhpbWFnZXMubGVuZ3RoLCBwZXJjZW50c1RvdGFsKTtcclxuICAgICAgICAgICAgICAgIHBlcmNlbnRzVG90YWwrKztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJue1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCl7IFxyXG4gICAgICAgICAgICB2YXIgaW1ncyA9IGltZ1BhdGgudG9BcnJheSgpO1xyXG4gICAgICAgICAgICBsb2FkSW1hZ2VzKGltZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0oKSk7XHJcblxyXG5cclxucHJlbG9hZGVyLmluaXQoKTsiLCIvLyArKysrKysrKysrKysrKysrKysgUyBMIEkgRCBFIFIgKysrKysrKysrKysrKysrKysrKysrKysrXHJcblxyXG52YXIgc2xpZGVyID0gKGZ1bmN0aW9uKCl7XHJcblxyXG5cdHJldHVybntcclxuXHRcdGluaXQ6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG5cdFx0XHRfdGhpcy5jcmVhdGVEb3RzKCk7XHJcblxyXG5cdFx0XHQkKCcuc2xpZGVyQnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0c2xpZGVzID0gJHRoaXMuY2xvc2VzdCgnLnNsaWRlcicpLmZpbmQoJy5zbGlkZXJfaXRlbScpLFxyXG5cdFx0XHRcdFx0YWN0aXZlU2xpZGUgPSBzbGlkZXMuZmlsdGVyKCcuYWN0aXZlJyksXHJcblx0XHRcdFx0XHRuZXh0U2xpZGUgPSBhY3RpdmVTbGlkZS5uZXh0KCksXHJcblx0XHRcdFx0XHRwcmV2U2xpZGUgPSBhY3RpdmVTbGlkZS5wcmV2KCksXHJcblx0XHRcdFx0XHRmaXJzdFNsaWRlID0gc2xpZGVzLmZpcnN0KCksXHJcblx0XHRcdFx0XHRsYXN0U2xpZGUgPSBzbGlkZXMubGFzdCgpO1xyXG5cclxuXHRcdFx0XHRpZigkdGhpcy5oYXNDbGFzcygnbmV4dCcpKXtcclxuXHJcblx0XHRcdFx0XHRpZihuZXh0U2xpZGUubGVuZ3RoKXtcclxuXHRcdFx0XHRcdFx0X3RoaXMubW92ZVNsaWRlKG5leHRTbGlkZSwgJ2ZvcndhcmQnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdF90aGlzLm1vdmVTbGlkZShmaXJzdFNsaWRlLCAnZm9yd2FyZCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmKHByZXZTbGlkZS5sZW5ndGgpe1xyXG5cdFx0XHRcdFx0XHRfdGhpcy5tb3ZlU2xpZGUocHJldlNsaWRlLCAnYmFja3dhcmQnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdF90aGlzLm1vdmVTbGlkZShsYXN0U2xpZGUsICdiYWNrd2FyZCcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0JCgnLmRvdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHRcdFx0dmFyICR0aGlzID0gJCh0aGlzKTtcclxuXHRcdFx0XHRcdGRvdHMgPSAkdGhpcy5jbG9zZXN0KCcuc2xpZGVyX2NvbnRyb2xzJykuZmluZCgnLmRvdCcpLFxyXG5cdFx0XHRcdFx0YWN0aXZlRG90ID0gZG90cy5maWx0ZXIoJy5hY3RpdmUnKSxcclxuXHRcdFx0XHRcdGRvdCA9ICR0aGlzLmNsb3Nlc3QoJy5kb3QnKSxcclxuXHRcdFx0XHRcdGN1ckRvdE51bSA9IGRvdC5pbmRleCgpLFxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uID0oYWN0aXZlRG90LmluZGV4KCk8IGN1ckRvdE51bSkgPyAnZm9yd2FyZCcgOiAnYmFja3dhcmQnO1xyXG5cdFx0XHRcdFx0cmVxU2xpZGUgPSAkdGhpcy5jbG9zZXN0KCcuc2xpZGVyJykuZmluZCgnLnNsaWRlcl9pdGVtJykuZXEoY3VyRG90TnVtKTtcclxuXHJcblx0XHRcdFx0X3RoaXMubW92ZVNsaWRlKHJlcVNsaWRlLCBkaXJlY3Rpb24pO1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblxyXG5cdFx0bW92ZVNsaWRlOiBmdW5jdGlvbihzbGlkZSwgZGlyZWN0aW9uKXtcclxuXHRcdFx0dmFyIF90aGlzID0gdGhpcyxcclxuXHRcdFx0XHRjb250YWluZXIgPSBzbGlkZS5jbG9zZXN0KCcuc2xpZGVyJyksXHJcblx0XHRcdFx0c2xpZGVzID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfaXRlbScpLFxyXG5cdFx0XHRcdGFjdGl2ZVNsaWRlID0gc2xpZGVzLmZpbHRlcignLmFjdGl2ZScpLFxyXG5cdFx0XHRcdHNsaWRlV2lkdGggPSBzbGlkZXMud2lkdGgoKSxcclxuXHRcdFx0XHRkdXJhdGlvbiA9ICA1MDAsXHJcblx0XHRcdFx0cmVxQ3NzUG9zaXRpb24gPSAwLFxyXG5cdFx0XHRcdHJlcVNsaWRlU3RyYWZlID0gMDtcclxuXHJcblx0XHRcdGlmKGRpcmVjdGlvbiA9PT0gJ2ZvcndhcmQnKXtcclxuXHRcdFx0XHRyZXFDc3NQb3NpdGlvbiA9IHNsaWRlV2lkdGg7XHJcblx0XHRcdFx0cmVxU2xpZGVTdHJhZmUgPSAtc2xpZGVXaWR0aDtcclxuXHRcdFx0fSBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ2JhY2t3YXJkJyl7XHJcblx0XHRcdFx0cmVxQ3NzUG9zaXRpb24gPSAtc2xpZGVXaWR0aDtcclxuXHRcdFx0XHRyZXFTbGlkZVN0cmFmZSA9IHNsaWRlV2lkdGg7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNsaWRlLmNzcygnbGVmdCcsIHJlcUNzc1Bvc2l0aW9uKS5hZGRDbGFzcygnaW5zbGlkZScpO1xyXG5cdFx0XHR2YXIgbW92YWJsZVNsaWRlID0gc2xpZGVzLmZpbHRlcignLmluc2xpZGUnKTtcclxuXHJcblx0XHRcdGFjdGl2ZVNsaWRlLmFuaW1hdGUoe2xlZnQ6IHJlcVNsaWRlU3RyYWZlfSwgZHVyYXRpb24pO1xyXG5cdFx0XHRtb3ZhYmxlU2xpZGUuYW5pbWF0ZSh7bGVmdDogMH0sIGR1cmF0aW9uLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdHZhciAkdGhpcyA9ICQodGhpcyk7XHJcblxyXG5cdFx0XHRcdHNsaWRlcy5jc3MoJ2xlZnQnLCcwJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdCR0aGlzLnRvZ2dsZUNsYXNzKCdpbnNsaWRlIGFjdGl2ZScpO1xyXG5cdFx0XHRcdF90aGlzLnNldEFjdGl2ZURvdChjb250YWluZXIuZmluZCgnLnNsaWRlcl9jb250cm9scycpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdGNyZWF0ZURvdHM6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBfdGhpcyA9IHRoaXMsXHJcblx0XHRcdFx0Y29udGFpbmVyID0gJCgnLnNsaWRlcicpO1xyXG5cclxuXHRcdFx0dmFyIGRvdE1hcmt1cCA9ICc8YSBjbGFzcz1cImRvdFwiIGhyZWY9XCIjXCI+PC9hPic7IFxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cclxuXHRcdFx0Y29udGFpbmVyLmVhY2goZnVuY3Rpb24oKXtcclxuXHRcdFx0XHR2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0c2xpZGVzID0gJHRoaXMuZmluZCgnLnNsaWRlcl9pdGVtJyksXHJcblx0XHRcdFx0XHRkb3RDb250YWluZXIgPSAkdGhpcy5maW5kKCcuc2xpZGVyX2NvbnRyb2xzJyk7XHJcblxyXG5cdFx0XHRcdGZvcih2YXIgaSA9IDA7IGk8IHNsaWRlcy5zaXplKCk7IGkrKyl7XHJcblx0XHRcdFx0XHRkb3RDb250YWluZXIuYXBwZW5kKGRvdE1hcmt1cCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRfdGhpcy5zZXRBY3RpdmVEb3QoZG90Q29udGFpbmVyKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0c2V0QWN0aXZlRG90OiBmdW5jdGlvbihjb250YWluZXIpe1xyXG5cdFx0XHR2YXIgc2xpZGVzID0gY29udGFpbmVyLmNsb3Nlc3QoJy5zbGlkZXInKS5maW5kKCcuc2xpZGVyX2l0ZW0nKTtcclxuXHJcblx0XHRcdGNvbnRhaW5lclxyXG5cdFx0XHRcdFx0LmZpbmQoJy5kb3QnKVxyXG5cdFx0XHRcdFx0LmVxKHNsaWRlcy5maWx0ZXIoJy5hY3RpdmUnKS5pbmRleCgpKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHRcdFx0LnNpYmxpbmdzKClcclxuXHRcdFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxufSkoKTsgICAgXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xyXG5cdGlmKCQoJy5zbGlkZXInKS5sZW5ndGgpe1xyXG5cdFx0c2xpZGVyLmluaXQoKTtcclxuXHR9XHJcbn0pO1xyXG4iLCJ2YXIgc21vb3RoU2Nyb2xsID0oZnVuY3Rpb24oKXtcclxuXHJcbiAgICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgX3NldFVwTGlzdG5lcnMoKTtcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9zZXRVcExpc3RuZXJzID0gZnVuY3Rpb24oKXtcclxuICAgICAgICQoJy5zY3JvbGxEb3duJykub24oJ2NsaWNrJywgX3Ntb290aCk7XHJcblxyXG4gICB9O1xyXG4gICAgdmFyIF9zbW9vdGggPSBmdW5jdGlvbiAoKXtcclxuXHJcbiAgICAgICAgdmFyIGVsZW1lbnRDbGljayA9ICQodGhpcykuYXR0cignaHJlZicpLFxyXG4gICAgICAgICAgICBkZXN0aW5hdGlvbiA9ICQoZWxlbWVudENsaWNrKS5vZmZzZXQoKS50b3A7XHJcbiAgICBcclxuICAgICAgICAgICAgJCgnaHRtbCcpLmFuaW1hdGUoe3Njcm9sbFRvcDogZGVzdGluYXRpb259LCAxMDAwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGluaXRcclxuICAgIH07XHJcblxyXG5cclxufSkoKTtcclxuXHJcbnNtb290aFNjcm9sbC5pbml0KCk7XHJcbiIsIlxyXG4vLyArKysrKysrKysrKysrKysrKysrKysrK0IgTCBPIEcgKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG5cclxudmFyIGJsb2dNb2R1bGUgPShmdW5jdGlvbigpe1xyXG5cclxuXHJcbiAgICB2YXIgICAgIGJsb2dfbmF2ID0gJCgnLmJsb2dfbmF2IC5uYXYnKSxcclxuICAgICAgICAgICAgYmxvZ19uYXZUb3AgPSBibG9nX25hdi5vZmZzZXQoKS50b3AsXHJcbiAgICAgICAgICAgIGJsb2dfbGluayA9ICQoJy5ibG9nX25hdicpLmZpbmQoJy5uYXZfbGluaycpLFxyXG4gICAgICAgICAgICBidXR0b24gPSAkKCcuYmVmb3JlJyk7XHJcblxyXG4gICAgdmFyIGluaXQgPSBmdW5jdGlvbigpe1xyXG4gICAgICAgIF9zZXRVcExpc3RuZXJzKCk7XHJcbiAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9zZXRVcExpc3RuZXJzID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIF9maXhlZCk7XHJcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBfY2hlY2tBcnRpY2xlKTtcclxuICAgICAgICBibG9nX2xpbmsub24oJ2NsaWNrJywgX3Njcm9sbFRvQXJ0aWNsZSk7XHJcbiAgICAgICAgYmxvZ19saW5rLm9uKCdjbGljaycsICBfYWN0aXZlWE91dCk7XHJcbiAgICAgICAgYnV0dG9uLm9uKCdjbGljaycsIF9hY3RpdmVYKTsgICAgXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICB2YXIgX3Njcm9sbFRvQXJ0aWNsZSA9IGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgYXJ0aWNsZSA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cclxuICAgICAgICBfc2hvd0FydGljbGUoJCh0aGlzKS5hdHRyKCdocmVmJyksIHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX2ZpeGVkID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgdmFyIFxyXG4gICAgICAgICAgICB3U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGJsb2dfbmF2VG9wIDwgd1Njcm9sbCl7XHJcbiAgICAgICAgICAgIGJsb2dfbmF2LmFkZENsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJsb2dfbmF2LnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9hY3RpdmVYID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmJsb2dfbmF2JykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZVgnKTtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgdmFyIF9hY3RpdmVYT3V0ID0gZnVuY3Rpb24oKXtcclxuICAgICAgICAkKCcuYmxvZ19uYXYnKS5yZW1vdmVDbGFzcygnYWN0aXZlWCcpO1xyXG4gICAgfTtcclxuXHJcbiAgICB2YXIgX3Nob3dBcnRpY2xlID0gZnVuY3Rpb24oYXJ0aWNsZSwgaXNBbmltYXRlKXtcclxuICAgICAgIHZhciBkaXJlY3Rpb24gPSBhcnRpY2xlLnJlcGxhY2UoLyMvLCAnJyksXHJcbiAgICAgICAgICAgcmVxQXJ0aWNsZSA9ICQoJy5ibG9nX2FydGljbGUnKS5maWx0ZXIoJ1tkYXRhLWFydGljbGU9XCInKyBkaXJlY3Rpb24gKydcIl0nKSxcclxuICAgICAgICAgICByZXFBcnRpY2xlUG9zID0gcmVxQXJ0aWNsZS5vZmZzZXQoKS50b3A7XHJcbiAgICAgICBpZihpc0FuaW1hdGUpe1xyXG4gICAgICAgICAgICQoJ2JvZHksIGh0bWwnKS5hbmltYXRlKHtzY3JvbGxUb3A6IHJlcUFydGljbGVQb3N9LCA1MDApO1xyXG4gICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAkKCdib2R5LCBodG1sJykuc2Nyb2xsVG9wKHJlcUFydGljbGVQb3MpO1xyXG4gICAgICAgfVxyXG4gICB9O1xyXG5cclxuICAgIHZhciBfY2hlY2tBcnRpY2xlID0gZnVuY3Rpb24oKXtcclxuXHJcbiAgICAgICAgJCgnLmJsb2dfYXJ0aWNsZScpLmVhY2goZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdmFyICR0aGlzPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICAgICAgdG9wRWRnZSA9ICR0aGlzLm9mZnNldCgpLnRvcC0zMDAsXHJcbiAgICAgICAgICAgICAgICBib3R0b21FZGdlID0gdG9wRWRnZSArICR0aGlzLmhlaWdodCgpLFxyXG4gICAgICAgICAgICAgICAgd1Njcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRvcEVkZ2UgPCB3U2Nyb2xsICYmIGJvdHRvbUVkZ2UgPiB3U2Nyb2xsKXtcclxuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50SWQgPSAkdGhpcy5kYXRhKCdhcnRpY2xlJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50SWQpO1xyXG4gICAgICAgICAgICAgICAgdmFyICAgcmVxTGluayA9ICQoJy5uYXZfbGluaycpLmZpbHRlcignW2hyZWY9XCIjJyArIGN1cnJlbnRJZCArJ1wiXScpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcUxpbmsuY2xvc2VzdCgnLm5hdl9pdGVtJykuYWRkQ2xhc3MoJ2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBjdXJyZW50SWQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGluaXRcclxuICAgIH07XHJcbiAgICAgXHJcblxyXG59KSgpO1xyXG5cclxuYmxvZ01vZHVsZS5pbml0KCk7XHJcblxyXG5cclxuXHJcblxyXG4vLyArKysrKysrKysrKysrKysrKysrKysrVkFMSURBVEUgLTIrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK1xyXG4vLyAoZnVuY3Rpb24oKXtcclxuXHJcbi8vICAgICB2YXIgYXBwID0ge1xyXG4vLyAgICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgICAgIHRoaXMubW9kdWxlcygpO1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFVwTGlzdGVuZXJzKCk7XHJcbi8vICAgICAgICAgfSxcclxuXHJcbi8vICAgICAgICAgbW9kdWxlczogZnVuY3Rpb24oKXtcclxuXHJcbi8vICAgICAgICAgfSxcclxuXHJcbi8vICAgICAgICAgc2V0VXBMaXN0ZW5lcnM6IGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgICAgICAgICQoJyNmZWVkYmFja0Zvcm0nKS5vbignc3VibWl0JywgYXBwLnN1Ym1pdEZvcm0pO1xyXG4vLyAgICAgICAgIH0sXHJcblxyXG4vLyAgICAgICAgIHN1Ym1pdEZvcm06IGZ1bmN0aW9uKGUpIHtcclxuLy8gICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAgICAgICAgICAgICB2YXIgZm9ybSA9ICQodGhpcyk7XHJcblxyXG4vLyAgICAgICAgICAgICBhcHAudmFsaWRhdGVGb3JtKGZvcm0pO1xyXG4vLyAgICAgICAgIH0sXHJcblxyXG4vLyAgICAgICAgIHZhbGlkYXRlRm9ybTogZnVuY3Rpb24oZm9ybSl7XHJcbi8vICAgICAgICAgICAgIHZhciBpbnB1dHMgPSBmb3JtLmZpbmQoJ2lucHV0Jyk7XHJcbi8vICAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBcclxuXHJcbi8vICAgICAgICAgICAgICQuZWFjaChpbnB1dHMsIGZ1bmN0aW9uKGluZGV4LCB2YWwpe1xyXG4vLyAgICAgICAgICAgICAgICAgdmFyIGlucHV0ID0gJCgnaW5wdXQnKSxcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YWwgPSBpbnB1dC52YWwoKSxcclxuLy8gICAgICAgICAgICAgICAgICAgICBmX2l0ZW0gPSBpbnB1dC5wYXJlbnRzKCcuZmVlZGJhY2tfaXRlbScpLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHRleHRFcnJvciA9ICfQktGLINC90LUg0LfQsNC/0L7Qu9C90LjQu9C4INC/0L7Qu9C1JztcclxuXHJcbi8vICAgICAgICAgICAgICAgICBpZih2YWw9PT0nJyl7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgZl9pdGVtLmFkZENsYXNzKCdub3QtdmFsaWQnKS5yZW1vdmVDbGFzcygnaXMtdmFsaWQnKTtcclxuLy8gICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IGZhbHNlXHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIC8vIGZfaXRlbS5hZGRDbGFzcygnaXMtdmFsaWQnKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZDtcclxuLy8gICAgICAgICAgICAgfSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfSBcclxuXHJcbi8vICAgICBhcHAuaW5pdGlhbGl6ZSgpO1xyXG4vLyB9KSgpO1xyXG5cclxuLy8gKysrKysrKysrKysrKysrKysrK1NMSURFUisrKysrKysrKysrKysrKytcclxuXHJcblxyXG5cclxuICAgICJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
