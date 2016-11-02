"use strict";

var gulp = require('gulp');
var config = require('../config')();

var bower = require('gulp-bower');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
const runSequence = require('run-sequence');

gulp.task('bower', function(cb) {
  runSequence('bower-install', 'vendor-js', 'clean-bower-components', cb);
});

gulp.task('bower-install', function() {
  return bower(config.bower.components)
    .pipe(gulp.dest(config.vendor.bower));
});

gulp.task('vendor-js', function() {
    return gulp.src(config.extraFiles.js.vendor.files)
        .pipe(concat(config.extraFiles.js.targetFilename))
        .pipe(uglify())
        .pipe(gulp.dest(config.extraFiles.js.targetPath));
});
