import gulp from 'gulp';
import gulpif from 'gulp-if';
import templateCache from 'gulp-angular-templatecache';
import header from 'gulp-header';
import minifyHTML from 'gulp-minify-html';

export default gulp.task('templates', () => {
  return gulp.src([
    config.paths.src.templates,
    config.paths.src.templatesHTML
  ]).pipe(gulpif(release, minifyHTML({
    empty: true,
    spare: true,
    quotes: true
  })))
  .pipe(templateCache({ standalone: true }))
  .pipe(header('export default '))
  .pipe(gulp.dest(config.paths.src.templatesCompiled));
});
