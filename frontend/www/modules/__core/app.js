'use strict';


// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'capitalistPigs' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'capitalistPigs.services' is found in services.js
// 'capitalistPigs.controllers' is found in controllers.js
angular.module('capitalistPigs', [
    'ionic',
    'capitalistPigs.dash',
    'capitalistPigs.debts',
    // 'capitalistPigs.nav',
    'capitalistPigs.settings',
    'capitalistPigs.transactions'
])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
        .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'modules/nav/views/tabs.html'
    })

    // Each tab has its own nav history stack:

    .state('tab.dash', {
        url: '/dash',
        views: {
            'tab-dash': {
                templateUrl: 'modules/dash/views/home.html',
                controller: 'DashController'
            }
        }
    })

    .state('tab.debts', {
            url: '/debts',
            views: {
                'tab-debts': {
                    templateUrl: 'modules/debts/views/list.html',
                    controller: 'DebtListController'
                }
            }
        })
        .state('tab.debtDetail', {
            url: '/debts/:debtId',
            views: {
                'tab-debts': {
                    templateUrl: 'modules/debts/views/detail.html',
                    controller: 'DebtDetailController'
                }
            }
        })

    .state('tab.transactions', {
            url: '/transactions',
            views: {
                'tab-transactions': {
                    templateUrl: 'modules/transactions/views/list.html',
                    controller: 'TransactionListController'
                }
            }
        })
        .state('tab.transactionDetail', {
            url: '/transaction/:transactionId',
            views: {
                'tab-transactions': {
                    templateUrl: 'modules/transactions/views/detail.html',
                    controller: 'TransactionDetailController'
                }
            }
        })

    .state('tab.settings', {
        url: '/settings',
        views: {
            'tab-settings': {
                templateUrl: 'modules/settings/views/list.html',
                controller: 'SettingsController'
            }
        }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/tab/dash');

});
