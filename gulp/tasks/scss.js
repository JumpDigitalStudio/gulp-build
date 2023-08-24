import rename from 'gulp-rename'
import gulpSass from 'gulp-sass'
import * as sass from 'sass'

import autoPrefixer from 'gulp-autoprefixer'
import cleanCss from 'gulp-clean-css'
import gcmq from 'gulp-group-css-media-queries'

const compileSass = gulpSass(sass)

export const scss = () => {
	return (
		app.gulp
			.src(app.path.src.scss, { sourcemaps: app.isDev })
			// Display errors & messages
			.pipe(
				app.plugins.plumber(
					app.plugins.notify.onError({
						title: 'SCSS',
						message: 'Error: <%= error.message %>',
					})
				)
			)
			// Grouping media queries in build mode
			.pipe(app.plugins.if(app.isBuild, gcmq()))
			// Enable support for the latest 10 browser versions
			.pipe(
				app.plugins.if(
					app.isBuild,
					autoPrefixer({
						grid: true,
						overrideBrowserslist: ['last 10 versions'],
						cascade: true,
					})
				)
			)
			// Build
			.pipe(app.gulp.dest(app.path.build.css))
			.pipe(app.plugins.if(app.isBuild, cleanCss()))
			.pipe(
				rename({
					extname: '.min.css',
				})
			)
			.pipe(app.gulp.dest(app.path.build.css))
			.pipe(app.plugins.browser.stream())
	)
}
