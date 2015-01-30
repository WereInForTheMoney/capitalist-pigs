'use strict';


angular.module('capitalistPigs.categories', [
  'angular-data.DS'
])


.config(function(
  DSProvider,
  DSHttpAdapterProvider
) {
  var appId = 'NvIZ97ajNSlgpEvbmt93nJxiulDLlT6R6GKYaVNL',
    apiKey = '9GujfPmqZKYLPQJStDmO3Cuvz5cF7TcCkmsfE3LH';

  angular.extend(DSHttpAdapterProvider.defaults.$httpConfig, {
    // headers: {
    //   'X-Parse-Application-Id': appId,
    //   'X-Parse-REST-API-Key': apiKey
    // },
    params: {
      apiKey: 32
    },
    timeout: 20000
  });

  // DSProvider.defaults.baseUrl = 'http://api.parse.com/1/classes/';
  DSProvider.defaults.baseUrl = 'https://api.mongolab.com/api/1/databases/capitalistpigs/collections/';
});
