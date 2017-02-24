var gulp = require('gulp');
var debug = require('gulp-debug');

var uglify = require('gulp-uglify');

gulp.task('build-server', function () {
    return gulp.src('server/**/*.js')
            .pipe(debug())
            .pipe(uglify())
            .pipe(gulp.dest('build/'));
});