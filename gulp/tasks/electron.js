import gulp from 'gulp';
import gutil from 'gulp-util';
import electron from 'gulp-electron';
import async from 'async';
import packageJson from '../../package.json';

export default gulp.task('electron', () => {
  async.series([
    function (next) {
      gutil.log(gutil.colors.yellow('Copying package json'));
      gulp.src('package.json').pipe(gulp.dest(RELEASE_FOLDER)).on('end', next);
    },
    function (next) {
      gutil.log(gutil.colors.yellow('Copying icon'));
      gulp.src(`${ config.filenames.config.electron }/icon.png`).pipe(gulp.dest(RELEASE_FOLDER)).on('end', next);
    },
    function (next) {
      gutil.log(gutil.colors.yellow('Copying bootstrap'));
      gulp.src(`${ config.filenames.config.electron }/index.js`).pipe(gulp.dest(RELEASE_FOLDER)).on('end', next);
    },
    function (next) {
      gutil.log(gutil.colors.green('Packaging'));
      gulp.src('').pipe(electron({
        src: RELEASE_FOLDER,
        packageJson: packageJson,
        release: config.filenames.pkg.electron,
        cache: CACHE_FOLDER,
        version: 'v0.27.1',
        rebuild: false,
        platforms: ['win32-x64']
      })).pipe(gulp.dest('')).on('end', next);
    }
  ]);
});
