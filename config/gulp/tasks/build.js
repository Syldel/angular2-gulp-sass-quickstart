"use strict";

var gulp = require('gulp');
var config = require('../config')();

const runSequence = require('run-sequence');

/**
 * Install the project.
 */
gulp.task("install", (cb) => {
    console.log("Installing the project ...");

    runSequence('copy-bootstrap-fonts', 'build', 'resources', 'libs', 'bower', cb);
});

/**
 * Build the project.
 */
gulp.task("build", (cb) => {
    console.log("Building the project ...");

    runSequence('ts', 'sass-common', 'sass-app', 'sprite', cb);
});
