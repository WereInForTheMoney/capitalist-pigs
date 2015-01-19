'use strict';


angular.module('capitalistPigs.debts')

.controller('DebtListController', function( $scope, Debts ) {
    $scope.debts = Debts.all();
    $scope.remove = function(debt) {
      Debts.remove(debt);
    };
});
