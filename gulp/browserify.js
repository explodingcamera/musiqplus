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

function string_src(filename, string) {
  var src = require('stream').Readable({ objectMode: true })
  src._read = function () {
    this.push(new gutil.File({ cwd: "", base: "", path: filename, contents: new Buffer(string) }))
    this.push(null)
  }
  return src
}

gulp.task('browserify', function () {
  var pkg = require('../package.json')
  return string_src("version.json", '{"version":"'+pkg.version+'"}')
    .pipe(gulp.dest('./dist/js/'))
  var b = browserify({
    entries: './src/main.js',
    debug: true,
    transform: [hbsfy, browserifycss]
  });

  return b.bundle()
    .pipe(source('app-'+config.version+'.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});
