"use strict";

var gulp = require('gulp');
var config = require('../config')();

var buffer = require('vinyl-buffer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');

//var debug = require('gulp-debug');

gulp.task('sprite', ['clean-app-sprites'], () => {
  // Generate our spritesheet

  var spriteData = gulp.src(config.src + 'sprites/**/*.png')
  //.pipe(debug({title: 'unicorn:'}))
  .pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: 'sprite.css'
    //imgPath: '../sprites/sprite.png'
  }));

  // Pipe image stream through image optimizer and onto disk
  var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
    .pipe(buffer())
    .pipe(imagemin())
    .pipe(gulp.dest(config.build.assets + 'sprites'));

  // Pipe CSS stream through CSS optimizer and onto disk
  var cssStream = spriteData.css
    //.pipe(csso())
    //.pipe(gulp.dest(config.assets + 'styles'));
    .pipe(gulp.dest(config.build.assets + 'sprites'));

  // Return a merged stream to handle both `end` events
  return merge(imgStream, cssStream);

});
