var gulp = require('gulp');
var debug = require('gulp-debug');

var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');


gulp.task('build-js', function () {
    //vendor
    gulp.src([
        "bower_components/jquery-dist/jquery.min.js",
        "bower_components/angular/angular.min.js",
        "bower_components/angular-route/angular-route.min.js",
        "bower_components/angular-animate/angular-animate.min.js",
        "bower_components/angular-sanitize/angular-sanitize.min.js",
        "bower_components/angular-bootstrap/ui-bootstrap.min.js",
        "bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js",
        "bower_components/bootstrap/dist/js/bootstrap.min.js",
        "bower_components/perfect-scrollbar/js/perfect-scrollbar.jquery.min.js",
        "bower_components/fastclick/click/fastclick.js"
    ])
            .pipe(debug())
            .pipe(concat('vendor.min.js'))
            .pipe(gulp.dest('build/public/js'));

    //theme
    gulp.src('client/public/js/theme/*.js')
            .pipe(debug())
            .pipe(concat('theme.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest('build/public/js'));

    //app
    return gulp.src('client/views/**/*.js')
            .pipe(debug())
            .pipe(concat('app.min.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(gulp.dest('build/public/js'));
});

