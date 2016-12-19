

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

			$('.sliderDot').on('click', function(e){
				e.preventDefault();

				
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

			var dotMarkup = '<p class="dotWrap"> \
								<a class="sliderDot" href="#"> \
							</p>';

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
			var slides = container.find('.slider_item');

			container
					.find('.dotWrap')
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
