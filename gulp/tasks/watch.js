import gulp from 'gulp';
import util from 'gulp-util';
import plumber from 'gulp-plumber';
import path from 'path';
import watch from 'gulp-watch';
import livereload from 'gulp-livereload';

export default gulp.task('watch', () => {
  livereload.listen(config.ports.livereloadServer);
  gulp.watch(config.paths.src.livereload).on('change', event => {
    const fileName = path.relative(__dirname, event.path);
    livereload.changed(fileName);
  });
  watch([config.filenames.config.app], () => {
    gulp.start('config');
  });
  watch([config.paths.src.scripts], () => {
    gulp.start('lint');
  });
  watch([config.paths.src.index], () => {
    gulp.start('index');
  });
  watch([
    config.paths.src.templates,
    config.paths.src.templatesHTML
  ], () => {
    gulp.start('templates');
  });
  watch([config.paths.src.stylesGlob], () => {
    gulp.start('styles');
  });
});
