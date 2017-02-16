var gulp = require('gulp'),
  browserSync = require('browser-sync'),
  reload = browserSync.reload,
  src = {
    javascript: '../js/*.js'
  };

// Task for local, static development.
gulp.task('local-development', function () {
  browserSync({
    server: "../",
  });
  gulp.watch(src.javascript, reload);
});

gulp.task('default', ['local-development']);
