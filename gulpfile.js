var path = require('path');
var gulp = require('gulp');
var del = require('del');
var csv2json = require('gulp-csv2json');
var through = require('through2');
var i18n = require('gulp-html-i18n');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var preprocess = require('gulp-preprocess');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var handlebars = require('handlebars');
var awspublish = require('gulp-awspublish');
var remoteSrc = require('gulp-remote-src');
var babel = require('gulp-babel');

gulp.task("clean", function (cb) {
  del(["./dist"], cb);
});

gulp.task("build:html", function () {
  return gulp.src("./src/index.html").pipe(gulp.dest("./dist"));
});

gulp.task("build:css:index", function () {
  return gulp.src("./src/css/index.css").pipe(gulp.dest("./dist/css"));
});
gulp.task("build:css:assets", function () {
  return gulp.src("./src/css/assets.css").pipe(gulp.dest("./dist/css"));
});
gulp.task("build:css:styles", function () {
  return gulp.src("./src/css/styles.css").pipe(gulp.dest("./dist/css"));
});

// Generic function to process all JS
function processJs(fileName) {
  var b = browserify({
    entries: './src/js/' + fileName,
    debug: true
  });
  var resultFileName = arguments[1] || fileName;

  return b
    .bundle()
    .pipe(source(fileName))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(
    babel({
      presets: ['es2015']
    })
    )
    .pipe(uglify())
    .pipe(
    through.obj(function (chunk, encoding, done) {
      chunk.path = chunk.path.replace(fileName, resultFileName);
      var contents =
        '(function () { var define = undefined; ' +
        chunk.contents.toString('utf8') +
        ' })();';
      chunk.contents = new Buffer(contents);
      done(null, chunk);
    })
    )
    .pipe(
    sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: 'http://localhost:8000/',
      mapSources: function (sourcePath) {
        return sourcePath;
      }
    })
    )
    .pipe(gulp.dest('./dist'));
}

// gulp.task('build:js:app', function () {
//   return processJs('app.js').pipe(connect.reload());
// });

gulp.task('build:js:index', function () {
  return processJs('index.js').pipe(connect.reload());
});

gulp.task('build:js', [
  //  'build:js:app',
  'build:js:index'
]);

gulp.task('build:css', [
  'build:css:index',
  'build:css:styles',
  'build:css:assets'
]);

gulp.task("build", ["build:js", "build:html", "build:css"]);


gulp.task("connect", ["build"], function () {
  connect.server({
    root: "",
    livereload: true,
    port: 8000
  });
});

gulp.task("watch", function () {
  gulp.watch(["./src/js/*.js"], ["build"]);
  gulp.watch(["./src/*.html"], ["build"]);
  gulp.watch(["./src/css/*.css"], ["build"]);
});

gulp.task("default", ["connect", "watch"]);