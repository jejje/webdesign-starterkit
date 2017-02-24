var gulp = require('gulp');
var sass = require('gulp-sass') ;
var notify = require('gulp-notify') ;
var bower = require('gulp-bower');
var browserSync = require('browser-sync').create();

var config = {
     sassPath: './app_src/assets/sass/*.scss',
    nodeDir: './node_modules',
    webDir: './app_dest' // Root for webserver
}



/*
    SASS: Preprocessing
*/
gulp.task('sass', function(){
    return gulp.src(config.sassPath) // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app_dest/assets/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

/*
 Bootstrap: Include from NPM Modules
 */
gulp.task('bootstrap', function(){
    return gulp.src(config.nodeDir + '/bootstrap/dist/**/*.*') // Gets all files ending with .scss in app/scss and children dirs
        //.pipe(sass())
        .pipe(gulp.dest('app_dest/assets/bootstrap'))
});


/*
 jQuery: Include from NPM Modules
 */
gulp.task('jquery', function(){
    return gulp.src(config.nodeDir + '/jquery/dist/*.js') // Gets all files ending with .scss in app/scss and children dirs
        //.pipe(sass())
        .pipe(gulp.dest('app_dest/assets/js/vendor/jquery'))
});



/*
    browserSync: Handels auto refreshing of the browser on save
*/
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config.webDir
        },
    })
})


/*
 Pipe the files to dest
 */
gulp.task('html-pipe', function(){
    return gulp.src('./app_src/*.html') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(gulp.dest('app_dest/'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

/*
    Watch: Which files are being watched for preprosseing or browsersync
*/
gulp.task('watch', ['browserSync', 'sass', 'html-pipe'], function(){
    gulp.watch('app_src/assets/**/*.scss', ['sass']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app_src/*.html', ['html-pipe']);
    gulp.watch('app_src/assets/js/**/*.js', browserSync.reload);

    // Other watchers
});


/*
 Bootstrap-Sass: Include Sass from Node Modules
 */
gulp.task('bootstrap-sass', function(){
    return gulp.src(config.nodeDir + '/bootstrap-sass/assets/stylesheets/_styles.scss') // Gets all files ending with .scss in app/scss and children dirs
        .pipe(sass())
        .pipe(gulp.dest('app_dest/assets/css/bootstrap'))
});


/*
    The Default Task
 */
gulp.task('default', ['sass', 'browserSync', 'bootstrap', 'html-pipe']);



