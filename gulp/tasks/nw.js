import gulp from 'gulp';
import gutil from 'gulp-util';
import nw from 'node-webkit-builder';
import jeditor from 'gulp-json-editor';
import async from 'async';
import zip from 'gulp-zip';

import packageJson from '../../package.json';

export default gulp.task('nw', () => {
  var version = packageJson.version + (release ? '-prod' : '-dev');

  async.series([
    (next) => {
      gutil.log(gutil.colors.yellow('Configuring'));
      gulp.src('./' + config.filenames.config.nw + 'package.json')
      .pipe(jeditor({
        'main': config.deploy.url,
        'version': version,
        'window': {
          'title': packageJson.description
        }
      }))
      .pipe(gulp.dest('./' + config.filenames.config.nw))
      .on('end', next);
    },
    (next) => {
      gutil.log(gutil.colors.yellow('Building'));
      var pkg = new nw({
        version: '0.12.2',
        files: './' + config.filenames.config.nw + '**',
        winIco: './' + config.filenames.config.nw + 'icon.ico',
        platforms: ['win32', 'win64'],
        buildDir: config.filenames.pkg.nw,
        cacheDir: CACHE_FOLDER
      });

      pkg.on('log', function (msg) {
        gutil.log('node-webkit-builder', msg);
      });

      pkg.build(next);
    },
    (next) => {
      async.parallel([
        (next) => {
          gutil.log(gutil.colors.yellow('Bundling win32'));
          gulp.src(config.filenames.pkg.nw + '/idap/win32/**')
          .pipe(zip('idap-' + version + '-win32.zip'))
          .pipe(gulp.dest(config.filenames.pkg.nw))
          .on('end', next);
        },
        (next) => {
          gutil.log(gutil.colors.yellow('Bundling win64'));
          gulp.src(config.filenames.pkg.nw + '/idap/win64/**')
          .pipe(zip('idap-' + version + '-win64.zip'))
          .pipe(gulp.dest(config.filenames.pkg.nw))
          .on('end', next);
        }
      ]);
    }
  ]);
});
