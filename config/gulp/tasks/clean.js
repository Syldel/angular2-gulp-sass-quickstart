"use strict";

var gulp = require('gulp');
var config = require('../config')();

const clean = require('gulp-clean');

gulp.task('clean', () => {
    // Option read:false prevents gulp from reading the contents of the file and makes this task a lot faster. If you need the file and its contents after cleaning in the same stream, do not set the read option to false.
    // here we use a globbing pattern to match everything inside the `site/web` folder
    return gulp.src(config.build.path, {read: false})
      .pipe(clean());
});

gulp.task('clean-root-elements', () => {
  return gulp.src(config.build.path + '*.**', {read: false})
    .pipe(clean());
});

gulp.task('clean-app-js', () => {
  return gulp.src(config.build.app + '**/*.{js,js.map}', {read: false})
    .pipe(clean());
});

gulp.task('clean-app-html', () => {
  return gulp.src(config.build.app + '**/*.html', {read: false})
    .pipe(clean());
});

gulp.task('clean-app-css', () => {
  return gulp.src(config.build.app + '**/*.css', {read: false})
    .pipe(clean());
});

gulp.task('clean-app-sprites', () => {
  return gulp.src(config.build.assets + 'sprites/**/*', {read: false})
    .pipe(clean());
});

gulp.task('clean-assets-fonts', () => {
  return gulp.src(config.build.assets + 'fonts/**/*', {read: false})
    .pipe(clean());
});

gulp.task('clean-assets-images', () => {
  return gulp.src(config.build.assets + 'images/**/*', {read: false})
    .pipe(clean());
});
