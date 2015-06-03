import gulp from 'gulp';
import gutil from 'gulp-util';
import jscs from 'gulp-jscs';
import jshint from 'gulp-jshint';

export default gulp.task('style', () => {
  gutil.log(gutil.colors.yellow('JSCS'));
  return gulp.src(config.paths.src.scripts)
    .pipe(jscs({ configPath: '.jscsrc' }))
    .pipe(gulp.dest(config.filenames.config.dest));
});
