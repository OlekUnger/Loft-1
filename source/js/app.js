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

// ++++++++++++++++++++++++++++ V A L I D A T E - 1 ++++++++++++++++++++++++

// var validate = function(){

//     var validateForm = $('form');

//     validateForm.each(function(){
    
//         var validateForm = $(this);
//         var validate = {};
//         var validateThis = $(this).find('formField');
//         var validatingLength = $(this).find('formField').length;
//         var submitBtn = $(this).find('.submit');

    
//         for(var i = 1; i <= validatingLength; i++){
      
//             validate['input'+i] = false;
//         }

//         $('.formField').blur(function(){
//             var index =  $(this).prevAll().length+1;
//             var validateThisVal = $(this).val();
//             var validateThisType = $(this).attr('type');

//             if(validateThisType === "email"){

        
//                 var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            
//                 if(!validateThisVal.match(re)){
//                     $(this).parent().addClass('not-valid');
//                     $(this).parent().removeClass('is-valid');
//                     return validate['input'+index] = false;
//                 } else{
//                     $(this).parent().addClass('is-valid');
//                     $(this).parent().removeClass('not-valid');
//                     return validate['input'+index] = true;
//                 }
//             } else {
        
//                 if(validateThisVal == ""){
//                     $(this).parent().addClass('not-valid');
//                     $(this).parent().removeClass('is-valid');
//                     return validate['input'+index] = false;
//                 } else{
//                     $(this).parent().addClass('is-valid');
//                     $(this).parent().removeClass('not-valid');
//                     return validate['input'+ index] = true;
//                 }
//             }
//         });

    
//         validateForm.on('submit', function(e){
//             e.preventDefault();

     
//             var falseCtn = 0;
//             for(var i = 1; i <= validatingLength; i++){
//                 if(validate['input'+i] == false){
//                 falseCtn++;
//                 }
//             }

//             if(falseCtn > 0){
//                 $(this).unbind('submit').submit();
//                 $(this).click();
//             }

//         });


//     });
// };

// validate();
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
            this.move(user, wScroll, 50);
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

// +++++++++++++++++++++++B L O G ++++++++++++++++++++++++++++++++++

var blogModule =(function(){

    var     blog_nav =$('.blog_nav').children('nav'),
            blog_navTop = blog_nav.offset().top-200;

    var init = function(){
        _setUpListners();
       
    };

    var _setUpListners = function(){
        $(window).on('scroll', _fixed);
        $(window).on('scroll', _checkArticle);
        
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


    var _showArticle = function(article, isAnimate){
       var direction = article.replace(/#/, ''),
           reqArticle = $('.blog_article').filter('[data-article"'+ direction +'"]'),
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
                topEdge = $this.offset().top-200,
                bottomEdge = topEdge + $this.height(),
                wScroll = $(window).scrollTop();

            if(topEdge < wScroll && bottomEdge > wScroll){
                var currentId = $this.data('article');
                console.log(currentId);
                var   reqLink = $('.nav_link').filter('[href="#' + currentId +'"]');

                reqLink.closest('.nav_item').addClass('active').siblings().removeClass('active');
  
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