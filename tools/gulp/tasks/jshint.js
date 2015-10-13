module.exports = function(gulp, $) {

  var jshintStream = $.lazypipe()
    .pipe( $.cached, 'jshint' )
    .pipe( $.jshint )
    .pipe( $.jshint.reporter, 'jshint-stylish' )
    .pipe( $.jshint.reporter, 'fail' );

  gulp.task('jshint:project', function() {
    return gulp.src( $.config.jshint.project )
      .pipe( jshintStream() );
  });

  gulp.task('jshint:tests', function() {
    return gulp.src( $.config.jshint.tests )
      .pipe( jshintStream() );
  });

  gulp.task('jshint:tools', function() {
    return gulp.src( $.config.jshint.tools )
      .pipe( jshintStream() );
  });

  gulp.task('jshint', ['jshint:project', 'jshint:tests', 'jshint:tools']);

};
