(function(){
	$(".menuButton").click(function(e){
		e.preventDefault();
		$(this).toggleClass("active");
	});
})();

(function(){
	$(".autorize_btn").click(function(e){
		e.preventDefault();
		$(".flipContainer").toggleClass("flip")
	})
})();



// var openMenu = document.querySelector(".menuButton");
// var	autorizeBtn = document.querySelector(".autorize_btn");
// var	flipContainer = document.querySelector(".flipContainer");

// 	openMenu.addEventListener('click', function(event){
//   			event.preventDefault();
//   			this.classList.toggle('active');
// 	});

// 	autorizeBtn.addEventListener('click', function(event){
// 		event.preventDefault();
// 		flipContainer.classList.toggle('flip');
// 	});	




