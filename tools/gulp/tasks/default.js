module.exports = function(gulp, $) {

  gulp.task('default', ['jshint', 'clean'], function() {
    $.projectInfoMsg();
  });

  gulp.task('project', function( done ) {
    $.Karmaflow = false;
    $.runSequence(
      'default',
      'webserver',
      'watch',
      done
    );
  });

  gulp.task('coverage', function( done ) {
    $.runSequence(
      'default',
      'karma:coverage',
      done
    );
  });

  gulp.task('ci', function( done ) {
    $.runSequence(
      'default',
      'karma:ci',
      done
    );
  });

  gulp.task('specs', function( done ) {
    $.runSequence(
      'default',
      'karma:specs',
      done
    );
  });

  gulp.task('dev', function( done ) {
    $.Karmaflow = true;
    $.runSequence(
      'default',
      [
        'webserver',
        'karma:unit:single-run'
      ],
      'watch',
      done
    );
  });

};
