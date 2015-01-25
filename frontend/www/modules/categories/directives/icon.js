'use strict';


angular
  .module('capitalistPigs.categories')

.directive('categoryIcon', function() {
  return {
    templateUrl: 'modules/categories/directives/icon.html',
    restrict: 'E',
    scope: {
      color: '@',
      icon: '@'
    }
  };
});
