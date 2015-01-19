'use strict';


angular.module('capitalistPigs.transactions', [])

.controller('TransactionListController', function($scope, Transactions) {
  $scope.transactions = Transactions.all();
})

.controller('TransactionDetailController', function($scope, $stateParams, Transactions) {
  $scope.transaction = Transactions.get($stateParams.transactionId);
});
