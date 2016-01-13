var gulp = require('gulp');
require('require-dir')("./gulp");

gulp.task('default', ['browserify', "browser-sync"], function () {
  gulp.watch("./src/**/*.*", ['browserify']);
  gulp.watch("./dist/**/*.*", ['browser-reload'])
})
