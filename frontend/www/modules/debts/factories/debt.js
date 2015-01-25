'use strict';


angular.module('capitalistPigs.debts')

.factory('Debts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var debts = [{
    id: 0,
    user: 'Ben Sparrow',
    comment: 'You on your way?',
    category: 'bla',
    quantity:4
  }, {
    id: 1,
    user: 'Max Lynx',
    comment: 'Hey, it\'s me',
    category: 'bla',
    quantity:4
  }, {
    id: 2,
    user: 'Andrew Jostlin',
    comment: 'Did you get the ice cream?',
    category: 'bla',
    quantity:4
  }, {
    id: 3,
    user: 'Adam Bradleyson',
    comment: 'I should buy a boat',
    category: 'bla',
    quantity:4
  }, {
    id: 4,
    user: 'Perry Governor',
    comment: 'Look at my mukluks!',
    category: 'bla',
    quantity:4
  }];

  return {
    all: all,
    remove: remove,
    get: get,
    add: add
  };







  function all() {
    return debts;
  }

  function add(debt) {
    debts.push(debt);
  }

  function get(debtId) {
    for (var i = 0; i < debts.length; i++) {
      if (debts[i].id === parseInt(debtId)) {
        return debts[i];
      }
    }
    return null;
  }

  function remove(debt) {
    debts.splice(debts.indexOf(debt), 1);
  }
});
