import gulp from 'gulp';
import runSequence from 'run-sequence';

export default gulp.task('default', () => {
  if (release) {
    runSequence(
      'clean',
      ['index', 'styles', 'images', 'assets', 'templates', 'config', 'lint'],
      'browserify',
      ['minify'],
      ['deploy', 'package']
    );
  } else {
    runSequence(
      'clean',
      ['index', 'styles', 'images', 'assets', 'templates', 'config', 'lint'],
      ['watchify', 'watch', 'serve']
    );
  }
});
