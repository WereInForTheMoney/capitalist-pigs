'use strict';


angular
  .module('capitalistPigs.dash')

.controller('DashController', function(
  Categories
) {

  Categories.findAll().then(function(data) {
    console.log(data);
  });
  // Categories.all();
});
