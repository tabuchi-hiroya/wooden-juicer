var config       = require('../config')
var gulp         = require('gulp')
var browsersync  = require('browser-sync')

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
