// =============================================================================
// 共通設定
// -----------------------------------------------------------------------------
var config       = require('../config')
var gulp         = require('gulp')
var plumber      = require('gulp-plumber')
var csscomb      = require('gulp-csscomb')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps   = require('gulp-sourcemaps')
var frontnote    = require('gulp-frontnote')
var stylelint    = require('stylelint')
var css          = config.task.css.language;

// config.jsonで選択した言語でコンパイル
gulp.task('css', [css])


// =============================================================================
// Sass
// -----------------------------------------------------------------------------
var sass = require('gulp-sass')

// Sass => Sass
gulp.task('sass-comb', function() {
  gulp.src([config.root.src + '/**/*.scss'], {
    base: 'source'
  })
  .pipe(csscomb())
  .pipe(gulp.dest(config.root.src))            // 出力先の指定
})

// Sass => CSS
gulp.task('scss', function() {
  gulp.src(config.root.src + '/**/*.scss')       // scssディレクトリの指定
  .pipe(plumber())                     // エラー時のgulp停止の回避
  .pipe(frontnote({
    out: './doc',
    css: './css/style.css'
  }))
  .pipe(sourcemaps.init())             // sourcempapを出力
  .pipe(sass({style: 'expanded'}))     // コンパイル実行:出力形式の種類 #nested, compact, compressed, expanded.
  .pipe(autoprefixer())                // autoprefixer
  .pipe(sourcemaps.write('./'))   // マップファイルの出力先を指定
  .pipe(gulp.dest(config.root.dest))            // 出力先の指定
  // .pipe(browser.reload({stream:true})) // 保存時にブラウザ自動更新
});
