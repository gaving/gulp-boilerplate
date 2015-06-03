import gulp from 'gulp';
import connect from 'connect';
import serveStatic from 'serve-static'

const staticServer = connect();

export default gulp.task('serve', (next) => {
  let staticServerPath = release ? RELEASE_FOLDER : BUILD_FOLDER;
  staticServer.use(serveStatic(staticServerPath)).listen(process.env.PORT || config.ports.staticServer, next);
});
