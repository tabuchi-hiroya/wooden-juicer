
var browsersync  = require('browser-sync')
var gulp         = require('gulp')
var pug          = require('gulp-pug')
var plumber      = require('gulp-plumber')
var sass         = require('gulp-sass')
var csscomb      = require('gulp-csscomb')
var stylelint    = require('stylelint')
var autoprefixer = require('gulp-autoprefixer')
var sourcemaps   = require('gulp-sourcemaps')
var frontnote    = require('gulp-frontnote')
var typescript   = require('gulp-typescript')
var uglify       = require('gulp-uglify')
var concat       = require('gulp-concat')
// var yaml        = require('gulp-yaml')

// -----------------------------------------------------------------------------
// サーバ起動
gulp.task('server', function() {
  browsersync.init({
    server: {
      baseDir: "./build/",
      index  : "index.html"
    }
    //logLevel: 'debug'
  })
})
// リロード
gulp.task('bs-reload', function() {
  browsersync.reload()
})

// Pug => HTML
gulp.task('pug', function() {
  return gulp.src(
    ['./source/**/*.pug', '!./source/_layouts/**/*.pug', '!./source/_components/**/*.pug'], {       // 対象ファイルの指定
      base: 'source'               // 対象ディレクトリの階層構造の維持
    })
    .pipe(pug({pretty: true, basedir: __dirname + '/source/'}))    // pugファイルは書き出さない
    .pipe(gulp.dest('./build'))   // 保存先ディレクトリの指定
})

// // ymlデータ
// gulp.task('data', function() {
//   gulp.src('./source/**/*.yml')
//     .pipe(yaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
//     .pipe(gulp.dest('./source/'))
//     .pipe(browsersync.stream())
// })

// Sass => Sass
gulp.task('sass-comb', function() {
  gulp.src(['./source/**/*.scss'], {
    base: 'source'
  })
  .pipe(csscomb())
  .pipe(gulp.dest('./source'))            // 出力先の指定
})

// Sass => CSS
gulp.task('sass', function() {
  gulp.src('./source/**/*.scss')       // scssディレクトリの指定
  .pipe(plumber())                     // エラー時のgulp停止の回避
  .pipe(frontnote({
    out: './doc',
    css: './css/style.css'
  }))
  .pipe(sourcemaps.init())             // sourcempapを出力
  .pipe(sass({style: 'expanded'}))     // コンパイル実行:出力形式の種類 #nested, compact, compressed, expanded.
  .pipe(autoprefixer())                // autoprefixer
  .pipe(sourcemaps.write('./'))   // マップファイルの出力先を指定
  .pipe(gulp.dest('./build'))            // 出力先の指定
  // .pipe(browser.reload({stream:true})) // 保存時にブラウザ自動更新
});


// typescript => JavaScript
gulp.task('ts', function() {
  // 出力オプション
  var options = {
    out: 'script.js'
  }
  // tsディレクトリの指定
  gulp.src('./source/**/*.ts')         // tsディレクトリの指定
  .pipe(plumber())                     // エラー時のgulp停止の回避
  .pipe(sourcemaps.init())             // sourcempapを出力
  .pipe(typescript(options))           // コンパイル実行
  .pipe(concat("main.js"))             // ファイルをひとまとめに
  .pipe(uglify())                      // JavaScriptの圧縮化
  .pipe(sourcemaps.write('./'))        // マップファイルの出力先を指定
  .pipe(gulp.dest('./build/js'))       // 出力先の指定
})


// -----------------------------------------------------------------------------
// 作業タスク
gulp.task('default', ['server'], function() {
  gulp.watch('./source/**/*.pug', ['pug'])
  gulp.watch('./source/**/*.scss', ['sass'])
  gulp.watch('./source/**/*.ts', ['ts'])
  gulp.watch('./source/**/*', ['bs-reload'])
  // gulp.watch('./source/**/*.yml', ['data'])
})

// コンパイル
gulp.task('build', ['pug', 'sass', 'ts'])
