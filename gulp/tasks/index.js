import gulp from 'gulp';
import gulpif from 'gulp-if';
import replace from 'gulp-replace';
import minifyHTML from 'gulp-minify-html';

export default gulp.task('index', () => {
  gulp.src(`${ SRC_FOLDER }/favicon.ico`)
  .pipe(gulpif(
    release,
    gulp.dest(config.paths.dest.release.index),
    gulp.dest(config.paths.dest.build.index)
  ));
  return gulp.src(config.paths.src.index)
  .pipe(gulpif(
    release,
    minifyHTML({
      comments: true,
      empty: true,
      spare: true,
      quotes: true
    })))
    .pipe(gulpif(
      release,
      replace('<!--styles-->', `<link href="${ config.filenames.release.styles }" rel="stylesheet">`),
      replace('<!--styles-->', `<link href="${ config.filenames.build.styles }" rel="stylesheet">`)))
    .pipe(gulpif(release, replace('<!--scripts-->', `<script src="${ config.filenames.release.scripts }"></script>`),
       replace('<!--scripts-->', `<script src="${ config.filenames.build.scripts }"></script>`)))
     .pipe(gulpif(release, gulp.dest(config.paths.dest.release.index), gulp.dest(config.paths.dest.build.index)));
});
