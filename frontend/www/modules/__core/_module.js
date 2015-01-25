'use strict';


angular
  .module('capitalistPigs', [
    'ionic',
    'ngCookies',

    'pascalprecht.translate',

    'capitalistPigs.categories',
    'capitalistPigs.dash',
    'capitalistPigs.debts',
    'capitalistPigs.nav',
    'capitalistPigs.settings',
    'capitalistPigs.transactions',
  ]);
