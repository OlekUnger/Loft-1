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
