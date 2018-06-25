# Jenkins CI docs - Maven steps

## Prerequisites

* Must have [Apache Maven](https://maven.apache.org/) installed


## Config Steps

### 00 - define new jenkins item

* on Jenkins home, click on New item

![jenkins home screen](steps_images/step_00.png)

* select `freestyle project` and define item name `mvn - Jenkins CI and Karma jUnit Report`

![jenkins new item](steps_images/step_01.png)

* click on OK button

### 01 - source code management : git

* select git

* add repository url: `https://github.com/erkobridee/jenkins-ci-and-karma-junit-reporter`

![jenkins git repo](steps_images/step_02.png)

### 02 - build

* on `Add Build step` combobox select `Invoke top-level Maven targets`

* define goal `test`

![jenkins config build](steps_images/mvn/step_03.png)

### 03 - post-build actions

#### JUnit tests report

* on `Add post-build action` combobox select `Publish JUnit test result report`

* on `Test report XMLs` field define `tests_out/junit/**/*.xml`

![jenkins config post action junit](steps_images/step_04.png)

#### Coverage report

* on `Add post-build action` combobox select `Publish Cobertura Coverage Report`

* on `Cobertura xml report pattern` field define `tests_out/coverage/**/*.xml`

![jenkins config post action coverage](steps_images/step_05.png)

### 04 - save

* click on save button at page bottom


## Running one build

* on Project home, at left sidebar menu click on `Build Now`
