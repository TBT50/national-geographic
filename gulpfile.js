const gulp = require("gulp");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const mozjpeg = require("imagemin-mozjpeg");

gulp.task("sass", function() {
  return gulp
    .src("src/css/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("imagemin", () => {
  gulp
    .src("src/img/*")
    .pipe(imagemin([mozjpeg({ quality: 80 })]))
    .pipe(gulp.dest("dist/img"));
});

gulp.task("html", function() {
  return gulp.src("src/**/*.html").pipe(gulp.dest("dist/"));
});

gulp.task("watch", function() {
  gulp.watch("src/css/**/*.scss", ["sass", "imagemin"]);
  gulp.watch("src/*.html", ["html", "imagemin"]);
});

gulp.task("default", ["watch"]);
