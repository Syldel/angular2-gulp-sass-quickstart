//var envConfig = require('./utils/env');

module.exports = function () {
    var root = '',
        src = root + 'src/',
        config = root + 'config/',
        app = src + 'app/',
        tmp = src + 'tmp/',
        assets = src + 'assets/',
        assetsPath = {
            styles: assets + 'styles/',
            images: assets + 'images/',
            fonts: assets + 'fonts/'
        },
        index = src + 'index.html',

        build = {
            path: './site/web/',
            app: './site/web/app/',
            fonts: './site/web/fonts/',
            assets: './site/web/assets/'
        },
        vendor = {
            bower: './vendor/bower/',
            js: './vendor/js/'
        },
        bower = {
            components: './bower_components'
        },
        extraFiles = {
          js: {
            vendor: {
              files: [
                vendor.bower + "zepto/zepto.js"
              ]
            },
            targetPath: build.path + 'lib/',
            targetFilename: 'vendor.js'
          },
          css: {
            vendor: {
              files: []
            }
          }
        };

    var gulpConfig = {
        root: root,
        src: src,
        config: config,
        app: app,
        tmp: tmp,
        assets: assets,
        assetsPath: assetsPath,
        index: index,
        build: build,
        vendor: vendor,
        bower: bower,
        extraFiles: extraFiles
    };

    return gulpConfig;
};
