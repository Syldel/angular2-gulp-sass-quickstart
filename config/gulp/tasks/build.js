"use strict";

var gulp = require('gulp');
var config = require('../config')();

const runSequence = require('run-sequence');

gulp.task("install", () => {
    console.log("Installing the project ...");

    runSequence('copy-bootstrap-fonts', 'build', 'resources', 'libs');
});

/**
 * Build the project.
 */
gulp.task("build", () => {
    console.log("Building the project ...");

    runSequence('ts', 'sass-common', 'sass-app', 'sprite');
});
