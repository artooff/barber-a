'use strict'

var gulp = require("gulp");
var less = require("gulp-less");
var gulp = require('gulp');
var debug = require('gulp-debug');
var watch = require('gulp-watch');
var server = require("browser-sync").create();



gulp.task("style", function(){
	return gulp.src("less/style.less")
	.pipe(debug())
	.pipe(less())
	.pipe(debug())
	.pipe(gulp.dest("css"));
});

gulp.task('watch', function(){
	gulp.watch('less/**/*.*', gulp.series('style'));
})


gulp.task("serve",  function(){
	server.init({
		server:"."
	});

	server.watch('.').on("change", server.reload);
})



gulp.task('dev',
	gulp.series('style', gulp.parallel('watch', 'serve'))
);







	


