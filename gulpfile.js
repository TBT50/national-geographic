const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", function() {
  return gulp
    .src("src/css/**/*.scss")
    .pipe(sass())
    .pipe(gulp.dest("dist/css"));
});

gulp.task("watch", function() {
  gulp.watch("src/css/**/*.scss", ["sass"]);
  gulp.watch("src/*.html", ["html"]);
});

gulp.task("html", function() {
  return gulp.src("src/**/*.html").pipe(gulp.dest("dist/"));
});
