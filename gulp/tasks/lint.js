import gulp from 'gulp';
import gutil from 'gulp-util';
import jshint from 'gulp-jshint';

export default gulp.task('lint', () => {
  gutil.log(gutil.colors.yellow('JSHint'));
  return gulp.src(config.paths.src.scripts)
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jshint.reporter('fail')).on('error', e => {
    gutil.log(gutil.colors.red('Error occurred linting, aborting build'));
  });
});
