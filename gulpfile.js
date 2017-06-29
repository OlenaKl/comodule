var gulp = require('gulp');
var less = require('gulp-less');

gulp.task('less', function() {
    gulp.src('styles/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('styles/./'))
});

gulp.task('default', ['less'], function() {
    gulp.watch('styles/styles/*.less', ['less']);
})