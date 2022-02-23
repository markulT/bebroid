import gulp from 'gulp'
import { path } from './gulp/config/path.js'
import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js';
import { html } from './gulp/tasks/html.js';
import { plugins } from './gulp/config/plugins.js';
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { fontsStyle, otfToTtf, ttfToWoff } from './gulp/tasks/fonts.js';
import { svgSprive } from './gulp/tasks/svgSprite.js';
import { zip } from './gulp/tasks/zip.js';
import { ftp } from './gulp/tasks/ftp.js';


global.app = {
    isBuild: process.argv.includes('--build'),
    isDev: !process.argv.includes('--build'),
    path: path,
    gulp: gulp,
    plugins: plugins,
}


// Watcher function. Relaod if any file has changed
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.scss, scss)
    gulp.watch(path.watch.js, js)
    gulp.watch(path.watch.images, images)
}

export { svgSprive }

// Compile fonts
const fontsTasks = gulp.series(otfToTtf, ttfToWoff, fontsStyle)

// Compile main
const mainTasks = gulp.parallel(fontsTasks, gulp.parallel(copy, html, scss, js, images))

// Script of functions to execute
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const deployZip = gulp.series(reset, mainTasks, zip)
const deployFtp = gulp.series(reset, mainTasks, ftp)

export { dev }
export { build }
export { deployZip }
export { deployFtp }

gulp.task('default', dev)