'use strict';

var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var hbsfy = require('hbsfy');
var browserifycss = require('browserify-css');
var config = require('../package.json');
var uglify = require('gulp-uglify');


gulp.task('browserify', function () {
  var b = browserify({
    entries: './src/main.js',
    debug: true,
    transform: [hbsfy, browserifycss]
  });

  return b.bundle()
    .pipe(source('app-'+config.version+'.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});
