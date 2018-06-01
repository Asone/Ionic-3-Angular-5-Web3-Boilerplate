var webpackConfig = require('./webpack.test.js');

module.exports = function(config) {
  var _config = {
    basePath: '../',

    frameworks: ['jasmine'],

    files: [
      {
        pattern: './test-config/karma-test-shim.js',
        watched: true
      },
      {
        pattern: './src/assets/**/*',
        watched: false,
        included: false,
        served: true,
        nocache: false
      },
      'src/**/*.spec.*'
    ],
    customLaunchers: {
      Chrome_travis_ci: {
          base: 'Chrome',
          flags: ['--no-sandbox']
      }
    },
    proxies: {
      '/assets/': './src/assets/'
    },

    preprocessors: {
      './test-config/karma-test-shim.js': ['webpack'],
      './src/**/*.spec.*':['webpack','coverage']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: 'errors-only'
    },

    webpackServer: {
      noInfo: false
    },

    browserConsoleLogOptions: {
      level: 'log',
      format: '%b %T: %m',
      terminal: true
    },

    coverageIstanbulReporter: {
      reports: [ 'html', 'lcovonly' ],
      fixWebpackSourcePaths: true
    },

    reporters: config.coverage ? ['kjhtml', 'dots','coverage','coverage-istanbul'] : ['kjhtml', 'dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
  };

  if (process.env.TRAVIS) {
    console.log(Object.keys(_config));
    _config.browsers = ['Chrome', 'ChromeHeadless', 'ChromeHeadlessNoSandbox'];
    _config.singleRun = true;
    _config.customLaunchers = {
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox']
      }
    };
    _config.concurrency = 1;
  }
 
  config.set(_config);
};
