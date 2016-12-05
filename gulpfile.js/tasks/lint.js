// =============================================================================
// 共通設定
// -----------------------------------------------------------------------------
var config     = require('../config')
var gulp       = require('gulp')
var plumber    = require('gulp-plumber')


// =============================================================================
// ESLINT
// -----------------------------------------------------------------------------
gulp.task('eslint', function() {
  return gulp.src([config.root.src + '/**/*.js'])
  .pipe(plumber())
  .pipe(eslint({ useEslintrc: true }))
  .pipe(format())
  .pipe(eslint.failOnError())
  .pipe(plumber.stop())
})
