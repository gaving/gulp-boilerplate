import gulp from 'gulp';
import uglify from 'gulp-uglify';
import ngAnnotate from 'gulp-ng-annotate';

export default gulp.task('minify', () => {
  return gulp.src(config.paths.dest.release.scripts + '/' + config.filenames.release.scripts)
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.dest.release.scripts));
});
