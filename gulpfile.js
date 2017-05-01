var gulp = require('gulp');//get gulp
var jshint = require('gulp-jshint');//js hint to check syntax
var jscs = require('gulp-jscs');
var jsFile = ['*.js', 'src/**/*.js'];//JS file in the porject

gulp.task('style',function()  {
    return gulp.src(jsFile)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish',{
        verbose:true
    }))
    .pipe(jscs());
});