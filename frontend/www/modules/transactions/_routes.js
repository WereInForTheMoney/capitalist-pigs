'use strict';


angular.module('capitalistPigs')

.config(function($stateProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

    .state('tab.transactions', {
      url: '/transactions',
      views: {
        'tab-transactions': {
          templateUrl: 'modules/transactions/views/list.html',
          controller: 'TransactionListController'
        }
      }
    })
    .state('tab.transactionDetail', {
      url: '/transaction/:transactionId',
      views: {
        'tab-transactions': {
          templateUrl: 'modules/transactions/views/detail.html',
          controller: 'TransactionDetailController'
        }
      }
    });

});
