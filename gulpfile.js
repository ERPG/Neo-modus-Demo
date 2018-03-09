var gulp = require("gulp");
var connect = require("gulp-connect");
var awspublish = require("gulp-awspublish");
var rename = require("gulp-rename");
var del = require("del");
var preprocess = require("gulp-preprocess");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");

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

gulp.task("build:js", function () {
  return gulp
    .src("./src/js/index.js")
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(
    sourcemaps.write(".", {
      includeContent: false,
      sourceRoot: "http://localhost:8000/src"
    })
    )
    .pipe(gulp.dest("./dist/js"))
    .pipe(connect.reload());
});

gulp.task("build:css", ["build:css:index", "build:css:assets", "build:css:styles"]);

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