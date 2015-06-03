import gulp from 'gulp';
import gulpif from 'gulp-if';
import rename from 'gulp-rename';
import csso from 'gulp-csso';
import autoprefixer from 'gulp-autoprefixer';
import sass from 'gulp-ruby-sass';
import sourcemaps from 'gulp-sourcemaps';

export default gulp.task('styles', () => {
  return sass(config.paths.src.styles, {
    // sourcemap: !release
  })
  .on('error', (err) => {
    console.error('Error!', err.message);
  })
  .pipe(autoprefixer('last 1 version'))
  .pipe(gulpif(release, csso()))
  .pipe(gulpif(release, rename(config.filenames.release.styles), rename(config.filenames.build.styles)))
  // .pipe(gulpif(!release, sourcemaps.write()))
  .pipe(gulpif(release, gulp.dest(config.paths.dest.release.styles), gulp.dest(config.paths.dest.build.styles)));
});
