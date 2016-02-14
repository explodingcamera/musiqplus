var pkg = require('../package.json')
var gulp = require('gulp');
var gutil = require('gulp-util');

function string_src(filename, string) {
  var src = require('stream').Readable({ objectMode: true })
  src._read = function () {
    this.push(new gutil.File({ cwd: "", base: "", path: filename, contents: new Buffer(string) }))
    this.push(null)
  }
  return src
}

return string_src("version.json", '{"version":"'+pkg.version+'"}')
  .pipe(gulp.dest('./dist/js/'))
