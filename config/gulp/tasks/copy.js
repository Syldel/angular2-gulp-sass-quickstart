"use strict";

var gulp = require('gulp');
var config = require('../config')();

const runSequence = require('run-sequence');

gulp.task('copy-app-html', ['clean-app-html'], () => {
  return gulp.src(["src/app/**/*.html"])
    .pipe(gulp.dest(config.build.app));
});

gulp.task('copy-app-css', ['clean-app-css'], () => {
  return gulp.src(["src/app/**/*.css"])
    .pipe(gulp.dest(config.build.app));
});

gulp.task('copy-root-elements', ['clean-root-elements'], () => {
  return gulp.src(["src/*.**"])
    .pipe(gulp.dest(config.build.path));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", (cb) => {
    //return gulp.src(["src/**/*", "!**/*.ts", "!src/sprites", "!src/assets/styles", "!**/*.scss", "!**/*.sass"])
      //  .pipe(gulp.dest(config.build.path));

    runSequence('copy-root-elements', 'copy-app-html', 'copy-app-css', 'copy-assets-fonts', 'copy-assets-images', cb);
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

  return gulp.src(['src/assets/fonts/**/*'])
    .pipe(gulp.dest(config.build.path + "assets/fonts"));

});

gulp.task("copy-assets-images", ['clean-assets-images'], () => {

  return gulp.src(['src/assets/images/**/*'])
    .pipe(gulp.dest(config.build.path + "assets/images"));

      /*.on('end', function() {
        console.log('Gulp task "copy-assets-images" COMPLETE');
      });*/
});

gulp.task("copy-bootstrap-fonts", () => {

  return gulp.src(['node_modules/bootstrap-sass/assets/fonts/bootstrap/**'])
    .pipe(gulp.dest(config.assets + "fonts/bootstrap"));

});
