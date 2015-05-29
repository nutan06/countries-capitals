var gulp = require('gulp');
var connect = require('gulp-connect');
gulp.task('connect', function() {
  connect.server();
});
gulp.task('copy-html-files', function() {
   gulp.src(['./app/**/*.js', '!./app/bower_components/**'])

  .pipe(gulp.dest('build/'));
});

gulp.task('usemin', function() {
  gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat', rev()],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('build/'));
});

gulp.task('build', ['copy-html-files', 'usemin']);