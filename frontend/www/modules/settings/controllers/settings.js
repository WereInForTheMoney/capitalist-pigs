'use strict';


angular.module('capitalistPigs.settings', [])

.controller('SettingsController', function($scope) {
  $scope.settings = {
    enableTransactions: true
  };
});
