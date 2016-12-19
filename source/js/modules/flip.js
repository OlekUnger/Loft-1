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