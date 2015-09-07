define(function(require) {
  'use strict';

  var module = require('./module');
  module.filter('reverse', Filter);

  Filter.$inject = [];
  function Filter() {

    return function(input, uppercase) {

      var out = "";

      for (var i = 0, len = input.length; i < len; i++) {
        out = input.charAt(i) + out;
      }

      // conditional based on optional argument
      if (uppercase) {
        out = out.toUpperCase();
      }

      return out;
    };

  }

});
