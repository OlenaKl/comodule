var gulp = require('gulp');
var less = require('gulp-less');
var del = require('del');

gulp.task('less', function() {
    gulp.src('styles/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('styles/'))
});

gulp.task('clean:css', function () {
  return del([
    'styles/css/',
  ]);
});

gulp.task('default', ['clean:css']);

gulp.task('default', ['less'], function() {
    gulp.watch('styles/less/*.less', ['less']);
})