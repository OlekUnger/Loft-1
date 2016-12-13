
// hamburger

(function(){
	$(".menuButton").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
		$(".fullScreenMenu").fadeToggle().toggleClass("show");
		
	});
})();


// flip
(function(){
	$(".autorize_btn").click(function(e){
		e.preventDefault();
		$(".flipContainer").toggleClass("flip")
	})
})();

(function(){
	$(".blur").draggable();
});

// parallax

var parallax = (function(){
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
			this.move( bg2, wScroll, 85),
			this.move(user, wScroll, -50);

		}
	}
}());

window.onscroll = function(){
	var wScroll = window.pageYOffset;
	parallax.init(wScroll);
}

// blur

// var blur = (function() {
// 	var wrapper = document.querySelector(".blur_bg");
// 	var blurBg = document.querySelector(".blur_bg");

// 	return {
// 		set: function(){
// 			var imgWidth = document.querySelector(".talkAbout").offsetWidth,
// 			posLeft = -wrapper.offsetLeft,
// 			posTop = -wrapper.offsetTop,
// 			blurCss = form.style;

// 			blurCss.backgroundSize = imgWidth + 'px' + '' + auto;
// 			blurCss.backgroundPosition = posLeft + 'px' + '' + posTop + 'px';

// 		}
// 	}
// }());

// blur.set();




// window.onresize = function(){
// 	blur.set();
// }





