import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import shim from 'browserify-shim';

export default gulp.task('browserify', () => {
  return browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    entries: [config.paths.src.js],
    extensions: ['.js']
  })
  .transform(babelify.configure({
    ignore: /bower_components/
  }))
  .transform(shim)
  .bundle()
  .pipe(source(config.filenames.release.scripts))
  .pipe(gulp.dest(config.paths.dest.release.scripts));
});
