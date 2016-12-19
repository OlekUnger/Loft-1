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

