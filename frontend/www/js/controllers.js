angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ListCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ListDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('StatsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
