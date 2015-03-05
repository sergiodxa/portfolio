var concat = require('gulp-concat');
var gcmq = require('gulp-group-css-media-queries');
var glob = require('glob');
var gulp = require('gulp');
var jade = require('gulp-jade');
var jsmin  = require('gulp-jsmin');
var less = require('gulp-less')
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var uncss = require('gulp-uncss');
var watch = require('gulp-watch');

gulp.task('js', function () {
  gulp.src('./front/js/main.js')
    .pipe(sourcemaps.init())
      .pipe(concat('main.js'))
      .pipe(jsmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
    .pipe(livereload());
});

gulp.task('css', function () {
  gulp.src('./front/less/main.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ],
      filename: 'main.less',
      ru: true
    }))
    //.pipe(gcmq())
    .pipe(uncss({
      html: glob.sync('public/*.html')
    }))
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('html', function () {
  gulp.src('./views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./public/'));
});

gulp.task('server', function () {
  nodemon({ script: 'server', ext: 'html js', ignore: ['./public/**/*.js'] })
    .on('restart', function () {
      console.log('Servidor reiniciado');
    });
});

gulp.task('watch', function () {
  gulp.watch(['./views/**/*.jade'], ['html']);
  gulp.watch(['./front/less/**/*.less', './public/*.html'], ['css']);
  gulp.watch(['./front/js/**/*.js'], ['js']);
});

gulp.task('default', ['html', 'css', 'js', 'server', 'watch']);