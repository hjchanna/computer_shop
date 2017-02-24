var gulp = require('gulp');
var debug = require('gulp-debug');


gulp.task('build-other', function () {
    //images
    gulp.src('build/public/images/**/*.*')
            .pipe(debug())
            .pipe(gulp.dest('build/public/images'));
    
    //web fonts
    return gulp.src([
        'bower_components/bootstrap/dist/fonts/*.*',
        'bower_components/font-awesome/fonts/*.*'
    ])
            .pipe(debug())
            .pipe(gulp.dest('build/public/fonts'));
});

