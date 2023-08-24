import fileinclude from 'gulp-file-include'
import versionNumber from 'gulp-version-number'

export const html = () => {
	return (
		app.gulp
			.src(app.path.src.html)
			// Display errors & messages
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: 'HTML',
						message: 'Error: <%= error.message %>',
					})
				)
			)
			// Include HTML-parts
			.pipe(fileinclude())
			// Add version to CSS/JS files
			.pipe(
				app.plugins.if(
					app.isBuild,
					versionNumber({
						value: '%DT%',
						append: {
							key: '_v',
							cover: 0,
							to: ['css', 'js'],
						},
						output: {
							file: 'gulp/version.json',
						},
					})
				)
			)
			// Build
			.pipe(app.gulp.dest(app.path.build.html))
			.pipe(app.plugins.browser.stream())
	)
}
