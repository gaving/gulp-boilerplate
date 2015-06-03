import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpif from 'gulp-if';
import del from 'del';
import vinylPaths from 'vinyl-paths';
import async from 'async';

export default gulp.task('clean', () => {
  gutil.log(gutil.colors.yellow('Deleting build/release folder'));
  return gulpif(
    release,
    gulp.src(RELEASE_FOLDER, {
      read: false
    }), gulp.src(BUILD_FOLDER, {
      read: false
    }))
    .pipe(vinylPaths(del));
});
