// Get project folder name
import * as nodePath from 'path'
const rootFolder = nodePath.basename(nodePath.resolve())

// Project folders
const buildFolder = `./dist`
const srcFolder = `./src`

export const path = {
	build: {
		js: `${buildFolder}/assets/js/`,
		css: `${buildFolder}/assets/css/`,
		html: `${buildFolder}/`,
		images: `${buildFolder}/assets/img/`,
		files: `${buildFolder}/assets/documents/`,
	},
	src: {
		svg: `${srcFolder}/assets/img/**/*.svg`,
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
		js: `${srcFolder}/assets/js/app.js`,
		scss: `${srcFolder}/assets/scss/style.scss`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/assets/documents/**/*.*`,
	},
	watch: {
		images: `${srcFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp,svg,ico}`,
		js: `${srcFolder}/assets/js/**/*.js`,
		scss: `${srcFolder}/assets/scss/**/*.scss`,
		html: `${srcFolder}/**/*.html`,
		files: `${srcFolder}/assets/documents/**/*.*`,
	},
	clean: buildFolder,
	buildFolder: buildFolder,
	srcFolder: srcFolder,
	rootFolder: rootFolder,
	ftp: `test`,
}
