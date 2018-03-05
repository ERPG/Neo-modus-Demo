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

gulp.task("build:js", function () {
  return gulp
    .src("./src/connect.js")
    .pipe(sourcemaps.init())
    .pipe(
    preprocess({
      context: scriptConfig
    })
    )
    .pipe(uglify())
    .pipe(
    sourcemaps.write(".", {
      includeContent: false,
      sourceRoot: "http://localhost:8000/src"
    })
    )
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload());
});

gulp.task("build", ["build:js", "build:html"]);

gulp.task("publish", function () {
  var publisher = awspublish.create({
    params: {
      Bucket:
        process.env.NODE_ENV === "production"
          ? "static.whisbi.com"
          : "frontend-pre"
    },
    region: "eu-west-1"
  });

  var headers = {
    "Cache-Control": "max-age=300"
  };

  return (gulp
    .src(["./dist/**"])
    .pipe(
    rename(function (path) {
      path.dirname =
        "/" +
        scriptConfig.landingGuid +
        "/EN" +
        (path.dirname !== "." ? "/" + path.dirname : "");
    })
    )

    // publisher will add Content-Length, Content-Type and headers specified above
    // If not specified it will set x-amz-acl to public-read by default
    .pipe(publisher.publish(headers))

    // create a cache file to speed up consecutive uploads
    .pipe(publisher.cache())

    // print upload updates to console
    .pipe(awspublish.reporter()));
});

gulp.task("connect", ["build"], function () {
  connect.server({
    root: "",
    livereload: true,
    port: 8000
  });
});

gulp.task("watch", function () {
  gulp.watch(["./src/*.js"], ["build"]);
});

gulp.task("default", ["connect", "watch"]);