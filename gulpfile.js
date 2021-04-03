const { src, dest, watch, parallel, series } = require("gulp");
const scss                                   = require("gulp-sass");
const autoprefix                             = require("gulp-autoprefixer");
const sync                                   = require("browser-sync").create();
const imagemin                               = require("gulp-imagemin");
const fileIncluder                           = require("gulp-file-include");
const webpHtml                               = require("gulp-webp-html");
const htmlMin                                = require("gulp-htmlmin");

const fs = require("fs"); /* создание файлов через nodejs*/ 

function struct () {
  createFolders();
  setTimeout( function () {
    fs.writeFile("src/index.html", "!", function(error) {
      if (error) {
        throw error;
      }
      console.log("Html done");
    })
    fs.writeFile("src/scss/style.scss", "", function(error) {
      if (error) {
        throw error;
      }
      console.log("Scss done");
    })
    fs.writeFile("src/css/style.css", "", function(error) {
      if (error) {
        throw error;
      }
      console.log("Css done");
    })
    fs.writeFile("src/js/draft/main.js", "", function(error) {
      if (error) {
        throw error;
      }
      console.log("Draft js done");
    });
  }, 500);
};

function createFolders () {
  return src("*.*", { read: false })
  .pipe(dest("src/scss"))
  .pipe(dest("src/css"))
  .pipe(dest("src/js"))
  .pipe(dest("src/js/draft"))
  .pipe(dest("src/img"))
  .pipe(dest("src/img_unopt"))
  .pipe(dest("src/fonts"))
  .pipe(dest("src/pages/parts"))
  .pipe(dest("build"))
};

function convertStyles () {
  return src("src/scss/style.scss")
  .pipe(scss({
    outputStyle: 'expanded'
  }))
  .pipe(autoprefix({
    cascade: true,
    grid: "autoplace"
  }))
  .pipe(dest("src/css"))
  .pipe(sync.stream())
};

function partsToHtml () {
  return src("src/pages/**/*.html")
  .pipe(fileIncluder({
    prefix: "@@",
    basepath: "@file"
  }))
  .pipe(dest("src"))
};

function browserSync () {
  sync.init({
    server: {
      baseDir: "src",
    },
    browser: "firefox",
    notify: false
  });
};

function compressImg () {
  return src("src/img_unopt/*.{jpg,png,svg}")
  .pipe(imagemin())
  .pipe(dest("src/img"))
};

function watcher () {
  watch("src/scss/**/*.scss", convertStyles);
  watch("src/img_unopt", compressImg);
  watch("src/pages/**/*.html", partsToHtml);
  watch("src/pages/**/*.html").on("change", partsToHtml);

  watch("src/*.html").on("change", sync.reload);
  watch("src/css/*.css").on("change", sync.reload);
  watch("src/js/*.js").on("change", sync.reload);
};

exports.struct        = struct;
exports.convertStyles = convertStyles;
exports.partsToHtml   = partsToHtml;
exports.browserSync   = browserSync;
exports.compressImg   = compressImg;
exports.watcher       = watcher;

exports.default = parallel(partsToHtml, convertStyles, watcher, browserSync)

// BUILD
function moveHtml () {
  return src("src/*.html")
  // .pipe(webpHtml())
  .pipe(htmlMin({
    collapseWhitespace: true,
    removeComments: true
  }))
  .pipe(dest("build"))
}

function moveStyles () {
  return src("src/css/*.css")
  .pipe(dest("build/css"))
}

function moveJS () {
  return src("src/js/*.js")
  .pipe(dest("build/js"))
}

function moveImg () {
  return src("src/img/*")
  .pipe(dest("build/img"))
}

function moveFonts () {
  return src("src/fonts/**/*")
  .pipe(dest("build/fonts"))
}

exports.moveHtml     = moveHtml;
exports.moveStyles   = moveStyles;
exports.moveJS       = moveJS;
exports.moveImg      = moveImg;
exports.moveFonts    = moveFonts;

exports.build = series(moveHtml, moveStyles, moveJS, moveImg, moveFonts);