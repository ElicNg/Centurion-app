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
    .config(function ($routeProvider) {
        $routeProvider
            .when('/centurion', {
                templateUrl: 'views/centurion.html',
                controller: 'CenturionCtrl'
            })
            .otherwise({
                redirectTo: '/centurion'
            });
    })
;