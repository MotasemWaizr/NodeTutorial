var gulp = require('gulp');//get gulp
var jshint = require('gulp-jshint');//js hint to check syntax
var jscs = require('gulp-jscs');
var jsFile = ['*.js', 'src/**/*.js'];//JS file in the porject

//Task to check the js file syntax and formatting
gulp.task('style',function()  {
    return gulp.src(jsFile)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish',{
        verbose:true
    }))
    .pipe(jscs());
});

//inject css and js file to the html files
gulp.task('inject',function() {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');

    var injectSrc = gulp.src(['./public/css/*.css',
    './public/js/*.js'],{read:false});//don't read the files, just the names

    var injectOptions = {ignorePath:'/public'
    };

    var options = {
        bowerJson:require('./bower.json'),//bower json
        directory:'./public/lib',
        ignorePath:'../../public'
    };
    return gulp.src('./src/views/*.html')
    .pipe(wiredep(options))
    .pipe(inject(injectSrc,injectOptions))
    .pipe(gulp.dest('./src/views'));
});