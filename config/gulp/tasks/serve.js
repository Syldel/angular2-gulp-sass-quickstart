"use strict";

var gulp = require('gulp');
var config = require('../config')();

const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();

// launch Browsersync
gulp.task('browserSync', function (cb) {

    // Serve files from the root of this project
    browserSync.init({
        port: 8000,
        server: {
            baseDir: config.build.path
        }
    });

    cb();
});

// use default task to launch Browsersync and watch JS files
gulp.task('serve', function () {
  console.log("Launch 'serve' Gulp Run sequence");
  runSequence('build', 'browserSync', 'watch');
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', () => {

    gulp.watch("src/**/*.ts").on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');

        gulp.start('ts', function () {
          console.log('Watch "ts" task complete');
          browserSync.reload();
        });
    });

    gulp.watch(["src/app/**/*.html"]).on('change', function (e) {
        console.log('File ' + e.path + ' has been changed.');

        gulp.start('copy-app-html', function () {
          console.log('Watch "copy-app-html" task complete');
          browserSync.reload();
        });
    });

    gulp.watch(["src/app/**/*.css"]).on('change', function (e) {
        console.log('File ' + e.path + ' has been changed.');

        runSequence('copy-app-css', 'sass-app', function () {
          console.log('Watch "copy-app-css/sass-app" runSequence complete');
          browserSync.reload();
        });
    });

    gulp.watch(["src/app/**/*.{scss,sass}"]).on('change', function (e) {
        console.log('File ' + e.path + ' has been changed.');

        runSequence('copy-app-css', 'sass-app', function () {
          console.log('Watch "copy-app-css/sass-app" runSequence complete');
          browserSync.reload();
        });
    });

    gulp.watch(["src/index.html"]).on('change', function (e) {
      console.log('File ' + e.path + ' has been changed.');

      gulp.src(["src/index.html"])
      .pipe(gulp.dest(config.build.path)).on('end', function () {
        console.log('"src/index.html" copy complete');
        browserSync.reload();
      });
    });

    gulp.watch(["src/favicon.ico"]).on('change', function (e) {
      console.log('File ' + e.path + ' has been changed.');

      gulp.src(["src/favicon.ico"])
      .pipe(gulp.dest(config.build.path)).on('end', function () {
        console.log('"src/favicon.ico" copy complete');
        browserSync.reload();
      });
    });

    gulp.watch(["src/systemjs.config.js"]).on('change', function (e) {
      console.log('File ' + e.path + ' has been changed.');

      gulp.src(["src/systemjs.config.js"])
      .pipe(gulp.dest(config.build.path)).on('end', function () {
        console.log('"src/systemjs.config.js" copy complete');
        browserSync.reload();
      });
    });

    gulp.watch(["src/assets/fonts/**"], function (e) {
      console.log('Watch "src/assets/fonts/**" type:', e.type);

      gulp.start('copy-assets-fonts', function () {
        console.log('Watch "copy-assets-fonts" task complete');
        browserSync.reload();
      });
    });

    gulp.watch(["src/assets/images/**"], function (e) {
      console.log('Watch "src/assets/images/**" type:', e.type);

      gulp.start('copy-assets-images', function () {
        console.log('Watch "copy-assets-images" task complete');
        browserSync.reload();
      });
    });

    gulp.watch(["src/assets/data/**/*.json"], function (e) {
      console.log('Watch "src/assets/data/**" type:', e.type);

      gulp.start('copy-assets-data', function () {
        console.log('Watch "copy-assets-data" task complete');
        browserSync.reload();
      });
    });

    gulp.watch(["src/assets/**/*.scss", "src/assets/**/*.sass"], function (e) {
      console.log('Watch "src/assets/**/*.scss", "src/assets/**/*.sass" type:', e.type);

      gulp.start('sass-common', function () {
        console.log('Watch "sass" task complete');
        browserSync.reload();
      });
    });

    gulp.watch(["src/assets/sprites/**"], function (e) {
      console.log('Watch "src/assets/sprites/**" type:', e.type);

      gulp.start('sprite', function () {
        console.log('Watch "sprite" task complete');
        browserSync.reload();
      });
    });

});
