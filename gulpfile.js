// Require the 'gulp' plugin
const gulp = require('gulp');

// Require the 'gulp-sass' plugin
const sass = require('gulp-sass');

// Require the 'browser-sync' plugin
const browserSync = require('browser-sync').create()

// scss -> css
const style = () => {
	return gulp.src('./app/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.stream());
}

const watch = () => {
	browserSync.init({
		server: {
			baseDir: 'app'
		}
	});
	gulp.watch('./app/scss/**/*.scss', style);
	gulp.watch('./app/*.html').on('change', browserSync.reload);
	gulp.watch('./app/js/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;