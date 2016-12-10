const gulp = require('gulp');
const concatCss = require('gulp-concat-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minifycss = require('gulp-minify-css');

gulp.task('css', () => {
  gulp.src(['css/cssreset.css', 'css/grid.css', 'css/style.css', 'css/responsive_custom.css', 'css/print.css'])
    .pipe(concatCss('bundle.css'))
    .pipe(minifycss())
    .pipe(gulp.dest('./css'));
});

gulp.task('scripts', () => {
  gulp.src(['node_modules/smooth-scroll/dist/js/smooth-scroll.js', 'node_modules/gumshoe/dist/js/gumshoe.js', 'js/custom.js'])
    .pipe(uglify())
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./js'));
});

gulp.task('default', ['css', 'scripts']);
