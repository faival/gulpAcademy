var config       = require('../config')
var gutil = require('gulp-util')

gutil.log('postJS.config.tasks.js ' + gutil.colors.green(config.tasks.js));
if(!config.tasks.js) return


var gulp         = require('gulp')
var browserSync  = require('browser-sync')
var handleErrors = require('../lib/handleErrors')
var path         = require('path')
var gulpPrefixTimestamp = require('./utils/prefixTimestamp')

var paths = {
  src: path.join(config.root.dest, config.tasks.js.dest, '/**/*.js'),
  dest: path.join(config.root.dest, config.tasks.js.dest)
}

gulp.task('postJS', function () {

  return gulp.src(paths.src, { buffer: false })
  	.pipe(gulpPrefixTimestamp('/** \n * @Author pablo.molina@netcentric.biz \n * @Date: ' + new Date().getTime() + '\n*/ \n'))
  	.pipe(gulp.dest(paths.dest))
})
