'use strict';


angular.module('capitalistPigs.transactions')

.controller('TransactionDetailController', function($scope, $stateParams, Transactions) {
  $scope.transaction = Transactions.get($stateParams.transactionId);
});
