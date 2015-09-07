# Jenkins CI docs

> Little how-to configure the Jenkins CI job, to run one node project with [Karma Runner v0.12](https://karma-runner.github.io/0.12/plus/jenkins.html) and load xml report generate by Karma jUnit Report [v0.2.2](https://github.com/karma-runner/karma-junit-reporter/tree/v0.2.2)


## Project Karma configs

* [tools/karma-configs/options.js](../tools/karma-configs/options.js) - gerenal Karma configs

* CI flow

  * [CI config](../tools/karma-configs/index.js#L40-L54)

  * [gulp ci task](../tools/gulp/tasks/karma.js#L46-L48)

  * [npm test](../package.json#L14-L15) - execute environment setup and then execute gulp ci flow


## Job Config

> TODO: define

## Links

* [Jenkins CI](https://jenkins-ci.org/)

* [Sauce Labs and Jenkins Tutorial | Sauce Labs Docs](https://docs.saucelabs.com/ci-integrations/jenkins/)
