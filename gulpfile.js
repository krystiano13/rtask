const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const minifyCss = require("gulp-clean-css");

const compileSass = () => {
  return src("./styles/sass/*.scss")
    .pipe(sass())
    .pipe(minifyCss())
    .pipe(dest("./styles/css/"));
};

const watchTask = () => watch(["./styles/sass/**/*.scss"], compileSass);

exports.default = series(watchTask,compileSass);
