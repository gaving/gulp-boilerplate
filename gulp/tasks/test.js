import gulp from 'gulp';
import { protractor as protractor} from 'gulp-protractor';

export default gulp.task('test', () => {
  gulp.src([config.paths.src.tests])
  .pipe(protractor({ configFile: config.filenames.config.test })).on('error', e => {
    throw e;
  });
});
