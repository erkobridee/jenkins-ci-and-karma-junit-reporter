var testModuleThenExecute = require('../lib/testModuleThenExecute');

testModuleThenExecute('shelljs', function executeLater() {

  require('shelljs/global');

  var oscheck = require('../lib/oscheck');

  var sudoStr =  (oscheck.isLinux || oscheck.isMac) ? 'sudo ' : '';
  var cmd = '';

  echo('About to setup environment');
  echo('It works if it finishes with OK');

  echo('----------------------------------------');

  if(!which('phantomjs')) {
    echo('PhantomJS is missing...taking care of that now.');
    cmd = sudoStr + 'npm install --global phantomjs';
    echo(cmd); exec(cmd);
  }
  echo('phantomjs --version ');
  echo(exec('phantomjs --version').output);

  echo('----------------------------------------');

  echo('Installing node dependencies...\n');
  exec('npm install');

  testModuleThenExecute('bower', function executeBowerLater(){

    echo('Installing bower components...\n');
    exec('bower install');

  });

  echo('\nOK!');

});
