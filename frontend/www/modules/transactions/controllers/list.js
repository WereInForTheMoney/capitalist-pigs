'use strict';


angular.module('capitalistPigs.transactions')

.controller('TransactionListController', function($scope, Transactions) {
  $scope.transactions = Transactions.all();
});
