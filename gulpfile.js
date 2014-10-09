var concat = require('gulp-concat');
var gcmq = require('gulp-group-css-media-queries');
var glob = require('glob');
var gulp = require('gulp');
var image = require('gulp-image');
var jsmin  = require('gulp-jsmin');
var less = require('gulp-less')
var livereload = require('gulp-livereload');
var minifyCSS = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var path = require('path');
var watch = require('gulp-watch');

gulp.task('js', function () {
  gulp.src('./front/js/**/*.js')
    .pipe(concat('main.js'))
    .pipe(jsmin())
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
    .pipe(gcmq())
    .pipe(minifyCSS())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('image', function () {
 gulp.src('./front/img/**/*')
   .pipe(image())
   .pipe(gulp.dest('./public/img'))
   .pipe(livereload());
});

gulp.task('server', function () {
  nodemon({ script: 'server', ext: 'html js', ignore: ['./public/**/*.js'] })
    .on('restart', function () {
      console.log('Servidor reiniciado');
    });
});

gulp.task('watch', function () {
  gulp.watch(['./front/less/**/*.less', './views/**/*.jade'], ['css']);
  gulp.watch(['./front/js/**/*.js'], ['js']);
  gulp.watch(['./front/img/**/*', ['image']])
});

gulp.task('default', ['css', 'js', 'image', 'server', 'watch']);