"use strict";

var gulp = require('gulp');
var config = require('../config')();

const sass = require('gulp-sass');

gulp.task('sass-common', () => {

    return gulp.src('src/assets/styles/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.build.path));
});

gulp.task('sass-app', () => {

    return gulp.src('src/app/**/*.{scss,sass}')
        //.pipe(debug({title: 'unicorn:'}))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(config.build.app));
});
