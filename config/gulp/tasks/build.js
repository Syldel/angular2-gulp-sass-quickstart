"use strict";

var gulp = require('gulp');
var config = require('../config')();

const runSequence = require('run-sequence');

/**
 * Build the project.
 */
gulp.task("build", () => {
    console.log("Building the project ...");

    runSequence('ts', 'sass-common', 'sass-app', 'resources', 'libs');
});
