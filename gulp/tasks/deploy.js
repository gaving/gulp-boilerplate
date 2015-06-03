import gulp from 'gulp';
import rsync from 'gulp-rsync';
import gutil from 'gulp-util';

export default gulp.task('deploy', () => {
  gutil.log(gutil.colors.green(`Deploying code to: ${ config.deploy.server }`));
  gulp.src(RELEASE_FOLDER).pipe(rsync({
    root: RELEASE_FOLDER,
    progress: true,
    clean: true,
    recursive: true,
    incremental: true,
    hostname: config.deploy.server,
    destination: config.deploy.dest
  }));
});
