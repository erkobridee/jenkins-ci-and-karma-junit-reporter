# Jenkins CI docs

> Little how-to configure the Jenkins CI job, to run one node project with [Karma Runner v0.12](https://karma-runner.github.io/0.12/plus/jenkins.html) and load xml report generate by Karma jUnit Report [v0.2.2](https://github.com/karma-runner/karma-junit-reporter/tree/v0.2.2)


## Prerequisites

* Must have [Git](http://git-scm.com/) installed

> CMD

* Must have [node.js (at least v0.10.x)](http://nodejs.org/) installed with npm (Node Package Manager)

> Apache Maven

* Must have [Apache Maven](https://maven.apache.org/) installed


* jenkins.war - [Jenkins CI](https://jenkins-ci.org/)

  * Must have [Java](https://www.java.com/download/) installed

  * One java web server to deploy and run jenkins.war - I chose the [Apache Tomcat](https://tomcat.apache.org/) to run locally

* Docker

  * Must have [Docker](https://www.docker.com/) installed

    * `docker pull jenkinsci/jenkins`


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
