'use strict';


angular.module('capitalistPigs.debts')

.controller('DebtListController', function(Debts) {
  var vm = this;

  vm.debts = Debts.all();
  vm.debt = {
    category: '',
    comment: '',
    quantity: '',
    user: ''
  };

  vm.remove = remove;
  vm.save = save;

  function remove(debt) {
    Debts.remove(debt);
  }

  function save() {
    Debts.add(vm.debt);
  }
});
