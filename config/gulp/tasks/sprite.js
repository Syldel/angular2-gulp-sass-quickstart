'use strict';

var gulp = require('gulp');
var config = require('../config')();

var fs = require('fs');

var concat = require('gulp-concat');
var csso = require('gulp-csso');
var clean = require('gulp-clean');

var buffer = require('vinyl-buffer');
var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');
var spritesmith = require('gulp.spritesmith');

//var debug = require('gulp-debug');

gulp.task('sprite', ['clean-app-sprites'], () => {
  // Generate our spritesheet

  var mergedImage = merge();
  var mergedCss = merge();
  var mergedCSSAndImage = merge(mergedImage, mergedCss);

  mergedImage.on('end', function() {
    //console.log('sprite end mergedImage');
  });

  mergedCss.pipe(concat('sprites.css'))
  .pipe(csso())
  //.pipe(gulp.dest(config.assets + 'styles'))
  .pipe(gulp.dest(config.build.assets + 'sprites'))
  .on('end', function() {
    //console.log('sprite end mergedCss');

    // Clean every generated temp css files
    var cleanCssStream = gulp.src([
      config.build.assets+'sprites/**/*.css',
      '!'+config.build.assets+'sprites/sprites.css'
    ], {read: false})
    .pipe(clean())
    .on('end', function() {
      //console.log('sprite end cleanCssStream');
    });

    mergedCSSAndImage.add(cleanCssStream);
  });

  mergedCSSAndImage.on('end', function() {
    //console.log('sprite end mergedCSSAndImage');
  });

  fs.readdir(config.assets + 'sprites', (err, files) => {
    files.forEach(file => {
      //console.log(file);

      var spriteData = gulp.src(config.assets + 'sprites/'+file+'/**/*.png')
      //.pipe(debug({title: 'unicorn:'}))
      .pipe(spritesmith({
        imgName: file+'.png',
        cssName: file+'.css',
        //imgPath: '../sprites/'+file+'.png',
        cssVarMap: function (item) {
          //console.log('item', item);

          if (item.name.match(/On$/i)) {
            item.name = item.name.replace(/On$/i, ":hover") + ', .icon-' + item.name.replace(/On$/i, ".hover");
          }

          if (item.name.match(/-hover$/i)) {
            item.name = item.name.replace(/-hover$/i, ":hover") + ', .icon-' + item.name.replace(/-hover$/i, ".hover");
          }

          if (item.name.match(/roll$/i)) {
            item.name = item.name.replace(/roll$/i, ":hover") + ', .icon-' + item.name.replace(/roll$/i, ".hover");
          }

          if (item.name.match(/-over$/i)) {
            item.name = item.name.replace(/-over$/i, ":hover") + ', .icon-' + item.name.replace(/-over$/i, ".hover");
          }

        }
      }));

      // Pipe image stream through image optimizer and onto disk
      var imgStream = spriteData.img
        // DEV: We must buffer our stream into a Buffer for `imagemin`
        .pipe(buffer())
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest(config.build.assets + 'sprites'));

      mergedImage.add(imgStream);

      // Pipe CSS stream through CSS optimizer and onto disk
      var cssStream = spriteData.css
        //.pipe(csso())
        //.pipe(gulp.dest(config.assets + 'styles'))
        .pipe(gulp.dest(config.build.assets + 'sprites'))
        .on('end', function() {
          //console.log('sprite end css process');
        });

      mergedCss.add(cssStream);

    });

  });

  return mergedCSSAndImage;

});
