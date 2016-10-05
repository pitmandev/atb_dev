var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', 
	function(){
	browserify('./src/js/rrtt.js')
	.transform('reactify')
	.bundle()
	.pipe(source('rrtt.js'))
	.pipe(gulp.dest('dist/js'));
	browserify('./src/js/home.js')
	.transform('reactify')
	.bundle()
	.pipe(source('home.js'))
	.pipe(gulp.dest('dist/js'));
	}
);

gulp.task('copy', function(){
	gulp.src('src/*.html')
	.pipe(gulp.dest('dist'));
	gulp.src('src/img/*.*')
	.pipe(gulp.dest('dist/img'));
	gulp.src('src/css/*.*')
	.pipe(gulp.dest('dist/css'));
	gulp.src('src/assets/**/*.*')
	.pipe(gulp.dest('dist/assets'));	
});

gulp.task('default',['browserify','copy'], function(){
	return gulp.watch('src/**/*.*',['browserify','copy'])
});