"use strict";

var gulp = require('gulp');
var config = require('../config')();


gulp.task('copy-app-html', ['clean-app-html'], () => {
  return gulp.src(["src/app/**/*.html"])
    .pipe(gulp.dest(config.build.app));
});

gulp.task('copy-app-css', ['clean-app-css'], () => {
  return gulp.src(["src/app/**/*.css"])
    .pipe(gulp.dest(config.build.app));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts", "!src/assets/styles", "!**/*.scss", "!**/*.sass"])
    //return gulp.src(["src/favicon.ico", "src/index.html", "src/systemjs.config.js"])
        .pipe(gulp.dest(config.build.path));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
            'core-js/client/shim.min.js',
            'systemjs/dist/system-polyfills.js',
            'systemjs/dist/system.src.js',
            'reflect-metadata/Reflect.js',
            'rxjs/**/*.js',
            'zone.js/dist/**',
            '@angular/**/bundles/**'
        ], {cwd: "node_modules/**"}) /* Glob required here. */
        .pipe(gulp.dest(config.build.path + "lib"));
});

gulp.task("copy-assets-fonts", ['clean-assets-fonts'], () => {
  //console.log('Gulp task "copy-assets-fonts"');

  return gulp.src(['src/assets/fonts/**/*'])
    .pipe(gulp.dest(config.build.path + "assets/fonts"));

});

gulp.task("copy-assets-images", ['clean-assets-images'], () => {
  //console.log('Gulp task "copy-assets-images"');

  return gulp.src(['src/assets/images/**/*'])
    .pipe(gulp.dest(config.build.path + "assets/images"));

      /*.on('end', function() {
        console.log('Gulp task "copy-assets-images" COMPLETE');
      });*/

});
