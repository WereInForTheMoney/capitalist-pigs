'use strict';


angular.module('capitalistPigs.debts')

.controller('DebtDetailController', function($scope, $stateParams, Debts) {
    $scope.debt = Debts.get($stateParams.debtId);
});
