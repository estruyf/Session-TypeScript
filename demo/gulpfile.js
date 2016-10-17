var gulp = require('gulp'),
    tsc= require("gulp-typescript"),
    sourcemaps = require("gulp-sourcemaps");

var tsProject = tsc.createProject("tsconfig.json");

gulp.task("transpile", () => {
    var tsResult = tsProject.src('src/**/*.ts')
                            .pipe(sourcemaps.init())
                            .pipe(tsProject());
    return tsResult.js.pipe(sourcemaps.write('../maps'))
                      .pipe(gulp.dest('dist/'));
});


gulp.task("watch", () => {
    gulp.watch("src/**/**.ts", ["transpile"]);
});