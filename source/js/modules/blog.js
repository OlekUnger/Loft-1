// $(document).ready(function(){
//     // var blogLink = $('.blog_nav').find('.nav_link');

//     $('.nav_link').on('click', function(e){
//         e.preventDefault();
//         var article = $(this).attr('href');

//         _showArticle($(this).attr('href'), true);
//     });

//     _showArticle(window.location.hash, false)

// });


// $(window).scroll(function(){
//     _checkArticle();
//     // _fixed();
// });


// function _fixed(){

//     var 
//         wScroll = $(window).scrollTop();
        
//     if(blog_navTop < wScroll){
//         blog_nav.addClass('fixed');
//     } else {
//         blog_nav.removeClass('fixed');
//     }

// };

// function _showArticle(article, isAnimate){
//         var direction = article.replace(/#/, ''),
//             reqArticle = $('.blog_article').filter('[data-article="'+ direction +'"]'),
//             reqArticlePos = reqArticle.offset().top;
//         if(isAnimate){
//             $('body, html').animate({scrollTop: reqArticlePos}, 500);
//         } else {
//             $('body, html').scrollTop(reqArticlePos);
//     }
// };

// function _checkArticle(){

//     $('.blog_article').each(function(){
//         var $this= $(this),
//             topEdge = $this.offset().top-300,
//             bottomEdge = topEdge + $this.height(),
//             wScroll = $(window).scrollTop();

//         if(topEdge < wScroll && bottomEdge > wScroll){
//             var currentId = $this.data('article');
//             var reqLink = $('.nav_link').filter('[href="#' + currentId +'"]');
           
//             reqLink.closest('.nav_item').addClass('active').siblings().removeClass('active');
//             window.location.hash = currentId;
//         }

//     });

// };
