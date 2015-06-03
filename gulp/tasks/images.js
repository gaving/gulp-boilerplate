import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';

export default gulp.task('images', () => {
  return gulp.src(config.paths.src.images)
  // .pipe(gulpif(release, imagemin({
  //   optimizationLevel: 5,
  //   progressive: true,
  //   interlaced: true
  // })))
  .pipe(gulpif(release, gulp.dest(config.paths.dest.release.images), gulp.dest(config.paths.dest.build.images)));
});
