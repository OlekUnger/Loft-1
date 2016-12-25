





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



    