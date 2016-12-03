var config = require('../config')
var gulp   = require('gulp')
var html   = config.task.html.language;
var css    = config.task.css.language;
var js     = config.task.js.language;
var jsExtension

// config.jsonで選択した言語でコンパイル
gulp.task('html', [html])
gulp.task('css', [css])
gulp.task('js', [js])

// JavaScriptの拡張子判定
switch (js) {
  case 'es5':
    jsExtension = 'js'
    break;
  case 'es2015':
    jsExtension = 'js'
    break;
  case 'ts':
    jsExtension = 'ts'
    break;
  default:
    jsExtension = 'js'
    break;
}


// watch
gulp.task('default', ['server'], function() {
  gulp.watch(config.root.src + '/**/*.' + html, [html])
  gulp.watch(config.root.src + '/**/*.' + css, [css])
  gulp.watch(config.root.src + '/**/*.' + jsExtension, [js])
  gulp.watch(config.root.src + '/**/*', ['bs-reload'])
  // gulp.watch(config.root.src + '/**/*.yml', ['data'])
})
