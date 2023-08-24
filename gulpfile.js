import gulp from 'gulp' // Main module
import { path } from './gulp/config/path.js' // Import path
import { plugins } from './gulp/config/plugins.js' // Import common plugins

// Global variable
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins,
}

// Import tasks
import { copy } from './gulp/tasks/copy.js'
import { reset } from './gulp/tasks/reset.js'
import { server } from './gulp/tasks/server.js'

import { html } from './gulp/tasks/html.js'
import { js } from './gulp/tasks/js.js'
import { scss } from './gulp/tasks/scss.js'

import { images } from './gulp/tasks/images.js'

import { ftp } from './gulp/tasks/ftp.js'
import { zip } from './gulp/tasks/zip.js'

// Files watcher
function watcher() {
	gulp.watch(path.watch.files, copy)
	gulp.watch(path.watch.html, html)
	gulp.watch(path.watch.scss, scss)
	gulp.watch(path.watch.js, js)
	gulp.watch(path.watch.images, images)
}

// Tasks builder
const mainTasks = gulp.parallel(copy, html, scss, js, images)

// Scripts builder
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server))
const build = gulp.series(reset, mainTasks)
const buildZip = gulp.series(reset, mainTasks, zip)
const deployFTP = gulp.series(reset, mainTasks, ftp)

// Export scenario
export { build, buildZip, deployFTP, dev }

// Main script
gulp.task('default', dev)
