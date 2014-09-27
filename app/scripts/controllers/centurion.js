'use strict';

/**
 * @ngdoc function
 * @name elicngApp.controller:CenturionCtrl
 * @description
 * # CenturionCtrl
 * Controller of the elicngApp
 */
angular.module('elicngApp')
    .controller('CenturionCtrl', function ($scope, $timeout, centurionranks, localStorageService) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.ranks = centurionranks.getRanks();

        var timeout; // Keep the timeout in var

        $scope.onTimeout = function () {
            $scope.counter++;
            $scope.computeLogic();
            timeout = $timeout($scope.onTimeout, 1000);
        };

        $scope.computeLogic = function () {
            $scope.seconds = $scope.counter;
            if ($scope.counter >= 60) {
                $scope.counter = 0;
                $scope.minutes++;
                angular.forEach($scope.players, function (p) {
                    p.level++;
                });
            }

            $('progressbar').css('width', $scope.seconds + '%');
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
            $scope.players = [];
            $scope.seconds = 0;
            $scope.minutes = 0;
            $scope.computeLogic();
        };

        $scope.addPlayer = function () {
            if ($scope.newPlayer) {
                $scope.players.push({ name: $scope.newPlayer, level: 0 });
                $scope.newPlayer = '';
            }
        };

        $scope.debugPlus10 = function () {
            $scope.counter += 10;
        };

        $scope.init = function () {
            $scope.reset();

            var minutesInStore = localStorageService.get('minutes');
            var counterInStore = localStorageService.get('counter');
            var playerInStore = localStorageService.get('players');

            if (playerInStore) {
                $scope.players = playerInStore;
            }

            if (counterInStore) {
                $scope.counter = parseInt(counterInStore);
            }

            if (minutesInStore) {
                $scope.minutes = parseInt(minutesInStore);
            }

            $scope.$watch('players', function () {
                localStorageService.set('players', angular.toJson($scope.players));
            }, true);

            $scope.$watch('counter', function () {
                localStorageService.set('counter', angular.toJson(parseInt($scope.counter)));
            }, true);

            $scope.$watch('minutes', function () {
                localStorageService.set('minutes', angular.toJson(parseInt($scope.minutes)));
            }, true);

            $scope.computeLogic();
        };

        $scope.init();
    });