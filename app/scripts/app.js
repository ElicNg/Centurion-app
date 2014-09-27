'use strict';

/**
 * @ngdoc overview
 * @name elicngApp
 * @description
 * # elicngApp
 *
 * Main module of the application.
 */
angular
    .module('elicngApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'LocalStorageModule',
        'ui.bootstrap'
    ])
    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('elicng');
    }])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/centurion', {
                templateUrl: 'views/centurion.html',
                controller: 'CenturionCtrl'
            })
            .when('/todo', {
                templateUrl: 'views/todo.html',
                controller: 'TodoCtrl'
            })
            .when('/maxime', {
                templateUrl: 'views/maxime.html',
                controller: 'MaximeCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    })
;
