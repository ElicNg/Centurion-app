'use strict';

/**
 * @ngdoc function
 * @name elicngApp.controller:CenturionCtrl
 * @description
 * # CenturionCtrl
 * Controller of the elicngApp
 */
angular.module('elicngApp')
    .controller('CenturionCtrl', function ($scope, $timeout) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.counter = 0;

        var timeout; // Keep the timeout in var

        $scope.onTimeout = function () {
            $scope.counter++;
            $scope.computeLogic();
            timeout = $timeout($scope.onTimeout, 1000);
        };

        $scope.computeLogic = function () {
            $scope.minutes = Math.floor($scope.counter / 60);
            $scope.seconds = $scope.counter % 60;
        };

        $scope.start = function () {
            if (timeout === null) {
                timeout = $timeout($scope.onTimeout, 1000);
            }
        };

        $scope.stop = function () {
            $timeout.cancel(timeout);
            timeout = null;
        };

        $scope.reset = function () {
            $scope.stop();
            $scope.counter = 0;
            $scope.computeLogic();
        };

        // debug
        $scope.onTimeout();
    });