process.title = 'dev-tools';

require('./tools/gulp')
  .loadTasks('tools/gulp/tasks'); // load tasks config per file
