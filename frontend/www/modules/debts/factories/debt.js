'use strict';


angular.module('capitalistPigs.debts', [])

.factory('Debts', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var debts = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return debts;
    },
    remove: function(debt) {
      debts.splice(debts.indexOf(debt), 1);
    },
    get: function(debtId) {
      for (var i = 0; i < debts.length; i++) {
        if (debts[i].id === parseInt(debtId)) {
          return debts[i];
        }
      }
      return null;
    }
  };
});
