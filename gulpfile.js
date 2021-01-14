var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('sass/*.sass')
	.pipe(sass())
	.pipe(gulp.dest('app/assets/css'))
	.pipe(browserSync.stream())
});

gulp.task('watch', function(){
	gulp.watch('sass/*.sass', gulp.parallel('sass'));
	gulp.watch('app/index.php').on('change', browserSync.reload);
	gulp.watch('app/assets/js/script.js').on('change', browserSync.reload);
});


var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "localhost"
    });
});

gulp.task('default', gulp.parallel('browser-sync','watch'));