var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var browserify = require('browserify');
var watchify = require('watchify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var gutil = require('gulp-util');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');

var getBrowserify = function (env, watch) {
    var babel = babelify.configure({
        optional: ['es7.objectRestSpread']
    });

    var b = browserify({
        entries: './src/index.js',
        debug: true,
        extensions: ['.js'],
        cache: {},
        packageCache: {},
        fullPaths: true
    })
    .transform(babel);

    if (watch) {
        b = watchify(b);
        b.on('update', function () {
            gutil.log('Starting', gutil.colors.cyan('\'watchify\'...'));
            b.bundle()
                .pipe(source('index.js'))
                .pipe(gulp.dest('dist'));
        });
        b.on('time', function (time) {
            var suffix = 'ms';
            if (time > 1000) {
                time = time / 1000;
                suffix = 's';
            }

            gutil.log(
                'Finished',
                gutil.colors.cyan('\'watchify\' after'),
                gutil.colors.magenta(time),
                gutil.colors.magenta(suffix)
            );
        });
    }

    return b.bundle();
};

gulp.task('default', function () {
  return getBrowserify('development')
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('default:watch', function () {
  return getBrowserify('development', true)
    .pipe(source('index.js'))
    .pipe(gulp.dest('dist'));
});

gulp.task('release', function () {
    return getBrowserify('production')
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
            // Add transformation tasks to the pipeline here.
            .pipe(uglify())
            .on('error', gutil.log)
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['default:watch'], function () {
});
