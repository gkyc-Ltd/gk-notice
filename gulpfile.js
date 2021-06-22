var gulp = require("gulp");
var babel = require("gulp-babel");
var concat = require("gulp-concat");
var stylus = require("gulp-stylus");
var size = require("gulp-size");
var jshint = require("gulp-jshint");
var notify = require("gulp-notify");
var uglify = require("gulp-uglify");
var csso = require("gulp-csso");

var catchError = function(err) {
  console.log(err.toString());
  this.emit("end");
};

/**
 * Styl task
 **/
gulp.task(
  "styl",
  gulp.series(function() {
    return gulp
      .src("./src/css/style.styl")
      .pipe(stylus())
      .on("error", catchError)
      .pipe(concat("iziToast.css"))
      .pipe(gulp.dest("./dist/css"))
      .pipe(concat("iziToast.min.css"))
      .pipe(csso({ discardComments: false }))
      .pipe(gulp.dest("./dist/css"))
      .pipe(notify("Stylus build done successfully!"))
      .pipe(size({ showFiles: true }));
  })
);

/**
* Scripts task
         gulp.src('js/js.js')  --要压缩文件的路径
           .pipe(uglify())
           .pipe(rename("js.min.js"))  --压缩之后的文件名
           .pipe(gulp.dest('dest/js'));  --压缩之后文件所在的位置
**/
gulp.task(
  "scripts",
  gulp.series(function() {
    return gulp
      .src("./src/js/iziToast.js")
      .pipe(babel())
      .pipe(jshint())
      .pipe(jshint.reporter("default"))
      .pipe(concat("iziToast.js"))
      .pipe(gulp.dest("./dist/js"))
      .pipe(uglify({ mangle: true }))
      .pipe(concat("iziToast.min.js"))
      .pipe(gulp.dest("./dist/js"))
      .pipe(notify("Scripts build done successfully!"))
      .pipe(size({ showFiles: true }));
  })
);

// /**
//  * Watch task
//  **/
// gulp.task("watch", ["styl", "scripts"], function() {
//   gulp.watch("./src/css/**/*.styl", ["styl"]); // watch for changes and run the css task
//   gulp.watch("./src/js/**/*.js", ["scripts"]); // watch for changes and run the js task
// });

/**
 * Default task
 **/
gulp.task("default", gulp.series("styl", "scripts"));
