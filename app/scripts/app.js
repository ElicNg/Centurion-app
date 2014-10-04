'use strict';

/**
 * @ngdoc overview
 * @name centurionApp
 * @description
 * # centurionApp
 *
 * Main module of the application.
 */
angular
    .module('centurionApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'LocalStorageModule',
        'ui.bootstrap',
        'ngDialog'
    ])
    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('centurionApp');
    }])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/centurion', {
                templateUrl: 'views/centurion.html',
                controller: 'CenturionCtrl'
            })
            .otherwise({
                redirectTo: '/centurion'
            });
    })
;