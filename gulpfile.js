var gulp = require('gulp');
require('require-dir')("./gulp");

gulp.task('default', ['browserify'], function () {
  gulp.watch("./src/**/*.*", ['browserify']);
})
