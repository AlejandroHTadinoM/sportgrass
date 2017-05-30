var gulp = require('gulp'),

/*********** Jade and Pug templating ***********/
	jade = require('gulp-jade'),
	pug = require('gulp-pug'),

/*********** SASS and SCSS compiling ***********/
	sass = require('gulp-sass'),

/*********** JS concat ***********/
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),

/*********** Static server ***********/
	bs = require('browser-sync').create(),

/*********** Path vars ***********/
	sassSrc = 'assets/sass/',
	jsSrc = 'assets/js/';

	sassDest = 'dist/css/',
	jsDest = 'dist/js/';

/*********** HTML teplating and compiling ***********/
gulp.task('jade', function () {
	return gulp.src('views/**/*.jade')
		.pipe(jade({
			pretty: false
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('pug', function () {
	return gulp.src('views/*.pug')
		.pipe(pug({
			pretty: false
		}))
		.on('error',function(e){
			console.log(e);
		})
		.pipe(gulp.dest('dist/'));
});

/*********** Styles compiling ***********/
gulp.task('sass', function () {
	return gulp.src(sassSrc + '*.sass')
		.pipe(sass({
			ouputStyle: 'compressed'
		})
		.on('error', sass.logError))
		.pipe(gulp.dest(sassDest))
		.pipe(bs.stream());
});

/*********** Concat JS files ***********/
gulp.task('concat', function () {
	return gulp.src(jsSrc + '*.js')
		.pipe(concat('functions.js'))
		.pipe(uglify())
		.pipe(gulp.dest(jsDest));
});

/*********** BrowserSync Serve ***********/
gulp.task('serve', ['pug', 'sass', 'concat'], function () {
	bs.init({
		server: {
			baseDir: 'dist/'
		}
	});
});

/*********** Watch files ***********/
gulp.task('watch', function () {
	gulp.watch('views/*.jade', ['jade']);
 	gulp.watch('views/**/*.pug', ['pug']);
	gulp.watch('assets/sass/**/*.sass', ['sass']);
	gulp.watch('assets/js/*.js', ['concat']).on('change', bs.reload);
	gulp.watch('dist/*.html').on('change', bs.reload);
});

/*********** Default task ***********/
gulp.task('default', ['watch', 'serve']);