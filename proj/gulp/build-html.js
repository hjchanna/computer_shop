var gulp = require('gulp');
var htmlmin = require('gulp-htmlmin');
var inject = require('gulp-inject');
var debug = require('gulp-debug');

gulp.task('build-html', function () {

    return  gulp.src('client/views/**/*.html')
            .pipe(debug())
            .pipe(inject(gulp.src([
                'build/public/css/vendor.min.css',
                'build/public/css/theme.min.css',
                'build/public/css/app.min.css',
                'build/public/js/vendor.min.js',
                'build/public/js/theme.min.js',
                'build/public/js/app.min.js'
            ]),
                    {
                        ignorePath: 'build/public/', addRootSlash: false
                    }
            ))
            .pipe(htmlmin({collapseWhitespace: false}))
            .pipe(gulp.dest('build/views'));
});
