import imagemin from 'gulp-imagemin'

export const images = () => {
	return (
		app.gulp
			.src(app.path.src.images)
			// Display errors & messages
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: 'IMAGES',
						message: 'Error: <%= error.message %>',
					})
				)
			)
			// Build
			.pipe(app.plugins.newer(app.path.build.images))
			// Compressed & Minified
			.pipe(
				app.plugins.if(
					app.isBuild,
					imagemin({
						progressive: true,
						svgoPlugins: [{ removeViewBox: false }],
						interlaced: true,
						optimizationLevel: 2,
					})
				)
			)
			// Final build
			.pipe(app.gulp.dest(app.path.build.images))
			.pipe(app.gulp.src(app.path.src.svg))
			.pipe(app.gulp.dest(app.path.build.images))
			.pipe(app.plugins.browser.stream())
	)
}
