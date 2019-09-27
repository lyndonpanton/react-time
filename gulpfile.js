const gulp = require("gulp");
const sass = require("gulp-sass");

gulp.task("sass", async function() {
	gulp.src("src/App.sass")
		.pipe(sass())
		.on("error", sass.logError)
		.pipe(gulp.dest("src"));
});

gulp.task("default", gulp.series(["sass"]));

gulp.task("watch", async function() {
	gulp.watch("src/App.sass", gulp.series(["sass"]));
});