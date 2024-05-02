const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');

const includePaths = [
    'node_modules/bootstrap/scss',
    'node_modules/slick-carousel/slick',
];

function sassBuild() {
    return gulp.src(['scss/app.scss'])
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: includePaths,
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('css'));
};

function serve() {
    browserSync.init({ server: "./" });
    gulp.watch("scss/*.scss", sassBuild).on('change', browserSync.reload);
    gulp.watch("scss/**/*.scss", sassBuild).on('change', browserSync.reload);
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("*.js").on('change', browserSync.reload);
}

gulp.task('sass', sassBuild);
gulp.task('serve', gulp.series('sass', serve));
gulp.task('default', gulp.series('sass', serve));
