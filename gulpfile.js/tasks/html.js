// =============================================================================
// 共通設定
// -----------------------------------------------------------------------------
var config   = require('../config')
var rootPath = require('path').join( __dirname, '../../')
var gulp     = require('gulp')
var html     = config.task.html.language;

// config.jsonで選択した言語でコンパイル
gulp.task('html', [html])


// =============================================================================
// pug
// -----------------------------------------------------------------------------
var pug  = require('gulp-pug')
// var yaml = require('gulp-yaml')

// Pug => HTML
gulp.task('pug', function() {
  return gulp.src([  // 対象ファイルの指定
    config.root.src + '/**/*.pug',
    '!' + config.root.src + '/_layouts/**/*.pug',
    '!' + config.root.src + '/_components/**/*.pug'],
    { base: config.root.src })  // 対象ディレクトリの階層構造の維持
    .pipe(pug({pretty: true, basedir: config.root.src}))
    .pipe(gulp.dest(config.root.dest))  // 保存先ディレクトリの指定
})

// // ymlデータ
// gulp.task('data', function() {
//   gulp.src('./source/**/*.yml')
//     .pipe(yaml({ schema: 'DEFAULT_SAFE_SCHEMA' }))
//     .pipe(gulp.dest('./source/'))
//     .pipe(browsersync.stream())
// })


// =============================================================================
// slim
// -----------------------------------------------------------------------------
var slim    = require('gulp-slim')
var plumber = require('gulp-plumber')

// slim => HTML
gulp.task('slim', function() {
  gulp.src(config.root.src + '/**/*.slim')
  // .pipe(plumber())
  .pipe(slim({
    pretty: true,
    require: 'slim/include'
    // options: 'include_dirs=['includes']'
  }))
  .pipe(gulp.dest(config.root.dest))
})
