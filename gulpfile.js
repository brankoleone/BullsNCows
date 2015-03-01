var gulp = require('gulp'),
    //gutil = require('gulp-util'),
    webserver = require('gulp-webserver'),
    bower = require('bower');

var projectRoot = 'pub/';
var serverPort = 8080;

gulp.task('install:lib', function(cb){
    bower.commands.install([], {save: true}, {})
        .on('end', function(data){
            cb(); // notify gulp that this task is finished
        });
});

gulp.task('js', function() {
    gulp.src(projectRoot + 'app/*');
});

gulp.task('html', function() {
    gulp.src(projectRoot + '*.html')
});

gulp.task('css', function() {
    gulp.src(projectRoot + 'assets/css/*.css')
});

gulp.task('watch', function() {
    gulp.watch(projectRoot + 'app/*', ['js']);
    gulp.watch(projectRoot + 'assets/css/*.css', ['css']);
    gulp.watch([projectRoot + '*.html'], ['html']);
});

gulp.task('webserver', function() {
    gulp.src(projectRoot)
        .pipe(webserver({
            port: serverPort,
            livereload: true,
            open: true
        }));
});

//gulp.task('default', ['bower', 'watch', 'html', 'js', 'css', 'webserver']);
gulp.task('server', ['install:lib', 'watch', 'html', 'js', 'css', 'webserver']);
