// =============================================================================
// 共通設定
// -----------------------------------------------------------------------------
var config     = require('../config')
var gulp       = require('gulp')
var plumber    = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')
var concat     = require('gulp-concat')
var uglify     = require('gulp-uglify')
var js         = config.task.js.language;

// config.jsonで選択した言語でコンパイル
gulp.task('js', [js])


// =============================================================================
// ES5
// -----------------------------------------------------------------------------
// ES5 => JavaScript
gulp.task('es5', function() {
  gulp.src('./source/**/*.js')         // ディレクトリの指定
  .pipe(plumber())                     // エラー時のgulp停止の回避
  .pipe(sourcemaps.init())             // sourcempapを出力
  .pipe(concat("script.js"))             // ファイルをひとまとめに
  .pipe(uglify())                      // JavaScriptの圧縮化
  .pipe(sourcemaps.write('./'))        // マップファイルの出力先を指定
  .pipe(gulp.dest('./build/js'))       // 出力先の指定
})


// =============================================================================
// TypeScript
// -----------------------------------------------------------------------------
var typescript = require('gulp-typescript')

// typescript => JavaScript
gulp.task('ts', function() {
  // 出力オプション
  var options = {
    out: 'script.js'
  }
  gulp.src('./source/**/*.ts')         // ディレクトリの指定
  .pipe(plumber())                     // エラー時のgulp停止の回避
  .pipe(sourcemaps.init())             // sourcempapを出力
  .pipe(typescript(options))           // コンパイル実行
  .pipe(concat("script.js"))             // ファイルをひとまとめに
  .pipe(uglify())                      // JavaScriptの圧縮化
  .pipe(sourcemaps.write('./'))        // マップファイルの出力先を指定
  .pipe(gulp.dest('./build/js'))       // 出力先の指定
})
