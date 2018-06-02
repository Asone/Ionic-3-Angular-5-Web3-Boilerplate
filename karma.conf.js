module.exports = function (config) {
    config.set({
      plugins: [
      'karma-chrome-launcher',
      'karma-firefox-launcher', 
      'karma-jasmine',
      "karma-jasmine-html-reporter",
       require("karma-webpack")
      ],
      basePath: './',
      frameworks: ['jasmine'],
      files: [
          
       // Polyfills
        'node_modules/core-js/client/shim.js',
  
        // zone.js
        'node_modules/zone.js/dist/zone.js',
        'node_modules/zone.js/dist/long-stack-trace-zone.js',
        'node_modules/zone.js/dist/proxy.js',
        'node_modules/zone.js/dist/sync-test.js',
        'node_modules/zone.js/dist/jasmine-patch.js',
        'node_modules/zone.js/dist/async-test.js',
        'node_modules/zone.js/dist/fake-async-test.js',
  
        // RxJs
        { pattern: 'node_modules/rxjs/**/*.js', included: false, watched: false },
        { pattern: 'node_modules/rxjs/**/*.js.map', included: false, watched: false },
  
        // Paths loaded via module imports:
        // Angular itself
        { pattern: 'node_modules/@angular/**/*.js', included: false, watched: false },
        { pattern: 'node_modules/@angular/**/*.js.map', included: false, watched: false },
      'src/**/*.spec.*'
      ],
      exclude: [
      ],
      preprocessors: {
          'src/**/*.spec.*': ['webpack','sourcemap']
      },
      webpack : require('./config/webpack.config'),
      reporters: ['progress','kjhtml'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_INFO,
      autoWatch: true,
      browsers: ['Chrome'],
      singleRun: false,
      concurrency: Infinity,
      mime: {
        'text/x-typescript': ['ts','tsx']
      }
    })
  }