import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpif from 'gulp-if';
import del from 'del';
import vinylPaths from 'vinyl-paths';
import async from 'async';

export default gulp.task('nuke', () => {
    gutil.log(gutil.colors.yellow('Nuking folders'));
    return gulp.src([
        RELEASE_FOLDER,
        BUILD_FOLDER,
        PKG_FOLDER,
        TMP_FOLDER
    ], { read: false }).pipe(vinylPaths(del));
});
