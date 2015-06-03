import gulp from 'gulp';
import browserify from 'browserify';
import watchify from 'watchify';
import babelify from 'babelify';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import shim from 'browserify-shim';

export default gulp.task('watchify', () => {
  var bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    entries: [config.paths.src.js],
    debug: true,
    extensions: ['.js']
  });

  bundler = watchify(bundler);
  bundler.transform(babelify.configure({
    ignore: /bower_components/
  }));
  bundler.transform(shim);

  function rebundle() {
    return bundler.bundle()
    .pipe(source(config.filenames.build.scripts))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.paths.dest.build.scripts));
  }

  bundler.on('update', rebundle);

  return rebundle();
});
