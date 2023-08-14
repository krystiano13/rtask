const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const minifyCss = require("gulp-clean-css");
const concat = require("gulp-concat");

const compileSass = () => {
  return src("./styles/sass/**/*.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        overrideBrowserslist: ["last 2 versions"],
      })
    )
    .pipe(minifyCss())
    .pipe(concat("style.css"))
    .pipe(dest("./styles/css/"));
};

const watchTask = () => watch(["./styles/sass/**/*.scss"], compileSass);

exports.default = series(watchTask, compileSass);
