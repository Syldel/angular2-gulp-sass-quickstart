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
        build: build

    };

    return gulpConfig;
};
