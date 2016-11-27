'use strict';

module.exports = function() {
  $.gulp.task('sprite', function() {

    var spriteData = $.gulp.src('./source/images/sprite/*.png')
	.pipe($.gp.spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.scss',
		padding: 5,
		algorithm: 'left-right'
	}));
	return spriteData.pipe($.gulp.dest('./source/images/sprites'));
  });
};