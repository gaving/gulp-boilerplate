import gulp from 'gulp';
import gulpif from 'gulp-if';

export default gulp.task('assets', () => {
  return gulp.src(config.paths.src.assets)
    .pipe(gulpif(
      release,
      gulp.dest(config.paths.dest.release.assets),
      gulp.dest(config.paths.dest.build.assets)
    ));
});
