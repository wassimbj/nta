let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');

gulp.task('js', () => {
    return gulp.src(['./src/lang.js', './src/timeAgo.js'])
                .pipe(concat('nta.js'))
                .pipe(uglify())
                .pipe(gulp.dest('./'))
});