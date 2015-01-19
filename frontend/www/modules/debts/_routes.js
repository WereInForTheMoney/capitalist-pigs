'use strict';


angular.module('capitalistPigs')

.config(function($stateProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('tab.debts', {
      url: '/debts',
      views: {
        'tab-debts': {
          templateUrl: 'modules/debts/views/list.html',
          controller: 'DebtListController'
        }
      }
    })
    .state('tab.debt', {
      url: '/debts/:debtId',
      views: {
        'tab-debts': {
          templateUrl: 'modules/debts/views/detail.html',
          controller: 'DebtDetailController'
        }
      }
    });

});
