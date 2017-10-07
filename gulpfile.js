var gulp = require('gulp');
var sass = require('gulp-sass');
var wait = require('gulp-wait');
 
gulp.task('sass', function () {
  gulp.src('sass/main.scss')
  	.pipe(wait(1000))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('watch', function () {
	gulp.watch('sass/**/*.scss', ['sass'])
});