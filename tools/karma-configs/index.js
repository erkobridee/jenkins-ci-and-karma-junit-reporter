var _ = require('lodash'),
    options = require('./options');

var coverageReporterHtml = {
  type : 'html',
  dir : 'tests_out/coverage/',
  subdir: 'html'
};

var baseUnitConfig = {
  reporters: ['html', 'progress', 'coverage'],
  browsers: ['PhantomJS'],
  coverageReporter: coverageReporterHtml
};

module.exports = {

  unitSingleRun: _.extend({}, options, baseUnitConfig, {
    singleRun: true
  }),

  unit: _.extend({}, options, baseUnitConfig, {
    singleRun: false
  }),

  specs: _.extend({}, options, {
    reporters: ['html', 'progress'],
    browsers: ['Chrome']
  }),

  coverage: _.extend({}, options, {
    reporters: ['coverage'],
    browsers: ['PhantomJS'],
    singleRun: true,
    colors: false,
    logLevel: 'ERROR',
    coverageReporter: coverageReporterHtml
  }),

  ci: _.extend({}, options, {
    reporters: ['progress', 'junit', 'coverage'],
    browsers: ['PhantomJS'],
    singleRun: true,
    colors: false,
    logLevel: 'ERROR',
    junitReporter: {
      outputDir: 'tests_out/junit',
      outputFile: 'test-results.xml'
    },
    coverageReporter: {
      type : 'cobertura',
      dir : 'tests_out/coverage/',
      subdir: '.',
      file: 'coverage-results.xml'
    }
  })

};
