import gulp from 'gulp';
import fs from 'fs';
import gutil from 'gulp-util';
import rename from 'gulp-rename';
import ngConstant from 'gulp-ng-constant';

import packageJson from '../../package.json';

export default gulp.task('config', () => {

  if (!fs.existsSync(config.filenames.config.app)) {
    gutil.log(gutil.colors.red('Warning: ' + config.filenames.config.app + ' does not exist!'));
  } else {
    gutil.log(gutil.colors.green('Reading front-end configuration file: ' + config.filenames.config.app));
  }

  gulp.src(config.filenames.config.app)
    .pipe(rename('config.js'))
    .pipe(ngConstant({
      constants: {
        VERSION: packageJson.version + (release ? '-prod' : '-dev')
      }
    }))
    .pipe(gulp.dest(config.filenames.config.dest));
});
