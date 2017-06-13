var gulp = require('gulp'),
wiredep = require('wiredep').stream,
useref = require('gulp-useref'),
gulpif = require('gulp-if'),
uglify = require('gulp-uglify'),
minifyCss = require('gulp-clean-css'),
notify = require('gulp-notify'),
autoprefixer = require('gulp-autoprefixer'),
less = require('gulp-less'),
browserSync = require('browser-sync').create(),
gutil = require("gulp-util"),
reload = browserSync.reload;

var taskName = "css:less";

var onError = function(err) {
    gutil.log(gutil.colors.red("ERROR", taskName), err);
    this.emit("end", new gutil.PluginError(taskName, err, {
        showStack: true
    }));
};

gulp.task('bower', function () {
  gulp.src('./app/*.html')
    .pipe(wiredep({}))
    .pipe(gulp.dest('./app'));
});

gulp.task('less', function () {
  return gulp.src('./app/less/**/*.less')
	.pipe(less({}).on('error', onError))
    .pipe(gulp.dest('./app/css'))
	.pipe(browserSync.stream());
    //.pipe(notify('Done!'));
});
gulp.task('html', function () {
    return gulp.src('./app/*.html')
        .pipe(useref())
        /*.pipe(gulpif('*.js', uglify()))*/
        .pipe(gulpif('*.css', autoprefixer()))
        /*.pipe(gulpif('*.css', minifyCss()))*/
        .pipe(gulp.dest('dist'));
});

gulp.task('copy', function () {
    return gulp.src('./app/img/**/*.*')
        .pipe(gulp.dest('dist/img/'));
});

gulp.task('copy2', function () {
  return gulp.src('./app/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'));
});


gulp.task('copy3', function () {
  return gulp.src('./app/font-awesome/**/*.*')
    .pipe(gulp.dest('dist/font-awesome'));
});

gulp.task('copy4', function () {
  return gulp.src('./app/upload/**/*.*')
    .pipe(gulp.dest('dist/upload'));
});

gulp.task('copy5', function () {
  return gulp.src('./app/js/**/*.*')
    .pipe(gulp.dest('dist/js'));
});
/*
gulp.task('copyslider', function () {
  return gulp.src('./app/bower_components/flexslider/fonts/*.*')
    .pipe(gulp.dest('dist/css/fonts'))
});
*/

gulp.task('watch', function () {
   gulp.watch('bower.json',  ['bower']);
});

gulp.task('browser-sync', ['less'], function () {
    browserSync.init({
        server: {
            baseDir: "./app"
        }
    });
    gulp.watch("app/*.html").on("change", browserSync.reload);
	gulp.watch("app/less/**/*.less", ['less']);
    gulp.watch("app/js/*.js").on("change", browserSync.reload);
});

//------------------------------------------------
gulp.task('default', ['less', 'bower', 'watch', 'browser-sync']);
gulp.task('dist', ['html', 'copy', 'copy2', 'copy3', 'copy4', 'copy5']);
//------------------------------------------------
