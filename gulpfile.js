var gulp = require('gulp');
var concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css');

gulp.task('css', function() {
  gulp.src(['css/cssreset.css', 'css/grid.css', 'css/style.css', 'css/responsive_custom.css', 'css/print.css'])
    .pipe(concatCss("bundle.css"))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', function() {
  gulp.src(['js/jquery-1.9.0.js', 'js/bootstrap-scrollspy.js', 'js/jquery.custom.js'])
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['css', 'scripts']);