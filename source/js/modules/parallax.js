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

