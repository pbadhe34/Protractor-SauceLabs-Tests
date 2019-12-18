'use strict';

/* Filters */

angular.module('phoneModuleFilters', []).filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
