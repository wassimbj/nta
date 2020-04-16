let gulp = require('gulp');
let concat = require('gulp-concat');
let uglify = require('gulp-uglify');
var inject = require('gulp-inject');

gulp.task('build', () => {
    return gulp.src( './src/timeAgo.js')
                .pipe(inject(
                    gulp.src('./src/lang.js', { read: true }),
                    { 
                        starttag: '//- inject:lang:{{ext}}', 
                        endtag: '//- endinject',
                        transform: function (filePath, file) {
                            // return file contents as string
                            return file.contents.toString('utf8')
                        }
                    }
                ))
                .pipe(concat('nta.min.js'))
                .pipe(uglify())
                .pipe(gulp.dest('./'))
});