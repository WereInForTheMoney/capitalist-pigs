'use strict';


angular.module('capitalistPigs.categories')

.factory('Categories', function(
  DS
) {
  var appId = 'NvIZ97ajNSlgpEvbmt93nJxiulDLlT6R6GKYaVNL',
    // apiKey = '9GujfPmqZKYLPQJStDmO3Cuvz5cF7TcCkmsfE3LH',
    jsKey = 'nvxEEdDYPknRihPjWAlPl3wjHFg9i9EAvPL1rTAS';

  // var manager = new breeze
  //   .EntityManager('https://' + appId + ':javascript-key=' + jsKey + '@api.parse.com/1/classes/');

  return DS.defineResource('category');


  // return {
  //   all: all,
  //   remove: remove,
  //   get: get,
  //   add: add
  // };







  // function all() {
  // }

  // function add( /*category*/ ) {}

  // function get( /*id*/ ) {}

  // function remove( /*category*/ ) {}
});
