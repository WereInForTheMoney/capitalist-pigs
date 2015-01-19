'use strict';


angular.module('capitalistPigs')

.config(function($stateProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // Each tab has its own nav history stack:

    .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'modules/dash/views/home.html',
        controller: 'DashController'
      }
    }
  });

});
