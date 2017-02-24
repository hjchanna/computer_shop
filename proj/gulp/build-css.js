var gulp = require('gulp');
var debug = require('gulp-debug');

var concat = require('gulp-concat');

var cleanCSS = require('gulp-clean-css');
var less = require('gulp-less');

gulp.task('build-css', function () {
    //vendor
    gulp.src([
        'bower_components/bootstrap/dist/css/bootstrap.min.css',
        'bower_components/animate.css/animate.min.css',
        'bower_components/font-awesome/css/font-awesome.min.css',
        'bower_components/perfect-scrollbar/css/perfect-scrollbar.min.css',
        'bower_components/angular-bootstrap/ui-bootstrap-csp.css'
    ])
            .pipe(debug())
            .pipe(concat('vendor.min.css'))
            .pipe(gulp.dest('build/public/css'));

    //app
    gulp.src("client/public/css/app/**/*.less")
            .pipe(debug())
            .pipe(less())
            .pipe(cleanCSS())
            .pipe(concat('app.min.css'))
            .pipe(gulp.dest('build/public/css'));

    //theme
    return gulp.src([
        'client/public/css/theme/urban.less',
        'client/public/css/theme/urban.skins.less'
    ])
            .pipe(debug())
            .pipe(less())
            .pipe(cleanCSS())
            .pipe(concat('theme.min.css'))
            .pipe(gulp.dest('build/public/css'));


});